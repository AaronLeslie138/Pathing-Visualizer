import TinyQueue from 'tinyqueue';

export const algorithms = {bfs:"Dijkstra's (BFS)", greedy:"Best First Search (Greedy)",a:"A*"}
export const width = 63;
export const height = 30;

const startIndex = 895;
const goalIndex = 929;


class BoxState{
    constructor(){
        this.state = "blank"
    }
}

class FringeLocation{
    constructor(index, path, cost, heuristic){
        this.index = index
        this.path = path
        this.cost = cost
        this.heuristic = heuristic
    }


}

export class AlgorithmmOverlord{
    constructor(headerRef, gridRef){
        this.algorithm = "bfs"
        this.isSearching = false;

        this.wasClicked = new Set();

        this.headerRef = headerRef; //For Callbacks
        this.gridRef = gridRef; //For Callbacks
        this.boxStates = new Array(width * height).fill().map(function(){return new BoxState()})
        this.boxStates[startIndex].state = "start";
        this.boxStates[goalIndex].state = "goal";
        this.searching = false;
    }

    search = () => {
        if(this.searching) return;
        this.searching = true;
        let fringe = null;
        if(this.algorithm === "bfs"){
            fringe = new TinyQueue([new FringeLocation(startIndex, [], 0, 0)], function(a, b) {
                return a.cost - b.cost;
            });
        }else if(this.algorithm === "greedy"){
            fringe = new TinyQueue ([new FringeLocation(startIndex, [], 0, 0)], function(a, b) {
                return a.heuristic - b.heuristic;
            });
        }else if(this.algorithm === "a"){
            fringe = new TinyQueue ([new FringeLocation(startIndex, [], 0, 0)], function(a, b) {
                if(a.cost + a.heuristic - b.cost - b.heuristic === 0) return a.cost - b.cost;
                return a.cost + a.heuristic - b.cost - b.heuristic;
            });
        }
        
        let unexplored = new Set();
        for(let index = 0; index < height * width; index++){
            if(this.boxStates[index].state === "blank") unexplored.add(index);
        }
        unexplored.add(goalIndex);
        unexplored.add(startIndex);
        this.searchLoop(fringe, unexplored);

    }

    searchLoop = (fringe, unexplored) => {
        let fringeLoc = ExpandFringe(fringe, unexplored);
        if(fringeLoc === null){ //Exhausted search space
            this.searching = false;
            return;
        }
        let index = fringeLoc.index;

        if(this.boxStates[index].state === "goal"){ //Found goal
            fringe.length = 0;
            for(let i = 1; i < fringeLoc.path.length; i++){
                setTimeout(function() {
                    let index = fringeLoc.path[i]
                    this.boxStates[index].state = "path"
                    this.gridRef.current.updateBox(index, this.boxStates[index])
                    if(i === fringeLoc.path.length - 1) this.searching = false;
                }.bind(this), i * 45);
            }
            return;
        }
        if(this.boxStates[index].state === "blank"){ //Haven't found goal
            this.boxStates[index].state = "search"
            this.gridRef.current.updateBox(index, this.boxStates[index])
        }
        setTimeout(function() { //Search again
            this.searchLoop(fringe, unexplored)
        }.bind(this), 1)
        
    }

    clicked = (index) => {
        if(this.searching) return;
        if(this.wasClicked.has(index)) return;
        if(this.boxStates[index].state === "blank" || this.boxStates[index].state === "search" || this.boxStates[index].state === "path"){
            this.boxStates[index].state = "block";
            this.gridRef.current.updateBox(index, this.boxStates[index])
        }else if(this.boxStates[index].state === "block"){
            this.boxStates[index].state = "blank";
            this.gridRef.current.updateBox(index, this.boxStates[index])
        }
        this.wasClicked.add(index);
        setTimeout(function(){
            this.wasClicked.delete(index);
        }.bind(this), 200); //Can't re-click for 200ms. Avoids it re-engaging same square erroneously
    }

    updateAlgorithm = (alg) => {
        if(this.searching) return;
        this.algorithm = alg;
        this.headerRef.current.setAlgorithm(alg);
        this.boxStates[startIndex].state = "start";
        this.boxStates[goalIndex].state = "goal";
        for(let index = 0; index < height * width; index++){
            if(this.boxStates[index].state === "path" || this.boxStates[index].state === "search") this.boxStates[index].state = "blank"
            this.gridRef.current.updateBox(index, this.boxStates[index])
        }
    };

    makeMaze = () => {
        if(this.searching) return;
        
        this.clearBoard();

        this.searching = true
        
        let count = 0;

        //top
        for(let c = 0; c < width; c++){
            let index = c;
            count += 1
            setTimeout(function(){
                this.boxStates[index].state = "block"
                this.gridRef.current.updateBox(index, this.boxStates[index])
            }.bind(this), count * 10);
        }
        //bottom
        for(let c = 0; c < width; c++){
            let index = c + width * (height - 1);
            count += 1
            setTimeout(function(){
                this.boxStates[index].state = "block"
                this.gridRef.current.updateBox(index, this.boxStates[index])
            }.bind(this), count * 10);
        }

        for(let c = 0; c < Math.floor(width / 2) + 1; c++){
            let gap = 1 + Math.floor(Math.random() * Math.floor(height - 2));
            if(c === 0 || c === Math.floor(width / 2)) gap = -1;
            for(let x = 0; x < height; x++){
                let index = c*2 + x * width;
                if(this.boxStates[index].state === "blank" && x !== gap){
                    count+=1
                    setTimeout(function(){
                        this.boxStates[index].state = "block"
                        this.gridRef.current.updateBox(index, this.boxStates[index])
                        if(c === Math.floor(width / 2) && x === height - 1) this.searching = false;
                    }.bind(this), count * 10);
                } 
            }
        }
    }

    makeBlocks = () => {
        if(this.searching) return;
        this.clearBoard();
        this.searching = true;
        let count = 0;
        for(let c = 0; c < 500; c++){
            let index =  Math.floor(Math.random() * Math.floor(1890));
            if(this.boxStates[index].state === "blank"){
                count+=1;
                setTimeout(function(){
                    this.boxStates[index].state = "block"
                    this.gridRef.current.updateBox(index, this.boxStates[index])
                    if(c === 499) this.searching = false;
                }.bind(this), count * 10);
            }
        }
    }

    clearBoard = () => {
        if(this.searching) return;
        this.boxStates = new Array(height * width).fill().map(function(){return new BoxState()})
        this.boxStates[startIndex].state = "start";
        this.boxStates[goalIndex].state = "goal";
        for(let index = 0; index < height * width; index++){
            this.gridRef.current.updateBox(index, this.boxStates[index])
        }
    }

    clearPaths = () => {
        if(this.searching) return;
        this.boxStates[startIndex].state = "start";
        this.boxStates[goalIndex].state = "goal";
        for(let index = 0; index < height * width; index++){
            if(this.boxStates[index].state === "path" || this.boxStates[index].state === "search") this.boxStates[index].state = "blank"
            this.gridRef.current.updateBox(index, this.boxStates[index])
        }
    }
}

const heuristic = (index) => {
    let indexY = Math.floor(index / width);
    let indexX = index % width;
    let goalY = Math.floor(goalIndex / width);
    let goalX = goalIndex % width;
    let startY = Math.floor(startIndex / width);
    let startX = startIndex % width;

    let heuristic = Math.abs(indexX - goalX) + Math.abs(indexY - goalY)

    let dx1 = indexX - goalX
    let dy1 = indexY - goalY
    let dx2 = startX - goalX
    let dy2 = startY - goalY
    let cross = Math.abs(dx1*dy2 - dx2*dy1)
    heuristic += cross*0.0000001 //Push the path towards the ideal line ignoring blocks. Because this is a small number, it will never add 1.0 or more to our heuristic for this search space, so it won't violate admissabiliity
    //This is an established practice, taken from stanford

    return heuristic
    
    
}

//Expands Fringe and returns index to mark as searched
const ExpandFringe = (fringe, unexplored) => {
    if(fringe.length === 0) return null;
    let fringeLoc = fringe.pop();
    while(!unexplored.has(fringeLoc.index)){
        if(fringe.length === 0) return null;
        fringeLoc = fringe.pop();
    }

    let index = fringeLoc.index;
    unexplored.delete(index);
    let indexY = Math.floor(index / width);
    let indexX = index % width;

    if(indexX < width - 1){
        let newIndex = index + 1
        let h = heuristic(newIndex)
        fringe.push(new FringeLocation(newIndex, fringeLoc.path.concat([index]), 1 + fringeLoc.path.length, h));
    }

    if(indexY > 0){
        let newIndex = index - width
        let h = heuristic(newIndex)
        fringe.push(new FringeLocation(newIndex, fringeLoc.path.concat([index]), 1 + fringeLoc.path.length, h));
    }

    if(indexY < height - 1){
        let newIndex = index + width
        let h = heuristic(newIndex)
        fringe.push(new FringeLocation(newIndex, fringeLoc.path.concat([index]), 1 + fringeLoc.path.length, h));
    }

    if(indexX > 0){
        let newIndex = index - 1
        let h = heuristic(newIndex)
        fringe.push(new FringeLocation(newIndex, fringeLoc.path.concat([index]), 1 + fringeLoc.path.length, h));
    }
    return fringeLoc;
    
}