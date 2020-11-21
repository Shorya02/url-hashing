The solution is deployed on Heroku. Use the url: https://url-hashing.herokuapp.com/

UI with a simple form input that would work with the API to hash and store Urls.


API Endpoint: https://url-hashing.herokuapp.com/tiny


Steps to deploy the repo locally:(Run these commands in a terminal of your choice)

1. git clone https://github.com/Shorya02/url-hashing.git
2. cd url-hashing
3. npm install
4. npm start

Use Postman for Calling the Hashing API:

1. API to Hash the URL:

E.g.: Method of URL Request : POST
      URL: localhost:8000/tiny
      Body: Select Raw -> JSON(application/json) from the dropdown
      {
	      "text": "https://www.amazon.in/DIGIPRO-LED-300-Professional-Without-battery/dp/B075MK4NP1/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=yktechnical-21&linkId=7de448d51f88c8fa89c90bac2db47ca7"
        }
      
2. API to retrieve the long Url:

E.g.: From a Browser, use the URL: received from the first API's response.


