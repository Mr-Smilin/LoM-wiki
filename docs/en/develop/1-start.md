---
outline: [2, 3]
title: How to Start Collaborating on LoM-wiki
description: This site is built on Github, relying on the convenience of Github Pages to achieve long-term wiki site hosting; therefore, if you want to edit the documentation on this site, you need to have a Github account.
tags:
    - dev
    - develop
    - developer
    - development
    - collaboration
---

# How to Start Collaborating on LoM-wiki

::: tip 💡 Note
Here we provide basic knowledge related to editing the wiki.  
For game data queries, please refer to other pages.
:::

## Before Starting

```
You don't have to learn everything before you can start contributing.

You don't have to be amazing to start, but once you start, you'll gradually become amazing.
```

## Step 1 - Create a Github Account

This site is built on Github, relying on the convenience of Github Pages to achieve long-term wiki site hosting.

Therefore, if you want to edit the documentation on this site, you need to have a Github account.

-   Visit http://github.com to create an account, where you need to enter your username / email / password.
-   After filling out the information, you will be prompted to choose a plan, please select free.
-   Then, check your email for a verification message to complete the account creation process.

::: details If Two-Factor Authentication is Required
Install `Authenticator` on your mobile phone  
Visit the page at https://github.com/settings/security  
Choose `Authenticator app` and follow the instructions to complete the setup.
:::

## Step 2 - Obtain Collaboration Permission (Optional)

Choose one of the following steps:

-   [Join Discord](https://discord.gg/P4kePy6qmc)
-   [Contact me via email](mailto:legendofmortal.wiki@gmail.com)

Provide the email you used to create your Github account  
I will grant you collaboration permission.

The difference in permissions includes:

-   Ability to adjust from the `Edit this page on Github` link at the bottom of the document
-   Editing the document does not require verification
-   Ability to verify submissions from non-collaborators

## Step 3 - Edit the Documentation

::: info 💡 Feel Free to Add
There are many ways to edit the documentation, and there may be omissions, so feel free to provide feedback in the comments.
:::

::: warning 💡 Note
If you skip Step 2, submitting edits to the documentation will require review.
:::

### Direct Editing on Github

Adjust the document by clicking on `Edit this page on Github` at the bottom of the document

![](/images/develop/1-start/01.webp)

![Operation Illustration](/images/develop/1-start/02.webp)

You can click on the images to enlarge them.

Use Github's native document editor to make adjustments,  
the top left is the mode switch, defaulting to `Edit` mode,  
`Preview` allows you to preview the changes before saving.

![Operation Illustration 2](/images/develop/1-start/03.webp)

Once done, click on `Commit changes` in the top right corner,  
then click `Commit changes` in the pop-up window to complete editing a single document.

<br>

### Local Editing

::: warning 💡 Note
This guide is aimed at `Git` beginners  
The method leans towards a hands-on approach,  
providing step-by-step GUI operations.

For developers already familiar with `Git`  
please proceed with your preferred method of local operations.
:::

Click on the icon at the top right of this site to go to the project homepage

![](/images/develop/1-start/04.webp)

::: danger 💡 Note
Be sure to save the text on the left side,  
as shown in the illustration 'Mr-Smilin Test'  
we refer to it as `Commit Record`, which will be used later.
:::

Click on the green `Code` button, then `Download ZIP`  
to download the entire wiki to your computer,  
organize it in a convenient development location, and unzip it.

![](/images/develop/1-start/05.webp)

Navigate to the `docs` folder in the project, where all wiki edits are made

-   The `.md` files in the directory correspond to the wiki entries, which can be found by the website URL  
    ::: details URL Illustration
    ![](/images/develop/1-start/06.webp)
    :::
-   The `en` folder contains English versions of the same wiki files, which can be modified to assist with maintenance
-   The `public` folder stores static resources, such as image uploads, which should be placed in the format `public/images/{md file category}/{md file name}/{image}.{extension}`
-   `.vitepress` is the configuration file for this project, please make adjustments only after reading the [configuration file explanation](/develop/2-vitepress)

After making adjustments, return to Github

::: danger 💡 Note
Before uploading, make sure the `Commit Record` matches what you saved when downloading  
If they are different, ensure that the files you are uploading have not been edited or updated by someone else  
Otherwise, you may overwrite others' changes or create conflicts!
:::

Click on the corresponding path  
For example, to edit text, click into the `docs` folder

::: details Illustration
![](/images/develop/1-start/07.webp)
![](/images/develop/1-start/08.webp)
:::

Once in the same directory, click on `Add file` in the top right corner  
Select `Upload files` and drag the modified document into the screen

![](/images/develop/1-start/08.webp)

Briefly describe what changes were made in the `Add files via upload` box,  
then click `Commit changes`.

Changes on the website may take 1-3 minutes to reflect.

With this, the hands-on local editing process is complete.
