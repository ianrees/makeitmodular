/**
 * Created by ReesI on 20/06/2014.
 */
var fs = require ('fs');
var path = require ('path');

var filelist = []
var i = 0;

module.exports = function (folder, ext, callback) {

    fs.readdir(folder, function (err, data)
    {
        if (err)
            return callback(err);
        data.forEach(function(file) {
            if (path.extname(file).substring(1) === ext)
                filelist.push(file);
        })
        return callback(null, filelist);

    });

}

