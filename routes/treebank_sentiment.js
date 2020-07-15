var path = require('path')
var Chart = require('chart');

module.exports = function (app) {
    app.get('/resources/dataset/treebank_sentiment', async function (req, res) {
        const reader = require('g-sheets-api')
        const id = '1MR0eKXt-k2-prN1tMbX-fg_VnBLk7tO2QfrZyQIjirw'
        
        const readerOptions = {
        sheetId: id,
        returnAllResults: true,
        filter: {
            "key to filter on": "value to match",
            },
        }

        var googleSheet

        await reader(readerOptions, (results) => {
            googleSheet = results.map((row) => {
                return (
                    `<div class="show-flex">
                        ${Object.keys(row).map((rowKey) => {
                            var isNumberCol
                            (['pure_sentence', 'new_sentence', 'old_sentence'].includes(rowKey)) 
                            ? isNumberCol = false : isNumberCol = true
                            
                            return `<div class="${`text-tertiary table-data ${isNumberCol ? 'width-100' : 'width-300'}`}">${row[rowKey]}</div>`
                        }).join("")}
                    </div>`
                )
            }).join("")

            return res.render("treebank_sentiment_2.ejs", {googleSheet: googleSheet})
        });
    })
}