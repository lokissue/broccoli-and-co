import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const defaultProps: ButtonProps = {
  appearance: 'primary',
};

const Button = (props: ButtonProps, ref) => {
  const prefixCls = PREFIXCLS + '-button';
  const { className, style, children, appearance, ...rest } = props;
  return (
    <button className={classNames(`${prefixCls}-${appearance}`, className)} style={style} {...rest}>
      {children}
    </button>
  );
};

const ButtonComponent = forwardRef<unknown, ButtonProps>(Button);

ButtonComponent.displayName = 'Button';
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
