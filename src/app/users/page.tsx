import { Suspense } from "react";
import UserList from "../components/UserList";

const getUsersPromise = async () => {
  const data = await fetch("http://localhost:5000/users");
  return data.json();
};
const UsersPage = async () => {
  const getUsers = getUsersPromise();
  
  return (
    <div>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList getUsersPromise={getUsers} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
