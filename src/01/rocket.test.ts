import { fuelRequired, newFuelRequired } from "./rocket";

describe("day 1 part 1", () => {
  it("calculate mass of 12", () => {
    expect(fuelRequired(12)).toEqual(2);
  });
  it("calculate mass of 14", () => {
    expect(fuelRequired(14)).toEqual(2);
  });
  it("calculate mass of 1969", () => {
    expect(fuelRequired(1969)).toEqual(654);
  });
  it("calculate mass of 100756", () => {
    expect(fuelRequired(100756)).toEqual(33583);
  });
});

describe("day 1 part 2", () => {
  it("calculate mass of 12", () => {
    expect(newFuelRequired(12)).toEqual(2);
  });
  it("calculate mass of 1969", () => {
    expect(newFuelRequired(1969)).toEqual(966);
  });
  it("calculate mass of 100756", () => {
    expect(newFuelRequired(100756)).toEqual(50346);
  });
});
