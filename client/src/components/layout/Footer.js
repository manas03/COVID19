import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-info text-center">
      <div className="container text-center">
        <small>Copyright &copy; {new Date().getFullYear()} COVIDER</small>
      </div>
    </footer>
  );
}
