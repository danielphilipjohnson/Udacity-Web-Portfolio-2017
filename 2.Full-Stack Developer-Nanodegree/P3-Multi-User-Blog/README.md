# Full-Stack Udacity Project 3: Multi-User-Blog
I wanted to focus more on Database functionality like SQL alchemy and password libraries

![Portfolio](https://github.com/danielphilipjohnson/Udacity-Web-Portfolio-2017/blob/Full-Stack-Developer-Nanondegree/2.Full-Stack%20Developer-%20Nanodegree/P3-Multi-User-Blog/Project%20Images/blogindex.PNG)


### Installation
1. run blog_setup.py to create the database
    $ python blog_setup.py

2. run populateblogs.py to populate the database
    $ python populateblogs.py

3. run python3 simpleblog.py and navigate to http://127.0.0.1:5000/ in your browser


#### User Accounts: 
They are very basic. When you add your own the password requires more security

username: a
password: a

username: b
password: b

username: c
password: c

username: d
password: d


### Whats used 
| Languages Usage | Framework | Styling | Js |
| --------------- | --------- | ------- |----|
| Python 3  | Flask, SQL Alchemy   | CSS, w3school.css    |  ---   |


### Database models
- Users
    - about
    - email
    - facebook_link
    - first_name
    - gender
    - last_name
    - linkedin_link
    - password
    - pininterest_link
    - profile_pic
    - salt
    - snapchat_link
    - twitter_link
    - username

- Tag
    - id = Column(Integer, primary_key=True)
    - tagname = Column(String(100), nullable=False, unique=True)

- Blog
    - id
    - user_id
    - tag_id
    - body
    - caption
    - date_uploaded
    - description
    - likes 
    - name 
    - image_url
    - is_public
    - title

### Routes
- /
- login
- register
- logout
- recent
- popular
- tags
- /blogs/tags/<tag>
- /public/blogs/<domain:username>
- /public/blogs/<domain:username>/<int:blog_id>
- /public/createblog
- /public/blogs/<domain:username>/<int:blog_id>/update
- /public/blogs/<domain:username>/<int:blog_id>/delete