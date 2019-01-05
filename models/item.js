const   mongoose = require('mongoose'),
        itemSchema = new mongoose.Schema({
            type: {type: String, default: "item"},
            name: String,
            description: String,
            purchaseDate: String,
            serialNumber: String,
            value: String,
            tags: [String]
        });
module.exports = mongoose.model("Item", itemSchema);