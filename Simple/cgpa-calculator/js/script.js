(function (global) {

    console.log("Hello Mars!");
    const form = document.getElementById("myForm");
    const submit = document.getElementById("submit-button");
    submit.addEventListener('click', function (event) {

        const arr = [ 'enggmath', 'engggraph', 'dsd', 'hss', 'ite',
                'pspp', 'itel', 'psppl', 'dsl' ];
        const credits = [2, 3, 4, 3, 2, 3, 4, 3, 2];
        var sum = 0;
        
        for (let i = 0, mark; i < 9; i++ ) {
            mark = form.elements[arr[i]].value;
            sum += findGPA(mark) * credits[i];
        }
        var grade = (sum / (credits.reduce((x, y) => { return x + y; }) * 10)) * 10;
        document.write("Your grade is, ", grade.toPrecision(3));
    })

    findGPA = function (x) {
        if (x <= 100 && x >= 90)
            return 10;
        if (x < 90 && x >= 80)
            return 9;
        if (x < 80 && x >= 70)
            return 8;
        if (x < 70 && x >= 60)
            return 7;
        if (x < 60 && x >= 50)
            return 6;
        if (x < 50 && x >= 40)
            return 5;
        return 4;
    }   

} (window))


