import type { ComboboxFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ComboboxStylesApi: StylesApiData<ComboboxFactory> = {
  selectors: {
    options: '`Combobox.Options` component',
    dropdown: '`Combobox.Dropdown` component',
    option: '`Combobox.Option` component',
    search: '`Combobox.Search` input',
    empty: '`Combobox.Empty` component',
    header: '`Combobox.Header` component',
    footer: '`Combobox.Footer` component',
  },

  vars: {
    dropdown: {
      '--combobox-option-fz': 'Controls option `font-size`',
      '--combobox-option-padding': 'Controls option `padding`',
      '--combobox-padding': 'Controls dropdown `padding`',
    },

    options: {
      '--combobox-option-fz': 'Controls option `font-size`',
      '--combobox-option-padding': 'Controls option `padding`',
    },
  },

  modifiers: [
    { modifier: 'data-combobox-selected', selector: 'option', condition: 'Option is selected' },
    { modifier: 'data-combobox-active', selector: 'option', condition: '`active` prop is set' },
    { modifier: 'data-combobox-disabled', selector: 'option', condition: '`disabled` prop is set' },
    { modifier: 'data-hidden', selector: 'dropdown', condition: '`hidden` prop is set' },
  ],
};
