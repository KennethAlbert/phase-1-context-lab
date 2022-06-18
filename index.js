/* Your Code Here */

function createEmployeeRecord(employee) {
     
    return {firstName : employee[0],
           familyName  : employee[1],
           title : employee[2],
           payPerHour : employee[3],
           timeInEvents: [],
           timeOutEvents:[]
    }
   
}

function createEmployeeRecords(records) {
    return records.map((record) => createEmployeeRecord(record))  
}

function createTimeInEvent(time) {
    const hour = time.slice(11,15)
    const mdydate = time.slice(0,10)
    const timeInEmployee = {
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: mdydate
    }
    this.timeInEvents.push(timeInEmployee)
    return this; 
}


function createTimeOutEvent(time) {
    const hour = time.slice(11,15)
    const mdydate = time.slice(0,10)
    const timeOutEmployee = {
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: mdydate
    }
    this.timeOutEvents.push(timeOutEmployee)
    return this; 
}

function hoursWorkedOnDate(date) {
    let timeInRecord = this.timeInEvents.filter(timeIn => timeIn.date === date)
   let timeOutRecord = this.timeOutEvents.filter(timeOut => timeOut.date === date)

   return (timeOutRecord[0].hour - timeInRecord[0].hour) / 100
}

function wagesEarnedOnDate(date) {
    let hourly = this.payPerHour;
    return hourly*hoursWorkedOnDate.call(this,date);
}


function findEmployeeByFirstName(collection, firstNameString){
    let employee = collection.find((record) => record.firstName === firstNameString)

    return employee
}

function calculatePayroll(employeeArray) {
    let total = 0
    employeeArray.forEach(employee => {
      total = total + allWagesFor.call(employee)
    })
    return total;
  }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

