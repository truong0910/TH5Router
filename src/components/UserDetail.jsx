import { useParams } from "react-router-dom";
import "./UserDetail.css";

const users = [
  {
    id: 1,
    name: "Nguyễn Anh Xuân Trường",
    age: 21,
    email: "a@example.com",
    img: <img src="/img/images (1).jpg" alt="user" />,
  },
  {
    id: 2,
    name: "Nguyễn Hoàng Khải",
    age: 21,
    email: "b@example.com",
    img: <img src="/img/images.jpg" alt="user" />,
  },
  {
    id: 3,
    name: "Nguyễn Gia Hào",
    age: 21,
    email: "c@example.com",
    img: <img src="/img/tải xuống.jpg" alt="user" />,
  },
];
function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return <h2>Người dùng không tồn tại</h2>;
  }
  return (
    <div>
      <p>{user.img}</p>
      <h1>{user.name}</h1>
      <p>Tuổi: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
export default UserDetail;
