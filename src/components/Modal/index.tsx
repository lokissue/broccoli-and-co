import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { ModalProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const Modal = (props: ModalProps, ref) => {
  const { className, children, visible, toggle, ...rest } = props;
  const prefixCls = PREFIXCLS + '-modal';

  return visible ? (
    <div ref={ref} className={`${prefixCls}-overlay`} onClick={toggle} {...rest}>
      <div onClick={(e) => e.stopPropagation()} className={classNames(`${prefixCls}-box`)}>
        <div className={classNames(`${prefixCls}-content`, className)}>{children}</div>
      </div>
    </div>
  ) : null;
};

const ModalComponent = forwardRef<unknown, ModalProps>(Modal);

ModalComponent.displayName = 'Modal';

export default ModalComponent;
