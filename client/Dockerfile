# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /srv/app/client

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /srv/app/client
COPY package-lock.json /srv/app/client
RUN npm install 
# RUN npm install react-scripts@3.0.1 -g 

COPY . /srv/app/client

# start app
CMD ["npm", "start"]
