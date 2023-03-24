import React from 'react';
import { render, tests, createContextContainer, patchConsoleError } from '@mantine/tests';
import { screen } from '@testing-library/react';
import {
  TableTh,
  TableThProps,
  TableCaption,
  TableCaptionProps,
  TableTbody,
  TableTbodyProps,
  TableTd,
  TableTdProps,
  TableTfoot,
  TableTfootProps,
  TableTr,
  TableTrProps,
  TableThead,
  TableTheadProps,
} from './Table.components';
import { Table } from './Table';

describe('@mantine/core/Table', () => {
  beforeAll(patchConsoleError);
  afterAll(patchConsoleError.release);

  describe('TableTh', () => {
    const TestContainer = createContextContainer(TableTh, Table);
    tests.itSupportsSystemProps<TableThProps, 'th'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableCellElement,
      displayName: '@mantine/core/TableTh',
      stylesApiName: 'Table',
      selector: 'th',
      stylesApiSelectors: ['th'],
    });

    it('sets data-with-column-border attribute when withColumnBorders prop is set on Table component', () => {
      const WithColumnBorder = createContextContainer(TableTh, Table, { withColumnBorders: true });
      const WithoutColumnBorder = createContextContainer(TableTh, Table, {
        withColumnBorders: false,
      });

      const { rerender } = render(<WithColumnBorder />);
      expect(screen.getByRole('columnheader')).toHaveAttribute('data-with-column-border');
      rerender(<WithoutColumnBorder />);
      expect(screen.getByRole('columnheader')).not.toHaveAttribute('data-with-column-border');
    });
  });

  describe('TableTd', () => {
    const TestContainer = createContextContainer(TableTd, Table);
    tests.itSupportsSystemProps<TableTdProps, 'td'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableCellElement,
      displayName: '@mantine/core/TableTd',
      stylesApiName: 'Table',
      selector: 'td',
      stylesApiSelectors: ['td'],
    });

    it('sets data-with-column-border attribute when withColumnBorders prop is set on Table component', () => {
      const WithColumnBorder = createContextContainer(TableTd, Table, { withColumnBorders: true });
      const WithoutColumnBorder = createContextContainer(TableTd, Table, {
        withColumnBorders: false,
      });

      const { rerender } = render(<WithColumnBorder />);
      expect(screen.getByRole('cell')).toHaveAttribute('data-with-column-border');
      rerender(<WithoutColumnBorder />);
      expect(screen.getByRole('cell')).not.toHaveAttribute('data-with-column-border');
    });
  });

  describe('TableTr', () => {
    const TestContainer = createContextContainer(TableTr, Table);
    tests.itSupportsSystemProps<TableTrProps, 'tr'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableRowElement,
      displayName: '@mantine/core/TableTr',
      stylesApiName: 'Table',
      selector: 'tr',
      stylesApiSelectors: ['tr'],
    });

    it('sets data-with-row-border attribute when withRowBorders prop is set on Table component', () => {
      const WithRowBorder = createContextContainer(TableTr, Table, { withRowBorders: true });
      const WithoutRowBorder = createContextContainer(TableTr, Table, { withRowBorders: false });

      const { rerender } = render(<WithRowBorder />);
      expect(screen.getByRole('row')).toHaveAttribute('data-with-row-border');
      rerender(<WithoutRowBorder />);
      expect(screen.getByRole('row')).not.toHaveAttribute('data-with-row-border');
    });

    it('sets data-striped attribute when striped prop is set on Table component', () => {
      const Striped = createContextContainer(TableTr, Table, { striped: 'even' });
      const NotStriped = createContextContainer(TableTr, Table, { striped: false });

      const { rerender } = render(<Striped />);
      expect(screen.getByRole('row')).toHaveAttribute('data-striped', 'even');
      rerender(<NotStriped />);
      expect(screen.getByRole('row')).not.toHaveAttribute('data-striped');
    });

    it('sets data-hover attribute when highlightOnHover prop is set on Table component', () => {
      const Hover = createContextContainer(TableTr, Table, { highlightOnHover: true });
      const NotHover = createContextContainer(TableTr, Table, { highlightOnHover: false });

      const { rerender } = render(<Hover />);
      expect(screen.getByRole('row')).toHaveAttribute('data-hover');
      rerender(<NotHover />);
      expect(screen.getByRole('row')).not.toHaveAttribute('data-hover');
    });
  });

  describe('TableThead', () => {
    const TestContainer = createContextContainer(TableThead, Table);
    tests.itSupportsSystemProps<TableTheadProps, 'thead'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableSectionElement,
      displayName: '@mantine/core/TableThead',
      stylesApiName: 'Table',
      selector: 'thead',
      stylesApiSelectors: ['thead'],
    });
  });

  describe('TableTbody', () => {
    const TestContainer = createContextContainer(TableTbody, Table);
    tests.itSupportsSystemProps<TableTbodyProps, 'tbody'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableSectionElement,
      displayName: '@mantine/core/TableTbody',
      stylesApiName: 'Table',
      selector: 'tbody',
      stylesApiSelectors: ['tbody'],
    });
  });

  describe('TableTfoot', () => {
    const TestContainer = createContextContainer(TableTfoot, Table);
    tests.itSupportsSystemProps<TableTfootProps, 'tfoot'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableSectionElement,
      displayName: '@mantine/core/TableTfoot',
      stylesApiName: 'Table',
      selector: 'tfoot',
      stylesApiSelectors: ['tfoot'],
    });
  });

  describe('TableCaption', () => {
    const TestContainer = createContextContainer(TableCaption, Table);
    tests.itSupportsSystemProps<TableCaptionProps, 'caption'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableCaptionElement,
      displayName: '@mantine/core/TableCaption',
      stylesApiName: 'Table',
      selector: 'caption',
      stylesApiSelectors: ['caption'],
    });

    it('sets data-side attribute based on value set on Table component', () => {
      const Container = createContextContainer(TableCaption, Table, { captionSide: 'top' });
      const { container } = render(<Container />);
      expect(container.querySelector('caption')).toHaveAttribute('data-side', 'top');
    });
  });
});