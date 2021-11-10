import {
  MDBBtn,
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
/* Components */
import LoginRegisterModal from "./LoginRegisterModal";
/* React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Code */
export default function NavigationBar() {
  const [isLoginRegisterOpen, setIsLoginRegisterOpen] = useState(false);

  return (
    <>
      <LoginRegisterModal
        isLoginRegisterOpen={isLoginRegisterOpen}
        setIsLoginRegisterOpen={setIsLoginRegisterOpen}
      />

      <MDBNavbar fixed="top" expand="md" bgColor="secondary">
        <MDBContainer fluid>
          <Link to="/" className="text-white fs-4 fw-bolder me-3">
            test
          </Link>

          <MDBNavbarNav fullWidth={false} right className="d-flex flex-row">
            <MDBNavbarItem className="d-none d-sm-block my-auto">
              <MDBBtn
                outline
                rounded
                className="fw-bold"
                color="primary"
                onClick={() => {
                  setIsLoginRegisterOpen(true);
                  console.log("isLoginRegisterOpen: ", isLoginRegisterOpen);
                }}
              >
                ModalOpen
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
