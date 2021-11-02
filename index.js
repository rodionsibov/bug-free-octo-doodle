const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.theguardian.com/uk'
const articles = []

axios.get(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)

        $('.fc-item__title', html).each(function () {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
    }).catch(err => console.log(err))

app.get('/', (req, res) => {
    res.json(articles)
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))