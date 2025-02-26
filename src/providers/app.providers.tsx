"use client";
import { PropsWithChildren } from "react";
import { I18nProvider } from "@/core/i18n/provider";
import { Root } from "@/components/Root/Root";
import { useDidMount } from "@/hooks/useDidMount";

import dynamic from "next/dynamic";
const RootStyleRegistry = dynamic(() => import("./mantine"), { ssr: false });

function GlobalProviders({ children }: PropsWithChildren) {
  const didMount = useDidMount();

  if (!didMount && typeof window !== "undefined") {
    return <div>Loading...</div>;
  }

  return <RootStyleRegistry>{children} </RootStyleRegistry>;
}

export { GlobalProviders };
