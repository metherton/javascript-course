/**
 * Created by martin on 11/03/18.
 */
function asyncMethod(message) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message);
            fulfill();
        }, 500)
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

asyncMethod('open DB connection')
    .then( findUser)
    .then( validateUser)
    .then( doStuff)
    .then(function() {});
