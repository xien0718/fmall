export const AppId = 'wx013caa983bed609b'
export const AppSecret = 'ad6d53f6bba9d672844e7b11096a6428'
// 判断是不是微信浏览器
export function isWxBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
let access_token = {
    "access_token": "49_z7sdSfyeRyokBna5V5w-GIti9eBkRndIHmGtFMwpqyPzczpotSYRDC-aB7jUPS6wLkSWRAEwV0GOJrLdJKFERg",
    "expires_in": 7200,
    "refresh_token": "49_-gcioOI-P0cedDe1kZPcOBzRwKgLSi66f5O7fD8MAteJCGRu-8wsqA_2TJkPIWuDKC6GwfeT4stXwHrbFgdcXg",
    "openid": "owWEo6z6hRAcaikv66zop5CZTXLc",
    "scope": "snsapi_userinfo"
}