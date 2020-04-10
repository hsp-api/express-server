const express = require('express');

const axios = require('axios');

const cheerio = require('cheerio');

function GetXMLStyleSheetController() {
}

GetXMLStyleSheetController.prototype.getXMLStyleSheet = function (request, response) {

    axios.post(`https://ghs-hsp-dotnet-w-service01.azurewebsites.net/common/api/Common/GetXMLStyleSheet`, request.body)
        .then(res => {
            var htmlResponse = res.data.htmlResult;
            htmlResponse = htmlResponse.replace(/\\n\t/g, '');
            var $ = cheerio.load(htmlResponse);
            $('base').attr("href", './styleSheets');
            response.json({ data: $.html(), ok: true });
        })
}

module.exports = GetXMLStyleSheetController;