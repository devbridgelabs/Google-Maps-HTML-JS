FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]


# Comandos para deploy:

# gcloud builds submit --tag gcr.io/angular8-349013/angular8-349013
# gcloud run deploy --image gcr.io/angular8-349013/angular8-349013 --platform managed