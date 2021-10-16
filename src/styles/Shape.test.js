const Shape = require("./Shape")
// @ponicode
describe("Shape.circle", () => {
    test("0", () => {
        let callFunction = () => {
            Shape.circle(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Shape.circle(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Shape.circle(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Shape.circle(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Shape.circle(64)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Shape.circle(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
