var dailyRecommendedIntakeTable = {
    table: [
        {ageRange: [31,50], male: [2350, 2600, 2900], female: [1800, 2000, 2250]}
 ],

    lookup: function(age, gender, activityLevel){
        var gender = ["male", "female"][gender];
        return this.table[age][gender][activityLevel];
        }
};

function setUpTangle () {

    var element = document.getElementById("example");

    /*
     *  You can start as many Tangles as you want. (e.g., one per information widget).
     */
    var tangle = new Tangle(element, {
        initialize: function () {
            this.cookies = 4;
            this.caloriesPerCookie = 50;
            this.gender = 0;
            this.activityLevel = 2;
            this.dailyIntake = dailyRecommendedIntakeTable.lookup(0,this.gender,this.activityLevel);
        },
        update: function () {
            this.dailyIntake = dailyRecommendedIntakeTable.lookup(0,this.gender,this.activityLevel);
            this.calories = this.cookies * this.caloriesPerCookie;
            this.percentageOfDailyIntake = Math.round(this.calories / this.dailyIntake * 100);
        }
    });
}
