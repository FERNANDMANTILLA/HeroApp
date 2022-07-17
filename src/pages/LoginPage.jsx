import { useNavigate } from "react-router-dom"


const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/", { replace: true });
  }

  return (
    <div id="login-bg" className="w-100 h-100 justify-content-center align-items-center d-flex">
      <div className="container bg-dark w-30 h-50  d-flex flex-column justify-content-around rounded-2">
        <h1 className="text-center">Login HeroApp</h1>
        <div className="input-group justify-content-center">
          <button className="btn btn-danger w-50"
            onClick={onLogin}>
            INGRESAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
