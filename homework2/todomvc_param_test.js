Feature('test todomvc with params');

var fs = require("fs");
const text = fs.readFileSync("./homework2/blns.txt").toString('utf-8');
const tasksArray = text.split("\n",325);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const tasks = new DataTable(['task']);
tasks.add([`${tasksArray[getRandomInt(1,326)]}`]);

Data(tasks).Scenario('test todomvc with params', (I, current) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    const {task} = current;
    I.fillField('#new-todo', task);
    I.pressKey('Enter');
    I.waitForElement(`//label[contains(text(),"${task}")]`, 2);
    I.seeElement("//span/strong[contains(text(),'1')]");
});