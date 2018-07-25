'use strict';

/**
 * Created by martin on 11/03/18.
 */
function asyncMethod(message, number) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message + ' ' + number);
            fulfill(number + 1);
        }, 500)
    });

}

function asyncMethod1(message, number) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message + ' ' + number);
            fulfill(number + 1);
        }, 2500)
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

async function main() {

    var one = await asyncMethod('open DB connection', 1);
    var two = await asyncMethod1('find user', one);
    var three = await asyncMethod('validate user', two);
    var four = await asyncMethod('find user', three);


}

main();

