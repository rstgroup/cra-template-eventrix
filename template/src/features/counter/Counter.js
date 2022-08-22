import React, { useState } from 'react';
import { useEventrixState, useEmit } from 'eventrix';
import styles from './Counter.module.css';
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_BY_AMOUNT,
  FETCH_COUNTER
} from "../../app/eventrix/eventsNames/counter";

export function Counter() {
  const count = useEventrixState('counter.value');
  const emit = useEmit();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => { emit(DECREMENT_COUNTER); }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => { emit(INCREMENT_COUNTER); }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => { emit(INCREMENT_COUNTER_BY_AMOUNT, incrementValue); }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => { emit(FETCH_COUNTER, incrementValue); }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
              const newCounter = count + incrementAmount;
              if (count % 2 === 1) {
                emit(INCREMENT_COUNTER_BY_AMOUNT, incrementValue);
              }
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
