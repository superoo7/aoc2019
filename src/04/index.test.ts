import { passwordValidator2 } from ".";

it("test example test case", () => {
  expect(passwordValidator2(112233)).toEqual(true);
  expect(passwordValidator2(123444)).toEqual(false);
  expect(passwordValidator2(111122)).toEqual(true);
});

it("test case", () => {
  expect(passwordValidator2(444555)).toEqual(false);
  expect(passwordValidator2(111145)).toEqual(false);
  expect(passwordValidator2(112245)).toEqual(true);
  expect(passwordValidator2(111111)).toEqual(false);
  expect(passwordValidator2(111112)).toEqual(false);
  expect(passwordValidator2(112233)).toEqual(true);
  expect(passwordValidator2(112223)).toEqual(true);
  expect(passwordValidator2(111233)).toEqual(true);
});

it("test 4 adjacent number", () => {
  expect(passwordValidator2(451111)).toEqual(false);
  expect(passwordValidator2(667777)).toEqual(true);
  expect(passwordValidator2(666677)).toEqual(true);
  expect(passwordValidator2(666678)).toEqual(false);
  expect(passwordValidator2(466667)).toEqual(false);
});
