FROM node:lts as dependencies
WORKDIR /project
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /project
COPY . .
COPY --from=dependencies /project/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /project
COPY .env /project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /project/next.config.js ./
COPY --from=builder /project/public ./public
COPY --from=builder /project/.next ./.next
COPY --from=builder /project/node_modules ./node_modules
COPY --from=builder /project/package.json ./package.json


EXPOSE 3000
CMD ["yarn", "start"]
