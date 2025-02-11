import * as React from 'react';
import {
  TriangularTextProps,
  ReactTriangularTextOptions,
  MonospacedFont
} from './interfaces';

/**
 * TriangularText component that renders the provided text in a equilateral triangle format.
 *
 * @param text - The text to display in a equilateral triangle shape.
 * @param size - The width of the triangle.
 * @param id - The optional ID of the container element.
 * @param options - Optional configuration for color, font, and other styles.
 *
 * @returns JSX.Element - The JSX that represents the triangular text.
 */
declare const TriangularText: React.FC<TriangularTextProps>;

export default TriangularText;
