import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");

    return <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">{t("text")}</footer>;
};

export default Footer;
