import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ItemProps {
  /**Topic string */
  topic: string;
  /**URI path */
  path: string;
  /**To calculate margin */
  level: number;
  /**Fontawesome icon name */
  icon?: IconProp;
}
