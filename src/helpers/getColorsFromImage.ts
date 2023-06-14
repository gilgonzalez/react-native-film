import ImageColors from 'react-native-image-colors';

interface Colors {
  primary: string;
  secondary: string;
  tertiary?: string;
  quaternary?: string;
}


export const getColorsFromImage = async (uri: string): Promise<Colors> => {
  const colors = await ImageColors.getColors(uri, {});

  if (colors.platform === 'android') {
    return {
      primary: colors.dominant,
      secondary: colors.average,
      tertiary: colors.lightVibrant,
      quaternary: colors.darkVibrant,
    };
  } else if (colors.platform === 'ios') {
    return {
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: undefined,
      quaternary: undefined,
    };
  } else {
    return {
      primary: '',
      secondary: '',
    };
  }
}
  ;
