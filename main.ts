input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
    basic.showString("A")
    basic.showString("B")
})
