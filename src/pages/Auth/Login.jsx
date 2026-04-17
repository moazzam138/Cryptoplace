import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("cryptoplace-users") || "[]");
    const loginUser = storedUsers.find(
      (user) => user.email.toLowerCase() === form.email.toLowerCase() && user.password === form.password
    );

    if (!loginUser) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "cryptoplace-current-user",
      JSON.stringify({ name: loginUser.name, email: loginUser.email })
    );
    setSuccess("Login successful! Redirecting...");
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome back</h2>
        <p>Log in to continue using the crypto dashboard.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter password" />
          </label>
          {error && <div className="auth-error">{error}</div>}
          {success && <div className="auth-success">{success}</div>}
          <button type="submit" className="auth-submit">Log In</button>
        </form>

        <p className="auth-switch">
          New here? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
