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
    asyncMethod('do stuff').then(function() {})
}

function validateUser() {
    asyncMethod('validate user').then( doStuff)
}

function findUser() {
    asyncMethod('find user').then( validateUser)
}

asyncMethod('open DB connection').then( findUser)
