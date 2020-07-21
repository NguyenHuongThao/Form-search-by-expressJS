var express = require('express');
var app = express();
var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');


var users = [
	{id: 1, name: 'Hoa'},
	{id: 2, name: 'Nga'}
];

app.get('/', function(request, response) {
	response.render('index', {
		name: 'Thu Bui'
	});
});


app.get('/users', function(req, res) {
	res.render('users/index', {
		users : users
	});
})

app.get('/users/search', function(req, res){
	var q = req.query.q;
	//biến q là biến tìm kiếm trên tool khi đc req
	var matchedUsers = users.filter(function(user){
		//biến matchesUsers là những giá trị được lọc trong tất cả các users 
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
		// trả về giá trị name những user phù hợp với q(k phân biệt viết hoa viết thường)
	});
	res.render( 'users/index',{
		users: matchedUsers
	})
});


app.listen(port, function() {
	console.log('Server listening on port' + port)
});
