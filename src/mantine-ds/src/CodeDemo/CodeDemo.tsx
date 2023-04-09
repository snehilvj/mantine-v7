import React from 'react';
import { DemoArea, DemoAreaProps } from '../DemoArea';
import { DemoCode, DemoCodeProps } from '../DemoCode';
import { DemoRoot } from '../DemoRoot';

export interface CodeDemoProps extends DemoCodeProps, DemoAreaProps {}

export function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
}: CodeDemoProps) {
  return (
    <DemoRoot>
      <DemoArea withPadding={withPadding} centered={centered} maxWidth={maxWidth}>
        {children}
      </DemoArea>
      <DemoCode code={code} defaultExpanded={defaultExpanded} />
    </DemoRoot>
  );
}
