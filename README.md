# assignment 
## **Transaction Manager App**

### **Project Overview**

This is a sample **Transaction Manager** app built using **React.js** for the frontend and **Node.js/Express.js** for the backend, with **MongoDB** as the database. The app allows users to manage their transactions (income and expenses), filter transactions, and display a summary of total income, total expenses, and the current balance.

### **Features**

* Add, edit, delete transactions.  
* Filter transactions by type (Income/Expense) and date.  
* View a list of all transactions.  
* View a summary of total income, total expenses, and balance.

### **Tech Stack**

* **Frontend**: React.js  
* **Backend**: Node.js, Express.js  
* **Database**: MongoDB (MongoDB Atlas)  
* **Deployment**:  
  * Frontend: Netlify  
  * Backend: Heroku  
  * Database: MongoDB Atlas

---

## **Getting Started**

### **Prerequisites**

To run this project locally, you'll need the following installed on your machine:

* Node.js (v12 or higher)  
* npm (v6 or higher)  
* MongoDB (You can use MongoDB Atlas for cloud-based MongoDB)

### **Installation**

#### **Clone the repository**

bash  
Copy code  
`git clone https://github.com/yourusername/transaction-manager.git`  
`cd transaction-manager`

### **Backend Setup**

**Navigate to the `backend/` directory**:  
bash  
Copy code  
`cd backend`

1. 

**Install dependencies**:  
bash  
Copy code  
`npm install`

2. 

**Create a `.env` file** in the `backend/` directory and add the following:  
bash  
Copy code  
`MONGO_URI=your-mongodb-uri`  
`PORT=5000`

3. 

**Run the backend server**:  
bash  
Copy code  
`npm start`

4. The server should now be running on `http://localhost:5000`.

### **Frontend Setup**

**Navigate to the `frontend/` directory**:  
bash  
Copy code  
`cd frontend`

1. 

**Install frontend dependencies**:  
bash  
Copy code  
`npm install`

2. 

**Start the frontend development server**:  
bash  
Copy code  
`npm start`

3. The React app should now be running on `http://localhost:3000`.

---

## **API Endpoints**

### **Backend API**

The following API routes are exposed by the backend (Node.js, Express.js):

| HTTP Method | Endpoint | Description |
| ----- | ----- | ----- |
| `GET` | `/api/transactions` | Get all transactions |
| `POST` | `/api/transactions` | Add a new transaction |
| `PUT` | `/api/transactions/:id` | Edit an existing transaction by its `id` |
| `DELETE` | `/api/transactions/:id` | Delete a transaction by its `id` |

---

## **Deployment**

### **Frontend Deployment on Netlify**

**Build the React app for production**:  
bash  
Copy code  
`npm run build`

1.   
2. **Deploy on Netlify**:  
   * Go to [Netlify](https://www.netlify.com) and log in.  
   * Select **"New site from Git"**, choose your repository, and configure build settings:  
     * Build command: `npm run build`  
     * Publish directory: `build/`

### **Backend Deployment on Heroku**

**Create a Heroku app**:  
bash  
Copy code  
`heroku create`

1. 

**Add MongoDB URI to Heroku environment variables**:  
bash  
Copy code  
`heroku config:set MONGO_URI="your-mongodb-uri"`

2. 

**Push your code to Heroku**:  
bash  
Copy code  
`git push heroku master`

3. 

---

## **Built With**

* **React.js** \- JavaScript library for building user interfaces  
* **Node.js** \- JavaScript runtime for the backend  
* **Express.js** \- Web framework for Node.js  
* **MongoDB** \- NoSQL database for storing transaction data  
* **Netlify** \- For deploying the frontend  
* **Heroku** \- For deploying the backend

