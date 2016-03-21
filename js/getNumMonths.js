/**
 * Created by sujithkatakam on 3/19/16.
 */
function getMonthsCount(id, d1, d2) {
    d2 = d2 || new Date();
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth() + 1;
    //return months <= 0 ? 0 : months;
    //console.log(months);
    months = months <= 0 ? 0 : months;
    var displayString = id === "experience" ? months + " months" : " | (" + months + " months)";
    var div = document.getElementById(id);
    div.innerHTML = div.innerHTML + displayString;
}

function getDateFormat(id, d1, d2) {
    d2 = d2 || "Present";
    var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    var displayString = "";

    if (typeof d2 === "string") {
        displayString = monthNames[d1.getMonth()] + ", " + + d1.getFullYear() + " - " + d2;
    } else {
        displayString = monthNames[d1.getMonth()] + ", " + + d1.getFullYear() + " - " + monthNames[d2.getMonth()] + ", " + d2.getFullYear();
    }

    document.getElementById(id).innerHTML = displayString;
}