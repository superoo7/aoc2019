export const passwordCrack = (input: string) => {
  const range = input.split("-");
  const [min, max] = range.map(d => parseInt(d));

  let currentNum: number = min;
  let validPasswordCount = 0;

  for (
    currentNum = min; // min
    currentNum <= max; // +1
    currentNum++ // max
  ) {
    // if (passwordValidator1(currentNum)) {
    //   console.log(currentNum);
    //   validPasswordCount++;
    // }
    if (passwordValidator2(currentNum)) {
      validPasswordCount++;
    }
  }

  return validPasswordCount;
};

export const passwordValidator1 = (input: number): boolean => {
  let isValid = true;
  let isValidDouble = false;
  const inputArr = String(input)
    .split("")
    .map(d => parseInt(d));
  // 1 2 3 4 5 6
  for (let index = 1; index < inputArr.length; index++) {
    const current = inputArr[index];
    const previous = inputArr[index - 1];
    // CRITERIA 1
    // ================
    // Going from left to right,
    // the digits never decrease;
    // they only ever increase or stay the same (like 111123 or 135679).
    if (current < previous) {
      isValid = false;
      break;
    }
    // CRITERIA 2
    // ================
    if (isValidDouble === false && current === previous) {
      isValidDouble = true;
    }
  }
  return isValidDouble && isValid;
};

// Part 1
// console.log(passwordCrack("265275-781584")); (960)
// test
// console.log([111111, 223450, 123789].map(passwordValidator));

// 112233
// [11,12,22,23,33] <=> 2 adjacent matching digits
// [11,22,33]

// 123444
// [12,23,34,44,44] <=> 2 adjacent matching digits
// [44, 44]
// [123, 234, 344, 444] <=> 3  adjacent matching digits
// [444]

// 111122
// [11,11,11,12,22] <=> 2 adjacent matching digits
// [11, 11, 11, 22]
// [111, 111, 112, 122] <=> 3 adjacent matching digits
// [111, 111]
// [1111, 1112, 1122] <=> 4 adjacent matching digits
// [1111]

const genRange = (num: number) =>
  Array(num)
    .fill(null)
    .map((_, key) => key);

// Part 2

export const passwordValidator2 = (input: number): boolean => {
  const isValid1 = passwordValidator1(input);
  if (!isValid1) return false;

  //   let isValid2 = true;
  //   const inputArr = String(input)
  //     .split("")
  //     .map(d => parseInt(d));

  //   const twoAdjacentNumber = genRange(5);
  //   const newArr = twoAdjacentNumber.map(key => {
  //     return parseInt(`${inputArr[key]}${inputArr[key + 1]}`);
  //   })

  //   for (let index = 1; index < newArr.length; index++) {
  //     const previous = newArr[index - 1];
  //     const current = newArr[index];
  //     if (current <= previous) {
  //       isValid2 = false;
  //     }
  //   }
  //   return isValid2;

  // ODD APPROACH
  // ===
  let isOdd = false;
  const inputArr = String(input)
    .split("")
    .map(d => parseInt(d));
  const obj: { [index: number]: number } = {};

  for (let index = 0; index < inputArr.length; index++) {
    const current = inputArr[index];
    obj[current] = obj[current] ? obj[current] + 1 : 1;
  }

  Object.keys(obj).forEach(d => {
    const num = obj[parseInt(d)];
    if (num === 3) {
      isOdd = true;
      Object.keys(obj).forEach(o => {
        const num2 = obj[parseInt(o)];
        if (num2 === 2) {
          isOdd = false;
        }
      });
    } else if (num >= 5) {
      isOdd = true;
    } else if (num === 4) {
      Object.keys(obj).forEach(o => {
        const num2 = obj[parseInt(o)];
        if (num2 === 1) {
          isOdd = true;
        }
      });
    }
  });
  if (isOdd) {
    return false;
  } else {
    return true;
  }
};

// console.log(
//   [
//     112233, // true
//     123444, // false
//     111122, // true
//     444555, // false
//     111145, // false
//     112245 // true
//   ].map(passwordValidator2)
// );
// console.log(passwordCrack("265275-781584"));
console.log(passwordCrack("138307-654504"));

// More than 526
