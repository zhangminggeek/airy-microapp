import { createContext } from 'react';

interface ContextValue {
  divider: boolean;
}

const defaultValue: ContextValue = {
  divider: false,
};

const Context = createContext<ContextValue>(defaultValue);

export default Context;
