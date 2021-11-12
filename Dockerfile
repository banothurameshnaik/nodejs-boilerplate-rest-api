FROM node:10.16.3-alpine

LABEL author="Banothu Ramesh Naik"

WORKDIR /user/app

COPY package.json package.json

COPY dist dist

COPY node_modules node_modules

CMD [ "npm", "run", "docker-serve" ]
