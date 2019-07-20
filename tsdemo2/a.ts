// var x = 100;
// x = null;
// function test(a:number, b:number){
//     return 10 + 20;
// }
class A{
     private _age:number;
     constructor(){
         this._age = 21;
     }
     set age(_age:number){
         if(_age<=0){
             this._age = 0;
             return ;
         }
         this._age = _age;
     }
     get age():number{
         return this._age;
     }
     
}
var a:A = new A();
a.age = 21;
console.log('Age is ',a.age);
//a._age = -1000;