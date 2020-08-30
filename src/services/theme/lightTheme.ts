import { rgba } from 'polished';
import { DefaultTheme } from 'styled-components/macro';

const primaryAccent = '#9DCA00';
const secondaryAccent = '#2B343B';

export const lightTheme: DefaultTheme = {
  fontFamily: {
    Caveat: '"Caveat", Sans-serif',
    OpenSans: '"Open Sans", Sans-serif',
    Rowdies: '"Rowdies", Sans-serif',
    Roboto: '"Roboto", Sans-serif',
    Lato: '"Lato", Sans-serif',
  },
  fonts: {
    bigTextBold: '700 20px Roboto, Sans-serif',
    bigText: '400 20px Roboto, Sans-serif',
    bigTextLight: '300 20px Roboto, Sans-serif',
    mediumTextBold: '700 18px Roboto, Sans-serif',
    mediumTextSemiBold: '500 18px Roboto, Sans-serif',
    mediumText: '400 18px Roboto, Sans-serif',
    normalText: '400 16px Roboto, Sans-serif',
    normalTextSemiBold: '500 16px Roboto, Sans-serif',
    normalTextBold: '600 16px Roboto, Sans-serif',
    smallText: '400 15px Roboto, Sans-serif',
    smallTextLight: '300 15px Roboto, Sans-serif',
    smallTextSemiBold: '500 15px Roboto, Sans-serif',
    smallTextBold: '600 15px Roboto, Sans-serif',
    tinyTextBold: '600 13px Roboto, Sans-serif',
    tinyText: '400 13px Roboto, Sans-serif',
  },
  breakpoints: {
    sm: '450px',
    s: '700px',
    m: '1000px',
    l: '1300px',
    xl: '1600px',
  },
  colors: {
    background: {
      primary: '#FFFFFF',
      navbar: rgba(34, 34, 34, 0.9),
      mobileDrawer: rgba(34, 34, 34, 0.9),
    },
    header: {
      background: '#FFFFFF',
    },
    accents: {
      primary: primaryAccent,
      secondary: secondaryAccent,
    },
    button: {
      main: {
        default: {
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          textColor: '#FF194F',
        },
        hover: {
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          textColor: '#42CAF3',
        },
      },
      filled: {
        default: {
          backgroundColor: '#FF194F',
          borderColor: '#FF194F',
          textColor: '#FFFFFF',
        },
        hover: {
          backgroundColor: '#FFFFFF',
          borderColor: '#FF194F',
          textColor: '#FF194F',
        },
      },
    },
    select: {
      backgroundColor: '#FFFFFF',
      borderColor: '#EEEEEE',
      borderColorActive: '#8c8c8c',
      placeholderColor: '#808080',
      textColor: '#495057',
      textActiveColor: '#495057',
      multiSelectOption: {
        text: '#FFFFFF',
        background: '#999999',
        closeButtonBackground: '#000000',
        closeButton: '#FFFFFF',
      },
      localeSelect: {
        background: 'transparent',
        backgroundOpen: rgba(0, 0, 0, 0.7),
        borderColor: rgba(0, 0, 0, 0.2),
        borderColorActive: rgba(0, 0, 0, 0.2),
        placeholderColor: '#FFFFFF',
        textColor: '#FFFFFF',
        textActiveColor: '#FFFFFF',
      },
      optionHover: rgba(127, 207, 234, 0.2),
      menuBackgroundColor: '#FFFFFF',
    },
    scrollbar: {
      track: '#DDDDDD',
      thumb: '#055B7A',
    },
    link: {
      default: '#FFFFFF',
      hover: '#F8B600',
    },
    card: {
      background: '#FFFFFF',
      title: rgba(0, 0, 0, 0.87),
      description: rgba(0, 0, 0, 0.87),
      link: '#F8B600',
      linkHover: '#222222',
    },
    text: {
      main: '#000000',
      secondary: '#FFFFFF',
      tertiary: '#FF194F',
      special: '#42caf3',
      warning: '#F8B600',
      available: '#32a852',
      inactive: '#4f4f4f',
      error: '#FF0000',
      darkLink: '#055B7A',
      lightLink: '#0077A0',
      primaryAccent,
      secondaryAccent,
    },
    loader: '#F8B600',
    input: {
      border: '#EEEEEE',
      borderFocus: '#8c8c8c',
      text: '#495057',
      background: 'transparent',
    },
    tab: {
      background: rgba(255, 255, 255, 0.25),
      backgroundActive: '#FFFFFF',
      text: '#FFFFFF',
      textActive: '#495057',
    },
    cabinTab: {
      background: '#EEEEEE',
      backgroundActive: '#FFFFFF',
      text: '#000000',
      textActive: '#F8B600',
    },
    footer: {
      background: '#04091E',
      title: '#FFFFFF',
      text: '#777777',
      border: '#333333',
    },
    review: {
      border: '#000000',
    },
    order: {
      border: '#000000',
      borderUpcoming: '#3c9c00',
    },
  },
};
