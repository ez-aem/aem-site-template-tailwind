---
sidebar_position: 2
slug: /tutorial
---

# Step-by-Step Tutorial

Welcome to the Tailwind AEM Site Template Step-by-Step Tutorial. This is meant for people who like to learn by doing. The Tutorial will guide you from code checkout to site publication in AEM.

## What you'll need

- Access and permissions to an AEM Cloud Service instance
- A basic understanding of Git, JavaScript, and CSS
- **[Node JS](https://nodejs.org/)** installed on your computer
- A **[GitHub](https://github.com/join)** account

> In this tutorial, we will primarily use the terminal to handle our git commands. If you prefer **[GitHub Desktop](https://desktop.github.com/)**, or another git tool, feel free to adapt the commands accordingly.

### Let's get Started!

If you have all of the prerequisites installed on your computer, then let's get started by **downloading the source code**.

---

## Download

Our first step begins with cloning the code to your computer. Open your terminal and navigate to the folder where you keep code projects.

```bash
git clone https://github.com/ez-aem/aem-site-template-tailwind.git
```

---

## Install Dependencies

Once you have the code on your computer, navigate into the folder, and install the dependencies. This will install dependencies to build the site template, and to customize the site CSS/JS.

```bash
cd aem-site-template-tailwind
npm install
```

---

## Build

Now that you have the dependencies installed, it's time to build the site template from code. From the same folder, run the build command.

```bash
npm run build
```

Once the build command has completed, you will see a new folder in the root of your directory tree called `aem-site-template-tailwind-latest.zip`.

---

## Install Template

Open your browser, and login to your AEM Cloud Service Environment.

> Remember, you will need sufficient permissions to be able to create Sites. If you don't have permissions, speak with your environment administrator.

Navigate to the `/sites.html` screen, and click on the **Create** button and select **Site from Template** option.

You should see a button to **Import** your Site Template. Click on **Import** which will open a file browser, and select `aem-site-template-tailwind-latest.zip`.

---

## Create Site

Now that the Site Template is installed in your AEM Environment, you can create as many Sites as you want. Let's begin by making our demo site. Select the Tailwind Site Template from the list of templates, and click **Next**. For the Site title, add the name **Demo** and click **Create**.

AEM will create your site.

> NOTE: The AEM Site creation has been updated to be completed as an asynchronous background job. Therefore it's probable that after you create the site you will have to wait for some time before being able to see your site within AEM. This hopefully will change in the future.

## Choose your Adventure

Now that you've created a new Site with the Tailwind AEM Site Template, it's time to move on to the next step: Choose your Adventure!

- **[Manage](/manage/)** the content of your Site
- **[Customize](/customize/)** the look and feel of your Site
- **[Extend](/extend/)** the functionality of your new Site
