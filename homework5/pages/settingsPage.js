const { I } = inject();

module.exports = {
    buttons: {
        user: '//span[@class="username"]',
        settings: '//a[@href = "/user/settings"]',
        save: '//div//p[contains(text(), "Update Your Password")]/../..//button[contains(text(), "Save")]',
    },
    fields: {
        newPass: '#newPassword',
        newPassConfirm: '#newPasswordConfirm',
        currentPass: '#currentPassword',
    },

    changePassword(oldPass, newPass) {
        I.click(this.buttons.user);
        I.click(this.buttons.settings);
        I.wait(3); //пришлось поставить ожидание, т.к. периодически 502 ошибка отдается
        I.fillField(this.fields.newPass, newPass);
        I.fillField(this.fields.newPassConfirm, newPass);
        I.fillField(this.fields.currentPass, oldPass);
        I.wait(3);
        I.click(this.buttons.save);
        I.waitForText('The password was successfully updated.', 3);
    },
}
