import { Link } from "react-router-dom";
import "./UserList.css";

const users = [
  { id: 1, name: "Nguyễn Anh Xuân Trường" },
  { id: 2, name: "Nguyễn Hoàng Khải" },
  { id: 3, name: "Nguyễn Gia Hào" },
];

function UserList() {
  return (
    <div className="container">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
