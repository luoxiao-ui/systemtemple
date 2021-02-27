(function(window){
    var CK = {
        setCookie: function(key, value, days) {
            if(!value){
                localStorage.removeItem(key)
            }else {
                var Days = days || 1
                var exp = new Date()
                localStorage[key] = JSON.stringify({
                    value,
                    expires: exp.getTime() + Days*24*60*60*1000
                })
            }
        },

        getCookie: function(name){
            if(!localStorage[name]) return
            let o = JSON.parse(localStorage[name])
            if(!o){
                return localStorage[name]
            }else if(typeof o !=='object'){
                this.setCookie(name, localStorage[name])
                return localStorage[name]
            }else if(!o.expires || o.expires < Date.now()){
                return null
            } else {
                return o.value
            }
        }
    }

    window.CK = CK
})(window)