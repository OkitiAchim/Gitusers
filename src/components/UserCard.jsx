export default function UserCard({ user }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <img src={user.avatar_url} alt={user.login} width={120} />

      <h2>{user.name}</h2>

      <p>@{user.login}</p>

      <p>{user.bio}</p>

      <p>Followers: {user.followers}</p>
    </div>
  );
}
