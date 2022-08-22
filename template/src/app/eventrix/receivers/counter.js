import { EventsReceiver } from 'eventrix';
import {
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
    INCREMENT_COUNTER_BY_AMOUNT,
    FETCH_COUNTER,
} from "../eventsNames/counter";
import { fetchCount } from "../../api/counter";

const incrementCounterReceiver = new EventsReceiver(
    INCREMENT_COUNTER,
    (eventName, payload, stateManager) => {
        const counterValue = stateManager.getState('counter.value');
        stateManager.setState('counter.value', counterValue + 1);
    }
);

const decrementCounterReceiver = new EventsReceiver(
    DECREMENT_COUNTER,
    (eventName, payload, stateManager) => {
        const counterValue = stateManager.getState('counter.value');
        stateManager.setState('counter.value', counterValue - 1);
    }
);

const incrementByAmountCounterReceiver = new EventsReceiver(
    INCREMENT_COUNTER_BY_AMOUNT,
    (eventName, payload, stateManager) => {
        const counterValue = stateManager.getState('counter.value');
        stateManager.setState('counter.value', counterValue + payload);
    }
);

const incrementByFetchCounterReceiver = new EventsReceiver(
    FETCH_COUNTER,
    async (eventName, payload, stateManager) => {
        stateManager.setState('counter.status', 'pending');
        const { data: amount } = await fetchCount(payload);
        const counterValue = stateManager.getState('counter.value');
        stateManager.setState('counter', {
            value: counterValue + amount,
            status: 'idle'
        });
    }
);

export default [
    incrementCounterReceiver,
    decrementCounterReceiver,
    incrementByAmountCounterReceiver,
    incrementByFetchCounterReceiver,
];