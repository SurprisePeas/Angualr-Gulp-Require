<?php
	$data = [
		['name' => '小敏' , 'age' => 10],
		['name' => '哒哒' , 'age' => 20],
		['name' => '阿萨德' , 'age' => 30],
		['name' => '蔷薇' , 'age' => 40],
	];
	
	//	[JSON_UNESCAPED_UNICODE]		中文编码
	die( json_encode($data , JSON_UNESCAPED_UNICODE));
