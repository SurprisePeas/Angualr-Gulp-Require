<?php
	$data = [
		['name' => '小敏'],
		['name' => '哒哒'],
		['name' => '阿萨德'],
		['name' => '蔷薇'],
	];
	
	//	[JSON_UNESCAPED_UNICODE]		中文编码
	die( json_encode($data , JSON_UNESCAPED_UNICODE));
