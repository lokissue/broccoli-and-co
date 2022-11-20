import { useState } from 'react';

export default function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return {
    isVisible,
    toggle,
  };
}
