const productOperations = {
    products :[],

    add(product){
        this.products.push(product);
        console.log("Added ",this.products);
    },
    countMark(){
       return  this.products.filter(product=>product.markForDelete).length;
    },
    toggleMark(id){
        var productObject = this.products.find(product=>product.id==id);    
        productObject.markForDelete= !productObject.markForDelete;
    },
    remove(){
        this.products = this.products.filter(product=>!product.markForDelete);
    },
    search(){
    
    },
    update(){
    
    },
    sort(){
    
    }
}
