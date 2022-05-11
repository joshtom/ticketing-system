export const numberWithCommas = (x: string | number) => {
  if (typeof x === "undefined" || isNaN(Number(x))) return;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
