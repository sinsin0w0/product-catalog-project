# Product Catalog Project

This is a full-stack product catalog project that includes a **backend** and two frontends:
- **Web Frontend** built with **React.js**.
- **Mobile Frontend** built with **React Native**.

The project allows users to browse, search, and sort products by price. Users can view product details and images. If an image is unavailable, a default image will be displayed.

---

## Project Structure

```
/product-catalog-project
 ├── /backend
 ├── /react-native
 ├── /react-web
 ├── README.md
```
- **`/backend`**: Contains the Node.js and Express backend with MongoDB integration.
- **`/react-native`**: Contains the React Native mobile app.
- **`/react-web`**: Contains the React.js web app.

---

## Solution Overview

This solution consists of a full-stack application with the following components:

1. **Backend (Node.js + Express + MongoDB)**:
   - Exposes a set of API endpoints to interact with products stored in a MongoDB database.
   - Handles product data like name, description, price, and image URL.

2. **Frontend (React.js)**:
   - A web frontend where users can view the products, search, sort by price, and view product details.

3. **Frontend (React Native)**:
   - A mobile app where users can perform similar operations as the web frontend but on mobile devices.

---

## Setting Up the Project

Follow these steps to set up the project locally for both backend and frontends.

### 1. **Setting Up the Backend**

#### Prerequisites:
- Node.js (v14 or higher)
- MongoDB (either local installation or MongoDB Atlas for cloud storage)

#### Steps:

1. Navigate to the `/backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:
   - If using **MongoDB Atlas**: Create a cluster and get your MongoDB URI.
   - If using **local MongoDB**: Ensure MongoDB is running on your local machine.

4. Create a `.env` file in the `/backend` directory with the following content:

   ```
   MONGO_URI=<your_mongodb_uri>
   PORT=5000
   ```

5. Run the backend server:

   ```bash
   npm start
   ```

   The backend should now be running on [http://localhost:5000](http://localhost:5000).

---

### 2. **Setting Up the Web Frontend (React.js)**

#### Prerequisites:
- Node.js (v14 or higher)

#### Steps:

1. Navigate to the `/react-web` directory:

   ```bash
   cd react-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React web app:

   ```bash
   npm start
   ```

   The web app should now be running on [http://localhost:3000](http://localhost:3000).

---

### 3. **Setting Up the Mobile Frontend (React Native)**

#### Prerequisites:
- Node.js (v14 or higher)
- React Native CLI
- Android Studio / Xcode (depending on your platform)

#### Steps:

1. Navigate to the `/react-native` directory:

   ```bash
   cd react-native
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. If you're using **Android**, make sure **Android Studio** is installed and set up. For **iOS**, make sure **Xcode** is installed.

4. Run the mobile app (for Android):

   ```bash
   npx react-native run-android
   ```

   Or for iOS:

   ```bash
   npx react-native run-ios
   ```

---

## API Endpoint Details

The backend exposes the following API endpoints:

### 1. **GET /products**
- **Description**: Fetches a list of all products.
- **Response**:
  ```json
  [
    {
      "_id": "1",
      "name": "Product 1",
      "description": "Product 1 description",
      "price": 19.99,
      "imageUrl": "http://example.com/image1.jpg"
    },
    ...
  ]
  ```

### 2. **GET /products/:id**
- **Description**: Fetches details for a specific product by ID.
- **Response**:
  ```json
  {
    "_id": "1",
    "name": "Product 1",
    "description": "Detailed description of Product 1",
    "price": 19.99,
    "imageUrl": "http://example.com/image1.jpg"
  }
  ```

### 3. **POST /products**
- **Description**: Adds a new product (requires authentication).
- **Body**:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 20.99,
    "imageUrl": "http://example.com/image.jpg"
  }
  ```
---

## Live Deployments (If Applicable)

- **Backend (API)**: [https://your-backend-api.com](https://your-backend-api.com)
- **Web Frontend**: [https://your-web-frontend.com](https://your-web-frontend.com)
- **Mobile Frontend**: Available on the App Store / Google Play (optional)

---

## Troubleshooting

- **Backend Not Starting**:
  - Ensure MongoDB is running and accessible.
  - Check that you have added the correct MongoDB URI in the `.env` file.

- **Mobile App Not Building**:
  - Ensure you have the correct environment set up for Android or iOS.
  - Run `npx react-native doctor` to check for environment issues.

- **CORS Issues (For Web)**:
  - Ensure that CORS is properly configured in the backend if you encounter cross-origin issues.

---

## Conclusion

This project demonstrates a simple product catalog system using a full-stack approach with a backend powered by Node.js and Express, a web frontend built with React.js, and a mobile frontend developed using React Native.

If you need any help with the setup or have further questions, feel free to open an issue or reach out!
