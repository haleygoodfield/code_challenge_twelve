// Task 1: Task 1: Business Dashboard – DOM Element Selection and Creation
document.addEventListener("DOMContentLoaded", function () {
    const dashboardId = document.getElementById("dashboard"); // Use document.getElementById to select the dashboard container
    const dashboardSel = document.querySelector("#dashboard"); // Use document.querySelector to select the dashboard container

    const revenueCard = document.createElement("div"); // Create a new <div> element using createElement to represent the metric card
    revenueCard.setAttribute("class", "metric-card"); // Use setAttribute to assign a class ("metric-card")
    revenueCard.setAttribute("id", "revenueCard"); // Use setAttribute to assign an id ("revenueCard") 

    // Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
    revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p>`;

    // Append the new metric card to the dashboard container using appendChild
    dashboardId.appendChild(revenueCard);
});


