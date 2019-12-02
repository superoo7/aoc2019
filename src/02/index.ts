import * as fs from "fs";
import * as path from "path";
import { processOpcode } from "./opcode";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

// part 1
// before running the program, replace position 1 with the value 12 and replace position 2 with the value 2

console.log("Part 1: ", processOpcode(input, 12, 2).split(",")[0]);

// part 2

// generate 0..99
const array = Array(100)
  .fill(null)
  .map((_, key) => key);

array.forEach(noun => {
  array.forEach(verb => {
    const result = Number(processOpcode(input, noun, verb).split(",")[0]);
    if (result === 19690720) {
      console.log("Part 2: ", 100 * noun + verb);
    }
  });
});
