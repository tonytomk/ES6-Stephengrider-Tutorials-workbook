// Syntactic Changes
// Enhanced object literals

function createBookShop(inventory){
  return {
    inventory: inventory,
    inventoryValue:function(){
      return this.inventory.reduce((total,book)=>total+book.price,0)
    },
    priceForTitle:function(title){
      return this.inventory.find((book)=>book.title===title).price
    }
  };
}

//// Enhanced function
// key and value are identical we can condense it down to single word

function createBookShop1(inventory){
  return {
    inventory,
    inventoryValue(){
      return this.inventory.reduce((total,book)=>total+book.price,0)
    },
    priceForTitle(title){
      return this.inventory.find((book)=>book.title===title).price
    }
  };
}

const inventory= [
  {title:"Happry Potter",price:10},
  {title:"Head First Js",price:15}
  ];

const bookShop=createBookShop1(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle("Happry Potter");
