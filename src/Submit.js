import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function SubmitSample() {
  return (
    <>
      <style type="text/css">
        {`
          .btn-submit {
            background: linear-gradient(to right, #8e2de2, #4a00e0);
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
          height: "90vh",
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
              placeholder="John Doe"
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
            <Button variant="submit">Submit</Button>
          </div>
        </Form>

      </div>
    </>
  );
}

export default SubmitSample;