import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-boootstrap/InputGroup";

function SubmitSample() {
  return (
    <>
      <style type="text/css">
        {`
          .btn-submit {
            background: linear-gradient(to right, darkblue, aqua);
            margin-top: 20px;
            margin-bottom: 40px;
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
          height: "95vh",
        }}
      ></div>

      <div
        style={{
          backgroundColor: "white",
          marginTop: "-80vh",
          marginLeft: "15vw",
          width: "70vw",
          height: "70vh",
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {" "}
        <h1 style={{ textAlign: "center" }}> Submit sample to be pinpointed on the map </h1>
        <Form>
          <Form.Group style={{ paddingBottom: "30px" }}>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your username"
            ></Form.Control>
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text>Coordinates</InputGroup.Text>
            <Form.Control aria-label="Latitude"/>
            <Form.Control aria-label="Longitude"/>
          </InputGroup>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload sample</Form.Label>
            <Form.Control type="file"/>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="login">Login</Button>
          </div>
        </Form>

      </div>
    </>
  );
}

export default SubmitSample;