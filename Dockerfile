FROM node:14-slim
WORKDIR /opt/agency
COPY . .
RUN npm install
CMD ["npm", "start"]