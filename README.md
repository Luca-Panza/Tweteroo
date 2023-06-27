# <p align = "center"> API Tweteroo </p>

<p align="center">
   <img width=176px; src="https://i.imgur.com/wTOCMWy.png%22/%3E"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Luca_Panza-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/Luca-Panza/projeto12-tweteroo?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

(Driven Bootcamp Project) This a back-end application that allows users to sign up, post tweets, and retrieve the last ten tweets.
***

## :computer:	 Technologies and Concepts

- REST APIs
- JavaScript
- Node.js
- Express.js

***

## :rocket: Rotas

```yml
POST /sign-up
    - Route to register a new user
    - headers: {}
    - body:{
        "username": "Lorem ipsum",
        "avatar": "lorem@gmail.com",
    }
```
    
```yml 
POST /tweets
    - Route to post a tweet
    - headers: {}
    - body:{
    	"username": "Lorem ipsum",
    	"tweet": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
```
    
```yml 
GET /tweets 
    - Route to list the last 10 tweets
    - headers: {}
    - body: {}
```

***

## 🏁 Running the application

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository on your machine:

```
git clone https://github.com/Luca-Panza/projeto12-tweteroo
```

Then, navigate to the project folder and install the dependencies with the following command:

```
npm install
```

Once the process is finished, just start the server.

```
npm run dev
```
