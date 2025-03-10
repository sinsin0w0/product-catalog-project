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
