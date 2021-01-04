$('#create-account-btn').on('click', e => {
    e.preventDefault()
    $('#thank-you-modal').modal('show')
})

$('#modal-close-btn').on('click', e => {
    e.preventDefault()
    $('#thank-you-modal').modal('hide')
})


