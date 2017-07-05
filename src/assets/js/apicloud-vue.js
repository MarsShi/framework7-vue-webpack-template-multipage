/* Plugin */
export default {
    install: function (Vue, parameters) {
        // Parameters
        parameters = parameters || {};

        var fixIos7Bar = function(t) {
            var e = api.systemType;
            if ("ios" == e) {
                var a = api.systemVersion,
                    n = parseInt(a, 10),
                    i = api.fullScreen,
                    o = api.iOS7StatusBarAppearance;
                n >= 7 && !i && o && (t.className += ' navbar-ios7')
            }
        }

        var fixStatusBar = function(items) {
            items.each(function(i,t){
                var e = api.systemType;
                if ("ios" == e) fixIos7Bar(t);
                else if ("android" == e) {
                    var a = api.systemVersion;
                    a = parseFloat(a), a >= 4.4 && (t.className += ' navbar-android-4');
                }
            });
        }

        var fixContent = function(items) {
            items.each(function(i,t){
                var e = api.systemType;
                if ("ios" == e) t.className += ' page-content-ios7';
                else if ("android" == e) {
                    var a = api.systemVersion;
                    a = parseFloat(a), a >= 4.4 && (t.className += ' page-content-android-4')
                }
            });
        }

        var apiOpenWin = function(url, name, params){
            name = name ? name : (new Date()).valueOf();
            params = params ? params : {};
            window.api.openWin({
                name        : name,
                url         : url,
                pageParam   : params
            });
        }

        var apiOnclick = function(){
            $(document).on('click', 'a.link.external.openwin', function(e){
                var url = $(this).attr('href');
                if(window.api){
                    apiOpenWin(url);
                    e.preventDefault();
                }else{
                    window.location.href = url;
                }
            });
            $(document).on('click', 'a.link.external.back', function(e){
                api.closeWin();
                e.preventDefault();
            });
        }

        // Mixins
        Vue.mixin({
            beforeCreate: function () {

            },
            mounted: function () {
                var self = this;
                if (self === self.$root) {
                    //$(self.$el).hide();
                    window.apiready = function(){
                        var header = $('.navbar');
                        var content = $('.page-content');
                        fixStatusBar(header);
                        fixContent(content);
                        apiOnclick();

                        if(typeof self.$options.apiready == 'function'){
                            self.$options.apiready.call(self);
                        }

                        //$(self.$el).show();
                    }
                }
            }
        });
    }
};