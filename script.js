function checkMark() {
    let studentName = document.getElementById("studentnameInput").value
    let studentMark = parseInt(document.getElementById("studentmarkInput").value)

    let output = document.getElementById("output")
    let studentList = document.getElementById("studentList")

        if (studentName === "") {
        output.innerHTML = "Please enter a student name."
        return
    }

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        output.innerHTML = "Please enter a mark between 0 and 100."
        return
    }

    if (studentMark >= 80) {
        document.getElementById("output").innerHTML =
            studentName + ": Pass With Distinction"
    } else if (studentMark >= 65) {
        document.getElementById("output").innerHTML =
            studentName + ": Pass With Merit"
    } else if (studentMark >= 50) {
        document.getElementById("output").innerHTML =
            studentName + ": Pass"
    } else {
        document.getElementById("output").innerHTML =
            studentName + ": Fail"
    }
    
    let listItem = document.createElement("li")
    listItem.textContent = studentName + " - " + studentMark + "%"

    studentList.appendChild(listItem)

    document.getElementById("studentnameInput").value = ""
    document.getElementById("studentmarkInput").value = ""
}