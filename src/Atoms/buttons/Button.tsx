import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Size = 'tiny' | 'normal' | 'medium' | 'big';
export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
  children?: ReactNode;
  size?: Size;
  weight?: '400' | '500' | '600' | '700';
  type?: 'submit' | 'button';
  disabled?: boolean;
}
