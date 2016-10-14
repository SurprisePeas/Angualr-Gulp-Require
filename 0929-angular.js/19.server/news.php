<?php
	$data = [
		['id'=>1,'title'=>"你猜"],
		['id'=>2,'title'=>"我不猜"],
	];
	die(json_encode($data,JSON_UNESCAPED_UNICODE));
?>