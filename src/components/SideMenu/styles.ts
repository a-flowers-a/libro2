import { stylesheet } from "typestyle"

export interface SideMenuTheme {
    backgroundColor: string;
    borderColor: string;
    color: string;
    burgerIconBackgroundColor: string;
}

export interface ItemTheme {
    backgroundColorHover: string;
    colorHover: string;
    activeItemBackgroundColor: string;
    activeItemColor: string;
}

export const purpleMenu: SideMenuTheme = {
    backgroundColor: '#b673de',
    borderColor: '#b673de',
    color: '#fff',
    burgerIconBackgroundColor: '#b673de',
}

export const purpleItem: ItemTheme = {
    backgroundColorHover: '#d5bde3',
    colorHover: '#818181',
    activeItemBackgroundColor: '#d5bde3',
    activeItemColor: '#818181',
}

export function applyMenuTheme(theme: SideMenuTheme) {
    return {
        backgroundColor: theme.backgroundColor,
        borderRight: `1px solid ${theme.borderColor}`,
        color: theme.color
    }
}

export function applyItemTheme(theme: ItemTheme){
    return{
        '&:hover':{
            backgroundColor: theme.backgroundColorHover,
            color: theme.colorHover
        }
    }
}

const styles = stylesheet({
sideMenuContainer: {
  position: 'sticky',
  height: '100vh',
  top: '-1px',
  overflowY: 'auto',
  display:'flex',
  flexDirection: 'column',
},

purpleMenu: applyMenuTheme(purpleMenu),

})