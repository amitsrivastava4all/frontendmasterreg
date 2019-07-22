abstract class Customer{
    discount(){
        console.log("discount 2%");
    }
}
class CashCustomer extends Customer{
    discount(){
        console.log("discount 5%");
    }
}
class CreditCustomer extends Customer{
    discount(){
        console.log("discount 3%");
    }
}
class PrCustomer extends Customer{
    discount(){
        super.discount();
        console.log("discount 7%");
    }
    specialOffers(){
        console.log("Special Offers");
    }
}
function createCustomer(customer:Customer){
customer.discount();
if(customer instanceof PrCustomer){
    let prCustomer:PrCustomer = customer;
    prCustomer.specialOffers();
}
}
createCustomer(new PrCustomer());
createCustomer(new CashCustomer());
// var obj22:Customer  = new PrCustomer();
// obj22.discount();
// obj22.specialOffers();
// var obj: CashCustomer = new CashCustomer();

// obj.discount();
// var obj: CashCustomer = new CashCustomer();
// obj.discount();
