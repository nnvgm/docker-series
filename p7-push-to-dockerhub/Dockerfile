FROM alpine

WORKDIR /app

COPY . .

RUN chmod +x ./docker-entrypoint.sh

CMD ["sh", "docker-entrypoint.sh"]