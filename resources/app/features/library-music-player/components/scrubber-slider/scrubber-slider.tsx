import React from 'react';
import styles from './scrubber-slider.module.scss';

interface ScrubberSliderProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max: number;

}

export function ScrubberSlider( { value, onChange, max }: ScrubberSliderProps ) {
  return (
    <input
      className={styles.scrubberSlider}
      type="range"
      min="0"
      max={max}
      value={value}
      onChange={onChange}

    />
  );
}
