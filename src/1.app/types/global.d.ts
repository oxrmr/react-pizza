/// <reference types="vite-plugin-svgr/client" />

declare module "*.module.scss" {
  interface ClassNames {
    [className: string]: string;
  }
  const className: ClassNames;
  export = className;
}

declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
