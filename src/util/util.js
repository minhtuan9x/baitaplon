module.exports.checkObjectID = function (id) {
    if (id.length == 24)
        return mongoose.mongo.ObjectId(id);
    return null;
}