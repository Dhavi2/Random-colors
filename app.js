const getColor = () =>{  /*random color generator */
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode ="#" + randomNumber.toString(16) /** this is do 16 give haxe code */
    document.body.style.backgroundColor = randomCode;
    console.log(randomNumber);
    console.log(randomCode);
}
/*event call */
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
/*init call */
getColor();