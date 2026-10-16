import { use } from "react";

interface IUsersProps{
    getUsersPromise:Promise<IUsers[]>
}
interface IUsers {
    id:number,
    name:string,
    email:string
}
const UserList = ({getUsersPromise}:IUsersProps) => {
  
  const users = use(getUsersPromise)
    return (
    <div className="container mx-auto max-w-5xl">
      <h1 className="bg-red-700 text-white text-2xl mb-4 text-center rounded-xl p-3 mt-2">All Users</h1>
      {users.map((user: { id: number; name: string; email: string }) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
