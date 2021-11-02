function stdServo (angle: number) {
    servos.P0.setAngle(angle)
}
input.onButtonPressed(Button.A, function () {
    speedCounter += 10
    contServo(speedCounter)
})
input.onButtonPressed(Button.B, function () {
    angleCounter += 10
    stdServo(angleCounter)
})
function contServo (speed: number) {
    servos.P0.run(speed)
}
let angleCounter = 0
let speedCounter = 0
speedCounter = 0
angleCounter = 0
