import { useState } from "react";

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = (): void => setValue((state: boolean) => !state);

  return [value, toggleValue];
};

export default useToggle;
