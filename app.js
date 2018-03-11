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

asyncMethod('open DB connection').then( function() {
    asyncMethod('find user').then( function() {
        asyncMethod('validate user').then( function() {
            asyncMethod('do stuff').then(function() {})
        })
    })
})
