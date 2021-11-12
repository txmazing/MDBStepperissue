import {
  MDBAlert,
  MDBAutocomplete,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBIcon,
  MDBInput,
  MDBModalBody,
  MDBSwitch,
} from "mdb-react-ui-kit";
/* React */
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function LoginRegisterModal({
  isLoginRegisterOpen,
  setIsLoginRegisterOpen,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MDBModal
      show={isLoginRegisterOpen}
      tabIndex="-1"
      backdrop={false}
      getOpenState={(e) => setIsLoginRegisterOpen(e)}
    >
      <MDBModalDialog centered>
        <MDBModalContent className="bg-secondary-bright">
          <MDBModalHeader className="border-secondary-bright">
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={() => setIsLoginRegisterOpen(false)}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody className="pt-1 p-5">
            <h3>Anmelden</h3>
            <div className="mt-3 text-center ">
              <MDBBtn className="me-2" floating size="lg" tag="a">
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn className="me-2" floating size="lg" tag="a">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn className="me-2" floating size="lg" tag="a">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn floating size="lg" tag="a">
                <MDBIcon fab icon="pinterest" />
              </MDBBtn>
            </div>

            <MDBInput
              className="mt-4"
              label="E-Mail"
              id="email"
              type="email"
              size="lg"
              contrast
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <MDBInput
              className="mt-4"
              label="Passwort"
              id="password"
              type="password"
              size="lg"
              contrast
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-2 text-end">
              <Link to="/" className="fw-bold">
                Passwort vergessen?
              </Link>
            </div>
            <div className="mt-4">
              <MDBSwitch
                defaultChecked
                id="keepLoginSwitchCheck"
                label="Angemeldet bleiben"
              />
            </div>
            <MDBBtn className="mt-3 fw-bold fs-6" block rounded>
              Anmelden
            </MDBBtn>
            <div className="mt-3 text-center pe-pointer">
              Noch nicht registriert?{" "}
              <span className="fw-bold text-decoration-underline">
                Jetzt registrieren
              </span>
              <MDBIcon className="ms-3" fas icon="long-arrow-alt-right" />
            </div>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
