class Ship{
    constructor(length){
        this.length = length;
        this.hits = 0;
    }

    hit(){
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

    placeShip(ship, position){
        let placed = false;
        const length = ship.length;

        if(position.x <= this.width && position.y <= this.height){
            const coverage = length + position.x;
            if(coverage <= this.width){
                placed = true;
            }
        }

        return placed;
    }
}

export {Ship, Gameboard}