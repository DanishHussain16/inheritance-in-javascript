
// inheritance in javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(this.email, ' is logged in');
    }
    logout() {
        console.log(this.email, ' is logged out');
    }
}
// user class inherited in admin
class Admin extends User {
    delete() {

        console.log('user has been deleted');
    }
}

var admin1 = new Admin('danish', 'DAn@gmail.com');
console.log(admin1)
admin1.delete();
admin1.login();

var user1 = new User('aqib', 'awin@gmail.com');
// user1.delete();    this wont work bcz delete() is not a function of user class

