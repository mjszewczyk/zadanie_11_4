function Phone(brand, price, color, year) {
    this.brand = brand;
    this.price = price;
    this.color = color || 'white';
    if (year < 1970) {
        year = 2018;
    }
    this.yearOfProduction = year;
}
Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', the price is ' + this.price + ' and year of production ' + this.yearOfProduction);
}
Phone.prototype.printYear = function () {
    console.log('year of production: ' + this.yearOfProduction);
}
var iphone = new Phone('Iphone S8', 4000, 'gold', 2016);
iphone.printInfo();
var samsung = new Phone('Samsung Galaxy S9', 5000, '', 2018);
samsung.printInfo();
var nokia = new Phone('Nokia 3310', 100, 'blue', 500);
nokia.printInfo();
nokia.printYear();