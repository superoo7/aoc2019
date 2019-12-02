import * as fs from "fs";
import * as path from "path";
import { processOpcode } from "./opcode";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

// part 1
// before running the program, replace position 1 with the value 12 and replace position 2 with the value 2
const input1 = input
  .split(",")
  .map((d, key) => {
    return key === 1 ? "12" : key === 2 ? "2" : d;
  })
  .join(",");

console.log(processOpcode(input1));
