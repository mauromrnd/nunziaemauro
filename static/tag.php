<?php

require 'api.php';

$result = CallAPI("GET","https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN");

echo $result;
?>