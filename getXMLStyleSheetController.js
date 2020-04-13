const express = require('express');
const axios = require('axios');

const cheerio = require('cheerio');

function GetXMLStyleSheetController() {
}

GetXMLStyleSheetController.prototype.getXMLStyleSheet =  (request, response) => {

    axios.post(`https://ghs-hsp-dotnet-w-service01.azurewebsites.net/common/api/Common/GetXMLStyleSheet`, request.body)
        .then(res => {
            let htmlResponse = res.data.htmlResult;
            htmlResponse = JSON.stringify(JSON.parse(htmlResponse));
             const $ = cheerio.load(htmlResponse);
             $('base').attr("href", './static');
            response.json({ data: $.html(), ok: true });
        }).catch(error => {
            response.json({ error: error});
        })
}

module.exports = GetXMLStyleSheetController;