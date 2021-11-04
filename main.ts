function stdServo (angle: number) {
    servos.P1.setAngle(angle)
}
function countAngle (incdec: number) {
    if (incdec == 1) {
        if (angleCounter < 180 && angleCounter >= 0) {
            angleCounter += 10
            basic.showNumber(angleCounter)
            stdServo(angleCounter)
        } else {
            basic.showNumber(angleCounter)
        }
    } else {
        if (angleCounter < 180 && angleCounter > 0) {
            angleCounter += -10
            basic.showNumber(angleCounter)
            stdServo(angleCounter)
        } else {
            basic.showNumber(angleCounter)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    countAngle(1)
})
input.onButtonPressed(Button.B, function () {
    countAngle(0)
})
function countSpeed (incdec: number) {
    if (incdec == 1) {
        if (speedCounter < 100 && speedCounter > -100) {
            speedCounter += 10
            basic.showNumber(speedCounter)
            contServo(speedCounter)
        } else {
            basic.showNumber(speedCounter)
        }
    } else {
        if (speedCounter < 100 && speedCounter > -100) {
            speedCounter += -10
            basic.showNumber(speedCounter)
            contServo(speedCounter)
        } else {
            basic.showNumber(speedCounter)
        }
    }
}
function contServo (speed: number) {
    servos.P0.run(speed)
}
let angleCounter = 0
let speedCounter = 0
speedCounter = 0
angleCounter = 0
