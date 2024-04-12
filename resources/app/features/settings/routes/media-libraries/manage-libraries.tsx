import { useEffect, useState } from 'react';
import { useLibrariesQuery } from '@/graphql/queries/use-libraries-query.ts';
import { Layout, Table, Typography } from '@douyinfe/semi-ui';
import { formatTime, TimeFormat } from '@/support/time';

interface TableRow {
  name: string;
  path: string;
  type: string;
  last_scan: string;
  updated_at: string;
}

export function ManageLibraries() {
  const { data, loading, error } = useLibrariesQuery();
  const [rows, setRows] = useState<TableRow[]>([]);

  const { Title } = Typography;
  const { Content } = Layout;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Path',
      dataIndex: 'path',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Last Scan',
      dataIndex: 'last_scan',
    },
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
    }
  ];

  useEffect(() => {
    if (data) {
      const rows = data.libraries.data.map((library) => ({
        name: library.name,
        path: library.path,
        type: library.type,
        last_scan: library.last_scan,
        updated_at: formatTime(library.updated_at, TimeFormat.Full),
      }));
      setRows(rows);
    }
  }, [data?.libraries.data]);

  return (
    <Content style={{ padding: '1rem' }}>
      <Title>Manage Libraries</Title>


      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>},

      {data && (
        <Table
          columns={columns}
          dataSource={rows}
          pagination={false}
        />
      )}
    </Content>
  )

}
