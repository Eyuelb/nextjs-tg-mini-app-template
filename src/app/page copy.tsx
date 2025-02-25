"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/LocaleSwitcher/LocaleSwitcher";
import { Page } from "@/components/Page";
import {
  initData,
  themeParams,
  useLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";

export default function Home() {
  const t = useTranslations("i18n");
  const lp = useLaunchParams();
  const tp = useSignal(themeParams.state);
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);
  console.log({
    t,
    lp,
    tp,
    initDataRaw,
    initDataState,
  });
  return (
    <div>
      <LocaleSwitcher />
    </div>
  );
}
