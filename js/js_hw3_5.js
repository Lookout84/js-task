function getAllPropValues (array, prop) {
    'use strict';
    // Write code under this line 
    let result = [];
    let keys = Object.keys(array);
    let values = Object.values(array);
     
    for (let arr of array){
      let value = arr[prop];
    for (value in array)
    if (value !== undefined) { 
         result.push(value)  
        } 
      }
        return result; 
         
    };     
    //for (let prop of array.values()) {
      //  if ('name' in array.values() === true) {
        //    prop = name;
        //    result;
       // }
        //return array;
        //return 'name' in keys;
    //}
    
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 


  
  console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category'));
  //  []
  