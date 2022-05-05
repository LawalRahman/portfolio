import { useEffect } from "react";
import "./Splash.css";
import "font-awesome/css/font-awesome.min.css";

export default function Splash() {
  const logoSpan = document.querySelectorAll(".logo");
  useEffect(() => {
    setTimeout(() => {
      logoSpan.forEach((span, i) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (i + 1) * 400);
      });
    });
    setTimeout(() => {
      logoSpan.forEach((span, i) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (i + 1) * 50);
      });
    }, 2500);
    return () => clearTimeout();
  });
  return (
    <>
      <div className="intro">
        <h1 className="logo-header">
          <i className="fa fa-angle-left logo" aria-hidden="true"></i>
          <span className="logo">rahman</span>
          <span className="logo">lawal</span>
          <i className="fa fa-angle-right logo" aria-hidden="true"></i>
        </h1>
      </div>
    </>
  );
}
