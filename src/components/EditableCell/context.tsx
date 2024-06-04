import { createContext } from 'react';

interface ContextProps {
  name: string;
  editable: boolean;
  value?: any;
  onChange?: (field: string, value: any) => Promise<void>;
}

export const Context = createContext<ContextProps>({
  name: '',
  editable: true,
  value: undefined,
  onChange: () => Promise.resolve(),
});
