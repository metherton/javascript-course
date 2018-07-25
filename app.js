/**
 * Created by martin on 11/03/18.
 */
function asyncMethod1(message) {
    return new Promise(function(fulfill, reject) {
        setTimeout(function() {
            console.log(message);
            fulfill();
        }, 500)
    });

}

function asyncMethod(message) {
    return new Promise(function(resolve, reject) {
        console.log("It is done.");
        console.log(message);
        // Succeed half of the time.
        if (Math.random() > .5) {
            resolve("SUCCESS")
        } else {
            reject("FAILURE")
        }
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
