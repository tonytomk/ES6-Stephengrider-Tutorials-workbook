//Fat Arrow function
const add=function(a,b){
return a+b;
}

add(1,3);

//////----//////
 const add1=(a,b)=>{
   return a+b;
 }
 
 ////---///
 
 const add2=(a,b)=>a+b;

//

const double=number=>{
 return 2*number; 
}

double(4)

const numbers=[1,2,3];

numbers.map(function(number){
return 2*number;
})

///

numbers.map(number => 2*number);


// Fat arrow scenario 1

const team= {
 members :['Jane','bill'],
 teamName: 'Super Squad',
 teamSummary:function(){
   let self=this;
   return this.members.map(function(memeber){
   return  `${memeber} is on team ${self.teamName}`;
   });
  //bind(this));
},
  //using Fat arrow function
  //Fat arrow function uses lexical this
 teamSummary1:function(){
  	return this.members.map((memeber) => {
    return  `${memeber} is on team ${this.teamName}`;
    });
}
};
  

team.teamSummary();
team.teamSummary1();
