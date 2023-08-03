import Form from "react-bootstrap/Form";
function Login() {
    return (
        <>
        <div
        style={{
          backgroundImage: `linear-gradient(darkblue, aqua)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "95vh"
        }}
      ></div>

      <div
        style={{
          backgroundColor: "white",
          marginTop: "-80vh",
          marginLeft: "70vh",
          width: "60vh",
          height: "70vh",
          paddingTop: "30px",
        }}
      > <h1 style={{textAlign: "center"}}> Login </h1>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control type="text" placeholder="Type your username"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control type="password" placeholder="Type your password" aria-describedby="passwordHelp"></Form.Control>
          <Form.Text id="passwordHelp" muted>Your password must be 8-20 characters long.</Form.Text>
        </Form.Group>
      

      </Form>
        
      </div>

      
        </>
    )
}


export default Login;