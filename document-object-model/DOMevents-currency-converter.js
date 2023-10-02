// converting GBP to eyptian pounds 
function converterCurrency() {
  const gbpAmount = document.getElementById("gbp-amount").value;
  const exchangerate = 38.53;
  const egyptianPounds = gbpAmount * exchangerate;
  document.getElementById("egp-amount").textContent = egyptianPounds;
}
