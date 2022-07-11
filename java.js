function change()
{
    return 10;
}
function check()
{
    console.log("hey bro after b2 secs i am on your screen")
}
var b=change();
console.log(b);
setTimeout(check,2000);
