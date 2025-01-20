export default function formatDimension(valueInInches: number) {
  const toFeetAndInches = (valueInInches: number) => {
    const feet = Math.floor(valueInInches / 12);
    const inches = valueInInches % 12;

    return `${feet}' ${inches}"`;
  };

  return toFeetAndInches(valueInInches);
}
