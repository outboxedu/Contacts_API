const express = require('express');

// const port = 3000;
var port = process.env.PORT || 8080;


const app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var my_address_book = [];


app.get('/', function (req, res) {
  res.send("<h1 style='color: blue;'>Hello World!</h1>")
})


app.post('/add', function (req, res) {
    var name1 = req.body.name1;
    var name2 = req.body.name2;
    var contact = req.body.contact;
    var email = req.body.email;

	var contact = new Contact(name1, name2, contact, email);

	return res.json('added');
});


app.get('/all', function (req, res) {
  res.send(my_address_book)
})



function Contact(first_name, second_name, phone_number, email)
	{
		this.first_name = first_name;
		this.second_name = second_name;
		this.phone_number = phone_number;
		this.email = email;
		my_address_book.push(this);
	};


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});