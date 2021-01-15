$('#create-account-btn').on('click', e => {
    e.preventDefault()
    $('#thank-you-modal').modal('show');
    
    const user = {
        username: $('#username').val(),
        password: $('#user-password').val()
    }
    registerPost(user);
})

$('#modal-close-btn').on('click', e => {
    e.preventDefault()
    $('#thank-you-modal').modal('hide')
})

const registerPost = (user)=>{
    return $.ajax({
        url: "/api/register",
        data: user,
        method: "POST",
      });
}

