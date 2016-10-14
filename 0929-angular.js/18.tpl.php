<?php
$data =[
	['name'=>'大搭','age'=>18],
	['name'=>'小小','age'=>28],
	['name'=>'小铭','age'=>38],
	['name'=>'大片','age'=>48],
	['name'=>'中执','age'=>58]
];
$res = [];
foreach ($data as $v) {
	//strpos — 查找字符串首次出现的位置
	if(strpos($v['name'], $_GET['word']) !== FALSE){
		$res[] = $v;
	}
}
die(json_encode($res,JSON_UNESCAPED_UNICODE));
