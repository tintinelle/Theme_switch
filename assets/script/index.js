const select = document.getElementById("theme");
select.onchange = switchTheme;

function switchTheme() {
    const background = document.getElementById("container");

    switch (document.getElementById("theme").value) {
        case "white":
            background.classList.add("background-white");
            break;

        case "dark":
            background.classList.add("background-dark");
            break;

        case "warm":
            background.classList.add("background-warm");
            break;

        case "cold":
            background.classList.add("background-cold");
    }
}


// function switchTheme() {
//     const background = document.getElementById("container");

//     if (document.getElementById("theme").value == "white")
//     background.classList.add("background-white");

//     if (document.getElementById("theme").value == "dark")
//     background.classList.add("background-dark");

//     if (document.getElementById("theme").value == "warm")
//     background.classList.add("background-warm");

//     if (document.getElementById("theme").value == "cold")
//     background.classList.add("background-cold");
// }