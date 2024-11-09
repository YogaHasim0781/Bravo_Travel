# Dockerfile (frontend)
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Build aplikasi React
RUN npm run build

# Install serve untuk serving aplikasi React
RUN npm install -g serve

# Expose port (sesuaikan dengan port frontend, misalnya 3000)
EXPOSE 3000

# Jalankan aplikasi React menggunakan serve
CMD ["serve", "-s", "build","-l","3000"]