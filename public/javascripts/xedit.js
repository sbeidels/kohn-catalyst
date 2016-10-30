//turn to inline mode
$.fn.editable.defaults.mode = 'inline';

$(document).ready(function() {
    "use strict";

    /**
     * THE FOLLOWING IS TAKEN FROM THE ADDRESS EXAMPLE
     * FOR X-EDITABLE
     * FOUND HERE:
     * https://github.com/vitalets/x-editable/blob/master/src/inputs-ext/address/address.js
    **/
    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {
        /**
         Renders input from tpl
         @method render()
         **/
        render: function() {
            this.$input = this.$tpl.find('input');
        },

        /**
         Default method to show value in element. Can be overwritten by display option.

         @method value2html(value, element)
         **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return;
            }
            var html = $('<div>').text(value.line_1).html() + ', ' + $('<div>').text(value.line_2).html() + ', ' + $('<div>').text(value.city).html() + ', ' + $('<div>').text(value.state).html() + ', ' +  $('<div>').text(value.zip).html();
            $(element).html(html);
        },

        /**
         Gets value from element's html

         @method html2value(html)
         **/
        /** KOHN TEAM - SEE SCRIPT IN  VIEW.HBS**/
        html2value: function(html) {
            /*
             you may write parsing method to get value by element's html
             e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
             but for complex structures it's not recommended.
             Better set value directly via javascript, e.g.
             editable({
             value: {
             city: "Moscow",
             street: "Lenina",
             building: "15"
             }
             });
             */
            return null;
        },

        /**
         Converts value to string.
         It is used in internal comparing (not for sending to server).

         @method value2str(value)
         **/
        value2str: function(value) {
            var str = '';
            if(value) {
                for(var k in value) {
                    str = str + k + ':' + value[k] + ';';
                }
            }
            return str;
        },

        /*
         Converts string to value. Used for reading value from 'data-value' attribute.

         @method str2value(str)
         */
        str2value: function(str) {
            /*
             this is mainly for parsing value defined in data-value attribute.
             If you will always set value by javascript, no need to overwrite it
             */
            return str;
        },

        /**
         Sets value of input.

         @method value2input(value)
         @param {mixed} value
         **/
        value2input: function(value) {
            if(!value) {
                return;
            }
            this.$input.filter('[name="line_1"]').val(value.line_1);
            this.$input.filter('[name="line_2"]').val(value.line_2);
            this.$input.filter('[name="city"]').val(value.city);
            this.$input.filter('[name="state"]').val(value.state);
            this.$input.filter('[name="zip"]').val(value.zip);
        },

        /**
         Returns value of input.

         @method input2value()
         **/
        input2value: function() {
            return {
                line_1: this.$input.filter('[name="line_1"]').val(),
                line_2: this.$input.filter('[name="line_2"]').val(),
                city: this.$input.filter('[name="city"]').val(),
                state: this.$input.filter('[name="state"]').val(),
                zip: this.$input.filter('[name="zip"]').val()
            };
        },

        /**
         Activates input: sets focus on the first field.

         @method activate()
         **/
        activate: function() {
            this.$input.filter('[name="line_1"]').focus();
        },

        /**
         Attaches handler to submit form in case of 'showbuttons=false' mode

         @method autosubmit()
         **/
        autosubmit: function() {
            this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
            });
        }
    });

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl:
        '<div class="editable-address"><label><span>Line 1: </span><input type="text" name="line_1" class="input-small"></label></div>'+
        '<div class="editable-address"><label><span>Line 2: </span><input type="text" name="line_2" class="input-small"></label></div>'+
        '<div class="editable-address"><label><span>City: </span><input type="text" name="city" class="input-small"></label></div>'+
        '<div class="editable-address"><label><span>State: </span><input type="text" name="state" class="input-mini"></label></div>'+
        '<div class="editable-address"><label><span>Zip: </span><input type="text" name="zip" class="input-mini"></label></div>',

        inputclass: ''
    });

    $.fn.editabletypes.address = Address;

    /**
     * SET ELEMENTS TO EDITABLE
     * W/ success callback function
     **/
    $('#phone_number').editable({
            success: function(response, newValue) {
                if(response.status == 'error') return response.msg;
            }
        }
    );

    $('#cell_phone').editable({
            success: function(response, newValue) {
                if(response.status == 'error') return response.msg;
            }
        }
    );

    $('#pref_name').editable({
            success: function(response, newValue) {
                if(response.status == 'error') return response.msg;
            }
        }
    );

    $('#spouse').editable({
        success: function(response, newValue) {
            if(response.status == 'error') return response.msg;
        }
    });

    $('#email').editable({
        success: function(response, newValue) {
            if(response.status == 'error') return response.msg;
        }
    });

    $('#driver_license').editable({
        success: function(response, newValue) {
            if(response.status == 'error') return response.msg;
        }
    });

    $('#special_circumstances').editable({
        success: function(response, newValue) {
            if(response.status == 'error') return response.msg;
        }
    });

    // $('#dob').editable({
    //     format: 'mm/dd/yyyy',
    //     datepicker: {
    //         weekStart: 1
    //     }
    // });

});