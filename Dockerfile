FROM node:16.18.0-alpine AS reactbuild

WORKDIR /polilibro

COPY package-lock.json /polilibro/

COPY package.json /polilibro/

RUN npm install

COPY . /polilibro/

RUN npm run build

#Nginx Server build 
FROM nginx:stable-alpine

COPY --from=reactbuild /polilibro/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]