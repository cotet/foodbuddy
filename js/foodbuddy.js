$.getJSON('/json/example.json',
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].User_Name + "</td>");
        tr.append("<td>" + data[i].score + "</td>");
        tr.append("<td>" + data[i].team + "</td>");
        $('table').append(tr);
    }
});