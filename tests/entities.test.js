import {Ship, Gameboard} from '../entities.js';
import {Vector2} from '../vector.js';

const gameBoard = new Gameboard(10, 10);
const ship = new Ship(1);

test('Hit ship to return 1 hit', () =>{
    expect(ship.hit()).toBe(1);
});

test('Check if ship is sunk to equal true', () =>{
    expect(ship.isSunk()).toBe(true);
});

const testShip = new Ship(2);
const position = new Vector2();
const edgePosition = new Vector2();
edgePosition.x = 10;

test('Ship length equals to 2', () =>{
    expect(testShip.length).toBe(2);
});

test('Place ship on gameboard', () =>{
    expect(gameBoard.placeShip(testShip, position)).toBe(true);
});

test('Place ship on edge of gameboard', () =>{
    expect(gameBoard.placeShip(testShip, edgePosition)).toBe(false);
});

