---
id: modifyXcodeProject
title: Customize your iOS App
sidebar_label: Customize your iOS App
---
Let's do some storyboard modification from the simpliest one to more complicated

## STEP 1. SIMPLE LABEL MODIFICATION

Let's start from the beginning modifying a label font and color

* Open the ContactDetailsForm.storyboard file from the Project navigation tab 
* Select the First Name Label. Simply click on it to select it from the interface builder or select it from the left panel where all your scene elements are displayed.
* Select the Attributes inspector panel from the Utility area

![alt-text](assets/OpenYourProjectWithXcode/Attributes-inspector-Xcode-4D-for-iOS.png)

* From here you change the font from Helvetica Neue Bold to Futura Bold for example

![alt-text](assets/OpenYourProjectWithXcode/Attributes-inspector-font-Xcode-4D-for-iOS.png)

* You can also change easily the color of the font from the same panel from white to black color for example

![alt-text](assets/OpenYourProjectWithXcode/Attributes-inspector-color-Xcode-4D-for-iOS.png)

## STEP 2. CHANGE PROFIL PICTURE POSITION

All 4D for iOS templates are using constraints for the app elements to be well displayed on all devices

Actually in the ContactDetailsForm.storyboard file, the picture is aligned center with First Name label and Last Name label.

We want to get this :

![alt-text](assets/OpenYourProjectWithXcode/Simlator-Final-Xcode-4D-for-iOS.png)

Align vertically the picture and put the first name and last name at the right of the picture

Select the image profil and go straight to Size attributes panel from the Utility area. From here change the X value from 161.67 to 40.67 and the Y value from 28 to 79.

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-position-Xcode-4D-for-iOS.png)

As you can see the position has changed but Xcode displays yellow lines... Those yellow lines reprents contraints that are no longer valid.

## STEP 3. UPDATE PROFIL PICTURE CONSTRAINTS

Basically to center verticaly the picture in the Superview (view that contains it) we want to delete existing constraints and add new ones.

Currently the image as the following constraints : * Width Equals : fixed width equal to 78 * Height Equals : fixed height equal to 78 * Align Center X : that previously defines to center horizontally * Top Space : fixed top space from top view that contains the view * Bottom space to <first name> : that previously defines bottom space between the First Name and the Picture

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-constraints-Xcode-4D-for-iOS.png)

Delete all constraints exept Width and Height selecting them from the Size inspector in the Constraints section. The picture outlines should be now in red color because constraints are missing.

So click on the Align button on the bottom of the Interface Builder window and check "Vertically in container" checkbox.

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-Align-Xcode-4D-for-iOS.png)

Then click on the Add new constraints button and add a Leading Space constraints (left constraint).

![alt-text](assets/OpenYourProjectWithXcode/Profil-picture-new-constraints-4D-for-iOS.png)

At this point All profil picture constraints should be blue !

Congratulations, your profil picture is well postionned the right constraints contraints :)

Let's do the same exercice with First Name Label and Last Name Label.

<div class = "tips">
<b>TIPS:</b>

* To create a constraint between two views, Control-click one of the views and drag to the other. When you release the mouse, Interface Builder displays a menu with a list of possible constraints.

* You can delete constraints selecting them from the Size inspector or directly from the Interface Builder
</div>

## STEP 4. UPDATE HEADER LABELS POSTION AND CONSTRAINTS

#### Let's work on the First Name Label

Change the position and the width : * Select the First Name Label from the interface builder * Then change the width from 386 to 267 * Change the X value from 8 to 127 and the Y value from 28 to 79.

![alt-text](assets/OpenYourProjectWithXcode/First-Name-Label-position-Xcode-4D-for-iOS.png)

Put adapted constraints : * Delete the Leading Space and the Bottom Space constraints from the Size inspector * Add a Leading Space constraints clicking on the "Add new constraints" button for the First Name label position to be at the right of the Profil picture * Control-Click the First Name label and drag to the Profil picture. Select the Top constraint in the menu to align top both elements.

![alt-text](assets/OpenYourProjectWithXcode/First-Name-Label-top-constraint-Xcode-4D-for-iOS.png)

#### Finally select the Last Name Label

Change the position and the width : * Select the last Name Label from the interface builder * Then change the width from 386 to 267 * Change the X value from 8 to 127 and the Y value from 144.33 to 118.33.

![alt-text](assets/OpenYourProjectWithXcode/Last-Name-Label-position-Xcode-4D-for-iOS.png)

Put adapted constraints : * Delete the Leading Space constraints from the Size inspector * Add a Leading Space and top constraints clicking on the "Add new constraints" button

![alt-text](assets/OpenYourProjectWithXcode/Last-Name-Label-constraint-Xcode-4D-for-iOS.png)

Your header labels are now well postionned.

Let's see the result on the simulator !

![alt-text](assets/OpenYourProjectWithXcode/Simulator-Xcode-4D-for-iOS.png)

Not exaclty the result we want to get...

* Select the First Name and the Last Name label and change the alignment from center to left from the Attributes inspector ![alt-text](assets/OpenYourProjectWithXcode/Labels-Alignment-Xcode-4D-for-iOS.png)

* Then select the Profil picture and Double click on the Leading space constaint.

* Change the Contact value from 40.67 to 80

![alt-text](assets/OpenYourProjectWithXcode/Constraints-adjustments-Xcode-4D-for-iOS.png)

As you can see all constraints are working well and the label are adjusting well without breaking other constraints