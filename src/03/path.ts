export const pathDiff = (wire1: string[], wire2: string[]) => {
  console.log("initialize");
  const input1 = formatWire(wire1);
  const input2 = formatWire(wire2);
  console.log("...");
  const output1 = algo(input1, [0, 0], [], []);
  console.log("...");
  const output2 = algo(
    input2,
    [0, 0],
    output1.pastLocation,
    output1.intersectionPoint
  );
  console.log(output2.intersectionPoint);
  return Math.min.apply(
    null,
    output2.intersectionPoint.map(d => Math.abs(d[0]) + Math.abs(d[1]))
  );
};

const algo = (
  data: {
    direction: string;
    steps: number;
  }[],
  initialLocation: number[],
  pastLocation: number[][],
  intersectionPoint: number[][]
) => {
  let location = initialLocation;
  data.forEach(d => {
    const oldLocation = location;
    let tempLocation = [0, 0];
    switch (d.direction) {
      case "R":
        tempLocation = [location[0] + d.steps, location[1]];
        break;
      case "L":
        tempLocation = [location[0] - d.steps, location[1]];
        break;
      case "U":
        tempLocation = [location[0], location[1] + d.steps];
        break;
      case "D":
        tempLocation = [location[0], location[1] - d.steps];
        break;
      default:
        return;
    }
    const n = Math.abs(
      oldLocation[0] - tempLocation[0] + (oldLocation[1] - tempLocation[1])
    );

    Array(n)
      .fill(null)
      .forEach((_, key) => {
        location =
          d.direction === "R"
            ? [location[0] + 1, location[1]]
            : d.direction === "L"
            ? [location[0] - 1, location[1]]
            : d.direction === "U"
            ? [location[0], location[1] + 1]
            : [location[0], location[1] - 1];
        pastLocation.forEach(loc => {
          if (loc[0] === location[0] && loc[1] === location[1]) {
            intersectionPoint = [...intersectionPoint, location];
          }
        });
        pastLocation = [...pastLocation, location];
      });
    console.log(".");
  });
  return {
    location,
    pastLocation,
    intersectionPoint
  };
};

const formatWire = (wires: string[]) => {
  return wires.map(d => {
    const data = d.split("");
    const direction = data[0];
    const steps = Number(data.slice(1, data.length).join(""));
    return {
      direction,
      steps
    };
  });
};
