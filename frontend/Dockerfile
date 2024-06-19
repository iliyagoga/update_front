FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm install
#RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

#FROM nginx:latest
#COPY --from=build /app/build /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
