Feature('test todomvc');

Before(I => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
});

Scenario('test todomvc without params', (I) => {
    const randomText = Math.random().toString(36).replace('0.', '');
    I.see('todos');
    I.fillField('//input[@id="new-todo"]', randomText);
    I.pressKey('Enter');
    I.waitForElement(`//label[contains(text(),"${randomText}")]`, 2);
});