/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
// import { Post } from "../App";
import "./Card.css";

function Card({ post, changeBookMark }) {
  const ID = `${post.title}-${post.upload_date}`;
  return (
    <li className="card--container" id={ID}>
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{post.upload_date}</span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark">
            <i
              className={`fa fa-bookmark ${post.bookmark ? "active" : ""}`}
              onClick={() => changeBookMark(ID)}
            ></i>
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{post.title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{post.views}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
