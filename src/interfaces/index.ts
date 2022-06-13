export interface ColorPallete {
  neutral_light: string;
  neutral: string;
  primary_light: string;
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface PlantCardBoxProps {
  bgImage: string;
}

export interface PlantCardProps {
  image: string;
  key: number;
  name: string;
  price: number;
}

export interface TextFonts {
  default: string;
  primary: string;
  secondary: string;
}
