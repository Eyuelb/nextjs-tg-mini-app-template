import { theme } from "@/styles/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      <ColorSchemeScript />
        <Notifications />
        {children}
    </MantineProvider>
  );
}
