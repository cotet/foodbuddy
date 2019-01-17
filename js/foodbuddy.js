//Append recipes example

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

// Websocket JS

var foodbuddySocket = new WebSocket("ws://192.168.1.13:8000");

foodbuddySocket.onmessage = function (event) {
  console.log(event.data);
}

foodbuddySocket.onmessage = function (event) {
    var data = JSON.parse(event.data);
    var weight = parseInt(data.weight);
    weight = (data.weight/72);
    var date = new Date(data.timestamp);
    date = date.toDateString();

    if (weight > 0) { 
        var tr = $('<tr/>').attr('id', 'item-' + data.item);
        tr.append("<th>" + data.item + "</th>");
        tr.append("<td>" + weight.toFixed(1) + " lb" + "</td>");
        tr.append("<td>" + date + "</td>");
        tr.append("<td>" + "5 Days" + "</td>")
        $(".ingredients_container").append(tr);
    } else {
      $('#item-' + data.item).remove();
    };
}

