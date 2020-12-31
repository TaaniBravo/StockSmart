const path = require("path");
const db = require("../db/index.js");
const axios = require('axios');


module.exports = (app) =>{
    //index api routes
    app.get('/api/index',async (req, res) =>{
        //const stockName = req.body
        const response = await getStockData();

        console.log(response)
        res.json(response)
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

const getStockData = async () =>{
  var options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile',
    params: {symbol: 'IBM', region: 'US'},
    headers: {
      'x-rapidapi-key': '9a75e7e737msh3e63f4ab675bf6ap1c7c04jsne77b973b90a7',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };
      try{
        const response = await axios.request(options)
        return(response.data)
      }catch(err){
          console.error(err);
      }
      
}