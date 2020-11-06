let BuildUser = require ('./data/buildUser');

const {registerFormPage, personalMainPage, loginFormPage, settingsPage, notificationFragment} = inject();
const { BASE_URL, SUCCESS_PASS_CHANGE_TEXT, SUCCESS_LIST_ADD_TEXT } = require ('./data/constants');
const credential = require('./data/сredentials.json');
const assert = require('assert').strict;
const userData = BuildUser.getUser();
const userTasks = BuildUser.getUserTasks();

Feature('Tests with Page Obj upgrated');

Before(async I => {
    I.amOnPage(BASE_URL);
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
    assert.equal(factPasswordNotif, SUCCESS_PASS_CHANGE_TEXT);
});

// Scenario.skip('Add new tasks list', async (I) => {
//     loginFormPage.userLogin(credential.userForLogin.username, credential.userForLogin.password);
//     personalMainPage.addNewList(userTasks.userList);
//     const factListNotif = await notificationFragment.getNotificationText();
//     assert.equal(factListNotif, SUCCESS_LIST_ADD_TEXT);
//
// });
//
// Scenario.only('Add new task', async (I) => {
//     loginFormPage.userLogin(credential.userForLogin.username, credential.userForLogin.password);
//     personalMainPage.addNewTask(userTasks.userList, userTasks.userTask);
//     I.waitForElement(personalMainPage.addedTask);
// });

