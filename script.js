function checkQuiz() {
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "Delhi") score++;
    if (q2 && q2.value === "7") score++;
    if (q3 && q3.value === "HTML") score++;

    document.getElementById("result").innerHTML =
        "🎉 Your Score: " + score + "/3";
}