import React from "react";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom bg-info text-center mt-5 p-3 ">
      <div className="container text-center">
        <small>Copyright &copy; {new Date().getFullYear()} INTELLECTS</small>
      </div>
    </footer>
  );
}
