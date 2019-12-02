export const processOpcode = (input: string) => {
  let codes = input.split(",").map(d => Number(d));
  // 1,9,10,3,2,3,11,0,99,30,40,50
  // 1 - addition
  // 2 - multiplication

  const noOfOp = Math.floor(codes.length / 4);

  for (let i = 0; i < noOfOp; i++) {
    const firstOp = codes[0 + i * 4];
    if (firstOp === 1) {
      const secondInputOp = codes[codes[1 + i * 4]];
      const thirdInputOp = codes[codes[2 + i * 4]];
      const outputOpPosition = codes[3 + i * 4];
      codes[outputOpPosition] = secondInputOp + thirdInputOp;
    } else if (firstOp === 2) {
      const secondInputOp = codes[codes[1 + i * 4]];
      const thirdInputOp = codes[codes[2 + i * 4]];
      const outputOpPosition = codes[3 + i * 4];
      codes[outputOpPosition] = secondInputOp * thirdInputOp;
    } else if (firstOp === 99) {
    }
  }

  return codes.join(",");
};
