/**
 * Created by Jim Ankrom on 1/24/2016.
 */

describe('shoebox', function () {

    describe('shoebox.observe', function () {
        it('calls the callback on set', function () {

            var test = { observed: "hello world"},
                wasCalled = false;

            shoebox.observe('observed', function () {
                wasCalled = true;
            }, test);

            expect(wasCalled).toBeTruthy();

        });
    });
});