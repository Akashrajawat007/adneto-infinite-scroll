import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./components/Quote";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoreItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=10`
      );
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMoreItems();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchMoreItems();
        }
      },
      { threshold: 1 }
    );

    if (items.length > 0) {
      const lastItem = document.getElementById(`item-${items.length - 1}`);
      if (lastItem) {
        observer.observe(lastItem);
      }
    }

    return () => observer.disconnect();
  }, [items, loading]);

  return (
    <div className="App">
      <div className="container">
        <h1>Programming Quotes</h1>
        {items.map((item, index) => (
          <div key={index} id={`item-${index}`}>
            <Quote data={item}></Quote>
          </div>
        ))}
        {/* {loading && ( */}
          <div className="loader show">
            <div></div>
            <div></div>
            <div></div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
