###  **Setting Up the Backend**

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
## Live Deployments - **Backend (API)**:
✔ Service deployed to stack product-catalog-backend-dev (78s)

### Endpoints:
- **GET** - [https://fenseflvoh.execute-api.us-east-1.amazonaws.com/dev/products](https://fenseflvoh.execute-api.us-east-1.amazonaws.com/dev/products)
- **GET** - [https://fenseflvoh.execute-api.us-east-1.amazonaws.com/dev/product/{id}](https://fenseflvoh.execute-api.us-east-1.amazonaws.com/dev/product/{id})
- **POST** - [https://fenseflvoh.execute-api.us-east-1.amazonaws.com/dev/product](https://fenseflvoh.execute-api.us-east-1.amazonaws.com/dev/product)

### Functions:
- **getProducts**: `product-catalog-backend-dev-getProducts (8.6 MB)`
- **getProduct**: `product-catalog-backend-dev-getProduct (8.6 MB)`
- **createProduct**: `product-catalog-backend-dev-createProduct (8.6 MB)`
