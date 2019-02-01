/**
 * 1.总是用Class，取代需要prototype的操作，因为Class的
 * 写法更简单，更易于理解。
 * */
// bad
function Queue(contents = []) {
    this._queue = [...contents];
}

Queue.prototype.pop = function () {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
}

// good
class Queues {
    constructor(contents = []) {
        this._queue = [...contents];
    }

    pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
    }
}

/**
 * 2.使用extends实现继承，因为这样更简单，不会有破坏instanceof
 * */
// bad
const inherits = require('inherits');

function PeekableQueue(contents) {
    Queue.apply(this.contents);
}

inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
    return this._queue[0];
}

// bad
class PeekableQueues extends Queue {
    peek() {
        return this._queue[0];
    }
}