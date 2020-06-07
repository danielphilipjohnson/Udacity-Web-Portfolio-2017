# Full-Stack Udacity Project 1: Movie Trailer

![Movie Trailer](https://res.cloudinary.com/dpj88/image/upload/v1591545727/full%20stack/p1/top10_mkqfp5.png)

### Installation

#### Windows 

    cd  ..\env\Scripts 

    activate

    cd ..\mymovietrailersite 

    python manage.py runserver
    navigate to  127.0.0.1:8000/

#### Linux

    cd to ../env/Scripts  folder

    source activate

    cd /mymovietrailersite

    python manage.py runserver

    navigate to 127.0.0.1:8000/

### Whats used 
| Languages Usage | Framework | Styling | Js |
| --------------- | --------- | ------- |----|
|  Python 3       |   Django v1.11 |   CSS, Bootstrap 4, Fontawesome     | Bootstrap.js, jquery, popper.js   |
 
### Database Tables
- Movie
    - Title 
    - Url
    - Year
    - Main_actor
    - Likes_count
    - Owned_count
    - Cover
    - Storyline
    - Datuploaded
    - Genres

- Movies_liked
    - User
    - Liked



- Movies_owned
    - Movie
    - Chartposition
- Latest_Arrivals
    - Movie
    - Chartposition
- Home_Page_Covers
    - Movie
    - Chartposition

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

### Layout

#### Most Owned
![Movie Trailer](https://res.cloudinary.com/dpj88/image/upload/v1591545692/full%20stack/p1/most_owned_qekygi.png)

#### Index
![Movie Trailer](https://res.cloudinary.com/dpj88/image/upload/v1591545621/full%20stack/p1/index_kvd3al.png)

#### indivdual_movie
![Movie Trailer](https://res.cloudinary.com/dpj88/image/upload/v1591545621/full%20stack/p1/indivdual_movie_nj02vn.png)

#### Footer
![Movie Trailer](https://res.cloudinary.com/dpj88/image/upload/v1591545615/full%20stack/p1/footer_psvo6q.png)

#### Latest Card
![Movie Trailer](https://res.cloudinary.com/dpj88/image/upload/v1591545578/full%20stack/p1/lastest_card_impv0x.png)
