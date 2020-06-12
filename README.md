# Trivia-GroupProject

This Application will recommendation random film when you answer the question

------------



Member :
> 
- Andreas Lowis
- Eric Jasper Chang
- Sony Martha

------------

3rd Party API :
> 
- OpenTriviaDB
- TheMovieDB
- OMDB
- NYT Movie Review

------------



API Documentation

**POST : /register**
> **Req Body :**
{
email : 
password :
}

Response :

> **201 Created**
{
    "id": 1,
    "email": "1@gmail.com",
    "password": "$2b$10$0xuyU7.pGxOYbJmNwrHJsuWeSqLSSnvgalS3gK3Wq2fn/shebp9LC",
    "updatedAt": "2020-06-12T01:38:32.984Z",
    "createdAt": "2020-06-12T01:38:32.984Z"
}}

> **400 Bad Request**
{
    "message": "Username/Password isnt Complete"
}

------------
**POST : /login**
> **Req Body**
{
email :
password :
}

 
Response
> **200 OK**
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiIxQGdtYWlsLmNvbSIsImlhdCI6MTU5MTkyNzI1MX0.IkZ-tkFct4YmimtqeFFGnHFNoo7TIy7gYm1GhyoaWyo"
}


> **404 Not Found**
{
    "message": "Wrong Username/Password"
}

------------

**GET : /question**

Response
> **200 OK**
{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The movie &quot;The Nightmare before Christmas&quot; was all done with physical objects.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The film &quot;2001: A Space Odyssey&quot; was released on December 31st, 2000.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The 2010 film &quot;The Social Network&quot; is a biographical drama film about MySpace founder Tom Anderson.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Shaquille O&#039;Neal appeared in the 1997 film &quot;Space Jam&quot;.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In Alfred Hitchcock&#039;s film &#039;Psycho&#039; it is said he used chocolate syrup to simulate the blood in the famous shower scene from ",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In the original Star Wars trilogy, David Prowse was the actor who physically portrayed Darth Vader.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In the movie The Revenant, DiCaprio&#039;s character hunts down the killer of his son.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Brandon Routh plays the titular character in the movie &quot;John Wick&quot;.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "&quot;Minions&quot; was released on the June 10th, 2015.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "easy",
            "question": "&quot;Foodfight!&quot; earned less than $80,000 at box office.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        }
    ]
}

------------

**GET : /movie**

Response
> **200 OK**
{
    "Title": "Angels & Demons",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "15 May 2009",
    "Runtime": "138 min",
    "Genre": "Action, Mystery, Thriller",
    "Director": "Ron Howard",
    "Writer": "David Koepp (screenplay), Akiva Goldsman (screenplay), Dan Brown (novel)",
    "Actors": "Tom Hanks, Ewan McGregor, Ayelet Zurer, Stellan Skarsgård",
    "Plot": "Harvard symbologist Robert Langdon works with a nuclear physicist to solve a murder and prevent a terrorist act against the Vatican during one of the significant events within the church.",
    "Language": "English, Italian, Latin, French, Swiss German, German, Chinese, Spanish, Polish",
    "Country": "USA, Italy",
    "Awards": "1 win & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "36%"
        },
        {
            "Source": "Metacritic",
            "Value": "48/100"
        }
    ],
    "Metascore": "48",
    "imdbRating": "6.7",
    "imdbVotes": "265,464",
    "imdbID": "tt0808151",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
{
    "Title": "Angels & Demons",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "15 May 2009",
    "Runtime": "138 min",
    "Genre": "Action, Mystery, Thriller",
    "Director": "Ron Howard",
    "Writer": "David Koepp (screenplay), Akiva Goldsman (screenplay), Dan Brown (novel)",
    "Actors": "Tom Hanks, Ewan McGregor, Ayelet Zurer, Stellan Skarsgård",
    "Plot": "Harvard symbologist Robert Langdon works with a nuclear physicist to solve a murder and prevent a terrorist act against the Vatican during one of the significant events within the church.",
    "Language": "English, Italian, Latin, French, Swiss German, German, Chinese, Spanish, Polish",
    "Country": "USA, Italy",
    "Awards": "1 win & 5 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "36%"
        },
        {
            "Source": "Metacritic",
            "Value": "48/100"
        }
    ],
    "Metascore": "48",
    "imdbRating": "6.7",
    "imdbVotes": "265,464",
    "imdbID": "tt0808151",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}}

------------

**GET : /movie/review/:title**

**Req params**
>{
title:
}


**Response**
>**200 OK**
{
    "status": "OK",
    "copyright": "Copyright (c) 2020 The New York Times Company. All Rights Reserved.",
    "has_more": false,
    "num_results": 2,
    "results": [
        {
            "display_title": "The Avengers",
            "mpaa_rating": "PG-13",
            "critics_pick": 0,
            "byline": "By A.&#160;O. SCOTT",
            "headline": "Superheroes, Super Battles, Super Egos",
            "summary_short": "Joss Whedon’s long-awaited superhero opus “The Avengers” arrives with a big cast, frequent battles and abundant banter among its characters.",
            "publication_date": "2012-05-03",
            "opening_date": "2012-05-04",
            "date_updated": "2017-11-02 04:18:15",
            "link": {
                "type": "article",
                "url": "http://www.nytimes.com/2012/05/04/movies/robert-downey-jr-in-the-avengers-directed-by-joss-whedon.html",
                "suggested_link_text": "Read the New York Times Review of The Avengers"
            },
            "multimedia": null
        },
        {
            "display_title": "The Avengers",
            "mpaa_rating": "PG-13",
            "critics_pick": 0,
            "byline": "JANET MASLIN",
            "headline": "Avengers, the (Movie)",
            "summary_short": "British agents vs. villain with weather machine. Big-time flop.",
            "publication_date": "1998-08-15",
            "opening_date": "1998-08-14",
            "date_updated": "2017-11-02 04:17:55",
            "link": {
                "type": "article",
                "url": "http://www.nytimes.com/1998/08/15/movies/film-review-shh-they-re-trying-not-to-be-noticed.html",
                "suggested_link_text": "Read the New York Times Review of The Avengers"
            },
            "multimedia": null
        }
    ]
}


