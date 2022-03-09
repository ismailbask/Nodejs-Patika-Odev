const pi = 3.14;
// const arguments = process.argv.slice(2);
function areaOfCircle(radius) {
    result = pi * radius * radius;
    console.log(result);
}
function circumferenceOfCircle(radius) {
    result = pi * radius * 2;
    console.log(result);
}
// console.log(areaOfCircle(arguments[0] * 1));

module.exports = {
    areaOfCircle,
    circumferenceOfCircle
};