var statements = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
function toSentenceCase(statements) {
    var statementCase = '';
    statements.split('.').forEach(function (sentence) {
        statementCase += sentence ? sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.' : '';
    });
    return statementCase;
}
function numberOfOccurence(statements, character) {
    return statements.split(' ' + character + ' ').length - 1;
}
function capitalizeFirstWord(statements) {
    var capitalizeFirstWord = '';
    statements.toLowerCase().split(' ').forEach(function (sentence) {
        capitalizeFirstWord += sentence ? sentence.charAt(0).toUpperCase() + sentence.substring(1) + ' ' : '';
    });
    return capitalizeFirstWord;
}
console.log("ToSentenceCase: " + toSentenceCase(statements));
console.log();
console.log("NumberOfOccurence: " + numberOfOccurence(statements, 'is'));
console.log();
console.log("capitalizeFirstWord: " + capitalizeFirstWord(statements));
