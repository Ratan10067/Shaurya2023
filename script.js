let sem1 = document.querySelector('.btn');
let sem2 = document.querySelector('.btn-close');
let sem3 = document.querySelector('.maincontainer');
let sem4 = document.querySelector('.submit');
let sem5 = document.querySelector('.container2');
let sem6 = document.querySelector('.container3');
let sem7 = document.querySelector('.container4');
let sem8 = document.querySelector('.homepage');
// let image = document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2604779.jpg')"
document.body.style.backgroundRepeat = "no-repeat"
let register = () => {
    sem3.style.visibility = "hidden";
    sem6.style.visibility = "hidden";
    sem7.style.visibility = "hidden";
    sem5.style.visibility = "visible";
    document.body.style.backgroundColor = "white";
}
let close = () => {
    sem5.style.visibility = "hidden";
    sem3.style.visibility = "visible";
    sem6.style.visibility = "visible";
    sem7.style.visibility = "visible";
    // let image = document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2604779.jpg')"
}
let submit = () => {
    confirm("Are you really want to submit ?");
    sem5.style.visibility = "visible";
    sem3.style.visibility = "hidden";
}
let homepage = () => {
    sem6.style.visibility = "visible";
    sem7.style.visibility = "visible";
    sem5.style.visibility = "hidden";
    sem3.style.visibility = "visible";
    // let image = document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2604779.jpg')"
}
sem1.addEventListener('click', register);
sem2.addEventListener('click', close);
sem4.addEventListener('click', submit);
sem8.addEventListener('click', homepage);
let clearerror = () => {
    error = document.getElementsByClassName('errors')
    for (let item of error) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('errors')[0].innerHTML = error;
}

function validateform() {
    var returnval = true;
    clearerror();

    var name = document.forms['form']["formname"].value;
    if (name.length < 5) {
        seterror("name", "*Name must contain atleast 5 letters");
        returnval = false;
    }
    let str = String(name);
    let arr = new Array(name.length);
    let brr = new Array(name.length);
    let crr = new Array(name.length);
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
    for (let i = 0; i < str.length; i++) {
        if ((64 < arr[i] && arr[i] < 91) || (96 < arr[i] && arr[i] < 123)) {
            brr[i] = arr[i];
        }
    }
    console.log(brr);
    for (let i = 0; i < str.length; i++) {
        crr[i] = String.fromCharCode(brr[i]);
    }
    let str1 = crr.join("");

    console.log(str1);

    let email = document.forms['form']["formemail"].value;

    console.log(email);
    let password = document.forms['form']["formpassword"].value;
    if (password.length < 8) {
        seterror("pass", "*Password atleast contains 8 element");
        returnval = false;
    }
    console.log(password);
    let number = document.forms['form']["formnumber"].value;
    if (number.length != 10) {
        seterror("num", "*Please Enter a valid Phone Number");
        returnval = false;
    }
    console.log(number);
    let e = document.getElementById("input1");
    let value = e.value;
    let text = e.options[e.selectedIndex].text;
    console.log(text);
    let e1 = document.getElementById("input2");
    let value1 = e1.value;
    let text1 = e1.options[e1.selectedIndex].text;
    console.log(text1);
    if (name.length < 5 || password.length < 8 || number.length != 10) {
        console.clear();
    }
    returnval = false;
    return returnval;
}