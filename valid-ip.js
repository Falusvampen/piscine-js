// Instructions
// Create a function named findIP, that returns an array of valid IP addresses from a given string. 
// These addresses may or may not have a port.

// For the IP part, the syntax will be as follows, where x is a number from 0-255. 
// Values with leading zeros are not valid:

// x.x.x.x
// Don't forget to learn about the syntax of ports. 
// But remember, the maximum TCP port number is 65,535.

// For this task, you only need to concern yourself with <host> and <port>. 
// Don't worry about <scheme> or anything else.

const myreg = /(((?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\b)(:(6553[0-5]|[1-4]?[0-9]{1,4}|[0-9])?|(?!:))(?!\d)/g
function findIP (str) {
 return str.match(myreg);
}