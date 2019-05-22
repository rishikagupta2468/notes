var express= require("express"),
    mongoose= require("mongoose"),
    User= require("./model/user"),
    Pdf= require("./model/pdf"),
    Subject= require("./model/subject");
var app= express();
mongoose.connect("mongodb://localhost:27017/notes",{useNewUrlParser: true});
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render("home");
});
app.get("/cse",function(req,res){
    res.render("buttoncse");
});
app.get("/it",function(req,res){
    res.render("buttonit");
});
app.get("/ece",function(req,res){
    res.render("buttonece");
});
app.get("/mech",function(req,res){
    res.render("buttonmech");
});
app.get("/:course/:name",function(req,res){
    Subject.findOne({name:req.params.name},function(err,found){
        if(err){
            console.log(err);
        }else{
            //console.log(found);
            res.render("show",{subject:found});
        }
    });
});
/*var newsubject= new Subject({
    name:"computer_programming"
})
Subject.create(newsubject);
Subject.findOne({name:"computer_programming"},function(err,find){
     if(err){
         console.log("error");
     }else{
         find.pdfs.push({
             title:"4th book",
             link:"https://drive.google.com/file/d/12jLj83nxJQfsVMbe4s_6a-xky7tTd1js/view?usp=drivesdk",
             username:"mansi"
         });
         find.save(function(err,newpost){
             if(err){
                 console.log(err);
             }else{
                 console.log(newpost);
             }
         });
     }
 });
*/
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("process is running");
});