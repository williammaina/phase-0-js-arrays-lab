// Write your code here



// Export the necessary parts for testing
let products = ["laptop","phone","Headphones","Monitor"];

function logFirstProduct(arr) {
  if (arr.length > 0) {
    console.log(arr[0]);
  } else {
    console.log("The array is empty!");
  }
}
logFirstProduct(products)

function addProduct (arr, newProduct) {
  arr.push (newProduct);
  console.log(`${newProduct}`);
  }
addProduct(products,"camera");
console.log (products)
function removeLastProduct (arr, removedProduct){
  arr.pop (removedProduct);
  console.log (`${removedProduct}`);
}
removeLastProduct(products,"camera")
console.log (products)

module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};


