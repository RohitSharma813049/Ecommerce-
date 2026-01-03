import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage, SuccessMessage } from "@/utils/message/message";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      SuccessMessage("Login Successful");
      navigate("/");  
    } catch (error) {
      ErrorMessage(error);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <form onSubmit={handleSubmit}>
        <button type="submit">Login</button>
      </form>

      <p className="mt-4">
        Don’t have an account?{" "}
        <Link to="/login/register" className="text-pink-500">
          Register
        </Link>
      </p>
    </>
  );
}

export default Login;
