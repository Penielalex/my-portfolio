"use client";




import { ColorModeContext } from "@/contexts/color-mode";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";

import {
    Layout as AntdLayout,
    Space,
    
    theme,
  } from "antd";

import React, { useContext } from "react";




const { useToken } = theme;

export const Header: React.FC<RefineThemedLayoutV2HeaderProps & { sticky?: boolean,dashboardType?: string }> = ({
  sticky,
 
}) => {
  const { token } = useToken();

  const { mode, setMode } = useContext(ColorModeContext);


  












  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    padding: "0px 24px",
    height: "62px",
    ...(sticky && {
      position: "sticky",
      top: 0,
      zIndex: 1,
    }),
  };



  return (
    <AntdLayout.Header style={headerStyles} className="flex align-middle justify-between ">
      <div className="flex items-center">
        
        
      </div>
      <Space>
      
       
         <span
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        className="text-md font-semibold transition-opacity duration-500 hover:underline"
      >
        {mode === "dark"
          ? "Let there be light"
          : "O darkness, my old friend"}
      </span>

      </Space>
    </AntdLayout.Header>
  );
};
