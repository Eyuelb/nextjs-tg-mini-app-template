"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    import("eruda").then((lib) => lib.default.init()).catch(console.error);

    return () => {};
  }, []);

  return (
    <div>
      hello there
    </div>
  );
}
