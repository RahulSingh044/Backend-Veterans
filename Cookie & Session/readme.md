# Form Handling

<p> We are able to save the data at the front end or brower, so whenever you make request to the server , that data automatically goes to backend. At the time of Login/Signin, the server authenticate you and also share a string with it, which is saved at the front-end or browser, so whenever you make a request, that string also goes to the server, which help server to know who is making the request and the data saved at the front end is called <b>Cookie</b>, as long as you are connected to the front end on the basis of this cookie, this is known as 
<b>Session</b>. At the time of logout, the cookie is removed from the front-end, so the session is expired</p> 

 While filling a login form, the login details are sent to the server in the form of **Blob**, an unreadable format of data that is often known as **stream**, which is not directly readable.