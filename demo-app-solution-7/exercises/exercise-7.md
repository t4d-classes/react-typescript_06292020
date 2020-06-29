# Exercise 7 (Optional homework for tonight, we will review in the morning)

1. Utilize Tool Header component in Car Tool.

2. Create a new component named Car Table. Move the table of cars to the new Car Table component.

3. In Car Tool replace the car table, with the new Car Table component.

4. Create a new component named Car View Row. Car View Row will display a single table row of car data.

5. Utilize the Car View Row componet in Car Table component to display the car data.

6. Create a new component named Car Form. Move the car from Car Tool to the new component. Utilize the new Car Form component within Car Tool.

7. In the Car Table component, add a new header column with a label of 'Actions'.

8. In the Car View Row component, add a new column. In the new column place a button with a label of "Delete". When the button is clicked remove the car from the table.

Hint: to remove an object from an array immutably use the array filter method:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Big Lab for Tomorrow - Preview of the Instructions

I will give the full time in class tomorrow do this exercise (45 mins - 1 hr)

1. Create a new component named Car Edit Row. The Car Edit Row is similar to Car View Row except the columns for make, model, year, color and price are input fields. When the Car Edit Row is displayed, prepopulate the fields with the data of the car being edited. Do not make the Id an input field. In the last column, there should be two buttons: save and cancel. Do not implement the logic to do that save and cancel, but display the buttons.

2. Add a button labeled edit to the last column of the Car View Row component. When the button is clicked the row on which it is clicked changes to a Car Edit Row. Only one row is editable at a time. You data structure should only support editing one row at a time.

3. Fully implement save car and cancel car buttons. Be sure to perform your save operation with immutable programming techniques. If you cancel, revert the changes back to the original.

Hint: Helpful JavaScript API functions: findIndex

4. If one of the table rows is being edited, the edit row should change to a view row after, a car is added, or a car is deleted, or a car is saved. Add or delete, the changes for the one being edited should not be saved.
