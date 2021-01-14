
export const shortenText = (text,maxLength) => {
  return text.length > maxLength ? text.substring(0,maxLength).trim() + "..." : text;
}