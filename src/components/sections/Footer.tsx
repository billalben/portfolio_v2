import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");

    return <footer className="max-w-md lg:pb-16 text-sm text-slate-500">{t("text")}</footer>;
};

export default Footer;
