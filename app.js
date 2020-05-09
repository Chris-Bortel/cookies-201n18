'use strict';

//TODO:
// var storeHours = ['6am', '7am','8am','9am','10am','11am','12pm', '1pm','2pm','3pm', '4pm', '5pm','6pm','7pm' ];

function Store ( city, minCustomers, maxCustomers, avgCookieSale){
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSale = avgCookieSale;

  //sending the store arrays for dynamic rendering
  // storeArray.push(this);

}

//Prototype functions 
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 4.6);
var lima = new Store('Lima', 2, 16, 4.6);
// console.log(seattle);

// invoking prototype methods
// storeArray[0].hourlyCookieSales();

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);








