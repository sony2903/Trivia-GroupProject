const baseUrl = 'http://localhost:3000';

$(document).ready(() => {
  $('section').hide();
  auth();
});

function auth() {
  if (localStorage.token) {
    $('section').hide();
    $('.main-page').empty();
    $('.main-page').show();
    getQuestion();
  } else {
    $('section').hide();
    $('.login-page').show();
  }
}

function login(event) {
  event.preventDefault();
  let email = $('input[name=email]').val();
  let password = $('input[name=password').val();
  $.ajax({
    method: 'POST',
    url: `${baseUrl}/login`,
    data: { email, password },
  })
    .done((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('mail', email);
      auth();
    })
    .fail((err) => {
      console.log(err);
    });
}

function registerPage() {
  $('section').hide();
  $('.register-page').show();
}

function register(event) {
  event.preventDefault();
  let email = $('input[name=email]').val();
  let password = $('input[name=password').val();
  $.ajax({
    method: 'POST',
    url: `${baseUrl}/register`,
    data: { email, password },
  })
    .done((data) => {
      auth();
    })
    .fail((err) => {
      console.log(err);
    });
}

function logout() {
  localStorage.clear();
  auth();
}

function getQuestion() {
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/question`,
  })
    .done((data) => {
      const index = Math.floor(Math.random() * 11);
      const question = data.results[index];

      localStorage.setItem('answer', question.correct_answer);

      $('.main-page').append(`
      <nav class="navbar navbar-dark navbar-expand-md" style="margin-bottom: 50px;">
        <div class="container-fluid">
          <a class="navbar-brand">Movie Trivia!</a
          ><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
            <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-md-flex d-lg-flex d-xl-flex justify-content-md-end justify-content-lg-end justify-content-xl-end"
            id="navcol-1"
          >
            <ul class="nav navbar-nav">
              <li class="nav-item nav-link" role="presentation">
                <button class="btn btn-danger" type="button" onclick="logout()">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container h-100">
      <div class="row justify-content-center align-items-start h-100">
        <div class="col-8">
          <h2 class="text-center text-white" style="margin-bottom: 45px;">
            ${question.question}
          </h2>
          <button class="btn btn-success btn-block btn-lg" onclick="answer('True')" type="button" style="margin-bottom: 15px;">TRUE</button>
          <button class="btn btn-danger btn-block btn-lg" onclick="answer('False')" type="button">FALSE</button>
          <h2 class="answer text-center text-white bg-info border rounded" style="margin-top: 80px; padding: 8px;">
            You right !!!&nbsp;🎉&nbsp;
          </h2>
        </div>
      </div>
    </div>
      `);

      $('.answer').hide();
    })
    .fail((err) => {
      console.log(err);
    });
}

function answer(value) {
  if (localStorage.answer === value) {
    $('.answer').text('You right !!! 🎉');
  } else {
    $('.answer').text('Ooooppsss you wrong !!! ❌');
  }
  $('.answer').show();
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/movie`,
  })
    .done((data) => {
      $('.main-page').append(`
  <h3 class="text-center text-white" style="margin-top: 35px; margin-bottom: 25px;">
  Here is some recommendations to increase your <br />"movie knowledge"&nbsp;🍿<br />
</h3>
<div class="movie-card">
  <div
    class="movie-header"
    style="
      background: url('${data.Poster}');
      background-size: cover;
    "
  ></div>
  <!--movie-header-->
  <div class="movie-content">
    <div class="movie-content-header">
      <a href="#">
        <h3 class="movie-title">${data.Title}</h3>
      </a>
    </div>
    <div class="movie-info">
      <div class="info-section">
        <label>Director</label>
        <span>${data.Director}</span>
      </div>
      <div class="info-section">
        <label>Rotten Tomatoes</label>
        <span>${data.Ratings[1].Value ? data.Ratings[1].Value : '-'}</span>
      </div>
      <div class="info-section">
        <label>IMDb</label>
        <span>${data.Ratings[0].Value}</span>
      </div>
    </div>
  </div>
</div>
    `);
      fetchQuotes(data.Title);
    })
    .fail((err) => {
      console.log(err);
    });
}

function fetchQuotes(title) {
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/movie/review/${title}`,
  })
    .done((data) => {
      $('.main-page').append(`
      <p class="text-center text-white" style="margin-top: 24px;">
      <em>
        "${data.results[0] ? data.results[0].summary_short : 'Review not found for this movie'}"
      </em>
    </p>
      `);
    })
    .fail((err) => {
      console.log(err);
    });
}
