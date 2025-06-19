export const tableColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 60,
    fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    ellipsis: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 150,
    ellipsis: true,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: 120,
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    width: 120,
    ellipsis: true,
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
    width: 120,
    ellipsis: true,
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
    width: 100,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    width: 100,
    render: (value) => `$${value?.toLocaleString()}`,
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    width: 100,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 80,
    render: (status) => (
      <span className={`status-${status?.toLowerCase()}`}>
        {status}
      </span>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: 120,
  },
  {
    title: 'Manager',
    dataIndex: 'manager',
    key: 'manager',
    width: 120,
    ellipsis: true,
  },
  {
    title: 'Projects',
    dataIndex: 'projects',
    key: 'projects',
    width: 80,
  },
];