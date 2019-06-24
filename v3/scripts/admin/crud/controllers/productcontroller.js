window.addEventListener("load",registerEvents);
//registerEvents();
function registerEvents(){
document.getElementById('add').addEventListener('click',addProduct);
}
function createImage(url){
   var image =  document.createElement('img');
   image.src = url;
   image.className='size';
   return image;
}
function printProduct(product){
    var tbody = document.getElementById('products');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in product){
        if(key=='url'){
            tr.insertCell(index).appendChild(createImage(product[key]));
            index++;
            continue;
        }
        tr.insertCell(index).innerText = product[key];
        index++;
        
    }
}
function addProduct(){
   // console.log('Add Product Call');
   var product = new Product();
   for(let key in product){
       product[key] = document.getElementById(key).value;
   }
   productOperations.add(product);
   printProduct(product);
//    var arr = ['id','name','price'];
//    var values= [];
//    var index = 0;
//    for(let i of arr){
//     values[index]=document.getElementById(i).value;
//     index++;
//    }
//    var id = document.getElementById('id').value;
//    var name = document.getElementById('name').value;

}