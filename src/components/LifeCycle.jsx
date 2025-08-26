import React from "react";
import { useEffect } from "react";
export default function LifeCycle() {
  useEffect(() => {
    alert("Component Mounted");
    return () => {
      alert("Component Unmounted");
    };
  }, []);
  return <div>LifeCycle</div>;
}
