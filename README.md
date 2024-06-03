# Screen Time Controller using Raspberry Pi Zero 2 w
<br>Creating a website which will control your screen time on the website social pages<b>Time Metronome</b> is a web application designed to help users manage their time effectively by tracking their usage of various applications and providing tools to enhance productivity. The website offers the following features:

<b><I>Timer Functionality:</b></I> Users can utilize a versatile timer to track their tasks and take breaks efficiently. The timer is integrated into the website and can be started, stopped, and reset as needed.

<b><I>Social Media Integration:</b></I> Time Metronome allows quick access to popular social media platforms such as WhatsApp, Facebook, Instagram, and YouTube directly from the website. Each session on these platforms is timed to help users manage their social media usage effectively.

<b><I>Focus Mode:</b></I> The website includes a "Focus Mode" feature, which, when activated, disables access to the integrated social media platforms. This feature aims to help users stay focused on their tasks by temporarily restricting access to distracting applications.

<b><I>Parental Control:</b></I> Time Metronome also serves as a tool for parental control, allowing parents to monitor their children's web activities and set time limits for specific applications. Once the set time limit is reached, the website automatically exits the current application, promoting responsible internet usage.

<b><I>Storage:</b></I> Time Metronome is basically a website which provides you to control your addiction to any games or applications(like Instagram, Facebook, etc). Therefore to use them you don't need to explicitly download them on your phone or any other devices. As long as you have an account in those particular applications, that's all you need to use our website!

<br>While fulfilling all these features <b>Time Metronome</b> is developed using HTML,CSS and JS. This website is hosted on Raspberry Pi using Apache web server. To use this server and to host any website follow these steps:
<br>
1)Update Raspberry Pi:
<br>sudo apt-get update
<br>sudo apt-get upgrade

2)Install a web server software(for eg apache):
<br>sudo apt-get install apache2
<br>or
<br>sudo apt install apache2 -y


3)Go to the server's root directory:
<br>cd /var/www/html/
 
4)Create Your HTML/CSS/JS Content:
<br>sudo nano index.html //to create HTML file
<br>sudo nano styles.css //to create CSS file
<br>sudo nano script.js  //to create JS file

5)Save:
<br>Ctrl+X -> Y ->Enter

6)Output:
<br>Go to the browser and type Raspberry Pi's IP address or hostname.

<br>If you have photos which you are using in your HTML/CSS file then those photos must be transferred to the web server you are using to host the particular website. So first the photos must be copied from your personal system memory(make a separate folder which contains the photos) to Raspberry Pi and then to the server root directory. For that follow these steps:
<br>1)Download SFTP (Secure File Transfer Protocol) like WinSCP for windows
<br>2)Install and Run WinSCP
<br>3)Login with Raspberry Pi's username and password
<br>4)Navigate to the directory where the photos are stored in your local memory(left side of WinSCP)
<br>5)Drag and drop the images folder to pi memory(right side of WinSCP)
<br>6)Then save it and click 'OK'
<br>7)In <img> in your file modify src:
<br>src="../images/file_name.png"
<br> Here 'images' is the folder where photos are stored
<br>'file_name' is the file name of that photo 
<br>8)Go to the browser and type Raspberry Pi's IP address or hostname.
