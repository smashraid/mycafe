'use strict';

module.exports = function () {

    var Given = this.Given, 
        When = this.When, 
        Then = this.Then;

    Given(/^that the order is empty$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions                                                                                                              
        callback(null, 'pending');
    });

    When(/^the customer displays the order$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions                                                                                                              
        callback(null, 'pending');
    });

    Then(/^no order item will be shown$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions                                                                                                              
        callback(null, 'pending');
    });

    Then(/^"([^"]*)" will be shown as total price$/, function (expectedTotalPrice, callback) {
        // Write code here that turns the phrase above into concrete actions                                                                                                              
        callback(null, 'pending');
    });

    Then(/^there will only be possible to add a beverage$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions                                                                                                              
        callback(null, 'pending');
    });
}