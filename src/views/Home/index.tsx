import React, { useState } from 'react';

import { ModalState } from './interface';
import Modal from 'components/Modal';
import useModal from 'util/hooks/useModal';
import Button from 'components/Button';
import RequestForm from './RequestForm';
import Result from './Result';

const Home = () => {
  const { isVisible, toggle } = useModal();
  const [modalState, setModalState] = useState<ModalState>('REQUEST');

  const switchForm = (state: ModalState) => {
    setModalState(state);
  };

  return (
    <div className={'home'}>
      <h1 className={'home-title'}>
        A better way
        <br />
        to enjoy every day.
      </h1>
      <h5 className={'home-subtitle'}>Be the first to know when we launch</h5>
      <div>
        <Button className={'home-request-button'} onClick={toggle} data-testid='requestBtn'>
          Request an Invite
        </Button>
      </div>
      <Modal
        visible={isVisible}
        toggle={toggle}
        className={'home-modal'}
        onClose={() => setModalState('REQUEST')}
        data-testid='requestModal'
      >
        {modalState === 'RESULT' ? (
          <Result toggle={toggle} />
        ) : (
          <RequestForm toggle={toggle} switchForm={switchForm} />
        )}
      </Modal>
    </div>
  );
};

export default Home;
