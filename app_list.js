const mongoose=require('mongoose');
const SuperMarketSchema = new mongoose.Schema({
    item_name:{
        type: String,
        required: [true,'Enter Item Name']
    },
    cost:{
        type: Number,
        required: [true,'Enter cost per Kilo']
    },
    stocks:{
        type: Number,
        required: [true,'Number of Stocks']
    }
})

module.exports=mongoose.model('itemlists',SuperMarketSchema);