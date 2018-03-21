'use strict';

/**
 * Created by martin on 11/03/18.
 */

let main = (() => {
    var _ref = _asyncToGenerator(function* () {

        var one = yield asyncMethod('open DB connection', 1);
        var two = yield asyncMethod('find user', one);
        var three = yield asyncMethod('validate user', two);
        var four = yield asyncMethod('find user', three);
    });

    return function main() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function asyncMethod(message, number) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message + ' ' + number);
            fulfill(number + 1);
        }, 500);
    });
}

function doStuff() {
    return asyncMethod('do stuff');
}

function validateUser() {
    return asyncMethod('validate user');
}

function findUser() {
    return asyncMethod('find user');
}

main();
