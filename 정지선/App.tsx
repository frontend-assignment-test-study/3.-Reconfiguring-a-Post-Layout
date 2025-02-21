/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import posts from "./data/posts.json";

export interface Post {
  title: string;
  views: number;
  upload_date: string;
  bookmark: boolean;
}

function App() {
  const [postList, setPostList] = useState(posts);
  const [option, setOption] = useState("1");

  useEffect(() => {
    setPostList(sortedByDate(posts));
  }, []);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOption(value);
    setPostList(applySorting(postList, value));
  };

  const applySorting = (list: Post[], value: string) => {
    let sortedList = value === "1" ? sortedByDate(list) : sortedByViews(list);
    return sortedByBookMark(sortedList);
  };

  const sortedByDate = (list: Post[]) => {
    return [...list].sort((a, b) => {
      const dateA = new Date(a.upload_date).getTime();
      const dateB = new Date(b.upload_date).getTime();
      return dateB - dateA;
    });
  };
  const sortedByViews = (list: Post[]) => {
    return [...list].sort((a, b) => {
      return b.views - a.views;
    });
  };

  const sortedByBookMark = (list: Post[]) => {
    return [...list].sort((a, b) => Number(b.bookmark) - Number(a.bookmark));
  };

  const changeBookMark = (id: string) => {
    setPostList((prev) => {
      const updatedList = prev.map((post) =>
        `${post.title}-${post.upload_date}` === id
          ? { ...post, bookmark: !post.bookmark }
          : post
      );
      return applySorting(updatedList, option);
    });
  };

  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type" onChange={handleSort}>
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        {postList.map((post) => (
          <Card
            key={`${post.title}-${post.upload_date}`}
            post={post}
            changeBookMark={changeBookMark}
          />
        ))}
      </div>
      a
    </div>
  );
}

export default App;
