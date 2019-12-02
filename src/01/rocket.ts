// part 1

export const fuelRequired = (mass: number) => {
  return Math.floor(mass / 3) - 2;
};

// part 2

export const newFuelRequired = (mass: number): number => {
  const originalRequiredFuel = fuelRequired(mass);
  if (originalRequiredFuel < 0) return 0;
  return originalRequiredFuel + newFuelRequired(originalRequiredFuel);
};
