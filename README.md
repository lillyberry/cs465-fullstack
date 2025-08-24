Full Stack Travel Application
Overview

This project is a full stack web application that provides both customer-facing and administrative functionality. Customers can browse and view trips, while administrators can securely log in to manage trip information. The application includes a secure login system, API endpoints, and a MongoDB backend to support reliable data management.

Architecture

This project uses multiple approaches to frontend development. Early in the process, Express with static HTML and JavaScript was used to render pages and handle basic interactions. This approach was straightforward but limited in flexibility. As the project evolved, the application transitioned into a single-page application (SPA) built with Angular. The SPA provides a smoother, faster user experience by dynamically updating only the necessary parts of the page, reducing reloads and improving responsiveness.

The backend uses a NoSQL MongoDB database because of its flexibility in handling unstructured and semi-structured data. MongoDB allows trip documents to easily store nested information such as trip codes, details, and prerequisites without requiring strict schemas. This makes it ideal for an application where the data model may evolve over time, while still offering scalability and performance.

Functionality

JSON (JavaScript Object Notation) is different from JavaScript in that it is a lightweight data format, not an executable programming language. It uses a strict key-value pair structure that can be universally parsed across different programming environments. JSON serves as the “glue” between the frontend and backend, as it allows the SPA to send and receive structured data through RESTful API endpoints, ensuring seamless communication.

Throughout development, I refactored code to improve functionality and efficiency. For example, reusable components were created for trip cards, forms, and navigation elements in the Angular frontend. This not only reduced redundancy in the codebase but also improved maintainability. Reusable UI components provide consistency in design, simplify debugging, and make future updates easier to implement.

Testing

Testing in a full stack environment required validating API endpoints for both request and retrieval. GET requests were tested to ensure accurate retrieval of trip data, while POST, PUT, and DELETE requests were validated for proper creation, updates, and deletion of records. With authentication added, testing became more complex because endpoints required secure JWT tokens. This reinforced the importance of understanding HTTP methods, endpoint structures, and authentication flows in a secure application.

By testing endpoints both with and without valid tokens, I ensured the system correctly restricted unauthorized access while still allowing seamless data interaction for authenticated users. This process highlighted the balance between usability and security in full stack applications.

Reflection

This course has greatly helped me progress toward my professional goals by providing hands-on experience with building, securing, and testing a full stack application. I have learned how to integrate frontend and backend technologies, implement RESTful APIs, and manage data with a NoSQL database. Most importantly, I gained experience with secure authentication, which is a critical skill for any real-world application.

I have also developed stronger skills in refactoring, debugging, and designing with reusability in mind. These skills make me a more marketable candidate in the software engineering field, as employers seek developers who can deliver both functional and secure applications. Overall, this project has given me the confidence to approach full stack development challenges and contribute effectively in professional environments.
