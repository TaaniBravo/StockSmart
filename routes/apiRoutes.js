require('dotenv').config();
const path = require("path");
const db = require("../db/index.js");
const axios = require('axios');
const bcrypt = require('bcrypt')


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
          const {username, password} = req.body

          console.log(user);
          try{
            const hashedPass = await bcrypt.hash(password, 10)
            const queryResponse = await db.addAll(
                [
                  "user", 
                  {
                    username:username,
                    password:hashedPass
                  }
                ])

            res.redirect('/login')
          }catch(err){
            res.redirect('/register')
            console.error(err)
          }
      })
    //user page api routes
    
    app.get('/api/login', (req,res) =>{

    });

    app.post('/api/login', passport.authenticate('local',
      {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
      }
    ))

const getStockData = async (stockName) =>{

  const options = {
    method: 'GET',
    url: `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data`,
    params: {symbol: 'AMRN', region: 'US'},
    headers: {
      // /market/get-trending-tickers'
      'x-rapidapi-key': process.env.APi_PASS,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };
      try{
        const {data} = await axios.request(options)
        return(data)
      }catch(err){
          console.error(err);
      }    
}}