import type { CSSProperties, SVGProps } from "react";

import { IconBrandLinkedinFilled } from "@tabler/icons-react";

export function LinkedinIcon({ style, ...props }: SVGProps<SVGSVGElement>) {
    return <IconBrandLinkedinFilled style={{ "--brand": "#0a66c2", "--brand-dark": "#5aa9e6", ...style } as CSSProperties} {...props} />;
}

export default LinkedinIcon;
