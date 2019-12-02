import * as fs from "fs";
import * as path from "path";
import { fuelRequired, newFuelRequired } from "./rocket";

// Part 1

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const inputArr = input.split("\n").map(d => Number(d));

const resPart1 = inputArr.map(d => fuelRequired(d)).reduce((a, b) => a + b);
console.log("Part 1: ", resPart1);

const resPart2 = inputArr.map(d => newFuelRequired(d)).reduce((a, b) => a + b);
console.log("Part 2: ", resPart2);
