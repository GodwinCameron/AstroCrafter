# AstroCrafter
 2024 DV300 Term 1


<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/Tsebo200/Oiloasis)
![GitHub watchers](https://img.shields.io/github/watchers/Tsebo200/Oiloasis)
![GitHub language count](https://img.shields.io/github/languages/count/Tsebo200/Oiloasis)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Tsebo200/Oiloasis)
![Github Language](https://img.shields.io/github/languages/top/Tsebo200/Oiloasis)
![Github Downloads](https://img.shields.io/github/downloads/Tsebo200/Oiloasis/total)
<!-- ![Github node Version](https://img.shields.io/node/v/Oiloasis) -->


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Tsebo Ramonyalioa</h5>
<h5 align="center" style="padding:0;margin:0;">200200</h5>
<h6 align="center">DV200 - Term 3 | 2023</h6>
</br>
<p align="center">

  <a href="https://github.com/Tsebo200/Oiloasis">
    <img src="/client/src/Assets/LogoHover.png" align="center" alt="src/Assets/Logo2.svg" width="140" height="140">
  </a>
  
  <h3 align="center">Oiloasis</h3>

  <p align="center">
    A Full Stack MERN Project for a E-Commerce site selling spiritual oils<br>
    
   <br />
   <br />
   <a href="https://drive.google.com/file/d/1d61sns_ou6x7PYqPwDxf_UcDtldtHTUC/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/Tsebo200/Oiloasis/issues">Report Bug</a>
    ·
    <a href="https://github.com/Tsebo200/Oiloasis/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->


### Project Description

Creating an E-commerce website for meditative oil aids, this had to be created with the MERN Stack. 

### Built With

<!-- 
* [Mongo] (https://www.mongodb.com/)
* [Express] (https://expressjs.com/)
* [React] (https://reactjs.org/)
* [Node] (https://nodejs.org/en) -->
* [Mongo] [<img src="https://www.svgrepo.com/show/331488/mongodb.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=gs_emea_south_africa_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624560&adgroup=115749711783)

* [Express] [<img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://expressjs.com/)

* [React] [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="6%" height="6%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://reactjs.org/)

* [Node] [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" width="7%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://nodejs.org/en/)






<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own machines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required. 

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/Tsebo200/Oiloasis.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/Tsebo200/Oiloasis.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
### Feature 
Admin Page with CRUD for oil products<br>

<!-- ![image1](https://github.com/Tsebo200/Oiloasis/blob/main/src/Assets/RegisterModal.png) <br><br> -->

 The authentication is displayed in modals (the navy labels). The modals disappear while the user enters their information. <br>

<!-- ![image2](https://github.com/Tsebo200/Oiloasis/blob/main/src/Assets/RegisterModalTwo.png)<br><br> -->

 The logout feature button is on the navigation bar for the user, as this is a security feature that avoids the user being hacked, making our database vulnerable and the user. When the user clicks on the button they are redirected to the sign in page and their session is cleared from the website.<br>

<!-- ![image3](https://github.com/Tsebo200/Oiloasis/blob/main/src/Assets/LogOutBtn.png)<br><br> -->

### Functionality 
<!-- A useNavigate hook was utilised so that when the user clicks on the sign in/create account button, they will be redirected to the dashboard and their email address will be added to the local storage. If the user clicked on the create account button their information will be added to the MYSQL database. The opposite will happen whereas if the user tried to redirect to the dashboard without registering or logging in then they will immediately be redirected to the sign in page, a useNavigate and useEffect was utilised to accomplish this function<br><br> -->

The admin Page
- Create a new product using axios Post request
- Read a product with a card displaying once added to the database with a axios Get request
- Update a products information when tapping on the edit product button on the specific card of the product the axios put request will run
- Deleting a product by tapping on the bin icon the axios delete request will run

<!-- The functionality for the logOut button was a useNavigate and a sessionStorage.clear(). -->
<br><br>

<!-- In the patients page there will be a information about the user from the database, specifically, the same user that is signed into the the website.<br><br> -->
<!-- ![image4](https://github.com/Tsebo200/Oiloasis/blob/main/src/Assets/ReceptionistInfo.png)<br><br> -->
<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project. As part of my conceptual process I have sketched wireframes in Figma, I looked at Pinterest for inspiration for colours and I also decided to utilise Material UI for most elements. 
<br><br>

### Ideation
The style I was going for was a fresh and modern look of websites that would be found on dribble. When I was deciding the type of images I will be utilising, I went for jpegs as that is commonly found on websites, I feel I needed more experience with handling Jpegs as I am used to utilising Svgs and Pngs.
<!-- ![image5](https://github.com/Tsebo200/Oiloasis/blob/main/src/Assets/leftImage.png)<br><br> -->

### Wireframes
This is my first phase
<img src="client/src/Assets/Home.png" align="center"><br><br><br>
<img src="client/src/Assets/Admin Page.png" align="center"><br><br><br>
<img src="client/src/Assets/All Products.png" align="center"><br><br><br>
<img src="client/src/Assets/Checkout Page.png" align="center"><br><br><br>
<img src="client/src/Assets/Individual Product.png" align="center"><br><br><br>
<img src="client/src/Assets/Login page.png" align="center"><br><br><br>

### Custom UI
<!-- <img src="src/Assets/DashboardBtnImage.png" align="center">
<br>

This is the hover state of my button
<img src="src/Assets/DashboardBtnHoverImage.png" align="center">
<br> -->
<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application. 
In my frontend I implemented a Google Font called Inter, a box shadow on different sections (content-containers), I added Hover States for my buttons.
<br>In my backend I utilised React.js with PHP. I also created a database with MYSQL and used PHP to communicate to the database.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilised React and SCSS for front-end
* Utilised Express communicate to database for back-end
* Utilised Node for React Packages 
* Implemented Routing with `React-Router v6`.
* Utilised MongoDB as Database (NoSQL)

### Data Flow Diagram
<img src="" align="center"><br><br><br>



#### Highlights
<!-- stipulated the highlight you experienced with the project -->
<!-- * I struggled with create/post method and image upload due to Multer Middleware
* I mostly enjoyed making UX decisions and implementing it into the project.
* Learning to send data to MongoDB
* CRUD functionality working -->

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
<!-- * I kept getting a 500 internal error due to the multer middleware -->


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
<!-- * New Library Learnt
* We learning anew language called Angular and we are utilising typescript  which is similar to JavaScript but more strict especially with the variable -->
<br>

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

<!-- * I would love to learn how to handle with the process of online transactions  -->


<!-- MOCKUPS -->
## Final Outcome

### Mockups
<!-- 
 ![image6](/client/src/Assets/MockupTwo.png)

<br>


  ![image7](/client/src/Assets/MockupOne.png)

<br> -->


<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration]()


See the [open issues](https://github.com/GodwinCameron/AstroCrafter/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors
* **Cameron Godwin** - [GodwinCameron](https://github.com/GodwinCameron)

* **Tsebo Ramonyalioa** - [Tsebo200](https://github.com/Tsebo200)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- LICENSE -->
## Contact
* **Cameron Godwin** - [email@address]() - [@instagram_handle]() 

* **Tsebo Ramonyalioa** - [email@address](mailto:tsebo.ramonyalioa.an@gmail.com) - [@instagram_handle](https://www.instagram.com/inspiration__200/) 
* **Project Link** - https://github.com/GodwinCameron/AstroCrafter

<!-- ACKNOWLEDGEMENTS -->

<!-- all resources that you used and Acknowledgements here -->



