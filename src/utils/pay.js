// 封装方法：微信支付
export const wxPay = (param1, param2) => {
    //封装方法：调起微信支付
    function onBridgeReady() {
        /** 
         * @desc 根据服务器相应的errCode判断请求是否成功 
         * @param1 {String} getBrandWCPayRequest调起微信支付、shareTimeline分享到朋友圈、sendAppMessage发送给朋友
         * @param2 {Object} 调用param1的功能要传入的参数
         * @param3 {Function} 当param1功能调起成功的时候，执行该函数
         * @returns 
         */
        //参数1由(客户端)调用invoke的时候传入
        //参数2的package预支付交易单由(微信服务器)生成并返回给(公司服务器)
        //参数2的signType签名方式和paySign签名由(公司服务器)生成并返回给(客户端)，
        WeixinJSBridge.invoke(param1, param2,
            //微信支付请求成功后执行该函数
            function (res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                }
            }
        );
    }
    //如果不是微信浏览器，处理兼容问题
    if (typeof WeixinJSBridge == "undefined") {
        //有DOM2.0的addEventListener则用，事件不加on，
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }
        //没有DOM2.0的addEventListener则使用IE5+的attachEvent，事件要加on
        else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }


    }
    //如果是微信浏览器，直接调用支付方法    
    else {
        onBridgeReady();
    }
}

function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture);//DOM2.0
        return true;
    }
    else if (elm.attachEvent) {
        var r = elm.attachEvent(`on` + evType, fn);//IE5+
        return r;
    }
    else {
        elm['on' + evType] = fn;//DOM 0
    }
}