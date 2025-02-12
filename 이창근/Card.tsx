/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import { DataType } from "../App";
import "./Card.css";

interface CardProps {
  data: DataType;
  onBookMark: (title: string) => void;
}

function Card({ data, onBookMark }: CardProps) {
  return (
    <li className="card--container" id={`${data.title} ${data.upload_date}`}>
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{data.upload_date}</span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark">
            <i
              className={`fa fa-bookmark ${data.bookmark ? "bookmarked" : ""}`}
              onClick={() => onBookMark(data.title)}
            />
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{data.title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{data.views}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
