let assert = require('assert').strict;
let Ajv = require('ajv');

Feature('API tests');

Scenario('Get Mars Weather', async (I) => {
    const key = "REhueHeAaE7rV3gWcTDZNeZrVFSJCyjgvkQ13Z7S";
    const feedtype = "json";
    const version = "1.0";
    let r = await I.sendGetRequest(`https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=${feedtype}&ver=${version}`);
    assert.equal(r.status, 200);
});

Scenario('Register user and login', async (I) => {
    const data = {
        "email": "eve.holt@reqres.in",
        "password": "Qwerty123"
    };
    let reg = await I.sendPostRequest('https://reqres.in/api/register', data);
    assert.equal(reg.status, 200);
    assert.equal(reg.data.id, 4);
    const token = reg.data.token;
    let log = await I.sendPostRequest('https://reqres.in/api/login', data);
    assert.equal(log.status, 200);
    assert.equal(log.data.token, token);
});

Scenario('Unsuccessful login user', async (I) => {
    const body = {
        "email": "eve.holt@reqres.in",
    };
    let reg = await I.sendPostRequest('https://reqres.in/api/login', body);
    assert.equal(reg.status, 400);
    assert.equal(reg.data.error, 'Missing password');
});

Scenario('Get VK user by ID', async (I) => {
    const ajv = new Ajv({$data: true, logger: console, allErrors: true, verbose: true})
    const schema = {
        "required": ["data"],
        "properties": {
            "status": {"type": "integer"},
            "response": {"type": "object"},
        },
    };
    const key = 'e04b9d8473dcaa45dc04d1c010bf4fef646b6442563100f3b8360f704d3220440f4f19e00990e115f8699';
    let r = await I.sendGetRequest(`https://api.vk.com/method/users.get?user_ids=38940203&access_token=${key}&v=5.124`);
    const result = ajv.validate(schema, r);
    assert.equal(r.status, 200);
    assert.deepEqual(result, true);
    assert.equal(r.data.response[0].last_name, 'Жириновский');
});

