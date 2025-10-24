function Form() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Invalid email";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={errors.email ? "error-label" : ""}>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className={errors.password ? "error-label" : ""}>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
