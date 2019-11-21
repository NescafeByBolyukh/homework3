//----------closures--------

let countInvokations = (function () {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
})();

console.log(countInvokations());
console.log(countInvokations());
console.log(countInvokations());

//----------classes---------

let list = [
    {
        id: 1,
        firstName: 'Jon',
        lastName: 'Snow',
        age: 30
  },
    {
        id: 2,
        firstName: 'Jack',
        lastName: 'Jackson',
        age: 14
  },
    {
        id: 3,
        firstName: 'Will',
        lastName: 'Smith',
        age: 50
  }

];
class UserList {
    constructor(user) {
        this._user = user;
    }

    showNames() {
        this._user.forEach(user => {
            console.log(user.firstName);
        })
        return this;
    }
    showById(id) {
        let bool = false;
        this._user.forEach(user => {
            if (user.id == id) {
                console.log(user);
                bool = true;
            }
        })
        if (bool == false) {
            console.log(`Unable to find user with id: ${id}`);
        }
    }
    add(firstName) {
        if (firstName) {
            let lastIndexofArr = list.length - 1;
            let idOfNewUser = list[lastIndexofArr].id + 1;
            let newUser = {
                id: idOfNewUser,
                firstName: firstName
            };
            this._user.push(newUser);
            console.log(`Hi everyone, I am ${firstName}`);
        } else {
            console.log('PLease, write first name of the user');
        }
        return this;
    }

    removeById(id) {
        let userId = this._user.findIndex(user => user.id == id);
        if (userId >= 0) {
            this._user.splice(userId, 1);
            console.log(`bye bye ${id}`);

        } else {
            console.log(`Unable to find user with id: ${id}`);
        }
        return this;
    }

    logUsersCould() {
        let allUsersCount = list.length;
        console.log(`Total user count is ${allUsersCount}`);
        return this;
    }

}

const newList = new UserList(list);
newList.showById(1);
newList.showById(12);
newList.showById(2);
newList.showNames();
newList.add('Ira');
newList.showNames();
newList.add('Olya');
newList.showNames();
newList.removeById(4);
newList.showNames();
newList.add('Oleg');
newList.showNames();
newList.showById(5);
newList.logUsersCould();
