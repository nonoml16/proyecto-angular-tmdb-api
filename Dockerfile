FROM node:latest as build
LABEL stage=builder
WORKDIR /app/
COPY . /package.json/ /app/
RUN npm install 

COPY ./ /app/

RUN npm run build

FROM nginx:latest
WORKDIR /app/
COPY --from=build /app/dist/proyecto-angular-tmdb-api /usr/share/nginx/html

ENTRYPOINT [ "npm" ]
CMD [ "run", "start:prod" ]
EXPOSE 80