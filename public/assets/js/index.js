const $priceText = $('#price-text')
const $priceRange = $('#price-range')

const $results = $('#results')

// window.onload = () => {
//     $priceText.val() = $priceRange.val()
// }

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

