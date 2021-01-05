const $priceText = $('#price-text')
const $priceRange = $('#price-range')

const $results = $('#results')

// window.onload = () => {
//     $priceText.val() = $priceRange.val()
// }

const updateRangeValue = val => {
    document.getElementById('price-text').value = val
}

const handleResults = (e) =>{
    //e.preventDefault()
    const stockName = {
        ticker: $('#ticker').val(),
        from: convertDate($('#date-from').val()),
        to: convertDate($('#date-to').val()),
        price: $('#price-text').val(),
        volume: $('#volume').is(":checked"),
        newCatalyst: $('#news').is(":checked"),
        lateEarnings: $('#earnings').is(":checked"),
        secFilings: $('#filings').is(":checked")}
    
    console.log(stockName)
    postStock(stockName)
}
const postStock = (stockName)=>{
    return $.ajax({
        url: "/api/results",
        data: stockName,
        method: "POST",
      });
}

const getStock = (stockName) =>{
    return $.ajax({
        url: "/api/results",
        data: stockName,
        method: "GET",
      });
}


//convert date to unix timestamp
const convertDate = (date) =>{
    return new Date(date).getTime() / 1000
}

$results.on("click", handleResults)


