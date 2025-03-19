import React, { useState } from "react";
import './App.css';

// Made by SHREYA KUMARI 22BSA10327

// Text Updater Component
function TextUpdater() {
  const [text, setText] = useState("");
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-pink-200 mb-4">
      <h3 className="text-pink-700 font-bold mb-2">Text Updater</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border border-pink-300 rounded"
        placeholder="Type something here..."
      />
      <div className="mt-2 p-2 bg-pink-50 rounded">
        <p className="text-pink-600">You typed: {text || "Nothing yet"}</p>
      </div>
    </div>
  );
}

// Simple Form Component
function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted:", inputValue);
    alert("Form submitted! Check console for details");
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-purple-200 mb-4">
      <h3 className="text-purple-700 font-bold mb-2">Simple Form</h3>
      <form onSubmit={handleSubmit}>
        <label className="block text-purple-600 mb-1">Enter Text:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-purple-300 rounded mb-2"
          placeholder="Enter something..."
        />
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// User Card Component
interface UserCardProps {
  name: string;
  email: string;
}

function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-indigo-200 mb-4">
      <div className="flex items-center">
        <div className="h-10 w-10 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{name.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <h3 className="text-indigo-700 font-bold">{name}</h3>
          <p className="text-indigo-500">{email}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-indigo-100">
        <div className="flex justify-between">
          <button className="text-pink-500">Contact</button>
          <button className="text-indigo-500">Profile</button>
        </div>
      </div>
    </div>
  );
}

// Button Component
function CustomButton() {
  function handleClick() {
    console.log("Button clicked!");
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-pink-200 mb-4 text-center">
      <h3 className="text-pink-700 font-bold mb-2">Interactive Button</h3>
      <button
        className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-md"
        onClick={handleClick}
      >
        Click Me
      </button>
      <p className="mt-2 text-sm text-pink-500">Clicks are logged to console</p>
    </div>
  );
}

// Login Form Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-purple-200 mb-4">
      <h3 className="text-purple-700 font-bold mb-3">Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-purple-600 mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-purple-300 rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-purple-600 mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-purple-300 rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white p-2 rounded shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2">
            SHREYA KUMARI 22BSA10327
          </h1>
          <p className="text-purple-600">React Components with Tailwind CSS</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <TextUpdater />
          <SimpleForm />
          <UserCard name="SHREYA KUMARI" email="22BSA10327@gmail.com" />
          <CustomButton />
          <div className="md:col-span-2">
            <LoginForm />
          </div>
        </div>
        
        <footer className="mt-8 text-center text-pink-500 text-sm">
          <p>Created with ❤️ by SHREYA KUMARI 22BSA10327</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
