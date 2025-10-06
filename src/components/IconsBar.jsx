import React from "react";
import { ReactComponent as Arikool } from "../assets/img/svg/arikool-circle.svg";
import { ReactComponent as Ehituskool } from "../assets/img/svg/ehituskool-circle.svg";
import { ReactComponent as Ilukool } from "../assets/img/svg/ilukool-circle.svg";
import { ReactComponent as Itkool } from "../assets/img/svg/itkool-circle.svg";
import { ReactComponent as Tehnikakool } from "../assets/img/svg/tehnikakool-circle.svg";
import { ReactComponent as Toidukool } from "../assets/img/svg/toidukool-circle.svg";
import { ReactComponent as Turismikool } from "../assets/img/svg/turismikool-circle.svg";
import "./IconsBar.css";

function IconsBar() {
  return (
    <>
      <div className="icons-container">
        {[Arikool, Ehituskool, Ilukool, Itkool, Tehnikakool, Toidukool, Turismikool].map((Icon, i) => (
            <Icon />
        ))}
      </div>
    </>
  );
}

export default IconsBar;