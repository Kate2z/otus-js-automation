const faker = require('faker');

const BuildUser = function () {
    this.getUser = function () {
        const userdata = {
            userName: faker.name.firstName(),
            userEmail: faker.internet.email(),
            userPass: faker.internet.password(),
            newUserPass: faker.internet.password(),
        };
        return userdata;
    };
    this.getUserTasks = function () {
        const usertasks = {
            userList: faker.lorem.word(),
            userTask: faker.lorem.sentence(6, true),
        }
       return usertasks;
    };
}

module.exports = new BuildUser();
