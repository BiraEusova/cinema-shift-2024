import clsx from 'clsx'
import React from "react";

type TypographyVariant = 'title' | 'paragraph16_regular' | 'paragraph16_medium' | 'paragraph14_regular';
type TypographyTag = 'h1' | 'h2' | 'h3' | 'div' | 'p';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
    variant: TypographyVariant;
    tag?: TypographyTag;
    children: React.ReactNode;
};
export const Typography = <Tag extends TypographyTag = 'div'>({
      variant,
      tag = 'div',
      children,
      className,
      ...props
  }: TypographyProps<Tag>) => {
    const Component = tag;

    return (
        <Component className={clsx(variant, className)} {...props}>
            {children}
        </Component>
    );
};