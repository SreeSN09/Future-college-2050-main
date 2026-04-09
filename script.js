function explore() {
    alert("🚀 Entering Virtual Campus...");
}

function showStatus() {
    const status = document.getElementById("status");

    let attendance = Math.floor(Math.random() * 100);

    if (attendance > 75) {
        status.innerText = "✅ Attendance: " + attendance + "% (Good)";
    } else {
        status.innerText = "⚠ Attendance: " + attendance + "% (Low)";
    }
}