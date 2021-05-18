import {bunny, wolf} from "../characters/characters";

export class GameState {
    cells
    wolfIsNext

    constructor() {
        this.cells = Array(9).fill(null)
        this.wolfIsNext = true
    }

    nextCharacter() {
        return this.wolfIsNext ? wolf : bunny;
    }

    changeState(i, character) {
        this.cells[i] = character;
        this.wolfIsNext = !this.wolfIsNext;

        return this
    }

    isCellNotBlank(i) {
        return this.cells[i] !== null
    }

    isTie() {
        for (let cell of this.cells) {
            if (cell === null) {
                return false
            }
        }

        return true
    }

    getWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
                return this.cells[a];
            }
        }

        return null;
    }
}