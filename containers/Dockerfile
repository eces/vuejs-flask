FROM node:8

ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 3000:3000

ENV NODE_ENV=production

CMD [ "bash", "/app/prod_entrypoint.sh" ]