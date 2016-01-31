/**
 * Created by Jim Ankrom on 1/24/2016.
 */

"use strict";

var shoebox = shoebox || {};

(function ($$) {

    // Multicast callbacks; array of callbacks that execute in order when invoked.
    $$.multicast = function multicast(callback) {
        var self = this,
            disabled,
            multicast;

        if (callback) add(callback);

        function invoke () {
            var i, len = multicast.length;
            if (!disabled) {
                for (i = 0; i < len; i++) {
                    multicast[i].apply(this, arguments);
                }
            }
        }

        // Add callback to the multicast
        function add (callback) {
            if (multicast && multicast.push) {
                multicast.push(callback);
            }
            else
            {
                // If multicast is set to a callback, add it to an array with the new callback.
                // If not, just set it to the new callback.
                multicast = multicast ? [multicast, callback] : callback;
            }
            return this;
        }

        // Remove callback from the multicast
        function remove (callback) {
            var i, len = multicast.length;

            if (callback && len > 1) {
                for (i = 0; i < len; i++) {
                    if (multicast[i] === callback) {
                        multicast.splice(i, 1);
                        return;
                    }
                }
            } else {
                multicast = [];
            }
        }

        // Expose public methods
        invoke.add = add;
        invoke.remove = remove;
        // Enable the multicast
        invoke.enable = function () {
            disabled = false;
        };
        // Disable the multicast
        invoke.disable = function () {
            disabled = true;
        };
        return invoke;
    };

    // TODO: 'extensible property', one we can tack-on observers, lazy loaders, etc.
    // - Maybe we just allow for an assignable/wire-up-able get & set
    $$.extensible = function (fieldName, target) {
        // TODO: if target is null then use this
        // extending a field should result in the object maintaining a hash at $hoebox
        target.$hoebox = target.$hoebox || {};

        // determine if target.$hoebox[fieldName] is already a multicast
    };

    // When a field changes, call callback.
    $$.observe = function (fieldName, callback, target) {
        target = target || this;

        // TODO: wrap
        Object.defineProperty(target, fieldName, );
    };

    $$.property = function (name, descriptor, target) {
        target = target || this;
        // TODO: default descriptor to default values

    };

})(
    shoebox
);
