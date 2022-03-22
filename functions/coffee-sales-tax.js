// Part one
var coffeeTotal = 5.00;

function totalWithNYSalesTax() {
  //calculate the sales tax
  var coffeeSalesTax = coffeeTotal * 0.089;
  //add sales tax to the coffeeTotal
  var coffeeTotalAndTax = coffeeTotal + coffeeSalesTax;
  //return the final value
  return coffeeTotalAndTax;
}

totalWithNYSalesTax();

//Part two
function totalWithNJSalesTax() {
  var coffeeTotal = 5.00;

  var coffeeSalesTax = coffeeTotal * 0.07;
  var coffeeTotalAndTax = coffeeTotal + coffeeSalesTax;
  return coffeeTotalAndTax;
}

totalWithNJSalesTax();

// Can write as return (coffeeTotal * 0.07) _ cofeeTotal;

//Part three
(totalWithNYSalesTax() * 365)  (totalWithNJSalesTax()  * 365)
//days = 365
//(5.45 * 365 = 1990) - (5.35 * 365 = 1950)
//subtract to get 35

//Part Four-Refactored Functions
function coffeePriceAndTax(tax, price) {
  var salesTax = price * tax/100;
  var coffeePriceWithTax = price + salesTax;

  return coffeePriceWithTax;
}

//coffeePriceAndTax(7, 5.00);
coffeePriceAndTax(8.9, 3.50);
//coffeePriceAndTax(3.50, 8.9);
