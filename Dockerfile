ARG NODE_VERSION=20.12.2
FROM --platform=linux/amd64 node:${NODE_VERSION}-alpine as base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN API=$API npm run build

FROM --platform=linux/amd64 nginx:alpine
COPY --from=base /app/dist /usr/share/nginx/html
COPY ./replace_env.sh /replace_env.sh

RUN chmod +x /replace_env.sh

EXPOSE 80
# replace_env puts API url in window context
CMD /bin/sh '/replace_env.sh' && nginx -g "daemon off;"
