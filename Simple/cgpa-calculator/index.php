<?php

echo "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>CGPA Calculator</title>
    <link rel='stylesheet' href='css/style.css'>
</head>
<body>
    
    <form action='action.php' method='post'>

        <table>
            <tr id='highlight'>
                <td>Course Code</td>
                <td>Category</td>
                <td>Name of the Course</td>
                <td>Response</td>
            </tr>
            <tr>
                <td>191MA201</td>
                <td>BS</td>
                <td>Engineering Mathematics II</td>
                <td><input type='number' name='enggmath' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191ME211</td>
                <td>ES</td>
                <td>Engineering Graphics</td>
                <td><input type='number' name='engggraph' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191EC212</td>
                <td>ES</td>
                <td>Digital System Design</td>
                <td><input type='number' name='dsd' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191HS201</td>
                <td>HSS</td>
                <td>Environmental Science and Engineering</td>
                <td><input type='number' name='hss' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191IT221</td>
                <td>PC</td>
                <td>Information Technology Essentials</td>
                <td><input type='number' name='ite' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191CS221</td>
                <td>PC</td>
                <td>Problem Solving and Python Programming</td>
                <td><input type='number' name='pspp' max='100' min='0'></td>
            </tr>

            <tr>
                <td>191IT22A</td>
                <td>PC</td>
                <td>Information Technology Essentials Laboratory</td>
                <td><input type='number' name='itel' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191CS22A</td>
                <td>PC</td>
                <td>Problem Solving and Python Programming Laboratory</td>
                <td><input type='number' name='psppl' max='100' min='0'></td>
            </tr>
            <tr>
                <td>191EC21B</td>
                <td>ES</td>
                <td>Digital Systems Laboratory</td>
                <td><input type='number' name='dsl' max='100' min='0'></td>
            </tr>
        </table><br>

        <input type='submit' value='Calculate' id='submit-button'>
    </form>
</body>
</html>
";


?>