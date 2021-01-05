const $priceText = $('#price-text')
const $priceRange = $('#price-range')
const $dailyBtn = $('#daily-btn')
const $historicalBtn = $('#historical-btn')
const $trendingBtn = $('#trending-btn')
const $dailyForm = $('#daily-form')
const $historicalForm = $('#historical-form')

const $results = $('#results')

$('#form-buttons').on('click', '.btn', function(e) {
    e.preventDefault();
    console.log($(this).attr('id'))
    if ($(this).attr('id') === 'daily-btn') {
        if ($dailyForm.hasClass('hide')) {
            $dailyForm.removeClass('hide')
            $historicalForm.addClass('hide')
            $dailyBtn.addClass('active')
            $historicalBtn.removeClass('active')
        }
    };
    if ($(this).attr('id') === 'historical-btn') {
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

const handleResults = () =>{
    const stockName = $('#ticker').val()
        //ticker: $('#ticker').val(),
        // from: $('#date-from').val(),
        // to: $('#date_to').val(),
        // price: $('price-text').val(),
        // volume: $('#volume'),
        // newCatalyst: $('#news').val(),
        // lateEarnings: $('#earnings').val(),
        // secFilings: $('#filings').val(),
    

    postStock(stockName)
    
}
const postStock = (stockName)=>{
    return $.ajax({
        url: "/api/results",
        data: stockName,
        method: "POST",
      });

}

$results.on("click", handleResults)

