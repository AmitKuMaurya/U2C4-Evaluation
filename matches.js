// write js code here corresponding to matches.html

var matchesArr = JSON.parse(localStorage.getItem("schedule"));
displayData(matchesArr);

function workOnfilter(){
    var selected = document.querySelector("#filterVenue").value;
    console.log(selected);
    var filtered = matchesArr.filter(function(ele) {
        return ele.matchVenue == selected;
    })
    displayData(filtered);
}

var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];
function displayData(data){

    data.forEach( function (ele){

    document.querySelector("tbody").innerHTML = "";
    var big = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = ele.matchNumber;

    var td2 = document.createElement("td");
    td2.innerText = ele.teamOne;

    var td3 = document.createElement("td");
    td3.innerText = ele.teamTwo;
    var td4 = document.createElement("td");
    td4.innerText = ele.matchDate;

    var td5 = document.createElement("td");
    td5.innerText = ele.matchVenue

    var td6 = document.createElement("td");
    td6.innerText = "Add as Favourites"
    td6.style.color = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function(){
        showInFav(ele);
    });

    big.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(big)
    });
}

function showInFav(ele){
    favouritesArr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(favouritesArr));
    // window.location.reload();
}

