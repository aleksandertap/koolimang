import React from "react";
import { ReactComponent as Arikool } from "../assets/img/svg/arikool-circle.svg";
import { ReactComponent as Ehituskool } from "../assets/img/svg/ehituskool-circle.svg";
import { ReactComponent as Ilukool } from "../assets/img/svg/ilukool-circle.svg";
import { ReactComponent as Itkool } from "../assets/img/svg/itkool-circle.svg";
import { ReactComponent as Tehnikakool } from "../assets/img/svg/tehnikakool-circle.svg";
import { ReactComponent as Toidukool } from "../assets/img/svg/toidukool-circle.svg";
import { ReactComponent as Turismikool } from "../assets/img/svg/turismikool-circle.svg";

import { ReactComponent as Arikool_gray } from "../assets/img/svg/arikool-circle_gray.svg";
import { ReactComponent as Ehituskool_gray } from "../assets/img/svg/ehituskool-circle_gray.svg";
import { ReactComponent as Ilukool_gray} from "../assets/img/svg/ilukool-circle_gray.svg";
import { ReactComponent as Itkool_gray } from "../assets/img/svg/itkool-circle_gray.svg";
import { ReactComponent as Tehnikakool_gray } from "../assets/img/svg/tehnikakool-circle_gray.svg";
import { ReactComponent as Toidukool_gray } from "../assets/img/svg/toidukool-circle_gray.svg";
import { ReactComponent as Turismikool_gray } from "../assets/img/svg/turismikool-circle_gray.svg";

import "./IconsBar.css";

function IconsBar({ data, activeItems }) {
  const getIconComponents = (name) => {
    if (name === "Ärikool") return { color: Arikool, gray: Arikool_gray };
    if (name === "IT-Kool") return { color: Itkool, gray: Itkool_gray };
    if (name === "Ehituskool") return { color: Ehituskool, gray: Ehituskool_gray };
    if (name === "Ilukool") return { color: Ilukool, gray: Ilukool_gray };
    if (name === "Toidukool") return { color: Toidukool, gray: Toidukool_gray };
    if (name === "Tehnikakool") return { color: Tehnikakool, gray: Tehnikakool_gray };
    if (name === "Turismikool") return { color: Turismikool, gray: Turismikool_gray };

    return null;
  };

  return (
    <div className="icons-container">
      {data.map((item) => {
        const IconPair = getIconComponents(item.name);
        if (!IconPair) return null;

        const isActive = activeItems.some((a) => a.id === item.id);
        const Icon = isActive ? IconPair.color : IconPair.gray;
        return <Icon key={item.id} />;
      })}
    </div>
  );
}

export default IconsBar;