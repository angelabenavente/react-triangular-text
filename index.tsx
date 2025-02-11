import React from 'react';
import {
  TriangularTextProps,
  ReactTriangularTextOptions,
  MonospacedFont
} from './interfaces';

const TriangularText: React.FC<TriangularTextProps> = ({
  text,
  size,
  id,
  options = {}
}) => {
  const monospacedFonts = [
    'Menlo',
    'Courier New',
    'Consolas',
    'Lucida Console',
    'Monaco',
    'monospace'
  ];

  let fontFamily = 'Menlo, monospace';
  if (options.fontFamily === 'customFont' && options.customFont) {
    fontFamily = options.customFont;
  } else if (monospacedFonts.includes(options.fontFamily || '')) {
    fontFamily = options.fontFamily || 'Menlo';
  }

  const fontSize = options.fontSize || 16;
  const triangleHeight = (Math.sqrt(3) / 2) * size;
  const perimeter = size * 3;
  const spacing = perimeter / text.length;

  const baseText = text.slice(0, Math.floor(text.length / 3));
  const rightText = text.slice(
    Math.floor(text.length / 3),
    Math.floor((2 * text.length) / 3)
  );
  const leftText = text.slice(Math.floor((2 * text.length) / 3));

  return (
    <div
      id={id}
      aria-label={text}
      style={{
        height: `${triangleHeight}px`,
        width: `${size}px`,
        position: 'relative'
      }}
    >
      {/* Base */}
      {rightText
        ?.split('')
        ?.reverse()
        ?.map((letter, index) => {
          const x = (size / baseText.length) * index;
          const y = triangleHeight - fontSize / 2;
          return (
            <p
              key={`base-${index}`}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: `rotate(180deg)`,
                color: options.color || '#000000',
                fontFamily: fontFamily,
                fontWeight: options.fontWeight || 400,
                fontSize: fontSize,
                margin: 0,
                lineHeight: 0,
                whiteSpace: 'nowrap'
              }}
            >
              {letter}
            </p>
          );
        })}

      {/* Right side, top to bottom  */}
      {baseText
        ?.split('')
        ?.reverse()
        ?.map((letter, index) => {
          const adjustedDistance = (size / rightText.length) * index;
          const x = size - adjustedDistance / 2 - fontSize / 2;
          const y = triangleHeight - (Math.sqrt(3) / 2) * adjustedDistance - fontSize / 2;
          return (
            <p
              key={`right-${index}`}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: `rotate(60deg)`,
                color: options.color || '#000000',
                fontFamily: fontFamily,
                fontWeight: options.fontWeight || 400,
                fontSize: fontSize,
                margin: 0,
                lineHeight: 0,
                whiteSpace: 'nowrap'
              }}
            >
              {letter}
            </p>
          );
        })}

      {/* Left side, bottom to top  */}
      {leftText
        ?.split('')

        ?.map((letter, index) => {
          const adjustedDistance = (size / leftText.length) * index;
          const x = adjustedDistance / 2 + fontSize / 2;
          const y =
            triangleHeight -
            (Math.sqrt(3) / 2) * adjustedDistance -
            spacing -
            fontSize / 3;
          return (
            <p
              key={`left-${index}`}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: `rotate(-60deg)`,
                color: options.color || '#000000',
                fontFamily: fontFamily,
                fontWeight: options.fontWeight || 400,
                fontSize: fontSize,
                margin: 0,
                lineHeight: 0,
                whiteSpace: 'nowrap'
              }}
            >
              {letter}
            </p>
          );
        })}
    </div>
  );
};

export default TriangularText;
