window.addEventListener("load",registerEvents);
//registerEvents();
function registerEvents(){
document.getElementById('add')
.addEventListener('click',addProduct);
}
function createCircle(colorCode){
   var div =  document.createElement("div");
   div.style.width='50px';
   div.style.height='50px';
   div.style.backgroundColor=colorCode;
   div.className = 'rounded-circle';
   return div; 

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
        if(key=='color'){
            tr.insertCell(index).appendChild(createCircle(product[key]));
            index++;
            continue;
            
        }
        if(key=='url'){
            tr.insertCell(index).appendChild(createImage(product[key]));
            index++;
            continue;
        }
        tr.insertCell(index).innerText = product[key];
        index++;
        
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon('fas fa-trash'));
    td.appendChild(createIcon('fas fa-edit'));
}
function createIcon(className){
    var icon = document.createElement('i');
   // icon.className=className;
   icon.className = className;
  // icon.classList.add(className);
  // icon.classList.add('size');
   icon.classList.add('mr-2');
   icon.classList.add('hand');
    return icon;
    // <i class="fas fa-trash"></i>
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