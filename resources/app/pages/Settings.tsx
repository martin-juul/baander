import { useAppDashboards } from '@/hooks/use-app-dashboards';

export function Settings() {
  const { openPulse } = useAppDashboards()

  return (
    <div>
      <div onClick={() => openPulse()}>
        Pulse
      </div>
    </div>
  )
}
