/*
let var1 = Symbol();
let var2 = Symbor();
var1 === var2;
*/
let id  = Symbol();
const member = {
    name : "Kim",
    [id] : 12345
}

member
member[id]