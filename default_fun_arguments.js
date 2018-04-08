//Default function arguments

function makeAjaxRequest(url,method){
  
  if(!method){
  method="GET";
  }
}

// ES 6

function makeAjaxRequest1(url,method='GET'){
return method;
}


makeAjaxRequest1("www.tonytomk.com",null);
makeAjaxRequest1("www.tonytomk.com",undefined);
makeAjaxRequest1("www.tonytomk.com",'POST');

//Default function arguments
//Scenario 2


function User(id){
this.id=id;
}


function generateId(){
return Math.random()*99999;
}

function createAdmin(user=new User(generateId())){
user.admin=true;
  return user;
}

new User(1);
new User(2);


createAdmin();
createAdmin(new User(generateId()));
