import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("HomePage");

  return <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">{t("title")}</footer>;
};

export default Footer;
