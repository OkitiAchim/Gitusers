export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />

      <h2>{user.name || user.login}</h2>

      <p className="username">@{user.login}</p>

      <p>{user.bio || "No bio available."}</p>

      <div className="stats">
        <div>
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>

        <div>
          <strong>{user.public_repos}</strong>
          <span>Repos</span>
        </div>
      </div>
    </div>
  );
}
