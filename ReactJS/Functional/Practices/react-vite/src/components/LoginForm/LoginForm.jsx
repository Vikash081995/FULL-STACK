import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <inout
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
