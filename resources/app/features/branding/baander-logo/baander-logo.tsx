import { Icon } from '@iconify/react';

interface BaanderLogoProps {
  size?: number | string;
}
export function BaanderLogo({ size }: BaanderLogoProps) {
  return (
    <Icon icon="fxemoji:tapecartridge" fontSize={size} />
  );
}
