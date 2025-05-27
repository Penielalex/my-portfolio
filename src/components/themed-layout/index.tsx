"use client";

import { Header } from "../header";
import { ThemedLayoutV2 } from "@refinedev/antd";
import React from "react";

interface ThemedLayoutProps extends React.PropsWithChildren {
  dashboardType?: string;
  showSlider?: boolean; // ✅ Fix type here
}

export const ThemedLayout: React.FC<ThemedLayoutProps> = ({
  children,
  dashboardType,
  showSlider = false, // optional default
}) => {
  return (
    <ThemedLayoutV2
      Title={() => (
        <div className="flex items-center justify-center overflow-hidden h-4/5">
         
        </div>
      )}
      Header={() => <Header dashboardType={dashboardType} />}
      Sider={showSlider ? undefined : () => null} // ✅ Only show Sider if `showSlider` is true
    >
      {children}
    </ThemedLayoutV2>
  );
};
