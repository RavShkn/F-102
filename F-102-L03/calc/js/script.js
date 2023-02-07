let firstNumber = Number.parseFloat(prompt("Podaj pierwszą liczbę"));
let action = prompt("Jakie działanie chcesz wykonać? + - * /");
let secondNumber = Number.parseFloat(prompt("Podaj drugą liczbę"));

switch (action) {
    case "+":
        alert((firstNumber) + (secondNumber));
        break;
    case "-":
        alert(Number(firstNumber) - Number(secondNumber));
        break;
    case "*":
        alert(Number(firstNumber) * Number(secondNumber));
        break;
    case "/":
        if (secondNumber == 0 ) {
            alert("Pamiętaj cholero nie dziel przez zero!")
        } else {
             alert(Number(firstNumber) / Number(secondNumber));
        }
        break;
}