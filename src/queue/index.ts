import throttledQueue from 'throttled-queue';

const throttle = throttledQueue(1, 1000, true);

export default throttle;
