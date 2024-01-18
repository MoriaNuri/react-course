const SignUp = () => {
  // const [userName,setUserName]=React.useState('')
  // const [email,setEmail]=React.useState('')
  // const [password,setPassword]=React.useState('')
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    validationPassword: "",
  });
  const [isError, setIsError] = useState(false);

  const isValidate = (values) => {};
  const handleChange = (event) => {
    const { name, value } = event.target;
    // switch (name) {
    //   case 'userName':
    //     setUserName(value)
    //     break;
    //   case 'email':
    //     setEmail(value)
    //     break;
    //   case 'password':
    //     setPassword(value)
    //     break;
    //   case 'validationPassword':
    //     setValidationPassword(value)
    //     break;
    //   default:
    //     break;
    // }
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (isValidate) console.log("Is Validate");
    else console.log("Not Validate");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="שם משתמש"
        type="text"
        value={userName}
        onChange={handleChange}
      />
      <input
        placeholder="אימייל"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <input
        placeholder="סיסמה"
        type="text"
        value={password}
        onChange={handleChange}
      />
      <input
        input="אימות סיסמה"
        type="text"
        value={validationPassword}
        onChange={handleChange}
      />
      <button type="submit"> הרשם</button>
    </form>
  );
};

export default SignUp;
