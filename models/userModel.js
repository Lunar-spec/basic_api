// models/userModel.js
class UserStore {
    constructor() {
        this.users = [{
            id: "1",
            firstName: "Mori",
            lastName: "Han",
            hobby: "Reading"
        }];
    }

    findAll() {
        return this.users;
    }

    findById(id) {
        return this.users.find(user => user.id === id);
    }

    create(userData) {
        const newUser = {
            id: String(this.users.length + 1),
            ...userData
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id, userData) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) return null;

        this.users[index] = { ...this.users[index], ...userData };
        return this.users[index];
    }

    delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) return null;

        return this.users.splice(index, 1)[0];
    }
}

module.exports = new UserStore();