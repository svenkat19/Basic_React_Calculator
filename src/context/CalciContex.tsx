import  { createContext, Dispatch, SetStateAction } from 'react';

interface CalciContexType {
  stored: string | null;
  setStored: Dispatch<SetStateAction<string | null>>;
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
  alerter:boolean;
  setAlerter:Dispatch<SetStateAction<boolean>>;
}

const CalciContex = createContext<CalciContexType | undefined>(undefined);

export default CalciContex;
