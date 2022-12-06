import { readFileSync } from "node:fs";

const input = readFileSync("./dayX.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove ending whitespace
  .split("\n") // Split on new line
  .map(Number); // Parse each line into a number

console.log(input)

function part1() {
// do something here
}

function part2() {
// dome something else here
}