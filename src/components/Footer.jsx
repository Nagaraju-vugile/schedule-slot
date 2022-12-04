
import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-left footer-style"
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgb(221 211 217 / 20%)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://mdbootstrap.com/">
            Bluerose technologies.
          </a>
        </div>
      </MDBFooter>
    </>
  );
}