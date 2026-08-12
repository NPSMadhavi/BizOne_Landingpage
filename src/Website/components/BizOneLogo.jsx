import { jsxDEV } from "react/jsx-dev-runtime";
import bizoneSgLogo from "../assets/BizOne_logo.png";

export default function BizOneLogo({ className = "h-14 w-auto" }) {
  return (
    <img
      src={bizoneSgLogo}
      alt="BizOne Logo"
      className={className}
    />
  );
}