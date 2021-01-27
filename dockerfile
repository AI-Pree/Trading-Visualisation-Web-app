ARG NODE_VERSION=node:12-buster

#base image for dev and build stage
FROM ${NODE_VERSION} as client-web-dev

#create a app directory
WORKDIR /client-app

# Install app dependencies
# wildcard is used to ensure both package.json and package-lock.json
# are copies
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle the app source
COPY . .

#creating testing environment
#CMD ["npx", "jest --coverage"]

CMD ["npm", "start"]