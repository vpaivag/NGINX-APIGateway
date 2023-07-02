FROM node:19.7-alpine

# Create app directory
WORKDIR /socket

# Install app dependencies
COPY ./package*.json ./
RUN npm install  

# Bundle app source
COPY ./index.js ./

EXPOSE 3000

CMD ["node", "index.js"]
