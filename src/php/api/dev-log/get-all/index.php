<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "the-cookbook";

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM `dev-log`";
    $result = $conn->query($sql);

    $json_array = array();

    if ($result->num_rows > 0) {
        while($row = mysqli_fetch_assoc($result))  
        {  
             $json_array[] = $row;  
        }
    } else {
        echo "{}";
    }

    echo json_encode($json_array);

    $conn->close();
?> 