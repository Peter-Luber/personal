import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: 'rgb(250, 250, 250)',
    dark: 'rgb(30, 30, 30)'
});

export const textColor = theme('mode', {
    light: 'rgb(192, 192, 192)',
    dark: 'rgba(195, 195, 195, 0.555)'
});

export const accentColor = theme('mode', {
    light: 'rgb(220, 220, 220)',
    dark: 'rgb(60, 60, 60)'
});

export const hoverColor = theme('mode', {
    light: 'rgba(150, 150, 150, 1)',
    dark: 'rgba(195, 195, 195, 0.8)'
});

export const headerHover = theme('mode', {
    light: 'rgba(254, 254, 254, 1)',
    dark: 'rgba(1, 1, 1, 0.8)'
});

export const shadowColor = theme('mode', {
    light: 'rgba(0, 0, 0, 0.09)',
    dark: 'rgba(255, 255, 255, 0.04)'
});

