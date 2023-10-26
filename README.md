# CV Generator Web Application

CV Generator Web Application is designed to simplify the creation of professional CVs, enabling users to enter their information one time and then send it to the employer. After submitting the CV data, a PDF file is generated in a format that can be used by the employer to continue the business process of hiring employees.

## Table of Contents 

- [About](#about)
- [Tech Stack Overview](#tech-stack-overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About

The CV Generator Web Application streamlines the hiring process, providing fast, consistent resume creation for job seekers and easy acceptance for employers. By making it easy to submit resumes in standard PDF format, it makes the recruitment phase more efficient, saving time for both parties involved.

## Tech Stack Overview

Our CV Generator project is built using various technologies, each serving a specific purpose to ensure the application is fast, reliable, and easy to use. Below is a simplified explanation of what we use:

### Backend with Java:
- [![Java][java_badge]][java_link]: The main language we use for writing our backend logic.
- [![Spring Boot][spring_boot_badge]][spring_boot_link]: Helps us get our application running quickly with less manual configuration.
- [![PostgreSQL][postgresql_badge]][postgresql_link]: This is where all our data is stored. 
- [![Maven][maven_badge]][maven_link]: Tool that help us manage external code libraries that our application depends on.

### Frontend with React.js, HTML, CSS:
- [![React][react_badge]][react_link]: Used for building the interactive parts of our website.
- [![HTML/CSS][html_css_badge]][html_css_link]: These are the building blocks of our web pages. HTML is used for the structure, and CSS makes it look nice.
- [![JavaScript][javascript_badge]][javascript_link]: The scripting language we use to create dynamic content and handle user interactions in the browser.

### Common Tools:
- [![Git][git_badge]][git_link]: This is our version control system, that allows us to track changes and go back to previous versions if needed.
- [![RESTful APIs][restful_apis_badge]][restful_apis_link]: A set of rules that allow our frontend and backend to communicate with each other, sending and receiving data like CV information.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A modern web browser. For better experience use Google Chrome Browser
- Java JDK 11 or later.
- PostgreSQL server for database hosting.
- Node.js and npm installed for the frontend JavaScript components.

### Instalation 

1. **Clone the repository**

    ```bash
    git clone https://github.com/VMM-MMV/CV-App.git
    ```

2. **Backend Setup**
- Navigate to the backend directory.
- Update the src/main/resources/application.properties file with your PostgreSQL server username, password, and other database credentials.
- Build the project using your IDE or via command line with ./mvnw install for Maven
- Run the compiled from the IDE to start the server.

3. **Frontend Setup**
- Navigate to the frontend directory.
- Install the dependencies using npm.

    ```bash
    npm install
    ```
- Start the development server.

    ```bash
    npm start
    ```
The application will open in your default browser, or you can manually navigate to http://localhost:3000 in your browser.


## Usage

Once you've set up, you can start using the CV generator.

1. **Create a New CV**
- Users can start building their CV by filling out their information in the step-by-step form. This data includes personal information, experience, education, skills, and any additional sections necessary.
2. **Save and Submit**
- Once satisfied with the content, users can submit their CV data to the connected database for future updates and download the PDF to their local machine.

## Authors

- [@Mihai Vieru](https://github.com/VMM-MMV)
- [@Vasile Ceban](https://github.com/ceban-vasile)
- [@Ecaterina Grebennicova](https://github.com/Katrincik)
- [@Alexandr Ciornîi](https://github.com/UrMjsty)

## Acknowledgements

- Thanks to the creators of the libraries we used in this project.
- All contributors who have helped to enrich this application through their contributions.

<!-- Badges -->
[java_badge]: https://img.shields.io/badge/Java-ED8B00?style=plastic&logo=java&logoColor=white
[spring_boot_badge]: https://img.shields.io/badge/Spring_Boot-6DB33F?style=plastic&logo=spring-boot&logoColor=white
[postgresql_badge]: https://img.shields.io/badge/PostgreSQL-316192?style=plastic&logo=postgresql&logoColor=white
[maven_badge]: https://img.shields.io/badge/Maven-C71A36?style=plastic&logo=apache-maven&logoColor=white
[react_badge]: https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB
[html_css_badge]: https://img.shields.io/badge/HTML/CSS-E34F26?style=plastic&logo=html5&logoColor=white
[javascript_badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black
[git_badge]: https://img.shields.io/badge/Git-F05032?style=plastic&logo=git&logoColor=white
[restful_apis_badge]: https://img.shields.io/badge/RESTful_APIs-0298C3?style=plastic&logo=rest&logoColor=white

<!-- Links -->
[java_link]: https://www.oracle.com/java/
[spring_boot_link]: https://spring.io/projects/spring-boot
[postgresql_link]: https://www.postgresql.org/
[maven_link]: https://maven.apache.org/
[react_link]: https://reactjs.org/
[html_css_link]: https://www.w3.org/standards/webdesign/htmlcss
[javascript_link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[git_link]: https://git-scm.com/
[restful_apis_link]: https://www.ietf.org/standards/rfcs/

