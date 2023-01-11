// Instructions
// Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.

// He must use the Second Law of Motion that states, "when the forces acting on an object are unbalanced, the object will accelerate."

// This acceleration is dependent upon the force that acts upon the object and the object's mass.

// So he wants to know what the acceleration of that object is, depending on its properties:

// mass of xx
// Δv of xx
// Δt of xx
// force of xx
// distance xx
// time xx
// Create a function named getAcceleration that calculates the velocity of a given object. For example:

// {
//   f: 10,
//   m: 5,
//   Δv: 100,
//   Δt: 50,
//   t:1,
//   d: 10
// }
// If its not possible to calculate it, it must return the string "impossible".

// Formulas
// a = F/m
// a = Δv/Δt
// a = 2d/t^2

// a = acceleration
// m = mass
// F = force
// Δv = final velocity - initial velocity
// Δt = final time - initial time
// d = distance
// t = time
// Quote
// "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things."

// Isaac Newton



// The getAcceleration function calculates the acceleration of an object based on its properties. It takes an object as an argument, and the object can have the following properties:

// f: The force acting on the object
// m: The mass of the object
// Δv: The change in velocity of the object
// Δt: The change in time of the object
// t: The time it takes for the object to travel a certain distance
// d: The distance traveled by the object
// The function then uses the appropriate formula to calculate the acceleration based on the properties that are provided in the obj argument. The formulas used are:

// a = F/m
// a = Δv/Δt
// a = 2d/t^2
// where a is the acceleration, F is the force, m is the mass, Δv is the change in velocity, Δt is the change in time, d is the distance, and t is the time.

// If it is not possible to calculate the acceleration based on the given properties, the function returns the string "impossible".

function getAcceleration(obj) {
    if (obj.f && obj.m){
        return obj.f/obj.m
    } else if (obj.Δv && obj.Δt){
        return obj.Δv/obj.Δt
    } else if (obj.d && obj.t){
        return 2*obj.d/(obj.t*obj.t)
    } else {
        return "impossible"
    }
}