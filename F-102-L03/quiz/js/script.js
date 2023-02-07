alert("Zapraszam na krótki QUIZ");
if (confirm("Czy chcesz zostać junior frontend developerem?"))
    {
        alert("Dołącz do Zero to Junior")
        let hours = prompt("Ile czasu poświęcasz na naukę?");
        if (hours == 0) {
            alert("To czas zacząć");
        }
        else if (hours > 10) {
            alert("Brawo mistrzu!");
        }
        else {
            alert("Najważniejsze, że regularnie!")
        }
    }
else {
        alert("Nie ok :(")
}