//basic instance of Vue
new Vue({
    el: "#app", //handler element from html
    /*data:{//property data to bind data
    },*/
    //"data()" function is a better choice than the "data:" property
    data() {
        return {
            dataFunctionText: '"data()" function is a better choice than the "data:" property',
            day: "Saturday", //data to bind
            currentLectureToWatch: "section 3 lecture 19 Nesting Components", //data to bind
            testVar: "today!",
            globalTimes: "https://www.timeanddate.com/worldclock/",
            linksStyle: ["linksStyle"],
            hoursContainer: 1,
            minutesContainer: 1,
            inputValue: 0,
            inputValue2: 0,
            vModelValue: null,
            showHide: false,
            showHideElse: true,
            seasons: ["Spring", "Summer", "Autumn", "Winter"],
            months: [{
                    name: "January",
                    daysCount: 31
                        },
                {
                    name: "February",
                    daysCount: "28 / 29"
                        },
                {
                    name: "March",
                    daysCount: 31
                        },
                {
                    name: "April",
                    daysCount: 30
                        },
                {
                    name: "May",
                    daysCount: 31
                        },
                {
                    name: "June",
                    daysCount: 30
                        },
                {
                    name: "July",
                    daysCount: 31
                        },
                {
                    name: "August",
                    daysCount: 31
                        },
                {
                    name: "September",
                    daysCount: 30
                        },
                {
                    name: "October",
                    daysCount: 31
                        },
                {
                    name: "November",
                    daysCount: 30
                        },
                {
                    name: "December",
                    daysCount: 31
                        }
                    ]
        }
    },
    methods: {
        timeOfDay() {
            return `Hey ${this.testVar}`;
        },
        changeMinutes(quantity) {
            this.minutesContainer += quantity;
        },
        showValues(v) {
            this.inputValue = v.target.value;
        },
        showValues2(v2) {
            this.inputValue2 = v2.target.value;
        },
        buttonChangeBorder() {
            but = document.querySelectorAll("button"); //GLOBAL VARIABLE! (sorry I'm lazy)
            but[4].style.border = "5px solid green";
            but[5].style.border = "5px solid green";
        },
        deleteBorder() {
            but[4].style.border = "none";
            but[5].style.border = "none";
        },
        showHideChanger() {
            this.showHide = !this.showHide;
        },
        showHideElseChanger() {
            this.showHideElse = !this.showHideElse;
        }
    }
})
