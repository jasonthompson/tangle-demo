function setUpTangle () {

    var element = document.getElementById("example");

    /*
     *  You can start as many Tangles as you want. (e.g., one per information widget).
     */
    var tangle = new Tangle(element, {
        initialize: function () {
            this.cookies = 4;
            this.caloriesPerCookie = 50;
        },
        update: function () {
            this.calories = this.cookies * this.caloriesPerCookie;
        }
    });
}
