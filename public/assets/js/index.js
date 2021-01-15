const $priceText = $('#price-text')
const $priceRange = $('#price-range')
const $dailyBtn = $('#daily-btn')
const $historicalBtn = $('#historical-btn')
const $trendingBtn = $('#trending-btn')
const $dailyForm = $('#daily-form')
const $historicalForm = $('#historical-form')

const $results = $('#results')
const $historicalResults = $('#historical-results')

let dailyTicker = true;

$('#form-buttons').on('click', '.btn', function(e) {
    //e.preventDefault();
    console.log($(this).attr('id'))
    if ($(this).attr('id') === 'daily-btn') {
        dailyTicker = true;
        console.log(dailyTicker)

        if ($dailyForm.hasClass('hide')) {
            $dailyForm.removeClass('hide')
            $historicalForm.addClass('hide')
            $dailyBtn.addClass('active')
            $historicalBtn.removeClass('active')
            
        }
    };
    if ($(this).attr('id') === 'historical-btn') {
        dailyTicker = false;
        console.log(dailyTicker)
        if ($historicalForm.hasClass('hide')) {
            $historicalForm.removeClass('hide')
            $dailyForm.addClass('hide')
            $historicalBtn.addClass('active')
            $dailyBtn.removeClass('active')
            
        }
    };
    if ($(this).attr('id') === 'trending-btn') {
        console.log('hello')
        // function for results page that appends top trending tickers (market/get-trending-tickers).
    }
})

const updateRangeValue = val => {
    document.getElementById('price-text').value = val
}

const handleResults = async (e) =>{
    let stock;
    e.preventDefault()
    if(dailyTicker){
        stock = {
            ticker: $('#search-ticker').val(),
            volume: $('#volume').is(":checked"),
            newCatalyst: $('#news').is(":checked"),
            lateEarnings: $('#earnings').is(":checked"),
            secFilings: $('#filings').is(":checked"),
            
        }
        console.log("here")
    }else{
         stock = {
            ticker: $('#historical-ticker').val(),
            dateFrom: convertDate($('#date-from').val()),
            dateTo: convertDate($('#date-to').val()),
        }
    }
    
    console.log(stock)
    postStock(stock).then((res)=>{
        console.log(res);
        window.location.href = "/results";
    })
    
    
}
const postStock = (stock)=>{
    return $.ajax({
        url: "/api/results",
        data: stock,
        method: "POST",
      });
}

const getStock = (stock) =>{
    return $.ajax({
        url: "/api/results",
        data: stock,
        method: "GET",
      });
}


//convert date to unix timestamp
const convertDate = (date) =>{
    return new Date(date).getTime() / 1000
}

$results.on("click", handleResults)
$historicalResults.on("click", handleResults)


