import { HTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
