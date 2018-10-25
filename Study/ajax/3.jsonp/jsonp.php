<?php
$_jsonp = $_GET['_jsonp'];
$arr = array("a","b","c");
echo $_jsonp.'('.json_encode($arr).')';
?>