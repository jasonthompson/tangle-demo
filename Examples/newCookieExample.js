function setUpTangle () {

    var element = document.getElementById("example");

    /*
     *  You can start as many Tangles as you want. (e.g., one per information widget).
     */
    var tangle = new Tangle(element, {
        initialize: function () {
            this.cookies = 4;
            this.caloriesPerCookie = 50;
            this.dailyIntake = 2900;
        },
        update: function () {
            this.calories = this.cookies * this.caloriesPerCookie;
            this.percentageOfDailyIntake = Math.round(this.calories / this.dailyIntake * 100);
        }
    });
}
