declare module "jsvectormap" {
  interface Marker {
    name: string;
    coords: [number, number];
    style?: {
      fill?: string;
      stroke?: string;
    };
  }

  interface JsVectorMapOptions {
    selector: string | HTMLElement;
    map: string;
    markers?: Marker[];
    zoomButtons?: boolean;
    series?: any;
    regionStyle?: any;
    markerStyle?: any;
  }

  export default class jsVectorMap {
    constructor(options: JsVectorMapOptions);
    destroy(): void;
  }
}

declare module "jsvectormap/dist/maps/world";
declare module "jsvectormap/dist/maps/usa";
declare module "jsvectormap/dist/maps/india";
