git clone repository

npm install

docker-compose up ––build

NOTES:

•	The docker-compose.yml file holds the whole environment layout: 3 x web servers, 1 x load-balancer.

•	The Nginx load-balancer service is the only port exposed from the container.

•	Nginx is set to port-forward on port 80 on localhost.

•	The static server-side code server.js is load-balanced on each page refresh.
