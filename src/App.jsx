import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// MY_CONTEXT
export const MyContext = React.createContext();
// ROUTES
const router = createBrowserRouter(routes);

function App() {
  const [userData, setUserData] = useState([]);

  const apiURL = "https://jsonplaceholder.typicode.com/users";

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData(apiURL);
  }, []);

  return (
    <>
      <MyContext.Provider value={{ userData }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
