const path = require("path");
const db = require("../db/index.js");

module.exports = (app) =>{
    //index api routes
    app.get('/api/index', (req, res) =>{
        const stockName = req.body
        const response = getStockData(stockName);
        res.json(stockName)
    });

    //
    app.post('/api/index', (req, res) =>{
        
    });

    //results api routes

    app.get('/api/results', (req,res) =>{

    });

    app.post('/api/results', (req, res) =>{
        
    })

    //user page api routes
    
    app.get('/api/userpage', (req,res) =>{

    });

    app.post('/api/userpage', (req, res) =>{
        
    })
}

const getStockData = async (stockName) =>{
    const apiKey = "74aecf90c32b9cdfeb1ec6b894f3a4f1";
    stockName = "AAPL";
    const queryURL = `https://api.marketstack.com/v1/eod? access_key = ${apiKey} & symbols = ${stockName}`;
    
    const response = await $.ajax({
        url: queryURL,
        method: "GET"
    })
    console.log(response)
    return response;
}