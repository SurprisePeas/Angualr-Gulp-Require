<?php
$post = $GLOBALS['HTTP_RAW_POST_DATA'];
//解析post数据
$message = simplexml_load_string( $post, 'SimpleXMLElement', LIBXML_NOCDATA );
$time=time();

$picurl = 'http://c69_guoqing.houdunphp.com/chat/WeChat/images/dog.jpg';
$picurl1 = 'http://c69_guoqing.houdunphp.com/chat/WeChat/images/headerdog.png';

echo <<<str
<xml>
<ToUserName><![CDATA[{$message->FromUserName}]]></ToUserName>
<FromUserName><![CDATA[{$message->ToUserName}]]></FromUserName>
<CreateTime>$time</CreateTime>
<MsgType><![CDATA[news]]></MsgType>
<ArticleCount>3</ArticleCount>
<Articles>
	<item>
		<Title><![CDATA[如斯]]></Title>
		<Description><![CDATA[要污一点~]]></Description>
		<PicUrl><![CDATA[$picurl]]></PicUrl>
		<Url><![CDATA[http://c69_guoqing.houdunphp.com/myIndex/]]></Url>
	</item>
	<item>
		<Title><![CDATA[花儿与少年]]></Title>
		<Description><![CDATA[要污一点~]]></Description>
		<PicUrl><![CDATA[$picurl]]></PicUrl>
		<Url><![CDATA[http://c69_guoqing.houdunphp.com/goo/]]></Url>
	</item>
	<item>
		<Title><![CDATA[单纯的一首诗]]></Title>
		<Description><![CDATA[要污一点~]]></Description>
		<PicUrl><![CDATA[$picurl1]]></PicUrl>
		<Url><![CDATA[http://c69_guoqing.houdunphp.com/my_blog/]]></Url>
	</item>
	<item>
</Articles>
</xml>

str;



/*
 * 服务器配置
 */
//define("TOKEN", "surprisepeas147");
//$wechatObj = new wechatCallbackapiTest();
//$wechatObj->valid();
//class wechatCallbackapiTest
//{
//	public function valid()
//	{
//		$signature = $_GET["signature"];
//		$timestamp = $_GET["timestamp"];
//		$nonce = $_GET["nonce"];
//		$token = TOKEN;
//		$tmpArr = array($token, $timestamp, $nonce);
//		sort($tmpArr, SORT_STRING);
//		$tmpStr = implode( $tmpArr );
//		$tmpStr = sha1( $tmpStr );
//		if( $tmpStr == $signature ){
//			die($_GET["echostr"]);
//		}else{
//			return false;
//		}
//	}
//}



