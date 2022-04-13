import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('heading')}</h1>
    </div>
  );
}

export default Home;
