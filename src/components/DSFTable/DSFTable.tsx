import React from 'react';
import '../../resources/css/dsf.main.min.css';

interface TableColumn {
  header: string;
  type?: 'text' | 'number'; // Make the type optional
}

export interface DSFTableProps {
  columns: TableColumn[];
  rowData: (string | number)[][];
}

const DSFTable: React.FC<DSFTableProps> = ({ columns, rowData }) => {
  const getColumnAlignClass = (column: TableColumn): string | undefined => {
    if (column.type === 'number') {
      return 'govcy-text-end';
    }
    return undefined; // No alignment class for 'text' or when type is not specified
  };

  return (
    <div className="govcy-table-responsive">
      <table className="govcy-table govcy-table-responsive-vertical govcy-mb-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex} scope="col" className={getColumnAlignClass(columns[columnIndex])}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th scope="row">{rowIndex + 1}</th>
              {row.map((data, columnIndex) => {
                return (
                  <td key={columnIndex} className={getColumnAlignClass(columns[columnIndex])}>
                    {data}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DSFTable.defaultProps = {
  columns: [],
  rowData: [],
};

DSFTable.displayName = 'DSFTable';

export default DSFTable;
