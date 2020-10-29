let BuildUser = require ('./data/buildUser');

const {registerFormPage, personalMainPage, loginFormPage, settingsPage, notificationFragment} = inject();
let assert = require('assert').strict;

const userData = BuildUser.getUser();
const userTasks = BuildUser.getUserTasks();


Feature('Tests with Page Obj');

Before(I => {
    I.amOnPage('https://try.vikunja.io');
});

Scenario('User registration', async (I) => {
    registerFormPage.userRegistration(userData.userName, userData.userEmail, userData.userPass);
    const factGreet = await personalMainPage.getUserGreeting();
    assert.equal(factGreet, `Hi ${userData.userName}!`);
});

Scenario('User change password', async (I) => {
    loginFormPage.userLogin(userData.userName, userData.userPass);
    personalMainPage.gotoSettings();
    settingsPage.changePassword(userData.userPass, userData.newUserPass);
    const factPasswordNotif = await notificationFragment.getNotificationText();
    assert.equal(factPasswordNotif, "The password was successfully updated.");
});

Scenario('Add new tasks list', async (I) => {
    loginFormPage.userLogin(userData.userName, userData.newUserPass);
    personalMainPage.addNewList(userTasks.userList);
    const factListNotif = await notificationFragment.getNotificationText();
    assert.equal(factListNotif, "The list was successfully created.");

});

Scenario('Add new task', async (I) => {
    loginFormPage.userLogin(userData.userName, userData.newUserPass);
    personalMainPage.addNewTask(userTasks.userList, userTasks.userTask);
    I.waitForElement(personalMainPage.addedTask);
});

