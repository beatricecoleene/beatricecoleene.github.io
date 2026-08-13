import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage.jsx"
function Home() {
  return <h1 className="text-2xl">Home Page</h1>
}

function About() {
  return <h1 className="text-2xl">About Page</h1>
}

export default function App() {
  return <MainPage />;
}