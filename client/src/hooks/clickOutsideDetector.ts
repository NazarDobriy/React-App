import { RefObject, useEffect } from "react";

function useClickOutsideDetector(
  ref: RefObject<HTMLElement>,
  clickOutside: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        clickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, clickOutside]);
}

export default useClickOutsideDetector;
