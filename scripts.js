function Phone(brand, price, color, year) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.yearOrProduction = year;
}
Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', the price is ' + this.price + ' and year of production ' + this.yearOrProduction);
}
Phone.prototype.printYear = function () {
    console.log('year of production: ' + this.yearOrProduction);
}
var iphone = new Phone('Iphone S8', 4000, 'gold', 2016);
iphone.printInfo();
var samsung = new Phone('Samsung Galaxy S9', 5000, 'silver', 2018);
samsung.printInfo();
var nokia = new Phone('Nokia 3310', 100, 'blue', 2000);
nokia.printInfo();
nokia.printYear();