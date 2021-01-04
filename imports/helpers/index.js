export const checkStringsIfNotEmpty = (arrayOfStrings) => {
  const valueOfArrayOfStrings = arrayOfStrings.filter((input) => (
    input.length > 0
  ))
  return valueOfArrayOfStrings.length === arrayOfStrings.length;
 }