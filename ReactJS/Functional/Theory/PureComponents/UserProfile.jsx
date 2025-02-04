import {memo} from "react";

function UserProfile({ name, age }) {
    console.log("UserProfile rendered")
  return (
    <div>
      <h2>{name}</h2>
      <p>Age:{age}</p>
    </div>
  );
}

const MemoizedUserProfile=memo(UserProfile);

export default MemoizedUserProfile;
