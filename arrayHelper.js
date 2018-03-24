var colors=['blue','red','white','black'];

/*converntional for loop */
for(var i=0;i<=colors.length;i++){
 console.log(colors[i]); 
}


/*forEach array Helper*/
colors.forEach(function(color){  
  console.log(color);
});

// Create an array of number
var numbers=[1,2,3,4,5]

//Create a varaiable to hold sum
var sum=0;

//Loop over the array
numbers.forEach(function(num){
  sum+=num;
});

//Print the sum
sum

var numbers=[1,2,3];
var doubledNumbers=[];

// conventional approach
for( var i=0; i<numbers.length; i++)
{
doubledNumbers.push(numbers[i] * 2);
}

// map helper

var doubled=numbers.map(function(number){
  return number*2;
});
doubled                      
doubledNumbers
