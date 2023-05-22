const getRndNumber = (min: number, max: number): number => {
  return Number(Number(Math.random() * (max - min + 1) + min));
};

export default getRndNumber;
