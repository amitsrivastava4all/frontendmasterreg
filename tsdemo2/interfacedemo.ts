interface IDB{
    add():void;
    delete():boolean;
    search(id:number):boolean;
}
class Order implements IDB{
    add(): void {
        throw new Error("Method not implemented.");
    }    delete(): boolean {
        throw new Error("Method not implemented.");
    }
    search(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    
}