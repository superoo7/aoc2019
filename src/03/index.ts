import * as fs from "fs";
import * as path from "path";
import { pathDiff } from "./path";

const inputFile = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const [inputWire1, inputWire2] = inputFile.split("\n").map(d => d.split(","));

// part 1
console.log("Part 1: ", pathDiff(inputWire1, inputWire2));
