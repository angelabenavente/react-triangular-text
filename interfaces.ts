// Enum to define valid monospaced fonts
export enum MonospacedFont {
  Menlo = 'Menlo',
  CourierNew = 'Courier New',
  Consolas = 'Consolas',
  LucidaConsole = 'Lucida Console',
  Monaco = 'Monaco',
  Monospace = 'monospace'
}

// Interface for the optional configuration options for the TriangularText component
export interface ReactTriangularTextOptions {
  color?: string; // Optional text color
  fontFamily?: MonospacedFont | 'customFont'; // Optional font family, can be one of the monospaced fonts or 'customFont'
  customFont?: string; // Optional custom font name if fontFamily is set to 'customFont'
  fontWeight?: number; // Optional font weight
  fontSize?: number; // Optional font size
}

export interface TriangularTextProps {
  text: string; // The text to be displayed in a triangular layout
  size: number; // The size in px for each triangular side
  id?: string; // Optional ID for the container element
  options?: ReactTriangularTextOptions; // Optional configuration options for styling
}
