// Function executes on loading the page
(function (global) {

global.boxCount = 0;
const parser = new DOMParser();

// Template html for the each subject-box
var buttonHtml = 
`
<section class="box box-0">
    <p class="box-content">Subject 0</p>
    <select name="subject" class="box-content" required>
        <option value="">Grade</option>
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
    </select>
    <select name="credit" class="box-content" required>
        <option value="">Credit</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
    </select>
    <button class="remove-button">&#x2715</button>
</section>
`;

// Function to add new subject-box
var add = function (event) {
    global.boxCount++;
    var str = buttonHtml.replace(/box-[0-9]/m, "box-" + global.boxCount).replace(/Subject [0-9]/m, "Subject " + global.boxCount);
    var node = parser.parseFromString(str, 'text/html').querySelector('section');
    $("#container").append(node);
}

// Function to remove existing subject-box
var remove = function (event) {
    global.boxCount--;
    const num = (event.target.parentNode.className).match(/[0-9]/g)[0];
    event.target.parentNode.remove();

    for (let i = parseInt(num) + 1; i <= global.boxCount + 1; i++) {
        let node = document.querySelector(".box-" + i);
        node.childNodes[1].innerHTML = "Subject " + (i - 1);
        node.classList.add("box-" + (i - 1));
        node.classList.remove("box-" + i);
    }
}

// Function to calculate the GPA score
var calculate = function (event) {
    let creditCount = 0, totalCGrade = 0;
    for (let i = 1; i <= global.boxCount; i++) {
        var node = document.querySelector(".box-" + i);
        totalCGrade += parseInt(node.childNodes[3].value) * parseInt(node.childNodes[5].value);
        creditCount += parseInt(node.childNodes[5].value);
    }
    if (totalCGrade)
        global.document.write("<b>Your Grade is " + (totalCGrade / creditCount).toFixed(2) + "</b>");
    else
        global.alert("Some values are left out. Kindly fill them and try again.");
    
}

// Adding a subject box on loading the web page
add();

// Adding Event Listener when click add-button, remove-button, calculate
$("body").click(
    function (event) {
        let clickedClass = event.target.className;
        if (clickedClass == 'add-button')
            add();
        else if (clickedClass == 'remove-button')
            remove(event);
        else if (clickedClass == 'calculate-button')
            calculate(event);
    })

} (window));