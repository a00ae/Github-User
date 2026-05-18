import type React from "react";


const a:HTMLElement | null = document.querySelector("a");

if (a) {
  a.onclick = (e: MouseEvent) => {
    e.preventDefault();
  };
}

export const repo: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh"
}
