/*
 * This is based on Health Canada's Estimated Energy Requirements.
 * http://www.hc-sc.gc.ca/fn-an/food-guide-aliment/basics-base/1_1_1-eng.php
 *
 *
 *
 *
 *
 */
var dailyRecommendedIntakeTable = {
    table: [
{male: [1100, 1350, 1500], female: [1100, 1250, 1400]}, // 2-3 yrs
{male: [1250, 1450, 1650], female: [1200, 1350, 1500]}, // 4-5 yrs
{male: [1400, 1600, 1800], female: [1300, 1500, 1700]}, // 6-7 yrs
{male: [1500, 1750, 2000], female: [1400, 1600, 1850]}, // 8-9 yrs
{male: [1700, 2000, 2300], female: [1500, 1800, 2050]}, // 10-11 yrs
{male: [1900, 2250, 2600], female: [1700, 2000, 2250]}, // 12-13 yrs
{male: [2300, 2700, 3100], female: [1750, 2100, 2350]}, // 14-16 yrs
{male: [2450, 2900, 3300], female: [1750, 2100, 2400]}, // 17-18 yrs
{male: [2500, 2700, 3000], female: [1900, 2100, 2350]}, // 19-30 yrs
{male: [2350, 2600, 2900], female: [1900, 2100, 2350]}, // 31-50 yrs
{male: [2150, 2350, 2650], female: [1650, 1850, 2100]}, // 51-70 yrs
{male: [2000, 2200, 2500], female: [1550, 1750, 2000]} // 71 and up.
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
            this.ageRange = 9;
            this.activityLevel = 2;
            this.dailyIntake = dailyRecommendedIntakeTable.lookup(this.ageRange, this.gender, this.activityLevel);
        },
        update: function () {
            this.dailyIntake = dailyRecommendedIntakeTable.lookup(this.ageRange, this.gender, this.activityLevel);
            this.calories = this.cookies * this.caloriesPerCookie;
            this.percentageOfDailyIntake = Math.round(this.calories / this.dailyIntake * 100);
        }
    });
}
