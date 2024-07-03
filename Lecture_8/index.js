/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

function sleep(name) {
  console.log(`${name} is sleeping`);
}

/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

function awake(name) {
  console.log(`${name} is awake`);
}

/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

function eat(name, time) {
  console.log(`${name} is taking ${time}`);
}

/**
 * Function: Go_To
 * Param: name
 * Param: Destination
 * Param: Transport_system
 * Definition: How to walk
 */

function goTo(name, destination, transport) {
  console.log(`${name} is going to ${destination} by ${transport}`);
}

/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */

function work(name) {
  console.log(`${name} is working`);
}

/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */

function study(name) {
  console.log(`${name} is studying`);
}

/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'office', Transport_system
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function jobHolderLifecycle(name, transport) {
  awake(name);
  eat(name, "breakfast");
  goTo(name, "office", transport);
  work(name);
  eat(name, "lunch");
  goTo(name, "home", transport);
  eat(name, "dinner");
  sleep(name);
}

/**
 * Function: Student_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'institution', Transport_system
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function studentLifecycle(name, transport) {
  awake(name);
  eat(name, "breakfast");
  goTo(name, "institution", transport);
  work(name);
  eat(name, "lunch");
  goTo(name, "home", transport);
  eat(name, "dinner");
  sleep(name);
}

/**
 * Function: Remote_Workers_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Work -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function remoteWorkersLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  work(name);
  eat(name, "lunch");
  work(name);
  eat(name, "dinner");
  sleep(name);
}

console.log("Jobholders Lifecycle");
console.log("**********************");
jobHolderLifecycle("Shayed Hasan", "bus");
console.log("-----------------------");
jobHolderLifecycle("Sh Pabel", "bus");
console.log("-----------------------");
jobHolderLifecycle("Tarikul Islam", "bus");
console.log("-----------------------");

console.log("Remote Workers Lifecycle");
console.log("**********************");
remoteWorkersLifecycle("Nahian Sikder");
console.log("-----------------------");
remoteWorkersLifecycle("Mizan Rahman");
console.log("-----------------------");

console.log("Students Lifecycle");
console.log("**********************");
studentsLifecycle("Faruk", "rickshaw");
console.log("--------------------");
studentsLifecycle("Elias", "rickshaw");
console.log("--------------------");
studentsLifecycle("Faisal", "rickshaw");
console.log("--------------------");
