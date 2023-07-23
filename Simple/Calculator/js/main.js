(function (global) {
    global.expression = document.querySelector(".expression-box");
    global.result = document.querySelector(".result-box");
    global.equaltoEntered = global.operationEntered = global.specialEntered = false;
    global.num1 = global.num2 = global.lastOperation = null;
    global._history = document.querySelector(".history");
    const keys = document.querySelectorAll('.button');
    keys.forEach(key => {
        key.addEventListener('click', handleClick)
    });

    document.getElementById('garbage-icon').addEventListener('click',
        function () {
            _history.innerHTML = "";
        })

    function handleClick(event) {

        var node = event.target;
        var value;
        
        // Assigning node and value with the proper values
        if ( node.nodeName === 'P' || node.nodeName === 'IMG') {
            value = node.textContent;
            node = node.parentNode;
        }
        else if ( node.nodeName === 'SECTION' )
            value = node.firstChild.textContent;
        
        var classes = node.className.split(' ');

        // Performing the corresponding action for the button clicked
        switch (classes[1]) {

            case "digit":
                if (classes[0] === "item-sign" )
                    result.textContent = result.textContent[0] !== '-' ? '-' + result.textContent : result.textContent.slice(1);

                else if (operationEntered) {
                    result.textContent = value;
                    operationEntered = false;
                    num2 = null;
                }
                else if (equaltoEntered) {
                    result.textContent = value;
                    equaltoEntered = false;
                    expression.textContent = "";
                    num1 = num2 = lastOperation = null;
                }

                else
                    result.textContent += value;
                
                break;

            case "operation":
                if (!result.textContent)
                    break;
                operationEntered = true;
                specialEntered = false;
                if (!lastOperation) {
                    num1 = parseFloat(result.textContent);
                    expression.textContent = num1 + ' ' + value + ' ';
                }
                else if (equaltoEntered) {
                    expression.textContent = num1 + ' ' + value + ' ';
                    equaltoEntered = false;
                }
                else {
                    num2 = parseFloat(result.textContent);
                    evaluate();
                    result.textContent = num1;
                    expression.textContent = num1 + ' ' + value + ' ';
                    num2 = null;
                }
                lastOperation = value;
                break;
            
            case "special":
                if (equaltoEntered || specialEntered)
                    expression.textContent = "";
                
                    specialEntered = true;
                if (!result.textContent)
                    break;

                if (value === "1 / x") {
                    expression.textContent += "1/(" + parseFloat(result.textContent) + ")";
                    if (!num1) {
                        num1 = 1 / parseFloat(result.textContent);
                        result.textContent = num1;
                    }
                    else {
                        num2 = 1 / parseFloat(result.textContent);
                        result.textContent = num2;
                    }   
                }
                else if (value === "x²") {
                    expression.textContent += "sqr(" + parseFloat(result.textContent) + ")";
                    if (!num1) {
                        num1 = parseFloat(result.textContent) ** 2;
                        result.textContent = num1;
                    }
                    else {
                        num2 = parseFloat(result.textContent) ** 2;
                        result.textContent = num2;
                    }
                }
                else if (value === "√x") {
                    expression.textContent += "√(" + parseFloat(result.textContent) + ")";
                    if (!num1) {
                        num1 = parseFloat(result.textContent) ** .5;
                        result.textContent = num1;
                    }
                    else {
                        num2 = parseFloat(result.textContent) ** .5;
                        result.textContent = num2;
                    }
                }
                else if (value === "%") {
                    if (!(num1 && lastOperation)) {
                        result.textContent = expression.textContent = '';
                        break;
                    }
                    if (lastOperation === "−" || lastOperation === "+")
                        num2 = num1 * parseFloat(result.textContent) / 100;
                    else
                        num2 = parseFloat(result.textContent) / 100;
                    result.textContent = num2;
                    expression.textContent += num2 + ' ';
                }            
                break;


            
            case "equalto":
                if (num1) {

                    if (specialEntered) {
                        expression.textContent += ' = ';
                        specialEntered = false;
                        
                    }
                    else if (lastOperation) {
                        num2 = num2 ? num2 : parseFloat(result.textContent);
                        expression.textContent = num1 + ' ' + lastOperation + ' ' + num2 + ' = ';
                        evaluate();
                        expression.textContent += num1;
                        result.textContent = num1;
                    }
                }
                equaltoEntered = true;

                var express = expression.textContent.split(' ');
                var node = document.createElement('div');
                var p1 = document.createElement('p');
                p1.id = 'lhs'
                p1.textContent = express.slice(0, 4).join(' ');
                var p2 = document.createElement('p');
                p2.id = 'rhs'
                p2.textContent = express[4];
                node.appendChild(p1);
                node.appendChild(p2);
                console.log(node);
                _history.insertBefore(node, _history.firstChild);
                break;

            case "clear":
                if (classes[0] === "item-backspace")
                    result.textContent = result.textContent.slice(0, -1);
                else if (equaltoEntered || classes[0] === "item-clear") {
                    expression.textContent = "";
                    result.textContent = "";
                    equaltoEntered = specialEntered = false;
                    num1 = num2 = lastOperation = null;                    
                }
                else if (classes[0] === "item-clearE") {
                    result.textContent = "";
                    num2 = null;
                }
                break;

        }
        preventOverflow();


    function evaluate () {
        switch (lastOperation) {
            case "+":
                num1 += num2;
                break;
            case "−":
                num1 -= num2;
                break;
            case "×":
                num1 *= num2;
                break;
            case "÷":
                num1 /= num2;
                break;
        }
    }

    function preventOverflow () {
        var node = global.result;
        var newSize;
        if (node.scrollWidth > node.clientWidth)
            while (node.scrollWidth > node.clientWidth) {
                newSize = parseFloat(node.style.fontSize) - 1;
                node.style.fontSize = newSize + 'px';
                
            }
        else
            node.style.fontSize = '40px';
    }

    }
}(window))
