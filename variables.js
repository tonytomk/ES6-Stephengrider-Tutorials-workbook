// const,let,var

//var is not used generally in es6
//const -constant value
//let -variable value

function count(targetString){
  const characters=['a','e','i','o','u'];
  let number=0;
  for(let i=0;i<targetString.length;i++){
  if(characters.includes(targetString[i])){
    number++
  }
  }
  return number;
}
  

count("asewewfdfwefwfw")
