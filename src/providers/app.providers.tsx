import { PropsWithChildren } from "react";
import RootStyleRegistry from "./mantine";
import { I18nProvider } from "@/core/i18n/provider";
import { Root } from "@/components/Root/Root";

async function GlobalProviders({ children }: PropsWithChildren) {

  return (
    <I18nProvider>
      <RootStyleRegistry>
        <Root>{children}</Root>
      </RootStyleRegistry>
    </I18nProvider>
  );
}

export { GlobalProviders };
