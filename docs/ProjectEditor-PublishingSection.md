---
id: publishing
title: Publishing
sidebar_label: Publishing
---

Publishing is where you define or create the:
* Web Server Settings
* Authentication Mode 
* Authentication Method

![alt-text](assets/project-editor/Publishing-section-4D-for-iOS.png)


## WEB SERVER SETTINGS

 <div class = "tips">
<b>FYI:</b>

* The simulator works in localhost.
* If the production url is defined, the http and the https are both accepted. Else the IP Address is used.
</div>


* Activate and define your HTTPS AND/OR HTTP port, if you haven't already done so, by clicking on the <b>Edit</b> button for the "Web Server Settings".

* Activating the HTTPS port requires certificate installation to work properly. You can also create certificates with 4D, but strictly for test purposes.

<div class = "tips">
<b>TIP:</b>

If either the HTTPS port is not properly defined or certificates are missing, the Project Editor will disply an indicator with a tip describing the nature of the issue.
</div>


## AUTHENTICATION MODE

<b>Authorized User:</b> Check the <b>Requires an email to connect</b> checkbox to display a login form when the application starts

<b>Guest:</b> Leave the <i>Requires an email to connect</i> checkbox unchecked. No login form will appear when the application start.


## AUTHENTICATION METHOD

* <b>Development</b>: the authentication method allows you to use the application locally. 
* <b>Deployment</b>: you must create/edit your authentication method to authorize specific emails or devices, even when in guest mode.

A template is already available in the existing On Mobile method to:
* Grant access (<i>i.e.</i>, email to specific domains) 
* Obtain all necessary information about the session, as well as user information (the email address, app information, device, team ID, etc.)

You can customize this method according to your needs! 


## HOW IT LOOKS IN THE IOS APPLICATION

A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (<i>i.e.</i>, your application has more than four tables).

![alt-text](assets/project-editor/Setting-screen-Publishing-section-4D-for-iOS.png)

Settings allows you to:
* Reload data
* Define your server URL
* Log out (if connected as an Authorized User).

![alt-text](assets/project-editor/Login-screen-Publishing-section-4D-for-iOS.png)


