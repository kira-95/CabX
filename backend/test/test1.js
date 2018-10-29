var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var jsonfile = require('jsonfile');



var xhr = new XMLHttpRequest();
var url = "http://localhost:3000/findRides";

xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.responseText);
    }
}
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({

    "to": "Columbia University, New York, NY",
    "from": "MoMA, West 53rd Street, New York, NY"

}));
xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  var json = JSON.stringify(this.responseText);

  /* write retrieved ride share information to json file */
  jsonfile.writeFile('test1.json', data, function (err) {
  if (err) console.error(err)
})


  console.log(data);
}




