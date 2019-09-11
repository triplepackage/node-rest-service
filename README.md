# Node REST Endpoint
<pre>
Johns-MBP:node-utilities admin$ nodemon --inspect server.js
</pre>

## Build Docker container
<pre>
docker build -t node_rest_service . -f ./docker/Dockerfile
</pre>

## Run Docker container
Below shows how to inject environment variables into to the Docker instance
<pre>
docker run --env DATASOURCE_URL=172.17.0.2 --env DATASOURCE_USERNAME=username --env DATASOURCE_PASSWORD=password --env DATASOURCE_DATABASE=rental --env PORT=8181 -p 8181:8181 --name node_rest_service node_rest_service

</pre>

## Navigate to Swagger Docs
<pre>
http://localhost:8181/api-docs/
</pre>
![Alt text](./images/image-004.jpg?raw=true "Swagger Docs")

## To Debug NodeJS
![Alt text](./images/image-002.jpg?raw=true "Step 01")
![Alt text](./images/image-001.jpg?raw=true "Step 02")
![Alt text](./images/image-003.jpg?raw=true "Step 03")



