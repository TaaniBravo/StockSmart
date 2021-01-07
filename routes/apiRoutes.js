const path = require("path");
const orm = require("../config/orm.js");
const axios = require('axios');


module.exports = (app) =>{
    //index api routes
    app.post('/api/index', (req, res) =>{
        //const stockName = req.body
        stockName = req.body
        orm.add([
          "saved_stocks",
          {
            ticker: stockName
          }
        ])
        
    });

    //results api routes

    app.get('/api/results', async (req,res) =>{
      const stockName = "AAPL"
      const date1 = 1608215400
      const date2 = 1608042600;
      const {prices} = await getStockData(stockName);

      filterResponse = prices.filter(({date}) => date1 >= parseInt(date) && date2 <= parseInt(date))
      const header = Object.keys(filterResponse[0])

      res.render("results", {header:header})
      //console.log(filterResponse)
      res.json(filterResponse)
    });

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