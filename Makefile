mongo:
	docker run -p 27017:27017 -d --rm --name mongodb --network notes-net --env-file ./config/development.env -v mongo_data:/data/db mongo

backand:
    docker run -p 5000:5000 --rm -d --name notes-backand --network notes-net -v C:\Users\Dom\Desktop\docker-mern\server:/app:rw -v /app/node_modules --env-file ./config/development.env notes-backand

frontend:
    docker run -p 3000:3000 -d --rm --name notes-frontend -e CHOKIDAR_USEPOLLING=true -v C:\Users\Dom\Desktop\docker-mern\client\src:/app/src notes-frontend
stop:
    docker stop mongodb notes-backand notes-frontend
dev:
    docker-compose -f docker-compose.yml up -d
build:
    docker-compose -f docker-compose.production.yml up -d
down:
    docker-compose down


# SSH
ssh:
    ssh root@70.34.249.99
copy-files:
    scp -r ./* root@70.34.249.99:/root/app