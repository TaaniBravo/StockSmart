const path = require("path");
const db = require("../db/index.js");
const axios = require('axios');


module.exports = (app) =>{
 
    app.get('/api/results', async (req,res) =>{
      const stockName = req.body.stockName

      const {prices} = await getStockData(stockName.ticker);

      filterResponse = prices.filter(({date}) => stockName.from >= parseInt(date) && stockName.to <= parseInt(date))

      console.log("filter response: ", filterResponse)
      let headers ={
        response:filterResponse
      }
      return res.render("results", headers)
    });

    app.post('/api/results', async(req, res) =>{
      const stockName = req.body.stockName

      console.log(stockName)

      header = stockName;

      res.json(stockName)
    })

    //user page api routes
    
    app.get('/api/userpage', (req,res) =>{

    });

    app.post('/api/userpage', (req, res) =>{
        
    })
}

const getStockData = async (stockName) =>{
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data',
    params: {symbol: stockName, region: 'US'},
    headers: {
      'x-rapidapi-key': '9a75e7e737msh3e63f4ab675bf6ap1c7c04jsne77b973b90a7',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };
      try{
        const {data} = await axios.request(options)
        return(data)
      }catch(err){
          console.error(err);
      }
      
}