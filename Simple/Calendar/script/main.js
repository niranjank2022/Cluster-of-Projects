(function (global) {

        const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
    const weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];


    var generateCalender = function () {
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        var output = document.getElementById("output");
        var calNode = document.createElement("pre");
        calNode.innerHTML = getCalText(month, year);

        output.appendChild(calNode);
    }

    var getCalText = function (month, year) {
        let calText = "<pre>";

        // Month and year at the apex
        calText += '\xa0'.repeat(34) + months[month] + " " + year + "\n";
        // Adding week days label
        calText += "...Sunday.....Monday....Tuesday...Wednesday...Thursday....Friday....Saturday..\n";

        // The horizontal line that separates each week
        let weekSeparator = "+----------".repeat(7) + "+\n";
        // The blank row in each
        let blankRow = "|          ".repeat(7) + "|\n";

        // Getting the first day in the month
        let date = new Date(year, month, 2);                                    // Have no idea why, but for intialization
                                                                                // date starts from 2
                                                                                // getDay() (0 - 6) is (Saturday - Friday)
        // Reaching the first Sunday (0) before that day
        while (date.getDay() != 1) {
            date.setDate(date.getDate() - 1);
        }
        // calText += "#" + date.getDay() + "\n" + date.toUTCString() + "\n";

        do {
            calText += weekSeparator;

            let dayNumberRow = "";
            for (let i = 0; i < 7; i++) {
                dayNumberRow += "|" + String(date.getDate()).padStart(2, " ") + " ".repeat(8);
                date.setDate(date.getDate() + 1);
            }
            dayNumberRow += "|\n";

            calText += dayNumberRow;
            for (let i = 0; i < 7; i++) {
                calText += blankRow;
            }
            
        } while (date.getMonth() == month);

        calText += weekSeparator;
        calText += "</pre>";
        return calText
    }

    // Code that generates the calendar
    document.getElementById("generate").addEventListener("click", generateCalender);

} (window))