import 'styled-components/macro';

interface ButtonStateTheme {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

interface ButtonTheme {
  main: {
    default: ButtonStateTheme;
    hover: ButtonStateTheme;
  };
  filled: {
    default: ButtonStateTheme;
    hover: ButtonStateTheme;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        navbar: string;
        mobileDrawer: string;
      };
      button: ButtonTheme;
      select: {
        backgroundColor: string;
        borderColor: string;
        borderColorActive: string;
        placeholderColor: string;
        textColor: string;
        textActiveColor: string;
        multiSelectOption: {
          text: string;
          background: string;
          closeButtonBackground: string;
          closeButton: string;
        };
        localeSelect: {
          background: string;
          backgroundOpen: string;
          borderColor: string;
          borderColorActive: string;
          placeholderColor: string;
          textColor: string;
          textActiveColor: string;
        };
        optionHover: string;
        menuBackgroundColor: string;
      };
      scrollbar: {
        track: string;
        thumb: string;
      };
      link: {
        default: string;
        hover: string;
      };
      card: {
        background: string;
        title: string;
        description: string;
        link: string;
        linkHover: string;
      };
      text: {
        main: string;
        secondary: string;
        tertiary: string;
        special: string;
        warning: string;
        available: string;
        inactive: string;
        error: string;
        lightLink: string;
        darkLink: string;
      };
      loader: string;
      input: {
        border: string;
        borderFocus: string;
        text: string;
        background: string;
      };
      tab: {
        background: string;
        backgroundActive: string;
        text: string;
        textActive: string;
      };
      cabinTab: {
        background: string;
        backgroundActive: string;
        text: string;
        textActive: string;
      };
      footer: {
        background: string;
        title: string;
        text: string;
        border: string;
      };
      review: {
        border: string;
      };
      order: {
        border: string;
        borderUpcoming: string;
      };
    };
    fontFamily: {
      Caveat: string;
      OpenSans: string;
      Rowdies: string;
      Roboto: string;
    };
    fonts: {
      HeaderBold: string;
      Header: string;
      SectionHeader: string;
      SectionHeaderSemiBold: string;
      SectionHeaderBold: string;
      bigText: string;
      bigTextBold: string;
      bigTextLight: string;
      mediumTextBold: string;
      mediumTextSemiBold: string;
      mediumText: string;
      normalText: string;
      normalTextSemiBold: string;
      normalTextBold: string;
      smallText: string;
      smallTextSemiBold: string;
      smallTextLight: string;
      smallTextBold: string;
      tinyTextBold: string;
      tinyText: string;
    };
    breakpoints: {
      sm: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
