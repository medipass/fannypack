import * as React from 'react';
import { Breakpoint } from '../types';

export type ColumnsContextProps = {
  isGapless?: boolean;
  minBreakpoint?: Breakpoint;
};

export default React.createContext({ isGapless: false, minBreakpoint: undefined } as ColumnsContextProps);
