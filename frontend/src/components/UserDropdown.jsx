export default function UserDropdown({ users, onSelect }) {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">-- Select User --</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
