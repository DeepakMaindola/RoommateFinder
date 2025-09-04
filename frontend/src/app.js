import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [editingUser, setEditingUser] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const fetchUsers = () => setRefresh((prev) => prev + 1);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Roommate Finder</h1>
      <UserForm fetchUsers={fetchUsers} editingUser={editingUser} setEditingUser={setEditingUser} />
      <UserList fetchUsersSignal={refresh} onEdit={setEditingUser} />
    </div>
  );
}
