import './index.css'; 

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="avatar">
        <img
          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}&mood=happy`}
          alt={user.username}
          width={80}
        />
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p><span>Email:</span> {user.email}</p>
        <p><span>Phone:</span> {user.phone}</p>
        <p><span>Company:</span> {user.company.name}</p>
        <p><span >Website:</span> {user.website}</p>
        <p><span>Address:</span> {user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
