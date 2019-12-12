// toDo's are objects included in Projects.

//Id variables ======================================================================
//How does it work:
//Before assigning and Id, it checks the array that contains the ids of other projects that have been deleted.
//If it finds something, the missing id is assigned to the newly created project.


// THE IDS FOR TODOS WILL BE A DRAG, MAKING THEM FOR EVERY PROJECT WON'T DO THE THING AND THERE IS NEARLY NO NEED FOR THEM

//Function invoked when we delete a toDo from a list



//Main class for toDo objects
class toDoClass {
  constructor(title, description, priority, icon) {
    this._title = title;
    this._description = description;
    // this._dueDate = dueDate;
    this._priority = priority;
    this._icon = icon;
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
  // get dueDate() {
  //   return this._dueDate;
  // }
  // set dueDate(value) {
  //   this._dueDate = value;
  // }
  get priority() {
    return this._priority;
  }
  set priority(value) {
    this._priority = value;
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
  }

}

export default toDoClass;
