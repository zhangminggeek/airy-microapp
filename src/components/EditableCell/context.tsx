import { createContext } from 'react';

interface ContextProps {
  title: string;
  name: string;
  editable: boolean;
  value?: any;
  onChange?: (field: string, value: any) => Promise<void>;
}

export const Context = createContext<ContextProps>({
  title: '',
  name: '',
  editable: true,
  value: undefined,
  onChange: () => Promise.resolve(),
});
