import { useEffect, RefObject } from 'react';

const useExternalClick = (ref: RefObject<HTMLDivElement>, handleClick: () => void) => {
  useEffect(() => {
    const listener = ({ target }: any) => {
      if (null !== ref.current) {
        if (ref.current.contains(target)) {
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

export default useExternalClick;
