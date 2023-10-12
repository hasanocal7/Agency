FROM node:14-slim
WORKDIR /opt/agency
COPY . .
ENV PORT=3000
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]