const {registerFormPage, successRegister, loginFormPage, settingsPage, successPassChange} = inject();
const faker = require('faker');
let assert = require('assert').strict;

const userName = faker.name.firstName();
const userEmail = faker.internet.email();
const userPass = faker.internet.password();
let newUserPass = faker.internet.password();

Feature('Tests with Page Obj');

Before(I => {
    I.amOnPage('https://try.vikunja.io');
});

Scenario('User registration', async (I) => {
    registerFormPage.userRegistration(userName, userEmail, userPass);
    const factGreet = await successRegister.getUserGreeting();
    assert.equal(factGreet, `Hi ${userName}!`);
});

Scenario('User change password', async (I) => {
    loginFormPage.userLogin(userName, userPass);
    settingsPage.changePassword(userPass, newUserPass);
    const factNotif = await successPassChange.getNotification();
    assert.equal(factNotif[0], "Success");
    assert.equal(factNotif[1], "The password was successfully updated.");
});
