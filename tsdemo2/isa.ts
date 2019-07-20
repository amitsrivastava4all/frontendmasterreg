interface Emp{
    id:number;
    name:string;
    salary:number;
}
var obj:Emp = {id:101,name:'Ram',salary:9999};
function print2(empObj:Emp):void{
console.log('Emp is ',empObj);
}
print2(obj);

interface Fn{
    (a:number,b:number):number;
}
var e1:Fn = function(x:number, y:number){
    return x + y;
}
interface JointAccount{
    print():void;
}
interface IAccount{
    deposit():void;
    withDraw():void;
}
interface HybridAccount extends IAccount, JointAccount{

}
class SavingAccount implements HybridAccount{
    print():void{
        console.log('Print Call');
    }
    constructor(){

    }
    deposit():void{
        console.log('Deposit Call');
    }
    withDraw():void{
        console.log('WithDraw Call');
    }
}
var sa:SavingAccount = new SavingAccount();
sa.deposit();
sa.withDraw();

abstract class Loan{
balance:number;
constructor(){
    this.balance = 1000;
}
print():void{

}
abstract emi():void;
}
class AutoLoan extends Loan{
    openingBalance:number;
    constructor(){
        super();
        this.openingBalance = 2000 + this.balance;
        console.log("Balance is ",this.openingBalance);
    }
emi():void{
super.print();
}
}
class HomeLoan extends Loan{
emi():void{
    
}
}
var autoLoan:AutoLoan = new AutoLoan();
autoLoan.emi();
//var loan:Loan = new Loan();