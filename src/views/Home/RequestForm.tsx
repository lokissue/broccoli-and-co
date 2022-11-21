import React, { useState } from 'react';

import Button from 'components/Button';
import { Input } from 'components/Form';
import { formValueProps, requestFormProps } from './interface';

const RequestForm = (props: requestFormProps) => {
  const { toggle, switchForm } = props;
  const [formValues, setFormValues] = useState<formValueProps>({
    name: '',
    email: '',
    confirmEmail: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formValues.name || formValues.name.length < 3) {
      setErrorMsg('Full name needs to be at least 3 characters long');
      return;
    }
    if (!formValues.email || formValues.email !== formValues.confirmEmail) {
      setErrorMsg('Email not match');
      return;
    }
    setErrorMsg('');
    sendRequest();
  };

  const sendRequest = async () => {
    setErrorMsg('');

    try {
      const url = process.env.REACT_APP_API_URL;
      if (!url) {
        throw new Error('ENV parameter is missing!');
      }
      setIsSending(true);
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formValues.name,
          email: formValues.email,
        }),
      });
      if (res.ok) {
        switchForm && switchForm('RESULT');
        return;
      } else {
        const resJson = await res.json();
        const { errorMessage } = resJson;
        setErrorMsg(errorMessage);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg('Please try again!');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setErrorMsg('');
    setFormValues({ ...formValues, [e.target.name]: e.target.value || '' });
  };

  return (
    <>
      <form
        className={'home-modal-form home-modal-container'}
        onSubmit={handleSubmit}
        data-testid='requestForm'
      >
        <p className={'home-modal-title'}>Request on Invite</p>
        <span className={'home-modal-divider'}></span>
        <Input
          className={'home-modal-form-input'}
          type='text'
          name='name'
          onChange={handleChange}
          label={'Full name'}
          required
        />
        <Input
          className={'home-modal-form-input'}
          type='email'
          name='email'
          onChange={handleChange}
          label={'Email'}
          required
        />
        <Input
          className={'home-modal-form-input'}
          type='email'
          name='confirmEmail'
          onChange={handleChange}
          label={'Confirm Email'}
          required
        />

        <Button
          className={'home-modal-button'}
          appearance='link'
          type='submit'
          disabled={isSending}
          data-testid='submitBtn'
        >
          {isSending ? 'Sending, please wait...' : 'Send'}
        </Button>
        <Button className={'home-modal-button'} appearance='danger' onClick={toggle}>
          Cancel
        </Button>
      </form>
      {errorMsg ? (
        <span className='home-modal-error-message' data-testid='errorMsg'>
          {errorMsg}
        </span>
      ) : null}
    </>
  );
};

export default RequestForm;
