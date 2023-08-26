import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
function Login() {
  return (
    <>
      <style type="text/css">
        {`
          .btn-login {
            background: linear-gradient(to right, #8e2de2, #4a00e0);
            margin-top: 20px;
            margin-bottom: 1vh;
            color: white;
            font-weight: bold;
          }

          .btn-signup {
            background: linear-gradient(to right, #8e2de2, #4a00e0);
            margin-top: 1vh;
            color: white;
            font-weight: bold;
          }
        `}
      </style>
      <div
        style={{
          backgroundImage: `linear-gradient(darkblue, aqua)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "93vh"
        }}
      >

      <div
        style={{
          backgroundColor: "white",
          marginTop: "10vh",
          margin: "auto",
          width: "50%",
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "20px"
        }}
      >
        {" "}
        <h1 style={{ textAlign: "center" }}> Login </h1>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="School email"
              aria-label="School email"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@prismsus.org</InputGroup.Text>
          </InputGroup>
          <Form.Group style={{ paddingBottom: "30px" }}>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your username"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Type your password"
              aria-describedby="passwordHelp"
            ></Form.Control>
            <Form.Text id="passwordHelp" muted>
              Your password must be 8-20 characters long.
            </Form.Text>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="login">Login</Button>
          </div>
        </Form>
        <p style={{ textAlign: "center" }}> Don't have an account yet? </p>
        <div className="d-grid gap-2">
          <Button variant="signup">Sign-Up</Button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
