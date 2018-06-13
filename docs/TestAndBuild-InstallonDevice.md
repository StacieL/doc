---
id: install-device
title: Installing your App on an iOS device
sidebar_label: Installing your App on an iOS device
---

<div class = "objectives">
<b>OBJECTIVES</b>

* Install my application on a connected device
</div>

<div class = "prerequisites">
<b>PREREQUISITES</b>

* Latest version of [Xcode](https://itunes.apple.com/us/app/xcode/id497799835) version installed on your Mac
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) installed on your Mac to automate the app installation (optional).

</div>

If you want to publish your application in the App Store, you'll need to create an Apple Developer Program.

Depending on your objectives and preferences, you can choose to create a:
* [Free Apple Developer Program](Freedeveloperaccount.html) only for testing
* [Apple Developer Program for organization](RegisterOrganization.html) or [individual](RegisterIndividual.html) for an App Store Deployment
* [Apple Enterprise Developer Program](RegisterAppleDeveloperEnterpriseProgram.html) (if you deploy your app in-house).

Let's go through the process...

## STEP 1. ACCOUNT CREATION

* <b>Apple ID</b>: Create your apple ID. If you don’t already have one, click [here](https://appleid.apple.com/account#!&page=create).  

* <b>Developer Account</b>: Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or Apple developer Enterprise program (for in-house deployment).
* <b>[Xcode](https://itunes.apple.com/us/app/xcode/id497799835)</b>: If you don't already have the latest version installed, you can get it in the App Store. Download, install, and open it to install all components.
* <b>[Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344)</b>: If you don't already have the latest version installed, you can get it in the App Store. Download and install it.  

## STEP 2. XCODE CONFIGURATION 

* <b>Developer Account</b>: In Xcode > Preferences > Accounts, add your developer account.
![alt-text](assets/test-build/Developer-Account-4D-for-iOS.png) 

## STEP 3. GET YOUR TEAM ID 

* If your are using a [Free Apple Developer Program](Freedeveloperaccount.html) go to step 4
* If your are using a [Apple Developer Program](RegisterOrganization.html) or [Apple Enterprise Developer Program](RegisterAppleDeveloperEnterpriseProgram.html) go to step 5

## STEP 4. TEAM ID FOR FREE ACCOUNT

### Let Xcode generates your certificate and provisioning profile

* Open the current project you are working on from the BUILD tab.

![alt-text](assets/test-build/Open-your-project-Xcode-4D-for-iOS.png) 

* Verify that the "Automatically manage signing" option is checked and select the account you added [here](Freedeveloperaccount.html) from the Team popup.

![alt-text](assets/test-build/account-Selection-Free-Account.png) 

* Connect your Device to your computer and select it from the top menu in Xcode.

![alt-text](assets/test-build/select-device-Free-Account.png) 

* Then Xcode automatically generates Provisioning Profile and Certificate you need to Build your app.

### Select your TEAM ID

* Reopen 4D for iOS in Sections > General and select your TEAM ID has been added in the Team ID popup.

![alt-text](assets/test-build/Team-ID-General-Section-4D-for-iOS.png) 

* Go to STEP 6 to run your project in your device from the Project Editor.


## STEP 5. TEAM ID FOR PAID SUBSCRIPTION ACCOUNT

* Team ID: Go to Developer Account > Membership and get your Team ID.
![alt-text](assets/test-build/Team-ID-4D-for-iOS.png) 

* 4D for iOS: Launch 4D for iOS in Sections > General and enter your Team ID.
![alt-text](assets/test-build/Team-ID-General-Section-4D-for-iOS.png) 

* Go to STEP 6 to run your project in your device


## STEP 6. BUILD

* When your application is ready, open the BUILD tab.
* Connect your device to your computer with a USB cable.
* From the BUILD tab, click on Install.

![alt-text](assets/test-build/Install-button-build-tab-4D-for-iOS.png) 

* The application is being installed on your device!


