// Generators
// A generator is a function that can be entered and exit multiple time

// syntax for generator
function* numbers(){
  yield;
}

const gen=numbers()
gen.next()
gen.next()
console.log(numbers());

//example 1
function* shopping(){
  // stuff on the side walk
  
  //walking down the side walk
  
  
  //go into the store with cash
  const StuffFromStore=yield 'cash';
  
  // walking back home
  
  return StuffFromStore;
}

// stuff in the store
const gen=shopping()
gen.next() //leaving our house
gen.next('groceries') //leaving the store with groceries

//example 2
function* shopping(){
  // stuff on the side walk
  
  //walking down the side walk
  
  
  //go into the store with cash
  const StuffFromStore=yield 'cash';
  // walking to laundry
  const CleanCLothes=yield 'laundary'
  // walking back home
  
  return [StuffFromStore,CleanCLothes];
}

// stuff in the store
const gen=shopping()
gen.next() //leaving our house
gen.next('groceries') //leaving the store with groceries
gen.next('laundary') 

// example 3

function *colors(){
	yield 'red';
  yield 'blue';
  yield 'green';
}

const gen=colors();
gen.next();
gen.next();
gen.next();
gen.next();

const myColrs=[];
for (let color of colors()){
myColrs.push(color);
}
myColrs


// example 4

const engineeringTeam={
	size:3,
	department:'Engineering',
  lead:'Tony',
  manager:'Tom',
  engineering:'Dave'
};

function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.department;
}

const names=[];

for(let name of TeamIterator(engineeringTeam)){
names.push(name);
}
names

// example 5

const testingTeam={
	lead:'Linju',
  tester:'divya'
};

const engineeringTeam={
	size:3,
	department:'Engineering',
  lead:'Tony',
  manager:'Tom',
  engineering:'Dave',
  testingTeam
};



function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.department;
  //generator delegation
  const testingTeamGenerator=TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function *TestingTeamIterator(team){
yield team.lead;
yield team.tester;
}

const names=[];

for(let name of TeamIterator(engineeringTeam)){
names.push(name);
}
names

// example 6
// Symbol iterator


const testingTeam={
	lead:'Linju',
  tester:'divya',
  
  [Symbol.iterator]:function* (){
   yield this.lead;
   yield this.tester;
  }
};

const engineeringTeam={
	size:3,
	department:'Engineering',
  lead:'Tony',
  manager:'Tom',
  engineering:'Dave',
  testingTeam
};


function* TeamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.department;
  yield* team.testingTeam;
}

const names=[];

for(let name of TeamIterator(engineeringTeam)){
names.push(name);
}
names

// Example 7

const testingTeam={
	lead:'Linju',
  tester:'divya',
  
  [Symbol.iterator]:function* (){
   yield this.lead;
   yield this.tester;
  }
};

const engineeringTeam={
	size:3,
	department:'Engineering',
  lead:'Tony',
  manager:'Tom',
  engineering:'Dave',
  testingTeam,
  [Symbol.iterator]:function* (){
  yield this.lead;
  yield this.manager;
  yield this.department;
  yield* this.testingTeam;
  }
};

const names=[];

for(let name of (engineeringTeam)){
names.push(name);
}
names


