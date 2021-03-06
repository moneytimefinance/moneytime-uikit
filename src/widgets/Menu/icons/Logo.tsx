import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const logoUrl = isDark? "/images/MoneytimeLogoW.svg" : "/images/MoneytimeLogoM.svg";
  return (
    <Svg viewBox="0 0 160 40" {...props}>
      <image width="160" height="40" href={logoUrl}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
