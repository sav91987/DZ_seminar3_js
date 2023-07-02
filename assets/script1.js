function ageReaction(age) {
    switch (age) {
        case 10:
            alert("Вам надо учить уроки!")
            break;
        case 18:
            alert("Вы совершеннолетний, все можно!");
            break;
        case 30:
            alert("Ложитесь спасть, завтра на работу!");
            break;    
        default:
            alert("Мы не знаем, что вам делать!");
            break;
    }
}
let age = parseInt(prompt("How old are you", "Input '10', '18', '30' or other"));
ageReaction(age);
