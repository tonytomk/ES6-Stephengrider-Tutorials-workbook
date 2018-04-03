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


// map example 2
var cars=[
  {model:'alto',price:'cheap'},
  {model:'i20',price:'expensive'}
];


var prices=cars.map(function(car){
return car.price;
});

prices


//Filter array helper

var products=[
  {name:'cucumber',type:'vegetable'},
  {name:'banana',type:'fruit'},
  {name:'celery',type:'vegetable'},
  {name:'orange',type:'fruit'}
];

//conventional approach
var filtersFruits=[];

for (var i=0;	i<products.length;i++){
  if(products[i].type === 'fruit'){
  filtersFruits.push(products[i]);
  }
}
filtersFruits

//Filter array helper
products.filter(function(product){
  return product.type==='fruit'
});


//Complex Filter array scenarios

var products=[
  {name:'cucumber',type:'vegetable',quantity:1,price:10 },
  {name:'banana',type:'fruit',quantitiy:10,price:40 },
  {name:'celery',type:'vegetable',quantity:10,price:10 },
  {name:'orange',type:'fruit',quantity:10,price:40 }
];

// filter scenario
//type veg ,price less than 20,qty greater than 5


products.filter(function(product){
return product.type==='vegetable' 
  && product.quantity>5 
  && product.price<20
});




//Complex Filter array scenarios

var posts={id:4,post:'Test post'}

var comments=[
  {postId:4,content:'kollam'},
  {postId:3,content:'ok'},
  {postId:4,content:'awesome'}
  ];


function ComentsForPost(post,comments){
return comments.filter(function(comment){
  return comment.postId===4
});
}

ComentsForPost(posts,comments)


// Find Filter
var users=[
  {name:'Linju'},
  {name:'Tony'},
  {name:'Diya'}
  ];


users.find(function(user){
  return user.name ==='Tony';
});


// Find Filter

function car(model){
 this.model=model;
};

var cars=[
  new car('alto'),
  new car('i20'),
  new car('swift')
  ];

cars.find(function(car){
return car.model='alto'
});

// Find Filter Scenario 3

var posts = [
  {id:1,title:'New Post'},
  {id:2,title:'Old Post'}
  ];

var comment={postId:1,content:'Great Post'}

function postForComment(posts,comment){
  return posts.find(function(post){
  return post.id===comment.postId;
  });
}

postForComment(posts,comment)


//Every filter
//do && on each item and gets the result.

var computers=[
  {name:'Apple', ram:24},
  {name:'compaq',ram:4},
  {name:'Acer',ram:16}
];

computers.every(function(computer){
  return computer.ram>4
});


//Some filter
//do || on each item and gets the result.

var computers=[
  {name:'Apple', ram:24},
  {name:'compaq',ram:4},
  {name:'Acer',ram:16}
];

computers.some(function(computer){
  return computer.ram>4
});


//Every filter scenario 2

function Field(value){
	this.value=value;
}

Field.prototype.validate=function(){
	return this.value.length>0;
}

var username=new Field("2cool");
var password=new Field("my_passwd");
var birthdate=new Field("10/10/2010");

var fields=[username,password,birthdate];

fields.every(function(field){
 return field.validate;
});



// Reduce helpers

var numbers=[10,20,30];
var sum=0;

numbers.reduce(function(sum,number) {
return sum+number;
},0);


// Reduce helpers Scenario 1

var primaryColors=[
  {color:"red"},
  {color:"yellow"},
  {color:"blue"}  
];

primaryColors.reduce(function(previous,primaryColor){
  previous.push(primaryColor.color);
  return previous;
  
}, [] );



