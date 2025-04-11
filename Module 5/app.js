// never return type
// it is mainly used in when doing try catch or returning the error
function generateError(message, code) {
    throw { message: message, statusCode: code };
    // means this fucntion never return anything and it will over here only.
}
var res = generateError("Internal Server error", 500);
console.log(res);
