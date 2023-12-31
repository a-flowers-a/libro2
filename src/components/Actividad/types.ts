import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ActividadProps {
  /**Link URL */
  link: string;
  /**Activity number */
  number: string;
  /**String definingactivity/reading */
  type: string;
  /**classname color defined */
  color: string;
  /**Fontawesome icon name */
  icon: IconProp;
}
