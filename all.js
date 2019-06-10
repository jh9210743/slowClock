var initClock = function(){
  var startTime = Date.now(); // 將startTime設為現在時間的總毫秒數
  var interval = setInterval(function() {
          var diff = Date.now() - startTime // 將執行函數時的時間總毫秒數減去剛剛開始時間的毫秒數，就是其中相差的時間

          //將相差的時間除以8，並加在開始時間上，就會變成慢八倍的時鐘
          var time = new Date(startTime + (diff/8))

          console.log(time.toLocaleTimeString()) //將結果轉為時間日期格式並console
      }, 1000) // 這個setInterval執行間隔1秒
this.interval = interval; //將interval設給window，以便以stopClock停止時鐘
}
var stopClock = function(){
clearInterval(interval); // 停止執行setInterval()
}

