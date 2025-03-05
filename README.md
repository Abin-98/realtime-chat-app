📝 Real-Time Chat App (Socket.io & MongoDB)

🚀 A real-time chat application built using the MERN stack with Socket.io for real-time messaging and MongoDB for storing chat history.
✨ Features

    🔥 Real-time messaging using WebSockets
    💾 Persistent chat storage with MongoDB
    ⚡ Express.js backend with WebSockets support
    🎨 React frontend with Socket.io client integration
    🛠 User-friendly and intuitive UI
    🏎 Fast and responsive chat experience

📌 Tech Stack

    Frontend: React, Socket.io Client
    Backend: Node.js, Express, Socket.io
    Database: MongoDB (Mongoose)
    Deployment: Vercel/Netlify (Frontend) & Render/Heroku (Backend)

📂 Project Structure

real-time-chat/
├── client/   # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── server/   # Node.js + Express backend
│   ├── models/
│   │   ├── Message.js
│   ├── routes/
│   │   ├── messages.js
│   ├── index.js
│   ├── config/
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── README.md
└── package.json

🚀 Getting Started
1️⃣ Clone the Repository

git clone https://github.com/your-username/real-time-chat.git
cd real-time-chat

2️⃣ Backend Setup

cd server
npm install
npm start

3️⃣ Frontend Setup

cd ../client
npm install
npm run dev

4️⃣ Run the App

    Open http://localhost:5173 in your browser
    Open multiple tabs to test real-time messaging

🔧 API Endpoints
Method 	Endpoint 	Description
GET 	/messages 	Fetch chat history
POST 	/messages 	Save a new message
⚡ How It Works

    The frontend (React) connects to the backend using Socket.io client.
    The backend (Express + Socket.io) listens for new messages and broadcasts them in real-time.
    Messages are stored in MongoDB, ensuring chat history persistence.
    When a user opens the app, they receive the latest messages from MongoDB.
    New messages appear instantly without refreshing the page!

📸 Screenshots
![Screenshot 2025-03-05 231608](https://github.com/user-attachments/assets/9840030e-c7ba-4939-a008-332d26caf692)

💬 Chat Interface

Chat UI
🚀 Deployment
🌐 Deploy Backend (Render/Heroku)

    Set up MongoDB Atlas
    Add .env file with your database URI
    Deploy to Render or Heroku

🌐 Deploy Frontend (Vercel/Netlify)

    Build the React app

npm run build

    Deploy to Vercel or Netlify
