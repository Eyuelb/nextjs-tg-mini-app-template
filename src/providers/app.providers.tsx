import { PropsWithChildren } from "react";
import RootStyleRegistry from "./mantine";
import { I18nProvider } from "@/core/i18n/provider";
import { Root } from "@/components/Root/Root";

function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <RootStyleRegistry>{children} </RootStyleRegistry>

  );
}

export { GlobalProviders };
