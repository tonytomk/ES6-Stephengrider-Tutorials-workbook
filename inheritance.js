// Inheritance
// javascrpt >> prototypal inheritance
// ES 5

function Car(options){
  this.title=options.title;
}

Car.prototype.drive=function(){
return "vroom";
}


const car=new Car({title:'Ford'});
car.drive();
car

function Toyota(options){
  Car.call(this,options);
this.color=options.color;
}


Toyota.prototype=Object.create(Car.prototype);
Toyota.prototype.constructor=Toyota;
Toyota.prototype.honk=function(){
  return 'beep';
}


const toyota=new Toyota({color:'Red',title:'Etios'});
toyota.honk()
toyota.drive();


// ES 6
// no need to seperate methods by comma
class Car {
  //called whenever we creare new instance
  constructor(options){
   this.title=options.title;
  }
  drive(){
   return 'vroom';
  }
  
}

class Toyota extends Car{
 constructor(options){
   super(options); //Car.constructor()
   this.color=options.color
 }
 honk(){
   return 'beep';
 }
}


const car=new Car({title:'toyota'});
car;
car.drive();
const toyota=new Toyota({color:'red',title:'toyota'});
toyota.drive();
toyota.honk();
