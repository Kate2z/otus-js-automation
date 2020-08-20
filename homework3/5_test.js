Feature('homework 3: five super tests');

Before(I => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
});

Scenario('first: add todo', (I) => {
    const firstTodo = 'Первый тест';
    I.fillField('#new-todo', firstTodo);
    I.pressKey('Enter');
    I.refreshPage();
    I.waitForElement(`//label[contains(text(),"${firstTodo}")]`, 2);
    I.seeElement("//span/strong[contains(text(),'1')]");
});

Scenario('second: toggle todo and check its completion', (I) => {
    const secondTodo = 'Второй тест';
    I.fillField('#new-todo', secondTodo);
    I.pressKey('Enter');
    I.click('//input[@class="toggle"]');
    I.waitForElement('#clear-completed');
    I.click('//ul[@id="filters"]/li[3]');
    I.waitForElement(`//li[@class='completed ember-view']//label[contains(text(),"${secondTodo}")]`, 2);
    I.seeElement("//span/strong[contains(text(),'0')]");
});

Scenario('third: toggle all todos', (I) => {
    const thirdTodo1 = 'Третий тест 1';
    const thirdTodo2 = 'Третий тест 2';
    const thirdTodo3 = 'Третий тест 3';
    I.fillField('#new-todo', thirdTodo1);
    I.pressKey('Enter');
    I.fillField('#new-todo', thirdTodo2);
    I.pressKey('Enter');
    I.fillField('#new-todo', thirdTodo3);
    I.pressKey('Enter');
    I.click('#toggle-all');
    I.waitForElement('#clear-completed');
    I.seeElement("//span/strong[contains(text(),'0')]");
});

Scenario('fourth: delete todo', (I) => {
    const fourthTodo = 'Четвертый тест';
    const deleteButton = "//button[@class='destroy']";
    I.fillField('#new-todo', fourthTodo);
    I.pressKey('Enter');
    I.moveCursorTo(`//label[contains(text(),"${fourthTodo}")]`);
    I.click(deleteButton);
    I.dontSeeElement(`//label[contains(text(),"${fourthTodo}")]`);
});

Scenario('fifth: clear completed todo', (I) => {
    const fifthTodo = 'Пятый тест';
    I.fillField('#new-todo', fifthTodo);
    I.pressKey('Enter');
    I.click('//input[@class="toggle"]');
    I.click('//ul[@id="filters"]/li[3]');
    I.waitForElement(`//li[@class='completed ember-view']//label[contains(text(),"${fifthTodo}")]`, 2);
    I.click('#clear-completed');
    I.dontSeeElement(`//label[contains(text(),"${fifthTodo}")]`);
});