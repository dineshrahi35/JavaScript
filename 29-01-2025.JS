let empDetails = {
    empID: 630,
    empName: "Janardhan",
    empCompany: "Amazon",
    empSal: 1234567890,
    empAddress: {
        empCity: "Hyderabad",
        empArea: "Uppal"
    }
};

console.log(empDetails);

// Add employee details to the table
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("empID").textContent = empDetails.empID;
    document.getElementById("empName").textContent = empDetails.empName;
    document.getElementById("empCompany").textContent = empDetails.empCompany;
    document.getElementById("empSal").textContent = empDetails.empSal;
    document.getElementById("empCity").textContent = empDetails.empAddress.empCity;
    document.getElementById("empArea").textContent = empDetails.empAddress.empArea;
});
