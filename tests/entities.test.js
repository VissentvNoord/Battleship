import {Ship, Gameboard} from '../entities.js';

const gameBoard = new Gameboard(10, 10);
const ship = new Ship(1);

test('Hit ship to return 1 hit', () =>{
    expect(ship.Hit()).toBe(1);
});

test('Check if ship is sunk to equal true', () =>{
    expect(ship.isSunk()).toBe(true);
});


