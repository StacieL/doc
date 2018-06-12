---
id: veryFirstApp
title: Creating your first application
sidebar_label: My First App
---


<div class = "objectives">
<b>OBJECTIVES</b>

* Create your very first App with 4D for iOS
</div>

<div class = "prerequisites">
<b>PREREQUISITES</b>

* 4D Server / 4D Developer 17 R2. * Mac OS X version 10.13 (or later). * Latest \[Xcode\](https://itunes.apple.com/us/app/xcode/id497799835) version installed on your Mac. * \[Apple configurator 2\](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac (optional). Install this software if you want to automate the app installation on your physical device. </div> 

This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application.

<i>Scenario: You're a commercial business manager and you want to consult your contact information on the go.</i>

We're going to create an iPhone application called "Contacts". You'll be able to search for contact names from a list and then view the details of each contact.

## STEP 1. GETTING STARTED

Download our Starter Project, which contains a database file and project icon, but no mobile project yet!

<div style="text-align: center; margin-top: 20px">
  
<a class="button"
href="../assets/contactDemoApp/ContactStarter.zip">STARTER PROJECT</a>
</div>

## STEP 2. CREATING THE PROJECT

Let's start with a very simple structure using a single Contacts table. From 4D, go to **New > Mobile project**.

Give your project a name and click **Create**.

![alt-text](assets/CreateYourAppFromScratch/Project-creation-4D-for-iOS.png)

## STEP 3. OPENING THE PROJECT EDITOR

Welcome to 4D for iOS! The Welcome screen displays all the major steps of this magnificent tool. 

![alt-text](assets/CreateYourAppFromScratch/Welcome-Screen-4D-for-iOS.png)

Click **Continue**.

## STEP 4. CONFIGURE YOUR APPLICATION’S MAIN INFORMATION

* **Organization:** Enter the name of your company and the application's identifier (ex. “My Company” and com.MyCompany).
* **Product:** Enter your application's name. Let’s call this one "Contacts".
* **ID:** (Bundle ID) is automatically generated as a composition of your organization identifier and product name.
* **Version:** Leave the version as 1.0 and define your application's copyright. It's highly recommended to use the formats provided by 4D for iOS.
* **Icons:** Drag and drop an icon into the icon area.
* **Developer:** This is automatically filled from your user account name. Copy/paste your developer team reference (from your developer account) into the Team field. You can also leave it empty to build your application on the Simulator only.

![alt-text](assets/CreateYourAppFromScratch/Contact-app-general-section-4D-for-iOS.png)

## STEP 5. SECTIONS - STRUCTURE

In the Sections tab you can define a subset of your data to expose to mobile devices.

For our example, select **ID, First Name, Last Name, Job, Company, Phone, Notes and Photo**.

<div class = "caution">
<b>CAUTION</b>

* We recommend to publish your primary key in order to identify each record of your database.
</div>

![alt-text](assets/CreateYourAppFromScratch/Contact-app-structure-section-4D-for-iOS.png)

## STEP 6. SECTIONS - ICONS & LABELS

<b>Table Properties:</b>
* Define a short and a long label for your Contacts table * Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table. You can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!

<b>Field Properties:</b>
* Define a short and a long label for your selected fields. * Click on the icon field and select icons for each field. There are several options for field icons: * You can select an icon for each field, * If at least one icon has been defined and some fields are left empty, 4D for iOS will generate default icons for you, or * Leave the field icons empty if you don’t want to display icons in your application.

![alt-text](assets/CreateYourAppFromScratch/Contact-app-icons-labels-section-4D-for-iOS.png)

## STEP 7. SECTIONS - MAIN MENU

* **Available Tables:** Displays the table(s) to be used.
* **Selected Tables:** Displays your application's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.

![alt-text](assets/CreateYourAppFromScratch/Contact-app-main-menu-section-4D-for-iOS.png)

## STEP 8. SECTIONS - FORMS

* Select a form template to display your table as a list. For our Contacts application, let’s use the **Profile list form**.

![alt-text](assets/CreateYourAppFromScratch/ListformTemplate-form-section-4D-for-iOS.png)

At this point, the bottom of the configuration window has changed from Template selection to Content definition.

* Drag and drop the fields you want displayed onto the template, **i.e.**, Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.

![alt-text](assets/CreateYourAppFromScratch/ListformContent-form-section-4D-for-iOS.png)

Let’s move on to defining the Detail form. * Select a template that is best suited for your application. For our Contacts application, let’s use the **Visual Contact template**

![alt-text](assets/CreateYourAppFromScratch/DetailformTemplate-form-section-4D-for-iOS.png)

* Drag and drop the content onto the detail view template, **i.e.**, First Name, Last Name, and Photo.

![alt-text](assets/CreateYourAppFromScratch/DetailformContent-form-section-4D-for-iOS.png)

## STEP 9. BUILD THE APPLICATION

Now the fun part! Test your application on the Simulator to see the final result!

* Click the **Build tab**.
* Select the device to use as a Simulator by clicking on the device button.
* Click the **Build and Run** button.
* Wait a few seconds and…. voila! Your iOS application is alive!

![alt-text](assets/CreateYourAppFromScratch/simulator-list-form-4D-for-iOS.png)

## STEP 10. WHERE TO GO FROM HERE?

We've covered basic application creation in this tutorial, and you should now be able to create simple applications on your own. But wait - there’s more! In the next tutorial, you’ll learn how to build an even more complex application. Click on the Final Project button to download the final Contacts application.

<div style="text-align: center; margin-top: 20px">
  
<a class="button"
href="../assets/contactDemoApp/ContactFinal.zip">FINAL PROJECT</a>
</div>