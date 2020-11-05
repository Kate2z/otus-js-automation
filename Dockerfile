FROM alekzonder/puppeteer

ADD package.json /app/package.json
WORKDIR /app
RUN npm i
ADD ./ /app
CMD npx codeceptjs run