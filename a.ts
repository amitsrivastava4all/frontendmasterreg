var a= 100;
//a='Amit';
console.log('A is ',a);
var b:number = 1000;
var c:string = 'Amit';
var d:boolean = true;
var e:string[] = ["Hello","OK"];
type mytype= {name:string, age:number};
var f2:mytype = {name:'Ram',age:22};
var f:{name:string, age:number} = {name:'Ram',age:21};
var g:number|string = 1001;
g = 'Hello';
//g = true;
var g1:any = 'Hello';
function show(a:number, b:number):number{
    return a + b;
}
var e1:number = show(10,20);

class A{
    //private a:number;
     public b:number;
     protected c:number;
    constructor(private a:number){

    }
    show():void{
        console.log('*****A is '+this.a);
    }
    // constructor(a:number){
    //     this.a = a;
    // }
}
var obj:A = new A(100);
obj.show();
var k:[string, number, boolean] = ['Abcd',21,true];
enum Days  {
    SUNDAY=100, MONDAY
}
var d1:Days = Days.MONDAY;
console.log(d1);
var e2:(x:number, y:number)=>number;
function disp():void{
    console.log("Disp Call");

}
e2 = show;
//e2 = disp;
