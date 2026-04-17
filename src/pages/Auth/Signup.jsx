import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
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
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("cryptoplace-users") || "[]");
    const existingUser = storedUsers.find((user) => user.email.toLowerCase() === form.email.toLowerCase());
    if (existingUser) {
      setError("A user with this email already exists.");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email.toLowerCase(),
      password: form.password,
      createdAt: new Date().toISOString(),
    };

    storedUsers.push(newUser);
    localStorage.setItem("cryptoplace-users", JSON.stringify(storedUsers));
    localStorage.setItem("cryptoplace-current-user", JSON.stringify({ name: newUser.name, email: newUser.email }));
    setSuccess("Signup successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create an account</h2>
        <p>Sign up to access the latest crypto tools and news.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter password" />
          </label>
          <label>
            Confirm Password
            <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
          </label>
          {error && <div className="auth-error">{error}</div>}
          {success && <div className="auth-success">{success}</div>}
          <button type="submit" className="auth-submit">Sign Up</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
