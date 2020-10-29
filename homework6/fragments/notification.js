'use strict';

let I;

module.exports = {

    _init() {
        I = actor();
    },

    root: '//div[contains(@class,"success")]',
    notificationTitle: {
        xpath: '//div[contains(@class,"notification-title")]',
    },
    notificationContent: {
        xpath: '//div[contains(@class,"notification-content")]',
    },

    async getNotificationText() {
        return within(this.root, async () => {
            I.waitForElement(this.notificationContent);
            return await I.grabTextFrom(this.notificationContent);
        });
    },

    async getNotificationTitle() {
        return within(this.root, async () => {
            return await I.grabTextFrom(this.notificationTitle);
        });
    }
}
