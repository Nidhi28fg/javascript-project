<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code </title>
</head>
<body style="background-color: #212121; color: #fff;">
    
</body>
<script>
    /* how to create a div by using javascript*/
    const div = document.createElement('div')  // to create element like div, h1, h2 p
    console.log(div);

    div.className = "main"                    //to create class in div
    div.id = Math.round(Math.random() * 10 + 1) // to create id in div
    div.setAttribute("title", "generated title") // to add attribute in div
    div.style.backgroundColor = "green"          // to add style in div
    div.style.padding = "12px"                    // to add padding in div
    // div.innerText = "Chai aur code"            // to write in div
    const addText = document.createTextNode("Chai aur code")    // right way to write inner html first you create textnode
    div.appendChild(addText)                                    // then add append child to add html text

    document.body.appendChild(div)                            //this way help to add div in body.
</script>
</html>
