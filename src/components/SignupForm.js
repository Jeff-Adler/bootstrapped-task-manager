export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginSubmitHandler(email, password);
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={{async (e) => await handleSubmit(e)}}>
        <label htmlFor="email">email</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <label htmlFor="password">password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <button type="submit" value="Signup">
          Signup
        </button>
      </form>
    </div>
  );
};
