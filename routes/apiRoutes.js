const path = require("path");
const db = require("../db/index.js");
const axios = require('axios');

let array;
module.exports = (app) =>{
 
    app.get('/results', async (req,res) =>{
      //const stock = req.body
      console.log(array)
      // const {prices} = await getStockData(stock.ticker);

      //filterResponse = prices.filter(({date}) => stock.from >= parseInt(date) && stock.to <= parseInt(date))

      // console.log("filter response: ", filterResponse)
      // let headers ={
      //   response:filterResponse
      // }
      res.render("results", {headers:array})
  
    });

    app.post('/api/results', async (req, res) =>{
      const {ticker} = req.body
      try{
        const newArray = [];
        const {prices} = await getStockData(ticker);
        for (let index = 0; index < 10; index++) {
          newArray.push({
            date: new Date(prices[index].date * 1000).toLocaleString().split(",").shift(),
            open:"$ "+ Math.round(100*prices[index].open)/100,
            high:"$ "+ Math.round(100*prices[index].high)/100,
            low:"$ "+ Math.round(100*prices[index].low)/100,
            close:"$ "+Math.round(100*prices[index].close)/100,
            volume:Math.round(100*prices[index].volume)/100
          }) 
          
        }
        array = newArray;
        res.json(newArray)
      }catch(err){
        console.error(err)
      }
      
      // console.log(ticker)
      // try{
      //   const queryResponse = await db.addAll(["searched_stocks",{ticker:ticker}])
      //   res.json(prices)

      // }catch(err){
      //   console.error(err)
      // }
      
    })

       //register api routes
    
       app.get('/api/register', (req,res) =>{

      });
  
      app.post('/api/register', async (req, res) =>{
          const user = req.body

          console.log(user);
          try{
            const queryResponse = await db.addAll(["user", user])
            res.json(queryResponse.affectedRows + " product inserted!\n")
          }catch(err){
            console.error(err)
          }
      })
    //user page api routes
    
    app.get('/api/userpage', (req,res) =>{

    });

    app.post('/api/userpage', (req, res) =>{
        
    })
}

const getStockData = async (stockName) =>{
  //c7bf11e390mshf37ad9d4c08c808p135c56jsnc2c4e46c1575
  //9a75e7e737msh3e63f4ab675bf6ap1c7c04jsne77b973b90a7
  const options = {
    method: 'GET',
    url: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data`,
    params: {symbol: 'AMRN', region: 'US'},
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