class Car {
    // Write code under this line
    static getSpecs(car) {
        car;
       return `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`;
    }
    constructor(maxSpeed, speed, isOn, distance, price) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this._price = price;
     }
    get price() {
        return this._price;
     }
    set price(value) {
        this._price = value;
     }
    turnOn() {
        this.isOn === true;
        return this.isOn;
     }
    turnOff() {
        this.isOn === false;
        this.speed = 0;
        return this.isOn;
     }  
    accelerate(value) {
        if (value > 0) {
            this.speed += value;
        }
        if (this.speed <= this.maxSpeed){
            return this.speed;
        }
     }
     decelerate(value) {
        if (value > 0) {
            this.speed += value;
        }
        if (this.speed > 0){
            return this.speed;
        }
    }
    drive(hours) {
         if (this.isOn === true) {
             this.distance = this.speed * hours;
         }
         return this.distance;
     }
   }
    
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000


   
   