const { I } = inject();

module.exports = {
    head: {
        greetingHead:  '//h2',
    },

    async getUserGreeting() {
        I.wait(5);
        const greeting = await I.grabTextFrom(this.head.greetingHead);
        return greeting;
    },
}
