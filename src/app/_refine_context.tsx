"use client";


import { ColorModeContextProvider } from "../contexts/color-mode";
import { dataProvider } from "../providers/data-provider";
import "@refinedev/antd/dist/reset.css";
import { Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";


import React from "react";
import { useNotificationProvider } from "@refinedev/antd";


type RefineContextProps = {
  defaultMode?: string;
};

export const RefineContext = (
  props: React.PropsWithChildren<RefineContextProps>
) => {
  return (  
    <App {...props} />)
 
};

type AppProps = {
  defaultMode?: string;
};

const App = ({ children, defaultMode }: React.PropsWithChildren<AppProps>) => {


 

  
  
  return (
    <DevtoolsProvider>
      <RefineKbarProvider>
        <ColorModeContextProvider defaultMode={defaultMode}>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            notificationProvider={useNotificationProvider}
           
           
            resources={
              [
                {
                  name: "home",
                list: "/home",
                create: "/invites/create",
                edit: "/invites/edit/:id",
                show: "/invites/show/:id",
              
                },
                
              ]
            }
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: false,
            }}
          >
            {children}
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </DevtoolsProvider>
  );
};


