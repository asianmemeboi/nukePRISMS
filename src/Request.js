import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RequestSample() {
  return (
    <>
      <style type="text/css">
        {`
          .btn-request {
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
        <h1 style={{ textAlign: "center" }}> Request sample for testing </h1>
        <Form>
          <Form.Group style={{ paddingBottom: "30px" }}>
            <Form.Label htmlFor="name">Legal Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
            ></Form.Control>
          </Form.Group>
          <Form.Control type="text" placeholder="Address"/>
          <br/>
          <Form.Control type="text" placeholder="City"/>
          <br/>
          <Form.Control type="text" placeholder="State"/>
          <br/>
          <Form.Control type="text" placeholder="Zip code"/>
          <br/>
          <Form.Control type="text" placeholder="Country"/>
          <br/>
          <Form.Label>Amount of Samples</Form.Label>
          <Form.Range/>  
          <div className="d-grid gap-2">
            <Button variant="request">Request</Button>
          </div>
        </Form>

      </div>
    </>
  );
}

export default RequestSample;