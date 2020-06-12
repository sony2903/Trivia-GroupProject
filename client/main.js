
const baseUrl = 'http://localhost:3000'
let todoCurrentId = null

$( document ).ready(function() {
    auth()
})

function auth(){
    if( localStorage.token ){
        $('.login-page').hide()
        $('.home-page').show()

    } else {
        $('.login-page').show()
        $('.home-page').hide()
    }
}

function home(){
    $('.login-page').hide()
    $('.home-page').show()
}

function login(event){
    event.preventDefault()
    let username = $('#username').val()
    let password = $('#password').val()
    $.ajax({
        method: "post",
        url: baseUrl + "/users/login",
        data: {username, password}
    })
        .done((data)=>{
            localStorage.setItem('token', data.token)
            auth()
        })
        .fail(err =>{
            console.log(err.responseText)
        })
        .always(()=>{
            $('#username').val('')
            $('#password').val('')
        })
}

function logout(){
    localStorage.clear()
    // localStorage.removeItem('token')
    auth()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}


function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: 'post',
        url: baseUrl + '/googleSign',
        data: { id_token }
    })
        .done(({data})=>{
            console.log(JSON.stringify(data) + ">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<");
            localStorage.setItem('token', data.access_token)
            auth()
        })
        .fail(err =>{
        console.log(JSON.stringify(err) + "error")
        })

}