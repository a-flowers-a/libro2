import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface CardButtonProps {
  /**Defined classname color */
  cardColor: string;
  /**Text value for the card */
  text: string;
  /**Classname for the text color */
  textColor: string;
  /**Fontawesome icon name */
  icon?: IconProp;
  /**Icon in first position */
  iconFirst?: boolean;
  /**Callback to handle onClick */
  clickFunc: () => void;
}
