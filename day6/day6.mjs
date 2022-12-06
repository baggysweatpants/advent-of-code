import { readFileSync } from "node:fs";

const input = readFileSync("./day6.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove ending whitespace

function isUnique(array) {
    return new Set(array).size === array.length
}

function part1() {
    let arrayToCheck = []
    for (let i = 0; i < input.length; i++) {
    arrayToCheck.push(input[i]);
    if (arrayToCheck.length > 4 ) {
        arrayToCheck.shift()
    }
    if (arrayToCheck.length === 4 && isUnique(arrayToCheck)) {
    console.log(i+1)
    break;
}
    }
}

function part2() {
    let arrayToCheck = []
    for (let i = 0; i < input.length; i++) {
    arrayToCheck.push(input[i]);
    if (arrayToCheck.length > 14 ) {
        arrayToCheck.shift()
    }
    if (arrayToCheck.length === 14 && isUnique(arrayToCheck)) {
    console.log(i+1)
    break;
}
    }
}

part1();
part2();