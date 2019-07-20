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
var obj = { id: 101, name: 'Ram', salary: 9999 };
function print2(empObj) {
    console.log('Emp is ', empObj);
}
print2(obj);
var e1 = function (x, y) {
    return x + y;
};
var SavingAccount = /** @class */ (function () {
    function SavingAccount() {
    }
    SavingAccount.prototype.deposit = function () {
        console.log('Deposit Call');
    };
    SavingAccount.prototype.withDraw = function () {
        console.log('WithDraw Call');
    };
    return SavingAccount;
}());
var sa = new SavingAccount();
var Loan = /** @class */ (function () {
    function Loan() {
        this.balance = 1000;
    }
    Loan.prototype.print = function () {
    };
    return Loan;
}());
var AutoLoan = /** @class */ (function (_super) {
    __extends(AutoLoan, _super);
    function AutoLoan() {
        var _this = _super.call(this) || this;
        _this.openingBalance = 2000 + _this.balance;
        console.log("Balance is ", _this.openingBalance);
        return _this;
    }
    AutoLoan.prototype.emi = function () {
        _super.prototype.print.call(this);
    };
    return AutoLoan;
}(Loan));
var HomeLoan = /** @class */ (function (_super) {
    __extends(HomeLoan, _super);
    function HomeLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeLoan.prototype.emi = function () {
    };
    return HomeLoan;
}(Loan));
var autoLoan = new AutoLoan();
autoLoan.emi();
//var loan:Loan = new Loan();
