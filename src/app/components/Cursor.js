"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("img");
    cursor.src = "/diamond-pickaxe.gif";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.width = "48px";
    cursor.style.height = "48px";
    cursor.style.zIndex = "9999";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
}
