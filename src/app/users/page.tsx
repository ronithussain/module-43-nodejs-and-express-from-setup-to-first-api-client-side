import { Suspense } from "react";

const UsersPage = async () => {
  const data = await fetch("http://localhost:5000/users");
  const users = await data.json();
  console.log(users);
  return (
    <div>
      {users.map((user: { id: number; name: string; email: string }) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

const UserList = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <h1>All Users</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersPage />
      </Suspense>
    </div>
  );
};

export default UserList;
