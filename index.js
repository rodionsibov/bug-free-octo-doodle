const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
const url = 'https://www.theguardian.com/uk'
axios.get(url)
.then(res => {
    const html = res.data
    console.log(html);
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))