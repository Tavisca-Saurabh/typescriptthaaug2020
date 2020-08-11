// Ex 1: Create string with following value
// TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.

// 1.  Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)
// 2.  Find out the number of occurences of specific word and character in string.
// 3.  Convert first character of each word in upper case.

let statements: string = "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development."

function toSentenceCase(statements: string): string {
     let statementCase: string = '';
     statements.split('.').forEach(function (sentence) {
          statementCase += sentence ? sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.': '';
     });
     return statementCase;
}

function numberOfOccurence(statements: string, character: string): number {
     return statements.split(' ' + character + ' ').length - 1;
}
function capitalizeFirstWord(statements: string){
     let capitalizeFirstWord: string = '';
     statements.toLowerCase().split(' ').forEach(function (sentence) {
          capitalizeFirstWord += sentence ? sentence.charAt(0).toUpperCase() + sentence.substring(1) + ' ': '';
     });
     return capitalizeFirstWord;
}
console.log("ToSentenceCase: " + toSentenceCase(statements));
console.log();
console.log("NumberOfOccurence: " + numberOfOccurence(statements,'is'));
console.log();
console.log("capitalizeFirstWord: " + capitalizeFirstWord(statements));