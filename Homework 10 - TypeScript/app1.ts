//Try to be as explicit as possible and add Types to everything you can 
class Car{

    constructor(public name: string, public acceleration:number){ 
        
    }
    honk(){
        console.log(`${this.name} is saying: Tooooooot`);
    }
    accelerate (speed:number){
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car('BMW', 0);
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);

