function isValidPassword(password,username){
    const tooShort = password.length<8;
    const hasSpace = password.indexof(' ')!==-1;
    const tooSimilar = password.indexof(username)!==-1;
    if(tooShort || hasSpace||tooSimilar) return false;
    return true;
}