window.addEventListener("load",init);
//registerEvents();
var count ;
function init(){
    registerEvents();
    count = autoGen();
    printCounter();
    showRecordCounts();
   
}
function showRecordCounts(){
    document.querySelector('#total').innerText = productOperations.products.length;
    document.querySelector('#mark').innerText = productOperations.countMark();
    document.querySelector('#unmark').innerText = productOperations.products.length - productOperations.countMark();
}
function printProducts(products){
    document.querySelector('#products').innerHTML = '';
    products.forEach(printProduct);
 // products.forEach(product=>)
}
function toggleMark(){
    console.log("toggle mark ",this);
    var icon = this;
    var id = icon.getAttribute("pid");
    var tr = icon.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    productOperations.toggleMark(id);
    showRecordCounts();
   // tr.className ='alert-danger';
}
function updateProduct(){
    for(let key in productEditObject){
        if(key=='markForDelete' || key=='id'){
            continue;
        }
        
        productEditObject[key] = document.querySelector('#'+key).value;
    }
    printProducts(productOperations.products);
}
var productEditObject ;
function edit(){
    console.log("edit call ",this);
    var id = this.getAttribute('pid');
    productEditObject = productOperations.search(id);
    for(let key in productEditObject){
        if(key=='markForDelete'){
            continue;
        }
        if(key=='id'){
            document.querySelector('#'+key).innerText =  productEditObject[key];
            continue;
        }
        document.querySelector('#'+key).value = productEditObject[key];
    }
}
function deleteProduct(){
productOperations.remove();
printProducts(productOperations.products);
showRecordCounts();
}
function saveProduct(){
    if(localStorage){
        localStorage.products = JSON.stringify(productOperations.products);
        alert("Record Saved...");
    }
    else{
        alert("Ur Browser is Outdated....");
    }
}
function loadProduct(){
    if(localStorage){
        if(localStorage.products){
            productOperations.products = JSON.parse(localStorage.products);
            printProducts( productOperations.products);
            showRecordCounts();
        }
        else{
            alert("No Data to Load");
        }
    }
    else{
        alert("Ur Browser is Outdated....");
    }
}
function clone(fireBaseObject){
var productObject = new Product(fireBaseObject.id,fireBaseObject.name,fireBaseObject.desc,fireBaseObject.price, fireBaseObject.url, fireBaseObject.color);
productOperations.add(productObject);

}
function loadFromServer(){
    // single record fetch
    //firebase.database().ref('/products/2');
    // all record fetch
    var products = firebase.database().ref('/products');
    products.on('value',(snapshot)=>{
       let prods =  snapshot.val();
       for(let key in prods){
          let fireBaseProductObject =  prods[key];
          clone(fireBaseProductObject);
          
       }
       printProducts(productOperations.products);
       showRecordCounts();
    })

}
function saveToServer(){
   var productObject =  productOperations.products[productOperations.products.length-1];
   var id = productObject.id;
    var promise = firebase.database().ref('/products/'+id).set(productObject);
    promise.then(data=>{
        alert("Record Added");
    }).catch(err=>{
        alert("NOt Added Error Occur");
        console.log(err);
    })
}
function registerEvents(){
    
    
    document.querySelector('#loadfromserver')
    .addEventListener('click',loadFromServer);
    document.querySelector('#savetoserver')
.addEventListener('click',saveToServer);
    document.getElementById('save')
.addEventListener('click',saveProduct);
document.getElementById('load')
.addEventListener('click',loadProduct);
    document.getElementById('update')
.addEventListener('click',updateProduct);
document.getElementById('add')
.addEventListener('click',addProduct);
document.getElementById('delete')
.addEventListener('click',deleteProduct);
}
function printCounter(){
    document.querySelector('#id').innerText =count.next().value;

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
        if(key=='markForDelete'){
            continue;
        }
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
    td.appendChild(createIcon('fas fa-trash',toggleMark,product.id));
    td.appendChild(createIcon('fas fa-edit',edit,product.id));
}
function createIcon(className,fn,id){
    var icon = document.createElement('i');
   // icon.className=className;
   icon.className = className;
   icon.setAttribute("pid",id);
  // icon.classList.add(className);
  // icon.classList.add('size');
   icon.classList.add('mr-2');
   icon.classList.add('hand');
   icon.addEventListener('click',fn);
   // icon.fn();
    return icon;
    // <i class="fas fa-trash"></i>
}
function addProduct(){
   // console.log('Add Product Call');
   var product = new Product();
   for(let key in product){
       if(key=='markForDelete'){
           continue;
       }
       if(key=='id'){
        product[key] = document.getElementById(key).innerText;
        continue;  
       }
       product[key] = document.getElementById(key).value;
   }
   productOperations.add(product);
   printProduct(product);
   printCounter();
   showRecordCounts();
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