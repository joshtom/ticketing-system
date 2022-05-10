export function creditCardType(cc: string) {
  let amex = new RegExp("^3[47][0-9]{13}$");
  let visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
  // let cup2 = new RegExp("^81[0-9]{14}[0-9]*$");

  let mastercard = new RegExp("^5[1-5][0-9]{14}$");
  let mastercard2 = new RegExp("^2[2-7][0-9]{14}$");

  let disco1 = new RegExp("^6011[0-9]{12}[0-9]*$");
  let disco2 = new RegExp("^62[24568][0-9]{13}[0-9]*$");
  let disco3 = new RegExp("^6[45][0-9]{14}[0-9]*$");

  let diners = new RegExp("^3[0689][0-9]{12}[0-9]*$");
  let jcb = new RegExp("^35[0-9]{14}[0-9]*$");

  if (visa.test(cc)) {
    return "visa";
  }
  if (amex.test(cc)) {
    return "americanExpress";
  }
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return "masterCard";
  }
  if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
    return "discover";
  }
  if (diners.test(cc)) {
    return "dinersClub";
  }
  if (jcb.test(cc)) {
    return "citi";
  }
  return "backCardIcon";
}
