---
id: publishing
title: Publishing
sidebar_label: Publishing
---
Publishing is where you define or create the: * Web Server Settings * Authentication Mode * Authentication Method

![alt-text](assets/project-editor/Publishing-section-4D-for-iOS.png)

## Web Server Settings<div class = "tips">
<b>FYI:</b>

* The simulator works in localhost. * If the production url is defined, the HTTP and the HTTPS are both accepted. Else the IP Address is used. * If both http and HTTPS are activated, the HTTP is used. </div> 

* Activate and define your HTTPS AND/OR HTTP port, if you haven't already done so, by clicking on the **Edit** button for the "Web Server Settings".

* Activating the HTTPS port requires certificate installation to work properly. You can also create certificates with 4D, but strictly for test purposes.

## Authentication mode

<b>Authorized User:</b> Check the <b>Requires an email to connect</b> checkbox to display a login form when the application starts

<b>Guest:</b> Leave the *Requires an email to connect* checkbox unchecked. No login form will appear when the application start.

## Authentication Method

### On Mobile App Authentication Database Method

* **Development**: the authentication method allows you to use the application locally. 
* **Deployment**: you must create/edit the On Mobile App Authentication Database Method to authorize specific emails or devices, even when in guest mode.

A template is available when you create the Authentication method: * Grant access (*i.e.*, email to specific domains) * Obtain all necessary information about the session, as well as user information (the email address, app information, device, team ID, etc.)

You can customize this method according to your needs!

### Session management

A session is created and stored in MobileApps folder when a user opens the App for the first time.

Next to current data file

Sessions are then organized and grouped by Application folder. The Team ID and App bundle ID are concatenated to create Application folder names.

Here is an example of a generated session file :

```json
{
"application":{
"id":"com.contactApp.Contact",
"name":"Contact",
"version":"1.0.0"
},
"team":{
"id":"UTT7VDX8W5"
},
"language":{
"id":"en_US",
"code":"en",
"region":"US"
},
"email":"",
"device":{
"description":"iPhone X",
"version":"11.3",
"id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",
"simulator":true
},
"send":"link",
"session":{
"id":"7023d9205074199d1c16fc00d24354e778137675",
"ip":"::ffff:192.168.5.4"
},
"status":"accepted",
"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"
}

```

You can download the MOBILE SESSION MANAGEMENT component to manage easily all sessions.

<div style="text-align: center; margin-top: 20px">
  
<a class="button"
href="../assets/session-management/MOBILE-SESSION-MANAGEMENT.zip">MOBILE SESSION MANAGEMENT component</a>
</div>

## How it looks in the iOS Application

A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (*i.e.*, your application has more than four tables).

![alt-text](assets/project-editor/Setting-screen-Publishing-section-4D-for-iOS.png)

Settings allows you to: * Reload data * Define your server URL * Log out (if connected as an Authorized User).

![alt-text](assets/project-editor/Login-screen-Publishing-section-4D-for-iOS.png)