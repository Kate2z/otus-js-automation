const { I } = inject();

module.exports = {
    head: {
        greetingHead:  '//h2',
    },
    buttons: {
        user: '//span[@class="username"]',
        settings: '//a[@href = "/user/settings"]',
        addList: '[data-icon="plus"]',
        createList: '//button[@class = "button is-success noshadow"]',
        chooseList: '//span[@class="list-menu-title"]',
        addTask: '//button[@class = "button is-success"]',
    },
    fields: {
        listName: '//input[@placeholder = "The list\'s name goes here..."]',
        taskName: '//input[@placeholder = "Add a new task..."]',
    },
    addedTask: '//span[@class="tasktext"]',

    gotoSettings(){
        I.click(this.buttons.user);
        I.click(this.buttons.settings);
        I.wait(3); //пришлось поставить ожидание, т.к. периодически 502 ошибка отдается
    },

    async getUserGreeting() {
        I.wait(5);
        return greeting = await I.grabTextFrom(this.head.greetingHead);
    },

    addNewList(nameOfList) {
        I.click(this.buttons.addList);
        I.waitForText('Create a new list', 3);
        I.fillField(this.fields.listName, nameOfList);
        I.click(this.buttons.createList);
        I.wait(1);
    },

    addNewTask(nameOfList, nameOfTask) {
        I.click(this.buttons.chooseList);
        I.waitForText(nameOfList, 3);
        I.fillField(this.fields.taskName, nameOfTask);
        I.click(this.buttons.addTask);
    },
}

