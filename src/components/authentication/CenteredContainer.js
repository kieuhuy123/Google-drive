import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function CenteredContainer({ children }) {
  return (
    <>
      <h1>Header</h1>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Outlet></Outlet>
        </div>
      </Container>
      <h1>Footer</h1>
    </>
  );
}
