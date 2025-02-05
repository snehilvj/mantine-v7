import React from 'react';
import { StylesApiProps, factory, useProps, Factory } from '../../core';
import { ModalBaseTitle, ModalBaseTitleProps } from '../ModalBase';
import { useModalContext } from './Modal.context';
import classes from './Modal.module.css';

export type ModalTitleStylesNames = 'title';

export interface ModalTitleProps extends ModalBaseTitleProps, StylesApiProps<ModalTitleFactory> {}

export type ModalTitleFactory = Factory<{
  props: ModalTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: ModalTitleStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalTitleProps> = {};

export const ModalTitle = factory<ModalTitleFactory>((_props, ref) => {
  const props = useProps('ModalTitle', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const ctx = useModalContext();

  return (
    <ModalBaseTitle
      ref={ref}
      {...ctx.getStyles('title', { classNames, style, styles, className })}
      {...others}
    />
  );
});

ModalTitle.classes = classes;
ModalTitle.displayName = '@mantine/core/ModalTitle';
