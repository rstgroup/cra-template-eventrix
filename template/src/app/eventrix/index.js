import { Eventrix } from 'eventrix';
import receivers from './receivers';

const initialState = {
  counter: {
    value: 0,
    status: 'idle',
  },
}

const eventrix = new Eventrix(initialState, receivers);

export default eventrix;