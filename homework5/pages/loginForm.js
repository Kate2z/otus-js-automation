const { I } = inject();

module.exports = {
    fields: {
        username:  '#username',
        password: '#password',
    },
    buttons: {
        login: '//button[contains(text(), "Login")]',
    },

    async userLogin(name, pass) {
        I.fillField(this.fields.username, name);
        I.fillField(this.fields.password, pass);
        I.click(this.buttons.login);
        I.waitForText(`Hi ${name}!`, 5);
    },
}
