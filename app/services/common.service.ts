import { Injectable } from '@angular/core';

@Injectable()
export class Common{
    private name:string;
    constructor(){
        this.name = '';
    }
    takeInput(name:string):void{
        this.name = name;
    }
    getInput():string{
        return this.name;
    }
}