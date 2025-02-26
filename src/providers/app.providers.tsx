"use client";
import { PropsWithChildren } from "react";
import RootStyleRegistry from "./mantine";
import { I18nProvider } from "@/core/i18n/provider";
import { Root } from "@/components/Root/Root";
import { useDidMount } from "@/hooks/useDidMount";

function GlobalProviders({ children }: PropsWithChildren) {
  const didMount = useDidMount();

  if (!didMount) {
    return 'lading';

  }
  return <RootStyleRegistry>{children} </RootStyleRegistry>;
}

export { GlobalProviders };
