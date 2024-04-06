import { Typography } from "@douyinfe/semi-ui";
import { Link } from 'react-router-dom';


export function Dashboard() {
  return (
    <div>
      <Link to="/settings/tokens">Manage tokens</Link>

      <Typography.Title>Dashboard</Typography.Title>
      <Typography.Paragraph>
        Welcome to the dashboard! Here you can see an overview of your account.
      </Typography.Paragraph>
    </div>
  )
}
