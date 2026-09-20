import type { SVGProps } from "react";

import { siReaddotcv } from "simple-icons";

import BrandIcon from "./BrandIcon";

export function CvIcon(props: SVGProps<SVGSVGElement>) {
    return <BrandIcon icon={siReaddotcv} {...props} />;
}

export default CvIcon;
