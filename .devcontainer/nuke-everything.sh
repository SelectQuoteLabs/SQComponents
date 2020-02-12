if [ -f /.dockerenv ]; then
    echo "Do not run this inside a docker container!  Exit vscode and run this in a terminal.";
else
    docker-compose -f ./docker-compose.yml -f ../docker-compose.yml down
    docker system prune -f --volumes
    docker-compose -f ./docker-compose.yml -f ../docker-compose.yml rm
    docker builder prune -af
    docker-compose -f ./docker-compose.yml -f ../docker-compose.yml pull
    docker-compose -f ./docker-compose.yml -f ../docker-compose.yml build --no-cache
fi