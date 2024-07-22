import React from 'react';
import { useTable, useSortBy, Column } from 'react-table';
import { FaArrowUp, FaArrowDown, FaSort } from 'react-icons/fa';

interface CryptoData {
    _id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    high_24h: number;
    low_24h: number;
    created_at: Date;
}

interface PriceTableProps {
    data: CryptoData[];
    loading: boolean;
    error: string | null;
}

const PriceTable: React.FC<PriceTableProps> = ({ data, loading, error }) => {
    const columns: Column<CryptoData>[] = React.useMemo(
        () => [
            {
                Header: 'Symbol',
                accessor: 'symbol',
                Cell: ({ value }: { value: string }) => (
                    <img src={value} alt="crypto symbol" className="w-8 h-8" />
                ),
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Current Price',
                accessor: 'current_price',
                Cell: ({ value }: { value: number }) => `$${value.toFixed(2)}`,
            },
            {
                Header: '24h Change',
                accessor: 'price_change_percentage_24h',
                Cell: ({ value }: { value: number }) => (
                    <span className={`flex items-center ${value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {value >= 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                        {Math.abs(value).toFixed(2)}%
                    </span>
                ),
            },
            {
                Header: '24h High',
                accessor: 'high_24h',
                Cell: ({ value }: { value: number }) => `$${value.toFixed(2)}`,
            },
            {
                Header: '24h Low',
                accessor: 'low_24h',
                Cell: ({ value }: { value: number }) => `$${value.toFixed(2)}`,
            },
            {
                Header: 'Updated At',
                accessor: 'created_at',
                Cell: ({ value }: { value: Date }) => new Date(value).toLocaleString(),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );

    if (loading) return <div className="text-center py-10 text-2xl font-bold text-blue-600">Loading...</div>;
    if (error) return <div className="text-center py-10 text-2xl font-bold text-red-600">Error: {error}</div>;
    if (data.length === 0) return <div className="text-center py-10 text-2xl font-bold text-gray-600">No data available</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table {...getTableProps()} className="w-full">
                            <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column: any) => (
                                            <th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                                className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider"
                                            >
                                                <span className="flex items-center">
                                                    {column.render('Header')}
                                                    <span className="ml-2">
                                                        {column.isSorted
                                                            ? column.isSortedDesc
                                                                ? <FaArrowDown className="text-gray-200" />
                                                                : <FaArrowUp className="text-gray-200" />
                                                            : <FaSort className="text-gray-400" />}
                                                    </span>
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                                {rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()} className="hover:bg-gray-50 transition-colors duration-200">
                                            {row.cells.map((cell) => (
                                                <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceTable;



