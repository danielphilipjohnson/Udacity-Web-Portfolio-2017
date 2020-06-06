# Full-Stack Udacity Project 1: Movie Trailer

![Movie Trailer](https://github.com/danielphilipjohnson/Udacity-Web-Portfolio-2017/blob/Full-Stack-Developer-Nanondegree/2.Full-Stack%20Developer-%20Nanodegree/P1-Movie-Trailer/Project%20images/top10.PNG)

### Installation

#### Windows 

` cd to ..\env\Scripts  folder

` activate

` cd ..\ProjectMovieTrailer\mymovietrailersite 

` python manage.py runserver
` open browser navigate to  127.0.0.1:8000/

#### Linux

` cd to ../env/Scripts  folder

` source activate

` cd /ProjectMovieTrailer/mymovietrailersite

` python manage.py runserver

` open browser navigate to 127.0.0.1:8000/

### Whats used 
| Languages Usage | Framework | Styling | Js |
| --------------- | --------- | ------- |----|
|  Python 3       |   Django v1.11 |   CSS, Bootstrap 4, Fontawesome     | Bootstrap.js, jquery, popper.js   |
 
### Database Tables
- Movie
- Movies_liked
- Movies_owned
- Latest_Arrivals
- Latest_FavoriteCollection
- Home_Page_Covers

### Routes
- /
- admin
- a-z/<letter>
- genres
- genre/<genre:type>
- highestrating
- hotrightnow
- mostliked
- mostowned
- movie/<movie:id>
- top10
- year/<year:2018>
- years/
