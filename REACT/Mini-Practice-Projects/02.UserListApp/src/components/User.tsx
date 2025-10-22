const User = ({
  id,
  name,
  email,
  isActive,
  toggleActivity,
}: {
  id:string|number;
  name: string;
  email: string;
  isActive: boolean;
  toggleActivity:(id:string|number)=>void;
}) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email:{email}</p>
      <p className="user-card-status">
        Status:{isActive ? "Active" : "Inactive"}
      </p>
      <button onClick={()=>toggleActivity(id)}
        className={`user-card-button ${isActive ? "deactivate" : "activate"}`}
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default User;
