const { I } = inject();

module.exports = {
    notification: {
        success:  '//div[contains(@class,"success")]/div',
    },

    async getNotification() {
        I.wait(2);
        const successNotif = await I.grabTextFrom(this.notification.success);
        return successNotif;
    },
}
