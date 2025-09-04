import { useEffect, useState } from "react";
import api from "../api";
import UserCard from "./UserCard";

export default function UserList({ fetchUsersSignal, onEdit }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsersSignal]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <UserCard key={user._id} user={user} onEdit={onEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
}
