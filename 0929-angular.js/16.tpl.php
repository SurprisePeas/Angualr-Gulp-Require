<?php
	$data = [
		['name' => '大王','age' => 10],
		['name' => '小王','age' => 20],
		['name' => '啊王','age' => 30],
		['name' => '是王','age' => 40],
		['name' => '阿萨德','age' => 50],
		['name' => '德莱文','age' => 60],
	];
	die(json_encode($data,JSON_UNESCAPED_UNICODE));
