FROM node:18 as build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
#RUN npm run build

# Expose the default port for Next.js
EXPOSE 3000

# Start the production server
#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]
