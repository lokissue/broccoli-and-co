import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { HeaderProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const Header = (props: HeaderProps, ref) => {
  const { className, children, ...rest } = props;
  const prefixCls = PREFIXCLS + '-header';
  return (
    <header ref={ref} {...rest} className={classNames(prefixCls, className)}>
      {children}
    </header>
  );
};

const HeaderComponent = forwardRef<unknown, HeaderProps>(Header);

HeaderComponent.displayName = 'LayoutHeader';

export default HeaderComponent;
