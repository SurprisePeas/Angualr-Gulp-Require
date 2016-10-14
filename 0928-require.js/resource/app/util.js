define(['jquery'], function ($) {
    return {
        modal: function (options) {
            var opt = $.extend({
                id: 'msg'
            }, options);
            modalObj = $("#" + opt.id);
            //模态框不存在时在页面中创建他
            if (modalObj.length == 0) {
                var html = '<div class="modal fade" id="' + opt.id + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
                    <div class="modal-dialog">\
                    <div class="modal-content"></div></div></div>';
                $(document.body).append(html);
                modalObj = $("#" + opt.id);
            }
            var html = '';
            if (opt.header) {
                html += '<div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
                    <h4 class="modal-title">'+opt.header+'</h4>\
                </div>'
            }
            if (opt.content) {
                html+='<div class="modal-body">'+opt.content+'</div>'
            }
            if (opt.footer) {
                html+='<div class="modal-footer">'+opt.footer+'</div>'
            }
            //绑定事件
            if(opt.events){
                for(var event in opt.events){
                    modalObj.on(event,opt.events[event]);
                }
            }
            modalObj.find('.modal-content').html(html);
            modalObj.modal();
            return modalObj;
        },
        editor:function(options){
            var opt = $.extend({
                id:'',
                width: '100%',
                type:'full',//	small 精简版
            }, options);
            require(['kindeditor'],function(){
                if(opt.type=='small'){
                    items = [
                        'clearhtml', 'quickformat', 'selectall'
                    ];
                }else{
                    items = [
                        'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                        'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                        'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                        'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                        'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                        'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
                        'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
                        'anchor', 'link', 'unlink', '|', 'about'
                    ];
                }
                KindEditor.create('#'+opt.id,{
                    items :items
                });
            });
        }
    }
});