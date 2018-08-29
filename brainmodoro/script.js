const POMODORO_STATES = {
    WORK:'work',
    REST:'rest'
};
const STATES = {
    STARTED: 'started',
    STOPPED:'stopped',
    PAUSED:'paused'
}
const WORKING_TIME_LENGTH_IN_MINUTES = 25;
const RESTING_TIME_LENGTH_IN_MINUTES = 5;

const shortLibURL = 'https://lukasz-otowski.github.io/brain/short.json';
const request = new XMLHttpRequest();
request.open('GET', shortLibURL);
request.send();

new Vue({
    el:'#app',
    data:{
        minute:WORKING_TIME_LENGTH_IN_MINUTES,
        second:0,
        pomodoroState:POMODORO_STATES.WORK,
        timestamp:0,
        state:STATES.STOPPED
    },
    computed:{
        title:function(){
            return this.pomodoroState === POMODORO_STATES.WORK ? 'work' : 'rest'
        },
        min: function(){
            if(this.minute < 10){
                return '0' + this.minute;
            }
            
            return this.minute;
        },
        sec:function(){
            if(this.second < 10){
                return '0' + this.second;
            }
            
            return this.second;
        }
    },
    methods:{
        start:function(){
            this.state = STATES.STARTED;
            this._tick();
            this.interval = setInterval(this._tick,1000);
        },
        pause:function(){
            this.state = STATES.PAUSED;
            clearInterval(this.interval);
        },
        stop:function(){
            this.state = STATES.STOPPED;
            clearInterval(this.interval);
            this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
            this.second = 0;
        },
        _tick:function(){
            //if value second is bigger than 0, reduce it by 1
            if(this.second!==0){
                this.second--;
                return;
            }
            //if second is equal to 0, and minute not
            //then reduce minute by 1 and assign value 59 to second 
            if(this.minute!==0){
                this.minute--;
                this.second=59;
                return;
            }
            //if second and minute is equal to 0
            //then switch between by work state and rest state
            this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
            if(this.pomodoroState === POMODORO_STATES.WORK){
                this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
                let audio = new Audio('work-on.mp3');
                audio.play();
            }else{
                this.minute = RESTING_TIME_LENGTH_IN_MINUTES;
                let audio = new Audio('rest-on.mp3');
                audio.play();
            }
        }
    }
})