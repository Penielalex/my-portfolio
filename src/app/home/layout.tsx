// app/home/layout.tsx
"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ThemeToggle } from "../ThemeToggle";
import "../globals.css";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = Cookies.get("theme") || "light";
    setMode(savedMode);
    document.body.setAttribute("data-theme", savedMode);
  }, []);

const handleToggle = () => {
  // Get current foreground color before theme changes
  const currentColor = getComputedStyle(document.body).getPropertyValue("--foreground");

  // Create and style the ripple
  const ripple = document.createElement("div");
  ripple.className = "theme-ripple";
  ripple.style.backgroundColor = currentColor.trim(); // Fix the ripple color
  ripple.style.zIndex = "999"; // Ensure it's above everything
  document.body.appendChild(ripple);

  // Trigger color change on all text elements (can be specific elements if needed)
  document.querySelectorAll(".text-theme").forEach(element => {
    element.classList.add("color-change");
  });

  // Change theme after ripple animation ends
  setTimeout(() => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    Cookies.set("theme", newMode);
    document.body.setAttribute("data-theme", newMode);
  }, 1000);

  // Remove ripple and reset color change class after animation
  setTimeout(() => {
    ripple.remove();
    document.querySelectorAll(".text-theme").forEach(element => {
      element.classList.remove("color-change");
    });
  }, 1000);
};



  return (
    <html lang="en">
      <body>
        <div>
          <div className="pr-10 pt-10 text-right">
            <ThemeToggle onClick={handleToggle} mode={mode} />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
