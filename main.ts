/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-11-20
* @fileoverview this program determines your demographic based on age and whether or not you are a student
*/

//Input information
const inputName = prompt("Enter your name:")
const inputAge = prompt("Enter your age:")
const student = prompt("Are you a student? (yes or no):")

//age to number
const age = inputAge ? Number(inputAge) : 0

//Make boolean statement with student clarification
const isStudent = student?.toLowerCase() === "yes"

//Check nececities and make correct statement
if (isStudent && age >= 13 && age <= 19) {
  console.log(`Student ${inputName} is a teenager.`)
}
if (isStudent && age >= 5 && age <= 12) {
  console.log(`Student ${inputName} is a child.`)
}
if (!isStudent && age >= 20 && age <= 30) {
  console.log(`${inputName} is a young adult.`)
} else {
  console.log(`${inputName} is in a different life stage.`)
}
