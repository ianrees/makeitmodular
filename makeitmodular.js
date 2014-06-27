/**
 * Created by ReesI on 20/06/2014.
 */
var mymodule = require('./mymodule.js');

var folder = process.argv[2];
var ext = process.argv[3];

mymodule(folder,ext,function (err, data)
    {
    data.forEach(function(file){
        console.log (file);
    })
});