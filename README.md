<h1>Scraper News</h1>
<h3>Julian Villalba</h3>
<h5>Click <a href="https://jrvillalba1993.github.io/Portfolio/"><b>HERE</b></a> for my portfolio!</h5>
You can view the deployed version <a href="https://scrapernews187.herokuapp.com/">HERE</a>
<br />
<br />
In this assignment I created a web scraper that parsed and sorts data from a sports website and once displayed, allows users to make comments on individual articles.

To Run:
<li>
<ul>1.) Download</ul>
<ul>2.) Clone Repo</ul>
<ul>3.) "npm init" inside terminal</ul>
<ul>4.) "npm install" inside terminal</ul>
<ul>5.) Verify you have mongo running</ul>
<ul>6.) Run "node server.js" in terminal</ul>
  </li>

If done properly it will return:
<i>$ node server</i>
<b>Listening. Visit localhost:3000</b>
<b>Connected to Mongoose!</b>

In which case type "localhost:3000" within your browser and you should be able to view everything.


I used the following modules:
Body-parser
Mongoose
Morgan
Express
Cheerio

<h2> Example </h2>
<img height="150px" width="300px" src="https://i.imgur.com/2SuCQrY.png" alt="Example" />

<hr />

### Before You Begin

1. Create a GitHub repo for this assignment and clone it to your computer. Any name will do -- just make sure it's related to this project in some fashion.

2. Run `npm init`. When that's finished, install and save these npm packages:

   1. express

   2. express-handlebars

   3. mongoose

   4. cheerio

   5. axios

3. **NOTE**: If you want to earn complete credit for your work, you must use all five of these packages in your assignment.

4. In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:

5. Create a Heroku app in your project directory.

6. Run this command in your Terminal/Bash window:

* `heroku addons:create mongolab`

* This command will add the free mLab provision to your project.

7. When you go to connect your mongo database to mongoose, do so the following way:

```js
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
```

* This code should connect mongoose to your remote mongolab database if deployed, but otherwise will connect to the local mongoHeadlines database on your computer.

8. [Watch this demo of a possible submission](https://youtu.be/4ltZr3VPmno). See the deployed demo application [here](http://nyt-mongo-scraper.herokuapp.com/).

9. Your site doesn't need to match the demo's style, but feel free to attempt something similar if you'd like. Otherwise, just be creative!
## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

* Beyond these requirements, be creative and have fun with this!
