// write js code here corresponding to favourites.html

var favouritesArr = JSON.parse(localStorage.getItem("favourites"))
displayData(favouritesArr);

function displayData(data){

    data.forEach( function (ele,i){
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
    td6.innerText = "Delete"
    td6.style.color = "red";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function(){
        delItFav(ele,i);
    });

    big.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(big)
    });
}

function delItFav(ele,i){
    favouritesArr.splice(i,1);
    localStorage.setItem("favourites",JSON.stringify(favouritesArr));
    window.location.reload();

}