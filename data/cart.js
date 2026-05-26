export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,},{productId: "d1a5c9e7-8b0c-4f1b-9a3e-2c8e9f1a2b3d",
    quantity: 1,
}];


export function addToCart(productId){
  let matchingItem;

     cart.forEach((cartItem)=> {
      if(productId === cartItem.productId){
        matchingItem =cartItem;
      }
     });
     if(matchingItem){
      matchingItem.quantity +=1;
     } else {
     cart.push({
      productId:productId,
      quantity:1
        });
      }}