//Try to be as explicit as possible and add Types to everything you can 
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log(this.name + " is saying: Tooooooot");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW', 0);
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
