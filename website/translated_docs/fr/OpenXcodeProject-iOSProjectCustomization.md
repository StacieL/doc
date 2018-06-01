---
id: modifyXcodeProject
title: Customize your 4D for iOS application
sidebar_label: Customize your 4D for iOS application
---
Let's do some Storyboard modification ... from simple to complex.

## STEP 1. SIMPLE LABEL MODIFICATION

Let's start by modifying a label's font and color:

* Open the ContactDetailsForm.storyboard file from the Navigation tab. 
* Click on the First Name label (you can also select it from the interface builder or the left panel).
* Select the Attributes inspector panel from the Utility area.

![alt-text](assets/OpenYourProjectWithXcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* Change the font from Helvetica Neue Bold to Futura Bold. 

![alt-text](assets/OpenYourProjectWithXcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* You can also easily change the color of the font from the same panel.

![alt-text](assets/OpenYourProjectWithXcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## STEP 2. CHANGE PROFILE PICTURE POSITION

All 4D for iOS templates use constraints for the application elements so they'll display well on all devices.

In the ContactDetailsForm.storyboard file, the picture, First Name, and Last Name labels are currently center aligned.

We want to change it to appear like this :

![alt-text](assets/OpenYourProjectWithXcode/Simlator-Final-Xcode-4D-for-iOS.png)

Vertically align the picture and put the First Name and Last Name labels to the right of the picture.

Next, select the image profile and go to the Size attributes panel from the Utility area. Change the X value from 161.67 to 40.67 and the Y value from 28 to 79.

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-position-Xcode-4D-for-iOS.png)

As you can see, the position has changed but Xcode is displaying yellow lines...why? Those yellow lines represent contraints which are no longer valid.

## STEP 3. UPDATE PROFILE PICTURE CONSTRAINTS

To vertically align the picture in the center in the Superview (view which contains it), we need to delete the existing constraints and add new ones.

The image currently has the following constraints: * Width Equals: A fixed width of 78 pixels. * Height Equals: A fixed height of 78 pixels. * Align Center X: Centers the image on a previously defined horizontal axis. * Top Space: A fixed amount of space from the top of the image to the top of the view. * Bottom space to <first name>: The previously defined space between the First Name label and the image.

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Delete all of the constraints except Width and Height (you'll select these from the Size inspector in the Constraints section). The picture outline should be now in red because the constraints are missing.

Click on the Align button (at the bottom of the Interface Builder window) and check the "Vertically in container" checkbox.

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Next, click on the Add New Constraints button and add a leading space constraint (the left constraint).

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-new-constraints-4D-for-iOS.png)

At this point, all the profile picture constraints should be blue!

Congratulations! Your profile picture is now well postionned with the correct constraints. :)

Now repeat the same steps for the First Name and Last Name labels.

<div class = "tips">
<b>TIPS:</b>

* To create a constraint between two views, Control + click on one of the views and drag to the other. When you release the mouse button, the Interface Builder displays a menu with a list of possible constraints.

* You can delete constraints by either selecting them from the Size inspector or  directly from the Interface Builder.
</div>

## STEP 4. UPDATE LABEL POSTIONS AND CONSTRAINTS

#### Let's work on the First Name label.

We'll begin by changing the position and width: * Select the First Name label from the Interface Builder. * Next, change the Width from 386 to 267 pixels. * Change the X value from 8 to 127 pixels and the Y value from 28 to 79 pixels.

![alt-text](assets/OpenYourProjectWithXcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints: * Delete the leading space and the bottom space constraints from the Size inspector. * Add a leading space constraint by clicking on the Add New Constraints button to position the First Name label to the right of the Profile picture. * Control + click the First Name label and drag it to the Profile picture. Select the top constraint in the menu to top align both elements.

![alt-text](assets/OpenYourProjectWithXcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finally, select the Last Name label.

Change the position and width: * Select the Last Name label from the Interface Builder. * Change the width from 386 to 267 pixels. * Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.

![alt-text](assets/OpenYourProjectWithXcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Modify the remaining constraints: * Delete the leading space constraints from the Size inspector. * Add a leading space and top constraints by clicking on the Add New Constraints button.

![alt-text](assets/OpenYourProjectWithXcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Both of your header labels are now re-postioned.

Let's see the results in the Simulator !

![alt-text](assets/OpenYourProjectWithXcode/Simulator-Xcode-4D-for-iOS.png)

Hmmmm. That's not exactly the result we wanted ...

* Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector. ![alt-text](assets/OpenYourProjectWithXcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Then, select the Profile picture and double click on the leading space constraint.

* Change the Constant value from 40.67 to 80 pixels.

![alt-text](assets/OpenYourProjectWithXcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

Much better! As you can see, all constraints are working well and the labels aren't breaking other constraints.