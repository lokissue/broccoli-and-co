import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { InputProps } from './interface';
import { PREFIXCLS } from 'constants/data';

const Input = (props: InputProps, ref) => {
  const prefixCls = PREFIXCLS + '-forminput';
  const { className, style, label, onChange, type, name, required, placeholder } = props;
  return (
    <div className={classNames(`${prefixCls}`, className)}>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder || ' '}
        onChange={onChange}
        style={style}
      />
      <label>{label}</label>
    </div>
  );
};

const InputComponent = forwardRef<unknown, InputProps>(Input);

InputComponent.displayName = 'Modal';

export default InputComponent;
