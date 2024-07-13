import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { routesPath } from 'shared/router';
import { UiLogo } from 'shared/ui';

interface HeaderLogoProps {
  className?: string;
}

export const HeaderLogo: FC<HeaderLogoProps> = props => {
  return (
    <Link
      className={props.className ?? ''}
      to={routesPath.home}
    >
      <UiLogo />
    </Link>
  );
};
