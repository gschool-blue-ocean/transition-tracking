
# Transition Tracker

A Full-Stack React application for transition managers to keep track of students, and their appointments. The application stores information in a database for multiple cohorts, who each have multiple students. Information attributed to the students includes Full name, Branch, Duty status, ETS date (with corresponding color indicator depending on the time to ETS), and their phone numbers. The application provides the ability to add/edit/delete appointment notes on the fly for each individual student.


## Acknowledgements

 - [Project Manager (Pillip Mejia)](https://github.com/oscarmejia1776)
 - [Architecture Owner (Fitz Gerald Sicat)](https://github.com/gfitzsicat)
 - [User Interface Owner (Tayla Enns)](https://github.com/taylaenns8)
 - [Front End Developer (Brooklyn Parsons)](https://github.com/Brooklyn-Parsons)
 - [Back End Developer (Phillip Sussman)](https://github.com/Sussman-P)
 - [Back End Developer (Shu Luo)](https://github.com/luo-s)


## Development 

The app can be started with two steps:

```bash
  npm install; npm install --prefix=api; npm install --prefix=client
```
Install all the dependencies. 
```bash
docker-compose up
```
## Landing Page


This landing page uses a functional React component called LandingPage, representing the landing page of a web application. It imports necessary modules, including React, and sets up the required CSS styles and components. The landing page contains a hero section with a dynamic typing effect for the title, promoting the platform's benefits. It also features a description of the platform's features. The user can select a cohort from a dropdown menu, with the ability to create new cohorts. Additionally, there is a mockup image displayed on the landing page. The component utilizes the useEffect hook to implement the typing effect when the page loads. The LandingPage component receives several props to manage the state of cohorts, students, and dropdown visibility.

![Landing Page Screenshot](https://github.com/Brooklyn-Parsons/transition-tracking/blob/main/TT%20Landing%20Page.png?raw=true)
## Create Cohort


The create component uses a functional React component called CreateCohort, which represents a modal form for creating a new cohort. When the "Create a cohort" button is clicked, the modal is opened using the isModalOpen state. The form allows users to input cohort details such as cohort name, instructor, start date, and end date. Upon submitting the form, an HTTP POST request is sent to the backend API using axios, containing the cohort information. If the request is successful, the newly created cohort is added to the existing cohorts list using the setCohort function passed as a prop. Any errors during the API request are caught and logged to the console. Once the cohort is submitted, the modal is closed, and users can see the updated list of cohorts on the page.

![Create Cohort Screenshot](https://github.com/Brooklyn-Parsons/transition-tracking/blob/main/TT%20Landing%20Page.png?raw=true)
## Drop Down

This drop down is a React functional component called Dropdown that represents a dropdown menu displaying a list of cohorts. When a cohort is selected from the dropdown, it makes an API request to fetch the students associated with that cohort and updates the state of students using the setStudents function passed as a prop. Additionally, it sets the state isDDOpen to false to close the dropdown after a cohort is selected. The component renders a list of cohort buttons within the dropdown, and each button is associated with a specific cohort. When a button is clicked, the handleClick function is triggered, which fetches the students and updates the state accordingly.

![Drop Down Screenshot](https://raw.githubusercontent.com/Brooklyn-Parsons/transition-tracking/main/Screenshot%202023-07-26%20104959.png)
## MCSP Page

This page uses a React functional component called Mcsp, which represents the main application page for the MCSP (Master of Computer Science Program) dashboard. It imports several components, including Students, Navbar, and Dashboard, along with relevant CSS styles. The component receives various props related to the cohort and student data, as well as functions to manipulate the student state and control the dropdown menu (isDDOpen and setIsDDOpen).

The Mcsp component renders the main application layout, including a navigation bar (Navbar) that displays cohort and student information. The dashboard is split into two sections: Dashboard, which likely contains an overview of student statistics, and Students, which displays a list of students in the program, allowing users to interact with the student data.

![MCSP Page Screenshot](https://raw.githubusercontent.com/Brooklyn-Parsons/transition-tracking/main/Screenshot%202023-07-26%20110003.png)
## Contributors

Lets connect on LinkedIn!

  [Phillip Mejia (Project Manager)](https://www.linkedin.com/in/phillipmejia1776/) || [Fitz Gerald Sicat (Architecture Owner)](https://www.linkedin.com/in/fitz-gerald-sicat/) || [Tayla Enns (User Interface Owner)](https://www.linkedin.com/in/tayla-enns/) || [Brooklyn Parsons (Front End Developer)](https://www.linkedin.com/in/brooklyn-parsons-17051925b/) || [Phillip Sussman (Back End Developer)](https://www.linkedin.com/in/phillipsussman/) || [Shu Luo (Back End Developer)](https://www.linkedin.com/in/shuluo/)
