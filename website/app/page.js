import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
      <h1>Daniel Tran</h1>
      <h2>tdanielhuynh@gmail.com | 571-505-5154 | linkedin.com/in/tranhdaniel | Springfield, VA</h2>
      <h2>Education</h2>
      <h3>Virginia Commonwealth University</h3>
      <h3>Bachelor of Science in Computer Science</h3>
      <h3>Concentration in Software Engineering</h3>
      <h3>Richmond, VA</h3>
      <h3>Aug 2020 - May 2024</h3>


      <h2>Work Experience</h2>
      <h3>Capital One</h3>
      <h3>McLean, VA</h3>
      <h3>Full Stack Software Engineer Intern</h3>
      <h3>Aug 2023 - Present</h3>
      <ul className={"list-disc list-inside"}>
        <li>Developed Jest unit tests for components and API calls, achieving an overall test coverage of 95.3%</li>
        <li>Decoupled application tests to reduce the infrastructure load on Jenkins by migrating to 7PS platform and integrating into the CI/CD pipeline</li> 
        <li>Maintained microservice application by utilizing Docker to test the application and analyzed Jenkins logs to identify and resolve deployment issues</li> 
        <li>Developing full-stack applications within a microservice architecture using frameworks such as Vue.js and React.js</li> 
      </ul>

      <h3>AMC Technology</h3>
      <h3>Richmond, VA</h3>
      <h3>Software Engineer Intern</h3>
      <h3>Jun 2023 - Aug 2023</h3>
      <ul className={"list-disc list-inside"}>
        <li>Collaborated with a developer to design and engineer a web application in Angular that records and manipulates CRM data to automate client tasks</li>
        <li>Implemented the DaVinci API to establish a connection between the CRM, CTI, and web application to enable data accessibility</li> 
        <li>Operated developer tools to help route, analyze, and debug network and program errors</li> 
        <li>Researched OAuth2 to architect an Express server for secure and efficient user authentication</li> 
      </ul>

      <h3>Bank of America</h3>
      <h3>Richmond, VA</h3>
      <h3>Mobile Application Developer Intern</h3>
      <h3>Feb 2022 - Aug 2022</h3>
      <ul className={"list-disc list-inside"}>
        <li>Developed frontend components for a mobile application using React Native Expo</li>
        <li>Corresponded with multidisciplinary cross-functional teams to design intuitive and dynamic modules</li> 
        <li>Conducted user research and testing to identify pain points and managed user suggestions to increase user engagement</li> 
      </ul>

      <h2>Projects</h2>
      <h3>Capital One Capstone (Angular | Python)</h3>
      <h3>Aug 2023 - Present</h3>
      <ul className={"list-disc list-inside"}>
        <li>Researched and implemented AWS technologies to develop a full-stack cloud-based application</li>
        <li>Utilized Angular and Flask to develop RESTful API endpoints that communicate with DynamoDB</li> 
        <li>Managed and processed large amounts of data & credit card transactions generated with Stripe API</li>
        <li>Developed Python scripts to process large CSV files and utilized Bcrypt to hash passwords to store in DynamoDB</li>
      </ul>

      <h3>Software for Social Good (Next.js | MySQL)</h3>
      <h3>Aug 2022 - May 2023</h3>
      <ul className={"list-disc list-inside"}>
        <li>Leveraged knowledge acquired in Database Theory (CMSC 508) to design an ERD that stores and manages system data</li>
        <li>Integrated MySQL database with Next.js frontend to display data in an intuitive manner</li> 
        <li>Programmed frontend components and user interactions, ensuring a responsive and user-friendly interface</li>
        <li>Collaborated with cross-functional teams to gather requirements and develop database solutions that met business needs</li>
      </ul>

      <h2>Skills</h2>

    </main>
  );
}
