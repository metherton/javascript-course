/**
 * Created by martin on 11/03/18.
 */
function asyncMethod(message, cb) {
    setTimeout(function() {
        console.log(message);
        cb();
    }, 500)
}

asyncMethod('open DB connection', function() {
    asyncMethod('find user', function() {
        asyncMethod('validate user', function() {
            asyncMethod('do stuff', function() {})
        })
    });
});
