import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { FooterProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const Footer = (props: FooterProps, ref) => {
  const { className, children, ...rest } = props;
  const prefixCls = PREFIXCLS + '-footer';
  return (
    <footer ref={ref} {...rest} className={classNames(prefixCls, className)}>
      {children}
    </footer>
  );
};

const FooterComponent = forwardRef<unknown, FooterProps>(Footer);

FooterComponent.displayName = 'LayoutFooter';

export default FooterComponent;
