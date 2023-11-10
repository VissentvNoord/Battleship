class Ship{
    constructor(length){
        this.length = length;
        this.hits = 0;
    }

    Hit(){
        this.hits++;
        return this.hits;
    }

    isSunk(){
        let isSunk = false;
        if(this.length - this.hits <= 0){
            isSunk = true;
        }

        return isSunk;
    }
}

class Gameboard{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }


}

export {Ship, Gameboard}