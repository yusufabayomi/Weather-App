import { useEffect, RefObject } from 'react';

const useClickOutside = (ref: RefObject<HTMLDivElement>, handleClick: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (null !== ref.current) {
        if (ref.current.contains(event.target as Node)) {
          return;
        }
        handleClick();
      }
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handleClick]);
};

export default useClickOutside;
