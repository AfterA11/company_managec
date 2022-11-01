<template>
    <div>
        <div class="time">
            <div id="hour">
            </div>
            <span>:</span>
            <div id="minute">
            </div>
            <span>:</span>
            <div id="second">
            </div>
        </div>
        <div class="day">
            <div id="today"></div>
            <div id="week"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ClockBar',
        data () {
            return {
                
            }
        },
        methods: {
            add0(val) {
                if (val < 10) {
                    return '0' + val
                } else {
                    return val
                }
            },
            changeChinese (val) {
                var chinese = "";
                switch(val){
                    case 0:
                        chinese = "日";
                        break;
                    case 1:
                        chinese = "一";
                        break;
                    case 2:
                        chinese = "二";
                        break;
                    case 3:
                        chinese = "三";
                        break;
                    case 4:
                        chinese = "四";
                        break;
                    case 5:
                        chinese = "五";
                        break;
                    default:
                        chinese = "六";
                }
                return chinese
            },
            disptime() {
                var hour = document.getElementById("hour")
                var minute = document.getElementById("minute")
                var second = document.getElementById("second")
                var day = document.getElementById("today")
                var week = document.getElementById("week")
                var today = new Date()
                var hh = today.getHours()
                var mm = today.getMinutes()
                var ss = today.getSeconds()
                var year = today.getFullYear();
                var month = today.getMonth() + 1;
                var date = today.getDate();
                var val = today.getDay();
                if (hour) {
                    hour.innerHTML = this.add0(hh) 
                }
                if (minute) {
                    minute.innerHTML = this.add0(mm) 
                }
                if (second) {
                    second.innerHTML = this.add0(ss) 
                }
                if (day) {
                    day.innerHTML = year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;" + date + "&nbsp;日&nbsp;"
                }
                if (week) {
                    week.innerHTML = "星期" + this.changeChinese(val)
                }
            }
        },
        mounted() {
            setInterval(this.disptime, 1000)
        }
    };
</script>

<style scoped>
    .time {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .time > div {
        width: 30%;
        height: 150px;
        font-size: 90px;
        font-weight: 600;
        text-align: center;
        line-height: 150px;
        color: #1c1a1a;
    }

    .time span {
        width: 5%;
        height: 150px;
        font-size: 90px;
        font-weight: 500;
        text-align: center;
        line-height: 130px;
        color: #1c1a1a;
    }

    .day {
        display: flex;
        justify-content: center;
        height: 50px;
        font-size: 26px;
        text-align: center;
        line-height: 40px;
        color: #1c1a1a;
    }

    #week {
        margin-left: 20px
    }
</style>