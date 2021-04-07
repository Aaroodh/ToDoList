const express = require("express");

const bodyParser = require("body-parser");

const http = require("https");

const app = express();

var items=[];
var workItems=[]; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");


app.listen(process.env.PORT || 2001 , function () {

    console.log("server started at 2001..")

});



app.get('/', function (req, res) {

     var options={
        weekday: "long",
        day: "numeric",
        month:"long"
    } ;

    var day=today.toLocaleDateString("en-US",options);
    res.render("list", {listTitle: day,newlistitems:items});

});

app.post('/',function(req,res){

    var text= req.body.input1;
    if (req.body.list === 'Work'){
        workItems.push(text);
        res.redirect('/work')
    }
    else{

    items.push(text);
    res.redirect('/');
    }
});


app.get('/work',function(req,res){
    res.render('list', {listTitle: "Work List",newlistitems:workItems});
});

app.post('/work',function(req,res){
    let item= req.body.input1;
    workItems.push(item);
    res.redirect('/work')

});

app.get('/about',function(req,res){
    res.render('about');
});