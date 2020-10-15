const {registerFormPage, loginFormPage, settingsPage} = inject();
const faker = require('faker');

const userName = faker.name.firstName();
const userEmail = faker.internet.email();
const userPass = faker.internet.password();
const newUserPass = faker.internet.password();

Feature('Tests with Page Obj');

Before(I => {
    I.amOnPage('https://try.vikunja.io');
});

Scenario('User registration', async (I) => {
    registerFormPage.userRegistration(userName, userEmail, userPass);
});

Scenario('User change password', async (I) => {
    loginFormPage.userLogin(userName, userPass);
    settingsPage.changePassword(userPass, newUserPass);
});
