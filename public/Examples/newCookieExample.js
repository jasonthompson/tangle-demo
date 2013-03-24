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
{ageRange: [2, 3], male: [1100, 1350, 1500], female: [1100, 1250, 1400]},
{ageRange: [4, 5], male: [1250, 1450, 1650], female: [1200, 1350, 1500]},
{ageRange: [6, 7], male: [1400, 1600, 1800], female: [1300, 1500, 1700]},
{ageRange: [8, 9], male: [1500, 1750, 2000], female: [1400, 1600, 1850]},
{ageRange: [10, 11], male: [1700, 2000, 2300], female: [1500, 1800, 2050]},
{ageRange: [12, 13], male: [1900, 2250, 2600], female: [1700, 2000, 2250]},
{ageRange: [14, 16], male: [2300, 2700, 3100], female: [1750, 2100, 2350]},
{ageRange: [17, 18], male: [2450, 2900, 3300], female: [1750, 2100, 2400]},
{ageRange: [19, 30], male: [2500, 2700, 3000], female: [1900, 2100, 2350]},
{ageRange: [31, 50], male: [2350, 2600, 2900], female: [1900, 2100, 2350]},
{ageRange: [51, 70], male: [2150, 2350, 2650], female: [1650, 1850, 2100]},
/* Health Canada's chart ends at 71 and over. I added 150 as the upper bound to
 * make the lookup algorithm simpler.
 */

{ageRange: [71, 150], male: [2000, 2200, 2500], female: [1550, 1750, 2000]}
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
