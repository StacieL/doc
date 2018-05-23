---
id: MyMedicalApp
title: Create your first app from scratch
sidebar_label: My Medical App
---


<div class = "objectives">
<b>OBJECTIVES</b>

* Create your very first app with 4D for iOS
</div>

<div class = "prerequisites">
<b>PREREQUISITES</b>

* 4D mobile service must be activated to expose your data * A well configured HTTP Port and HTTPS Port * If your are looking for more comfort, the Launch Web Server at Startup option can also be activated * Last Xcode version installed in your Mac </div> 

This tutorial will make you dive right into 4D for iOS development. It will allow you to create your very first application very quickly.

Imagine that you are a commercial business manager, and you want to consult your contact details on the go.

To fill that need, we are going to create an iPhone application called Contact. You will be able to search for contact names from a listview and then visualize the detail of each contact clicking into the detailview.

## STEP 1. GETTING STARTED

Start by downloading the starter project, which contains the database file and the project icon, but no mobile project yet!

Starter project.zip

## STEP 2. CREATING THE PROJECT

Let start with a very simple structure with just one Contact table. From 4D, go to New > Mobile project.

Give a name to your project and click Create.

![alt-text](assets/Welcome-Screen-4D-for-iOS.png)

## STEP 3. OPENING PROJECT EDITOR

Welcome to 4D for iOS! The welcome screen shows you what you will be able to do with this magnificent tool 

![alt-text](assets/Welcome-Screen-4D-for-iOS.png)

Click Continue.

## STEP 4. CONFIGURE YOUR APPLICATION’S MAIN INFORMATIONS

* Fill your Organisation name and the Identifier of your app for example “My Company” and com.MyCompany
* Then choose your app Name. Let’s call it Contact.
* By default, the Bundle ID is automatically generated as a composition of your organization identifier and product name
* Leave the Version to 1.0 and define the Copyright of your app. It is highly recommended to keep the formats provided by 4D for iOS.
* Drag and drop and icon into the Icon area
* To fill the Developer part, go to your developer account and copy paste your developer Team reference into the Team Field

![alt-text](assets/Welcome-Screen-4D-for-iOS.png)

## STEP 5. SELECT YOUR DATA IN STRUCTURE SECTION

In this section you define a database subset that you want to expose to mobile

For example you can choose First Name, Last Name, Job, Company, Phone, Notes and Photo.

![alt-text](assets/Welcome-Screen-4D-for-iOS.png)

## STEP 6. ICONS AND LABELS

* In Tables Properties, define a short and a long label for your Contact table
* Click on the icon field to make the icon library appear and select an icon that illustrate well the Contact Table You can also decide to leave the icon field empty. 4D for iOS will generate a default icon for you !

* Let’s move to the Fields Properties. Select a short and a long label for all the fields that you previously select in the Structure Section

* As for Tables icon definition, select icons for each field

For fields icons definition there are several senaris:

* Of course you can select an icon for each field
* If at least one icon has been defined and some fields are leaved empty, 4D for iOS will generate default icons for you in the generated app
* Leave empty all icon fields if you don’t want to display any icon on your app

![alt-text](assets/Welcome-Screen-4D-for-iOS.png)

## STEP 7. MAIN MENU DEFINITION

* In Available Tables list you can visualize all the table that have been previously published in the Structure section.
* In Selected Tables you can find all your app menu items. For now there is only one item but in a future tutorial with more than one table you can reorder your items with drag and drop.

![alt-text](assets/Welcome-Screen-4D-for-iOS.png)

## STEP 8. FORMS DEFINITION

* Select a form template to use as list for your table. Let’s choose the Profil List Form.

* At this point, the bottom part has changed from Template selection to Content definition

* Simply drag and drop the fields that you want to be displayed in your Contact app : Last name into the search field and in the Title field

* Search field and section field are optional. Leave section field empty for the moment.

* Let’s move to the Detail form definition. As for List Form, select a template that is the most suitable for our contact app. Let’s select the Visual Contact template.

* Drag and drop the content to be displayed in the detail view of your Contact app : First Name, Last Name, Job, Company, Phone and Notes

## STEP 9. BUILD TIME

Now let’s go to the fun part ! Test your app on the simulator to see the final result !

* Click to the Build tab
* Select the device that suits you the best clicking on the device button
* Now click on the Build and Run Button
* Wait a few seconds and…. Your iOS app is alive !