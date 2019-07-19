# base image
FROM node:10.16-alpine

# set working directory
WORKDIR /usr/src/app

# environment vars must be included in dockerfile
# change node_env to 'development' in order for it to work locally
ARG NODE_ENV=production

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /usr/src/app/

RUN npm install && npm run frontend-install && npm run frontend-build

# Start application
CMD ["npm", "run", "start"]