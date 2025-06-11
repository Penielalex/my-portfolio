import { App as AntdApp, ConfigProvider, theme } from "antd";
import Cookies from "js-cookie";
import React, {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

type ColorModeContextProviderProps = {
  defaultMode?: string;
};

export const ColorModeContextProvider: React.FC<
  PropsWithChildren<ColorModeContextProviderProps>
> = ({ children, defaultMode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState(defaultMode || "light");
  const [animating, setAnimating] = useState(false); // NEW

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const theme = Cookies.get("theme") || "light";
      setMode(theme);
    }
  }, [isMounted]);

  const setColorMode = () => {
    setAnimating(true); // Start animation
    setTimeout(() => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
      Cookies.set("theme", newMode);
      setAnimating(false);
    }, 600);
     // Sync with animation duration
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2FC56D",
          },
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
        }}
      >
        <AntdApp className="relative z-10">
  {animating && (
    <div
      className="cascade-transition"
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["--cascade-color" as any]: mode === "light" ? "#000" : "#fff",
      }}
    />
  )}
  {children}
</AntdApp>


      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
