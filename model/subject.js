var mongoose =require("mongoose");
var subject = new mongoose.Schema({
    name: String,
    pdfs:[{
        title: String,
        link: String,
        date: {type: Date, default: Date.now},
        username: String
        }]
});
module.exports = mongoose.model("Subject",subject);
