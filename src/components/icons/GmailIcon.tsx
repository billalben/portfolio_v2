import type { SVGProps } from "react";

import { siGmail } from "simple-icons";

import BrandIcon from "./BrandIcon";

export function GmailIcon(props: SVGProps<SVGSVGElement>) {
    return <BrandIcon icon={siGmail} {...props} />;
}

export default GmailIcon;
