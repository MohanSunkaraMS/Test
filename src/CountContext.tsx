import React, { useEffect, useState } from "react";
import UserCard from "./Card"; // correct path to your Card.tsx

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
};

interface UsersProps {
  search: string | null;
}

const Users: React.FC<UsersProps> = ({ search }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ✅ Correct filtering logic as a variable
  const filteredUsers = users.filter((user) => {
    const query = (search || "").toLowerCase()
    return { user.name.toLowerCase().includes(query) }
       
    
    
  }

  
  
  );

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading users...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500">No users match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} onSelect={setSelectedUser} />
          ))}
        </div>
      )}

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>
            <p>
              <span className="font-semibold">Email:</span> {selectedUser.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {selectedUser.phone}
            </p>
            <p>
              <span className="font-semibold">Company:</span> {selectedUser.company.name}
            </p>
            <p>
              <span className="font-semibold">City:</span> {selectedUser.address.city}
            </p>

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              MOHAN Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
