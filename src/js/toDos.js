
// toDo's are objects included in Projects.

//Id variables ======================================================================
//How does it work:
//Before assigning and Id, it checks the array that contains the ids of other projects that have been deleted.
//If it finds something, the missing id is assigned to the newly created project.


// THE IDS FOR TODOS WILL BE A DRAG, MAKING THEM FOR EVERY PROJECT WON'T DO THE THING AND THERE IS NEARLY NO NEED FOR THEM
//Current id limit
// let idCount = 1;
// //Id array with all the ids that can be reused after toDos being deleted or completed
// let arrayOfIdToBeAssignedAfterDeletingItems = [5];
// //ID ASSIGNING FUNCTION
// const assignId = () => {
//   //we have no need to reuse deleted ids, make a new one
//   if (arrayOfIdToBeAssignedAfterDeletingItems.length === 0) {
//     return idCount++;
//   } else {
//     //If after deleting a toDo we still have an id unasigned, then use it
//     var missingId = arrayOfIdToBeAssignedAfterDeletingItems.shift();
//     return missingId;
//   }
// }

//Function invoked when we delete a toDo from a list
const deleteItem = (x) => {
  arrayOfIdToBeAssignedAfterDeletingItems.push(x.id);
}

//Date check
function checkDate(x) {
  x += 'DateCheck';
  return x;
}


//Main class for toDo objects
class toDoClass {
  constructor(title,description,dueDate,priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    // this._id = assignId();
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }
  get dueDate() {
    return this._dueDate;
  }
  set dueDate(value) {
    this._dueDate = value;
  }
  get priority() {
    return this._priority;
  }
  set priority(value) {
    this._priority = value;
  }
  // get id() {
  //   return this._id;
  // }
  // set id(value) {
  //   this._id = value;
  // }

}

export default toDoClass;
