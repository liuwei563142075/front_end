<?php
$username = $_get['username'];
$password = $_get['password'];
if($username  == 'admin' || $password  == '123') {
	echo 1;
}else {
	echo 2;
}

?>