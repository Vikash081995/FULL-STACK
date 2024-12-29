import { useState } from "react";
const Forms = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>
        {" "}
        UserName:
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
