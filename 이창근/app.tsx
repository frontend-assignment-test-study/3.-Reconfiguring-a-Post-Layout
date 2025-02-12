import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import data from './data/posts.json';

export interface DataType {
  title : string;
  views: number;
  upload_date : string;
  bookmark: boolean;
}

function App() {
  const [cardData, setCardData] = useState<DataType[]>([]);
  const [sortType, setSortType] = useState("1");

  useEffect(() => {
    const initializedData = data.map((item) => ({
      ...item,
    }));
    setCardData(sortData(initializedData, sortType));
    
  }, []);

  const sortData = (data: typeof cardData, type: string) => {
    return [...data].sort((a, b) => {
      if (a.bookmark === b.bookmark) {
        if (type === "1") {
          return new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime();
        } else if (type === "2") {
          return b.views - a.views;
        }
        return 0;
      }
      return b.bookmark ? 1 : -1;
    });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setSortType(type);
    setCardData((prevData) => sortData(prevData, type));
  };

  const handleBookMark = (title: string) => {
    setCardData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.title === title ? { ...item, bookmark: !item.bookmark } : item
      );
      return sortData(updatedData, sortType); 
    });
  };

  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type" value={sortType} onChange={handleSort}>
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        {cardData.map((data) => (
          <Card key={`${data.title} ${data.upload_date}`} data={data} onBookMark={handleBookMark} />
        ))}
      </div>
    </div>
  );
}

export default App;
