"use client";




import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";

import {
    Layout as AntdLayout,
    Space,
    theme,
  } from "antd";

import React, {  } from "react";




const { useToken } = theme;

export const Header: React.FC<RefineThemedLayoutV2HeaderProps & { sticky?: boolean,dashboardType?: string }> = ({
  sticky,
 
}) => {
  const { token } = useToken();


  












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
      
       
        {/* <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        /> */}

      </Space>
    </AntdLayout.Header>
  );
};
