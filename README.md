Carousel Test
================

### Prerequisites

Assume that below package is already available. Else, Please run below command.

1. Install nvm:
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    ```
2. Ensure nvm is installed:
    ```
    nvm --version
    ```
3. Install node:
    ```
    nvm install node
    ```
4. Ensure node is installed:
    ```
    nvm use node
    ```

#### Running from Command Line

1. Please install the npm dependencies:
    ```
    npm install
    ```   
2. Please run below command to start the application:
    ```
    npm run start
    ```
4. To view application, Please hit this URL **http://127.0.0.1:8082/** to open it.
5. Please run below command to run the test:
    ```
    npm run test
    ```
   
#### Notes/Comments

1. Developed carousel by using React, React hooks, styled components, sass. Jest has been used for test.
2. Webpack has been used to build and run the project.
3. As said in test , have fetched images from API by using React hooks. Web pack proxy has been used to proxy the request to `https://pixabay.com/`
4. Different Carousel styles has been set for Mobile and desktop. 
5. Containers and Components structure has been used to build Carousel. 
6. Top header has been introdced to just show the navigation items. And, React ContextAPI has been used to update theme. Top header has `Change theme` button to update the style with respect to theme. Currently it supports dark and light theme.
7. Variables.scss has been used to keep all constants related to styles.
8. I suggest we could use Redux as a store management system to load the data. And, we could use saga as middleware. React hooks helps to write simple and descriptive code such as `useSelector, useReducer` etc.,