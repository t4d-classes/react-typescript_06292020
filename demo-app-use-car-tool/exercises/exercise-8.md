# Exercise 8

1. Create a new component named Car Edit Row. The Car Edit Row is similar to Car View Row except the columns for make, model, year, color and price are input fields. When the Car Edit Row is displayed, prepopulate the fields with the data of the car being edited. Do not make the Id an input field. In the last column, there should be two buttons: save and cancel. Do not implement the logic to do that save and cancel, but display the buttons.

2. Add a button labeled edit to the last column of the Car View Row component. When the button is clicked the row on which it is clicked changes to a Car Edit Row. Only one row is editable at a time. Your data structure should only support editing one row at a time.

3. Fully implement save car and cancel car buttons. Be sure to perform your save operation with immutable programming techniques. If you cancel, revert the changes back to the original.

Hint: Helpful JavaScript API functions: findIndex

4. If one of the table rows is being edited, the edit row should change to a view row after, a car is added, or a car is deleted, or a car is saved. Add or delete, the changes for the one being edited should not be saved.

