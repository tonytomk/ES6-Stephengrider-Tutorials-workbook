// Tempalte String
// Using backtick we can avoid concatinating year to string
// variable will be available with ${var_name}


function getMessage(){
const year=new Date().getFullYear();
  return `The Year is ${year} `;
}

getMessage()
