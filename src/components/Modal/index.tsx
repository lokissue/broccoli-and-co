import React, { forwardRef, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ModalProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const Modal = (props: ModalProps, ref) => {
  const { className, children, visible, toggle, onOpen, onClose, ...rest } = props;
  const prefixCls = PREFIXCLS + '-modal';
  const innerModalRef = useRef();
  const modalRef = ref || innerModalRef;
  const [didOpened, setDidOpened] = useState(false);

  useEffect(() => {
    if (visible) {
      setDidOpened(true);
      onOpen && onOpen();
    } else if (!visible && didOpened) {
      onClose && onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, onClose, onOpen]);

  return visible ? (
    <div ref={modalRef} className={`${prefixCls}-overlay`} onClick={toggle} {...rest}>
      <div onClick={(e) => e.stopPropagation()} className={classNames(`${prefixCls}-box`)}>
        <div className={classNames(`${prefixCls}-content`, className)}>{children}</div>
      </div>
    </div>
  ) : null;
};

const ModalComponent = forwardRef<unknown, ModalProps>(Modal);

ModalComponent.displayName = 'Modal';

export default ModalComponent;
