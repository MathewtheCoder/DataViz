var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//our only route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/post', function(req, res) {
    res.sendFile(__dirname + '/post.html');
});
app.get('/whatif', function(req, res) {
    res.sendFile(__dirname + '/whatif.html');
});
app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/example.html');
});
app.get('/dash', function(req, res) {
    res.sendFile(__dirname + '/dash.html');
});
app.get('/bar', function(req, res) {
    res.sendFile(__dirname + '/barchart.html');
});
app.get('/data.tsv', function(req, res) {
    res.sendFile(__dirname + '/data.tsv');
});
app.get('/public/post.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'post.jpg'));
});
app.get('/public/whatif.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'whatif.jpg'));
});
app.get('/public/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'css', 'style.css'));
});
app.get('/public/css/bootstrap.min.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'css', 'bootstrap.min.css'));
});
app.get('/public/data.csv', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'data.csv'));
});
app.get('/public/test.csv', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'test.csv'));
});
var server = app.listen(process.env.PORT || 5000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
