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

