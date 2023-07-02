function sayHi(name) {
    alert("Hi, " + name + "!");
}
let name = prompt("What is your name?");
flag = true;
while (flag) {

    if (confirm("Are you sure?")) {
        sayHi(name);
        flag = false;
    }
    else {
        name = prompt("What is your name?");
    }
}