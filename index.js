// Your code here
function createEmployeeRecord(firstName, familyName, title, payPerHour) {
  return Object.assign({}, {
    firstName = firstName;
    familyName = familyName;
    title = title;
    payPerHour = payPerHour;
    timeInEvents = [];
    timeOutEvents = [];
  });
}

function createEmployeeRecords(employees) {
  return employees.map(createEmployeeRecord);
}
