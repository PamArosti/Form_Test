const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});

app.use('/css/style.css',express.static(__dirname +'/css/style.css'));
app.use('/css/util.css',express.static(__dirname +'/css/util.css'));
app.use('/efects/jquery/jquery-3.2.1.min.js',express.static(__dirname + '/efects/jquery/jquery-3.2.1.min.js'));
app.use('/efects/animsition/js/animsition.min.js',express.static(__dirname + '/efects/animsition/js/animsition.min.js'));
app.use('/efects/bootstrap/js/popper.js',express.static(__dirname + '/efects/bootstrap/js/popper.js'));
app.use('/efects/bootstrap/js/bootstrap.min.js',express.static(__dirname + '/efects/bootstrap/js/bootstrap.min.js'));
app.use('/efects/select2/select2.min.js',express.static(__dirname + '/efects/select2/select2.min.js'));
app.use('/efects/daterangepicker/moment.min.js',express.static(__dirname + '/efects/daterangepicker/moment.min.js'));
app.use('/efects/daterangepicker/daterangepicker.js',express.static(__dirname + '/efects/daterangepicker/daterangepicker.js'));
app.use('/efects/countdowntime/countdowntime.js',express.static(__dirname + '/efects/countdowntime/countdowntime.js'));
app.use('/efects/bootstrap/js/popper.js.map',express.static(__dirname + '/efects/bootstrap/js/popper.js.map'));
app.use('/efects/daterangepicker/daterangepicker.js',express.static(__dirname +'/efects/daterangepicker/daterangepicker.js'));
app.use('/fonts/oswald/Oswald-Medium.ttf',express.static(__dirname + '/fonts/oswald/Oswald-Medium.ttf'));
app.use('/fonts/oswald/Oswald-Regular.ttf',express.static(__dirname + '/fonts/oswald/Oswald-Regular.ttf'));
app.use('/fonts/Linearicons-Free-v1.0.0/icon-font.min.css',express.static(__dirname + '/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'));
app.use('/efects/bootstrap/css/bootstrap.min.css',express.static(__dirname + '/efects/bootstrap/css/bootstrap.min.css'));
app.use('/fonts/font-awesome-4.7.0/css/font-awesome.min.css',express.static(__dirname + '/fonts/font-awesome-4.7.0/css/font-awesome.min.css'));
app.use('/efects/animate/animate.css',express.static(__dirname + '/efects/animate/animate.css'));
app.use('/efects/css-hamburgers/hamburgers.min.css',express.static(__dirname + '/efects/css-hamburgers/hamburgers.min.css'));
app.use('/efects/animation/css/animsition.min.css',express.static(__dirname + '/efects/animation/css/animsition.min.css'));
app.use('/efects/select2/select2.min.css',express.static(__dirname + '/efects/select2/select2.min.css'));
app.use('/efects/daterangepicker/daterangepicker.css',express.static(__dirname + '/efects/daterangepicker/daterangepicker.css'));
app.use('/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2',express.static(__dirname + '/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff'));
app.use('/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf',express.static(__dirname + '/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf'));
app.use('/js/main.js',express.static(__dirname + '/js/main.js'));

app.use(fileUpload(__dirname + '/images/icons/favicon.ico'));

app.listen(3000, function(){console.log("Servidor Rodando!");});