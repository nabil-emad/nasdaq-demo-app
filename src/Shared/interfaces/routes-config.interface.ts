export interface RouteConfigItem {
  NAME: string;
  PATH: string;
  FULL_PATH: string;
  DISPLAY_NAME?: string;
  CHILDREN?: { [key: string]: RouteConfigItem };
}

export interface RouteConfig {
  [key: string]: RouteConfigItem;
}
