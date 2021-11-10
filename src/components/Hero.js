/* Bootstrap */
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

/* Code */
export default function Hero() {
  return (
    <MDBContainer fluid>
      <MDBRow className="vh-100">
        <MDBCol xxl="5" className="bg-primary">
          <MDBRow className="h-100"></MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
