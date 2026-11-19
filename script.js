const rows = document.querySelectorAll("tbody tr");

rows.forEach(function(row) {
    const inputs = row.querySelectorAll(".score");
    const totalCell = row.querySelector(".total");
    const gradeCell = row.querySelector(".grade");

    inputs.forEach(function(input) {
        input.addEventListener("input", function() {
            let total = 0;

            inputs.forEach(function(score) {
                total += Number(score.value);
            });

            totalCell.textContent = total;

            if (total >= 70) {
                gradeCell.textContent = "A";
            } else if (total >= 60) {
                gradeCell.textContent = "B";
            } else if (total >= 50) {
                gradeCell.textContent = "C";
            } else if (total >= 45) {
                gradeCell.textContent = "D";
            } else if (total >= 40) {
                gradeCell.textContent = "E";
            } else {
                gradeCell.textContent = "F";
            }
        });
    });
});