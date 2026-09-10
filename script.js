function calculateResult() {

    // Get student name
    let name = document.getElementById("studentName").value;

    // Get marks
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);
    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);

    // Check whether all fields are filled
    if (
        name === "" ||
        document.getElementById("maths").value === "" ||
        document.getElementById("science").value === "" ||
        document.getElementById("english").value === "" ||
        document.getElementById("physics").value === "" ||
        document.getElementById("chemistry").value === ""
    ) {
        alert("Please enter the student's name and marks for all subjects.");
        return;
    }
    // Validate marks
let marks = [maths, science, english, physics, chemistry];

for (let mark of marks) {
    if (mark < 0 || mark > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }
}

    // Calculate total
    let total = maths + science + english + physics + chemistry;

    // Calculate percentage
    let percentage = total / 5;

    // Calculate grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Determine pass or fail
    let result;

    if (
        maths >= 35 &&
        science >= 35 &&
        english >= 35 &&
        physics >= 35 &&
        chemistry >= 35
    ) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    // Display result
    document.getElementById("resultName").textContent = name;
    document.getElementById("totalMarks").textContent = total;
    document.getElementById("percentage").textContent = percentage.toFixed(2);
    document.getElementById("grade").textContent = grade;
    document.getElementById("passFail").textContent = result;
}
function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";

    document.getElementById("resultName").textContent = "-";
    document.getElementById("totalMarks").textContent = "-";
    document.getElementById("percentage").textContent = "-";
    document.getElementById("grade").textContent = "-";
    document.getElementById("passFail").textContent = "-";
}
