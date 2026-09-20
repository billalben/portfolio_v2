import type { SVGProps } from "react";

import { siGithub } from "simple-icons";

import BrandIcon from "./BrandIcon";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
    return <BrandIcon icon={siGithub} {...props} />;
}

export default GithubIcon;
