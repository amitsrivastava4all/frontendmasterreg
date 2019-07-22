var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.discount = function () {
        console.log("discount 2%");
    };
    return Customer;
}());
var CashCustomer = /** @class */ (function (_super) {
    __extends(CashCustomer, _super);
    function CashCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashCustomer.prototype.discount = function () {
        console.log("discount 5%");
    };
    return CashCustomer;
}(Customer));
var CreditCustomer = /** @class */ (function (_super) {
    __extends(CreditCustomer, _super);
    function CreditCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCustomer.prototype.discount = function () {
        console.log("discount 3%");
    };
    return CreditCustomer;
}(Customer));
var PrCustomer = /** @class */ (function (_super) {
    __extends(PrCustomer, _super);
    function PrCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrCustomer.prototype.discount = function () {
        _super.prototype.discount.call(this);
        console.log("discount 7%");
    };
    PrCustomer.prototype.specialOffers = function () {
        console.log("Special Offers");
    };
    return PrCustomer;
}(Customer));
function createCustomer(customer) {
    customer.discount();
    if (customer instanceof PrCustomer) {
        var prCustomer = customer;
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
