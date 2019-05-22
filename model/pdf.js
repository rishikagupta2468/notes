var mongoose = require("mongoose");
var pdf= new mongoose.Schema(
    {
        title: String,
        link: String,
        date: {type: Date, default: Date.now},
        author:{
            id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username: String
        }
    });

module.exports = mongoose.model("Pdf", pdf);

