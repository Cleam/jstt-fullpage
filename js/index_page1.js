!(function(){
    var page1 = function(dc){
        var $usersNumSpan = $('.act-users-num').children('span');
        var $last = [$usersNumSpan.eq(6).children('i'), $usersNumSpan.eq(8).children('i'), $usersNumSpan.eq(9).children('i'), $usersNumSpan.eq(10).children('i')];
        var p1 = {
            init: function(){
                $('#J_map').find('.dot').hover(function(){
                    $(this).children('.hover').show();
                }, function(){
                    $(this).children('.hover').hide();
                });
                this.startRandom();
            },
            /**
             * 开始随机变化
             */
            startRandom: function(){
                var _this = this;
                setTimeout(function(){
                    setInterval(function(){
                        _this.setRandomNum();
                    }, 1000);
                }, 3000);
            },
            /**
             * 将随机数设置到月度活跃用户中
             */
            setRandomNum: function() {
                var curTime = Math.floor((+new Date()) / 1000);
                var numStrArr = this.getRandomNumStr(3);
                var flag = false;
                if(curTime % (Math.floor(Math.random() * 5 + 2)) === 0){
                    numStrArr = this.getRandomNumStr(4);
                    flag = true;
                }
                var enArr = this.numToEn(numStrArr);
                $.each(numStrArr, function(i, v){
                    var index = (flag ? i : (i + 1));
                    $last[index].attr('class', '').addClass('an ' + enArr[i]).text(numStrArr[i]);
                });
            },

            /**
             * 数字转英文
             */
            numToEn: function(arr) {
                var enArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
                var newArr = [];
                $.each(arr, function(i, v) {
                    newArr.push(enArr[v]);
                });
                return newArr;
            },
            
            /**
             * 获取n位数随机数
             * @param  {Number} n
             */
            getRandomNumStr: function(n){
                var ranstr = '';
                for (var i = 0; i < n; i++) {
                    ranstr += Math.floor(Math.random() * 10);
                }
                return ranstr.split('');
            }
        };

        return p1;
    }(document);

    page1.init();
}());