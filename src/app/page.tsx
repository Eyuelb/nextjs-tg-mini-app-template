"use client";
import { useEffect } from "react";
export default function Home() {
  import("eruda").then((lib) => lib.default.init()).catch(console.error);

  return (
    <div>
      hello there
    </div>
  );
}
