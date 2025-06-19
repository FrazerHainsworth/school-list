import React from 'react';
import { Table } from 'antd';
import { tableColumns } from '../../config/tableConfig';
import './DataTable.css';

const DataTable = ({ data, loading }) => {
  return (
    <div className="data-table-container">
      <Table
        columns={tableColumns}
        dataSource={data}
        loading={loading}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        scroll={{ x: 1200 }}
        size="small"
      />
    </div>
  );
};

export default DataTable;