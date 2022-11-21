import React, { useEffect } from 'react';

import { resultFormProps } from './interface';
import { BRAND_NAME } from 'constants/data';
import Button from 'components/Button';

const Result = (props: resultFormProps) => {
  const { toggle, switchForm } = props;

  useEffect(() => {
    return () => switchForm && switchForm('REQUEST');
  }, [switchForm]);
  return (
    <div className='home-modal-container' data-testid='resultForm'>
      <p className={'home-modal-title'}>All done!</p>
      <span className={'home-modal-divider'}></span>
      <p
        className={'home-modal-result-text'}
      >{`You will be one of the first to experience ${BRAND_NAME} when we launch.`}</p>
      <Button className={'home-modal-button'} appearance='link' onClick={toggle}>
        OK
      </Button>
    </div>
  );
};

export default Result;
