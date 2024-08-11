export interface AppContextType {
  texts: {
    primary?: Text;
    secondary?: Text;
  };
  background: Background;
}

interface Background {
  type?: "color" | "image";
  color?: string;
}

interface Text {
  text: string;
  font?: string;
  size?: string;
  color?: string;
}
