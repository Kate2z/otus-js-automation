const { I } = inject();

module.exports = {
    buttons: {
        save: '//div//p[contains(text(), "Update Your Password")]/../..//button[contains(text(), "Save")]',
    },
    fields: {
        newPass: '#newPassword',
        newPassConfirm: '#newPasswordConfirm',
        currentPass: '#currentPassword',
    },

    changePassword(oldPass, newPass) {
    I.fillField(this.fields.newPass, newPass);
    I.fillField(this.fields.newPassConfirm, newPass);
    I.fillField(this.fields.currentPass, oldPass);
    I.wait(3);
    I.click(this.buttons.save);
    I.wait(2);
    },
}
