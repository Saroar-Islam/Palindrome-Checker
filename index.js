function palindromeCheker() {
    let input = document.getElementById("text-input").value;
    let res1 = document.getElementById("result1");
    let res2 = document.getElementById("result2");

    res1.innerHTML = input;

    if (input === "") {
        alert("Please input a value");
    } else if (input !== "") {
        let word = input.toLowerCase().match(/[A-Z0-9]/gi);
        let reWord = input
            .toLowerCase()
            .match(/[A-Z0-9]/gi)
            .reverse();

        if (JSON.stringify(word) === JSON.stringify(reWord)) {
            res2.innerHTML = " " + "is a palindrome";
            res2.style.color = "greenyellow";
            console.log(input + " " + "is a palindrome");
        } else {
            res2.innerHTML = " " + "is not a palindrome";
            res2.style.color = "red";
            console.log(input + " " + "is not a palindrome");
        }
    }
}

document
    .getElementById("check-btn")
    .addEventListener("click", palindromeCheker);
