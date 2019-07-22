var Opr = /** @class */ (function () {
    function Opr() {
    }
    Opr.prototype.add = function (obj) {
        E.create(obj, function () {
        });
    };
    return Opr;
}());
var User = /** @class */ (function () {
    function User(userid, pwd) {
        this.userid = userid;
        this.pwd = pwd;
    }
    return User;
}());
var UserSchema = /** @class */ (function () {
    function UserSchema() {
        this.users = [];
    }
    UserSchema.prototype.create = function (user) {
        this.users.push(user);
        console.log("Added ", this.users);
    };
    return UserSchema;
}());
var userObj = new User("amit", "123");
var userOpr = new Opr();
userOpr.add(userObj);
