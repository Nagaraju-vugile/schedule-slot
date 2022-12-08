
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
          style={{ backgroundColor: "#f8f9fa", color: "rgb(149, 6, 149)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="link-color-footer" href="https://mdbootstrap.com/">
            Bluerose technologies.
          </a>
        </div>
      </MDBFooter>
    </>
  );
}