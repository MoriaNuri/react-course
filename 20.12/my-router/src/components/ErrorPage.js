import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const style={
        color:"red",
        fontSize:"20px",
        textAlign:"center",
    }
    const error=useRouteError();
    console.log(error);
  return (
    <div style={style}>
      <h1>{error.status}</h1>
      <h2>{error.data}</h2>
    </div>
  );
}

export default ErrorPage;