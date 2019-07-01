class Product{
    constructor(id , name, desc, price, url , color){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.url = url;
        this.color = color;
        this.markForDelete = false;
    }
}