import { Divider, Layout, Typography } from '@douyinfe/semi-ui';
import { useAccessTokensQuery } from '@/graphql/queries/use-access-tokens-query.ts';


export function TokensList() {
  const { Content } = Layout;
  const { data, loading, error } = useAccessTokensQuery()

  return (
    <Content>
      <Typography.Title>Tokens</Typography.Title>
      <Typography.Paragraph>
        Here you can manage your API tokens. You can create new tokens, revoke existing ones, and see when they were last used.
      </Typography.Paragraph>

      <Divider />

      {loading && <Typography.Text>Loading...</Typography.Text>}

      {error && <Typography.Text type="danger">{error.message}</Typography.Text>}

      {data && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Scopes</th>
              <th>Revoked</th>
            </tr>
          </thead>
          <tbody>
            {data.accessTokens.data.map((token, index) => (
              <tr key={index}>
                <td>{token.name ?? 'No name'}</td>
                <td>{token.scopes}</td>
                <td>{token.revoked ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Content>
  )
}
