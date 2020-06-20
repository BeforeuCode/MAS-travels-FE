import React, { ReactElement, ReactNode } from 'react';
import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';

const tableStyles = makeStyles(() => ({
  paper: {
    width: '100%',
    boxShadow: 'none',
    border: '1px solid #EAEEF1',
    borderRadius: '5px',
  },
  header: {
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    color: '#7c7c7c',
    minWidth: '15rem',
    backgroundColor: 'white',
    borderTop: '1px solid rgba(224, 224, 224, 1)',
  },
  container: {},
  cell: {
    padding: '1rem 3rem',
    fontSize: '1.4rem',
    color: '#1b1b1b',
    fontWeight: 500,
    minWidth: '15rem',
    maxWidth: '24rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

interface ITableContainerProps {
  fullHeight: boolean;
  maxContentHeight: string;
}
const StyledTableContainer = styled(TableContainer)<ITableContainerProps>`
  && {
    max-height: ${({ fullHeight, maxContentHeight }) =>
      fullHeight ? '100%' : maxContentHeight};
  }
`;

interface DefaultCellProps<RowData> {
  data?: RowData[keyof RowData] | number;
}

const DefaultCell = <RowData extends {}>({
  data,
}: DefaultCellProps<RowData>) => {
  return <div>{data}</div>;
};

export interface CellConfig<RowData> {
  name: string;
  propKey?: keyof RowData;
  renderCell?: (d: RowData, name: string | number) => ReactElement;
}

export interface PlxCustomTableProps<RowData> {
  data: RowData[];
  config: CellConfig<RowData>[];
  fullHeight?: boolean;
  maxContentHeight?: string;
}

export const CustomTable = <RowData extends {}>({
  config,
  data,
  children,
  fullHeight = false,
  maxContentHeight = '43rem',
}: PlxCustomTableProps<RowData> & { children?: ReactNode }) => {
  const classes = tableStyles();

  const Header = config.map(({ name }, index: number) => (
    <TableCell className={classes.header} align={'left'} key={`${index}`}>
      {name}
    </TableCell>
  ));

  return (
    <Paper className={classes.paper}>
      {children}
      <StyledTableContainer
        fullHeight={fullHeight}
        maxContentHeight={maxContentHeight}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>{Header}</TableRow>
          </TableHead>
          <TableBody>
            {data.map((rowData, index) => {
              return (
                <TableRow key={index}>
                  {config.map(({ name, renderCell, propKey }, index) => {
                    const key = propKey ? String(propKey) : index;
                    return (
                      <TableCell key={key} className={classes.cell}>
                        {renderCell ? (
                          renderCell(rowData, key)
                        ) : (
                          <DefaultCell
                            data={propKey ? rowData[propKey] : Math.random()}
                          />
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};
