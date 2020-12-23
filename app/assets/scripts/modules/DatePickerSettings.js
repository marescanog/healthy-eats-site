import flatpickr from "../../images/otherUIElements/flatpickr";

class DatePickerSettings {
    constructor() {
        var settings = flatpickr('#flatpickr',{
            "disable": [
              function(date) {
              // return true to disable
              return (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 2
              || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5);
                }
              ],
              "locale": {
                  "firstDayOfWeek": 0 // start week on Sunday
              },
              minDate: new Date().fp_incr(2),
              altInput: true,
              altFormat: "F j, Y",
              dateFormat: "Y-m-d",
              });
    }
}

export default DatePickerSettings