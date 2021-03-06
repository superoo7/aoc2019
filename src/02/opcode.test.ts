import { processOpcode } from "./opcode";

describe("day 2 part 1", () => {
  it("test 1st case", () => {
    expect(processOpcode("1,0,0,0,99")).toEqual("2,0,0,0,99");
  });

  it("test 2nd case", () => {
    expect(processOpcode("2,3,0,3,99")).toEqual("2,3,0,6,99");
  });

  it("test 3rd case", () => {
    expect(processOpcode("2,4,4,5,99,0")).toEqual("2,4,4,5,99,9801");
  });

  it("test 4th case", () => {
    expect(processOpcode("1,1,1,4,99,5,6,0,99")).toEqual("30,1,1,4,2,5,6,0,99");
  });
});
