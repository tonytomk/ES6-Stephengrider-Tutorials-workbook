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
