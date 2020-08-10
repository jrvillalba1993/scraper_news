<h1>Scraper News</h1>
<h3>Julian Villalba</h3>
<h3>Click <a href="https://jrvillalba1993.github.io/Portfolio/"><b>HERE</b></a> for my portfolio!
In this assignment I created a web scraper that parsed and sorts data from a sports website and once displayed, allows users to make comments on individual articles.

You can view the deployed version <a href="https://scrapernews187.herokuapp.com/">HERE</a>

$ node server
Listening. Visit localhost:3000
Connected to Mongoose!

I used the following modules:
Body-parser
Mongoose
Morgan
Express
Cheerio

<h2> Example </h2>
<img height="150px" width="150px" src="https://i.imgur.com/2SuCQrY.png" alt="Example" />

<hr />


# In the late 90s and early 2000s, developers began to explore database options that allowed their web applications to handle unstructured data to meet the growing and ever-changing demands of users and address the limitations of the relational model. While these alternative databases existed for decades prior, they didn’t receive the label NoSQL until this time period.

The structure of a NoSQL database is something other than a table. There are several different types of NoSQL databases, such as key-value and graph. In this unit we will learn MongoDB, a document-oriented NoSQL database. MongoDB documents correspond to a row, or record, in SQL, but unlike rows, documents are analogous to JSON objects. You can see why MongoDB is a popular choice for Node.js developers!

Rather than object-relational mapping, we will implement object-document mapping, or ODM, with Mongoose.js.

Key Topics
NoSQL
MongoDB
Object-document mapping
Mongoose.js
CRUD
Comprehension Check
You will be employer-ready if you can answer the following questions:

What is the difference between SQL and NoSQL?
What is object-document mapping?
What is the equivalent of Sequelize associations in Mongoose.js?
Learning Objectives
You will be employer-competitive if you are able to:

Explain the difference between SQL and NoSQL
Configure Heroku for deployment of a Node.js application using MongoDB
Explain and execute CRUD methods with MongoDB, using both the and Mongoose.js
Use both a GUI and the Mongo command prompt to interface with a database
Integrate Mongoose in a full-stack web application
Create query builders to populate documents using refs
Homework: All The News That's Fit To Scrape
In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.
