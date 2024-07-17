/// <reference types="vite-plugin-svgr/client" />

declare module '*.module.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const className: ClassNames;
  export = className;
}

declare module '*.svg' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare type StoreSchema = import('../store/model/types').IStoreSchema;
declare type AppStore = import('../store/model/types').AppStore;
declare type AppDispatch = import('../store/model/types').AppDispatch;
