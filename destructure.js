// Destructure
//ES 5

var expense={
type:'Business',
amount:'$45 USD'
};


//var type=expense.type
//var amount=expense.amount;
//ES 6
//const {type}=expense;
//const {amount}=expense;

const {type,amount}=expense;


// Destructure
//ES 5

var SavedFile={
 extension:'.jpg',
  name:'es6',
  size:123445
};

function fileSummary(file){
 return `The file ${file.name}${file.extension} is of size ${file.size}`; 
}


function fileSummary1({name,extension,size},{color}){
 return `The file ${name}${extension} is of size ${size}`; 
}

fileSummary1(SavedFile,{color:'red'})


// Destructure Array
// square brace for array

var companies=['google','facebook','adobe'];

//const [name,name1,name2,name4] 	= companies;
const [name,name1,...name4] 	= companies;
name
name1
name4


// Destructure Array
// Scenario 3

var companies=[
  {name:'google',location:'US'},
  {name:'flipkart',location:'IN'},
  {name:'alibaba',location:'CN'}
  ];


const [{location,name}]=companies
location
name


const Google={
  locations:['Mountain View','New York']
};

const {locations:[location1]}=Google;
location1


function signup({username,password,email,dob,city}){
// create new user
 
}

const user={
username:'myname',
password:'mypwd',
email:'my@em.com',
dob:'1/1/2018',
city:'blre'
}

//signup('chakki','mypwd','tt@t.com','1/1/2018','blre');

signup(user);


const points=[
  [4,5],
  [10,1],
  [0,40]
];

/*points.map(function(pair){
   const [x,y]=pair;
  return {x:x,y:y}
})*/


/*points.map(pair=>{
   const [x,y]=pair;
  return {x:x,y:y}
});*/

/*points.map(([x,y])=>{
  return {x:x, y:y};
})*/

points.map(([x,y])=>{
  return {x, y};
})
