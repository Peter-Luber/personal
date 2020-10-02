import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: 'rgb(250, 250, 250)',
    dark: 'rgb(30, 30, 30)'
});

export const textColor = theme('mode', {
    light: 'rgb(192, 192, 192)',
    dark: 'rgb(60, 60, 60)'
});

export const accentColor = theme('mode', {
    light: 'rgb(220, 220, 220)',
    dark: 'rgb(90, 90, 90)'
});

export const hoverColor = theme('mode', {
    light: 'rgba(255, 255, 255, 1)',
    dark: 'rgba(150, 150, 150, 1)'
});