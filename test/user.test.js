const User = require('../models/user');

const assert = require('assert');

const test_user_info = {
    username: 'guest',
    email: 'dndl4@gmail.com',
    address: '69 Phan Đình Phùng',
    role: 'level_1',
    full_name: 'Nguyễn Huy Tuyển',
    lastlogin: "undefined"
}

// const test_user = new User(test_user_info);

// console.log(test_user)

// describe('User get info', () => {
//     it('Should be user score',  function() {
//         return test_user.getScore()
//         .then(result => {
//             console.log(result);
//             assert.equal(result.constructor.name,'Number');
//         })
//     }),

//     it('Should be user score + 2',  function() {
//         return test_user.incrementScore(2)
//         .then(result => {
//             console.log(result);
//             assert.equal(result.constructor.name, 'Result');
//         })
//     })

// })
async function test_isOwnerOf() {
    var test_user = new User({id: "mau@infore.vn"});

    var result = await test_user.isOwnerOf("whynothere");
    console.log("Result of isOwnerOf: ", result);
}

test_isOwnerOf()

