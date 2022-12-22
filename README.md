# TechAlchemy_Assignment

Task 1
--------------------------------------------------------------------------------------------------------------

To sort this Array I'm using quick sort since the time complexity is N(logN)


Pseudocode for quick sort

Here we will be using recursion

Quicksort(A,p,r) {
    if (p < r) {
       q <- Pivot_Partition(A,p,r)
       Quicksort(A,p,q)
       Quicksort(A,q+1,r)
    }
}



Pivot_Partition(A,p,r)
    x <- A[p]
    i <- p-1
    j <- r+1
    while (True) {
        repeat
            j <- j-1
        until (A[j] <= x)
        repeat
            i <- i+1
        until (A[i] >= x)
        if (i A[j]
        else 
            return(j)
    }
}


Task 2
----------------------------------------------------------------------------------------------------------------

Do run command (npm install) to install node_modules

Do install (npm dotenv)

DOT ENV 
----------------------------------------------------------------------------------------------------------------
DATA_BASE='mysql'
DB_NAME='tech'
DB_USERNAME='root'
DB_PASSWORD='password'
DB_HOST='localhost'

TOKEN_SECRET='d4b0f29b1877137109172a1ed62067fa9351a507f7e8e6ffbdde9252df37870137891da68fc8a215f95a91cda7bcd0d342b190487d51457073bb514ede01861b'

API_BASE_URL="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey"
API_KEY_VALUE="41fbb8140b8a41cf8fd941f11a548aee"


WEATHER_API_BASE_URL='https:api.openweathermap.org/data/2.5/forecast?q'
WEATHER_API_KEY_VALUE='bdc11dc6a277ad4d6c9c2310278a05a5'


Mark-Down Portfolio
----------------------------------------------------------------------------------------------------------------

npm init
npm install --save nodemon,
npm install --save express,
npm install --save cors,
npm install --save body-parser,
npm install --save bcrypt,
npm install --save jsonwebtoken,
npm install --save mysql2,
npm install --save sequelize,
npm install --save node-fetch@2,
npm install --save joi,
npm install --save dotenv,
