const uuid = require('uuid')

const members = [
    {   
        id: uuid.v4(),
        name: 'Max',
        email: 'max@gmail.com',
        age: 24
    },
    {   
        id:uuid.v4(),
        name: 'Alice',
        email: 'alice@gmail.com',
        age: 30
    },
    {
        id:uuid.v4(),
        name: 'Daniel',
        email: 'daniel@gmail.com',
        age: 33
    }
];

module.exports = members;
