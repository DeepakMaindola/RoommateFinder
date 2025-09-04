export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{user.name} ({user.age}, {user.gender})</h3>
        <p>Email: {user.email}</p>
        <p>Budget: ₹{user.budget}</p>
        <p>Location: {user.location}</p>
        <p>Lifestyle: {user.lifestyle}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(user._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}
