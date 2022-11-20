import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { ContentProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const Content = (props: ContentProps, ref) => {
  const { className, children, ...rest } = props;
  const prefixCls = PREFIXCLS + '-content';
  return (
    <main ref={ref} {...rest} className={classNames(prefixCls, className)}>
      {children}
    </main>
  );
};

const ContentComponent = forwardRef<unknown, ContentProps>(Content);

ContentComponent.displayName = 'LayoutContent';

export default ContentComponent;
