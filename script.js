const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();


    const input = document.querySelector("input");
    const convertedWeight = document.querySelector("span");

    let kgToPound;
    if (isNaN(input.value) || input.value <= 0) {

        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "<p>Please enter a valid number!</p>";

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("error");
        }, 3000);
        input.value = "";
    } else {
        kgToPound = Number(input.value) * 2.20462;
        convertedWeight.classList.add("successful");
        convertedWeight.innerHTML = `${kgToPound.toFixed(3)}`;

        setTimeout(() => {
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("successful");
            input.value = "";
        }, 100000);
    }
});



































// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const input = document.querySelector("input");
//     const convertedWeight = document.querySelector("span");

//     if (isNaN(input.value) || input.value <= 0) {
//         convertedWeight.classList.add("error");
//         convertedWeight.innerHTML = "<p>Please enter a valid number!</p>";

//         setTimeout(() => {
//             convertedWeight.innerHTML = "";
//             convertedWeight.classList.remove("error");
//         }, 3000);  // Set timeout to 3 seconds
//     } else {
//         const kgToPound = input.value * 2.20462;  // Conversion logic
//         convertedWeight.innerHTML = `<p>${input.value} kg is equal to ${kgToPound.toFixed(2)} pounds.</p>`;
//     }
// });
