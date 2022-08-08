export function slow ({ val, toVal, callback, controlSpeed = 3, fluent = 30 } = {}) {
    const info = { sum: parseInt(val), toValue: parseInt(toVal) };
    clearInterval(info.timer);
    info.timer = setInterval(function () {
        let stop = true;
        let value = info.sum;
        let speed = (info.toValue - value) / controlSpeed;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (value != toVal) stop = false;
        info.sum = value + speed;
        callback && callback(info.sum);
        if (stop) {
            clearTimeout(info.timer);
            // callback&&callback(value);
        }
    }, fluent);
}