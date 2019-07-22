class Repo<T>{
    getSchema(name:string):T{
        return mongoose.model(name,T);
    }
}

class Opr<T> {
   add(obj:T){
    getSchema().create(obj, ()=>{

    });
   }
}
class User{
constructor(public userid:string, public pwd:string){

}
}
class UserSchema{
    users:User[] = [];
    create(user:User){
        this.users.push(user);
        console.log("Added ",this.users);
    }
}
var userObj:User = new User("amit","123");
var userOpr:Opr<User>  = new Opr<User>();
userOpr.add(userObj);