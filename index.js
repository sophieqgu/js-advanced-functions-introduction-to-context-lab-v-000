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

function createTimeInEvent(employee, dateTime) {
  const type = 'TimeIn';
  const dateTimeArray = dateTime.split(' ');
  const date = dateTimeArray[0];
  const hour = parseInt(dateTimeArray[1]);
  employee.timeInEvents.push({
    type: type,
    date: date,
    hour: hour
  });
  return employee;
}

function createTimeOutEvent(employee, dateTime) {
  const type = 'TimeOut';
  const dateTimeArray = dateTime.split(' ');
  const date = dateTimeArray[0];
  const hour = parseInt(dateTimeArray[1]);
  employee.timeOutEvents.push({
    type: type,
    date: date,
    hour: hour
  });
  return employee;
}
