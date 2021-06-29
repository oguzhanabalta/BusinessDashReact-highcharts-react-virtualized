import React, {useContext} from 'react';
import styled from "styled-components";
import { tableRows, tableColumns } from './Data';
import { AutoSizer, Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { Card } from './Card';
import { medGrey } from './GlobalStyle';
import { ThemeContext } from './Dashboard';
import { brandColor } from './GlobalStyle';

const ROW_HEIGHT = 48;

const TableCell = styled.div`
  display: flex;
  color: ${({header,dark})=> dark ?  (header ? brandColor: 'white'): 'black' };
  ${({ align }) => align === 'right' && `flex-direction: row-reverse`}
`;


class ReactVirtualizedTable extends React.Component {

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, dark } = this.props;
        return (
            <TableCell
                dark={dark}
                align={columns[columnIndex].numeric ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };
    headerRenderer = ({ label, columnIndex }) => {
        const { columns, dark } = this.props;
        return (
            <TableCell
                dark={dark}
                header
                align={columns[columnIndex].numeric ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { columns, dark } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={ROW_HEIGHT}
                        headerHeight={ROW_HEIGHT}
                        rowCount={tableRows.length}
                        rowGetter={({ index }) => tableRows[index]}
                        rowStyle={{
                            borderBottom: `1px solid ${dark ? 'grey' : medGrey}`,
                            boxSizing: 'border-box',
                        }}
                        gridStyle={{ outline: 0 }}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    dataKey={dataKey}
                                    headerRenderer={headerProps =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    cellRenderer={this.cellRenderer}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

export function VirtualizedTable() {
    const [theme, setTheme] =useContext(ThemeContext);
    const dark=theme==='dark';
    return (
        <Card height={400} dark={dark}>
            <ReactVirtualizedTable dark={dark} columns={tableColumns} />
        </Card>
    );
}
