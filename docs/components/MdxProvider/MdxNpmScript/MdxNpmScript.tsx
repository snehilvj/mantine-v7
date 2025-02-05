import React from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { YarnIcon, NpmIcon } from '@mantine/ds';
import classes from './MdxNpmScript.module.css';

interface MdxNpmScriptProps {
  yarnScript: string;
  npmScript: string;
}

export function MdxNpmScript({ yarnScript, npmScript }: MdxNpmScriptProps) {
  const [tab, setTab] = useLocalStorage({
    key: 'script-tab',
    defaultValue: 0,
  });

  return (
    <CodeHighlightTabs
      classNames={{ root: classes.root }}
      activeTab={tab}
      onTabChange={setTab}
      code={[
        {
          fileName: 'yarn',
          code: yarnScript,
          language: 'bash',
          icon: <YarnIcon className={classes.icon} size={16} />,
        },
        {
          fileName: 'npm',
          code: npmScript,
          language: 'bash',
          icon: <NpmIcon className={classes.icon} size={16} />,
        },
      ]}
    />
  );
}
