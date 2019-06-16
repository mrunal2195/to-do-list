# Frontend Staged build
FROM node:8.11.1-alpine as frontend-stage
WORKDIR /app

COPY frontend/package*.json /tmp/
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules .

COPY /frontend .
RUN cat ./src/services/listService.js
RUN npm run build


# Backend Build
FROM node:8.11.1-alpine

WORKDIR /app

RUN apk add --no-cache --update bash
COPY backend/package*.json /tmp/
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules .

COPY /backend .
COPY --from=frontend-stage /app/build ./src/www
EXPOSE 8080

ENV NAME to-do
CMD ["npm", "run", "start"]