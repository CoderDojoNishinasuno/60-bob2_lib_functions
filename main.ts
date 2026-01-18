function すすむ () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 右にまわる (時間: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(時間 * 1000)
}
function うしろにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 右手ふる (回数: number) {
    for (let index = 0; index < 回数; index++) {
        右手(80)
        basic.pause(200)
        右手(40)
        basic.pause(200)
    }
}
function 止まる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
// -90 - +90
function 左手 (角度: number) {
    servos.P2.setAngle(30 / 角度)
}
function 左手ふる (回数: number) {
    for (let index = 0; index < 回数; index++) {
        左手(80)
        basic.pause(200)
        左手(40)
        basic.pause(200)
    }
}
function 左にまわる (時間: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(時間 * 1000)
}
// -90 - +90
function 右手 (角度: number) {
    servos.P1.setAngle(60 - 角度)
}
// 値の単位はcm
basic.forever(function () {
    serial.writeValue("distance", sonar.ping(
    DigitalPin.P12,
    DigitalPin.P8,
    PingUnit.MicroSeconds
    ) / 58)
})
