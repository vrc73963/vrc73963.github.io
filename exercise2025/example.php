<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    
    echo "hello, " . $name ."!<br>";
    echo "your email adress is: " . $email . "<br>"
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Submit Your Information</h1>
    <form method = "POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="name">NAME:</label>
    <input type="text" id="name" name="name" required><br><br>

        <label for="email">EMAIL:</label>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="submit">
</form>
</body>
</html>