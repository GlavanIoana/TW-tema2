function addTokens(input, tokens){

    if(typeof input !== 'string')
        {throw Error('Input should be a string');}

    if(input.length < 6) {
        throw Error('Input shoud have at leat 6 characters');
    }

    // function isString(token){
    //     return typeof token.tokenName==='string';}
    // const isStringsArray =tokens.every(isString);
    // if(isStringsArray==false){
    // throw Error('Invalid array format!');}

    let containsdots=input.includes("...");
    if(!containsdots) {return input;}

    let newStr;
    for(i=0;i<tokens.length;i++){
        newStr=input.replace("...",'${'+tokens[i].tokenName+'}');}
    return newStr;
}

const app = {
    addTokens: addTokens
}

module.exports = app;
