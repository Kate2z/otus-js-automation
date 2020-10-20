const { I } = inject();


module.exports = {
    fields: {
        username:  '#username',
        email: '#email',
        password: '#password1',
        passwordRetype: '#password2',
    },
    buttons: {
        goRegister: '//a[contains(text(), "Register")]',
        submitRegister: '//button[@type="submit"]',
    },

    async userRegistration(name, email, pass) {
        I.click(this.buttons.goRegister);
        I.fillField(this.fields.username, name);
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, pass);
        I.fillField(this.fields.passwordRetype, pass);
        I.click(this.buttons.submitRegister);

    },
}
