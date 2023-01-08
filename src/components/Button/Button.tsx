import React from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={[styles.button, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
