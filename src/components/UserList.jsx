import UserCard from "./UserCard";

export default function UserList({ user }) {
  if (!user) return null;

  return <UserCard user={user} />;
}
