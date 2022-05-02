// write js code here corresponding to index.html
// You should add submit event on the form

// const { json } = require("stream/consumers");



document.querySelector("#masaiForm").addEventListener("submit",fillUp);

var scheduleArr = JSON.parse(localStorage.getItem("schedule")) || [];

function fillUp(){
    event.preventDefault();

    var obj = {
        matchNumber : masaiForm.matchNum.value,
        teamOne : masaiForm.teamA.value,
        teamTwo : masaiForm.teamB.value,
        matchDate : masaiForm.date.value,
        matchVenue : masaiForm.venue.value,

    }
  
    scheduleArr.push(obj);
    localStorage.setItem("schedule",JSON.stringify(scheduleArr))
    window.location.href = "matches.html";
}
