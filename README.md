# Polilibro Académico de Finanzas Empresariales

Digital resource with information related to business finance, whose content is developed by professors of the Instituto Politécnico Nacional who teach these classes at the Escuela Superior de Cómputo. It aims to support students' learning so that they can consult it at any time during and out of class session.

[See the app up and running](https://thirsty-engelbart-1b9acf.netlify.app/).

This frontend app project uses React library and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run app with docker

Run web application with Docker container with Nginx server

Preconditions:

1. Have Docker and docker-compose installed.
2. Have Docker's deamon running.
3. Port 8080 should be available

At the terminal in the root folder run the command `docker-compose up -d --build`. This will always build the project's image and run a container for it. Then open your browser on `localhost:8080` and the app should be shown.

To stop the container just run `docker-compose down`, this will also delete the container when it has stopped.
