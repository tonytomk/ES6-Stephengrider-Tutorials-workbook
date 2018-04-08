//Rest and Spread operator


function addNumbers(...numbers){
return numbers.reduce((sum,number)=>{
  return sum+number;
},0);
}


function addNumbers1(numbers){
return numbers.reduce((sum,number)=>{
  return sum+number;
},0);
}


addNumbers1([1,2,3,4,5]);

addNumbers(2,3,4,5);

//Rest and Spread operator

const defaultColors=['viloet','indigo'];
const userFavoriteColros=['red','green'];

defaultColors.concat(userFavoriteColros);

//Using Spread Operator

['black',...defaultColors,...userFavoriteColros];


//Rest and Spread operator

function validateShoppingList(...items){
  
  if(items.indexOf('milk') < 0 )
  {
  return [ 'milk',...items ]; 
  }
  return items; 

}

validateShoppingList('oranges','bread')


//Rest and Spread operator

const MathLibrary={
 calculateProduct(...rest){
  return this.multiply(...rest);
 },
  multiply(a,b){
  	return a*b;
 }
}
