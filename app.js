const cheerio = require('cheerio');
const request = require('request');

let links = [];
let pagina = 'https://www.free-css.com/free-css-templates?start='

function doScrap(html) {

    let textos;
    let $ = cheerio.load(html);

    $("figure").each(function (i, elem) {
        $(this).find("a[href]").each(function (i, elem) {
            links.push($(this).attr('href'))
        });
    });
    // console.log(links.length);

    // const fs = require('fs');
    // const writeStream = fs.createWriteStream('file1.txt');
    // const pathName = writeStream.path;
    // let array = links;
    // // write each value of the array on the file breaking line
    // array.forEach(value => writeStream.write(`${value}\n`));
    // // the finish event is emitted when all data has been flushed from the stream
    // writeStream.on('finish', () => {
    //     console.log(`wrote all the array data to file ${pathName}`);
    // });
    // // handle the errors on the write process
    // writeStream.on('error', (err) => {
    //     console.error(`There is an error writing the file ${pathName} => ${err}`)
    // });
    // // close the stream
    // writeStream.end();


}


function comienzo() {
    for (let i = 1000; i <= 2500; i = i + 12) {
        paginascrap = pagina + i;
        console.log(paginascrap);
        request(paginascrap, function (error, response, html) {
            if (!error && response.statusCode == 200) {
                doScrap(html);
            } 
        });

    }

}



comienzo()

