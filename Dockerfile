#Set the base image
FROM node:latest

#Rund this mkdir command to make new directory
RUN mkdir /Dockerfiles

#Set the directory
WORKDIR /Dockerfiles

#copy the package.json file with all dependencies
COPY package.json .

#Run npm install
RUN npm install

#Copy all of the app files to the container
COPY . . 

#Exposes this port on the container to the outside world
EXPOSE 3000



# Then last we run npm start to open up app
CMD ["npm", "start"]