// zeta
// box model
// debounce
// position relative, absolute
// implement bind function
// Promise race
// async and defer
// What is used to load script files in web (optimization)
// float left right css
// memoized function
// display flex
// if const is an object and inside object I will try to change the value will it work
// if this works and value can be changed then how to fix values inside object so that it
// can't be changed
// difference between inline and inline-block
// check if object string is balanced and a valid json object
// e.g: "{a: 1, b: [1, 2, 3], c: { d: 3 }}"
// what is prototype and how it works in javascript
// how to make a function available on other function without using 
// prototype






// flux facebook
// redux
// deep clone object (deep cloning vs swallow cloning)
// css box model
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
// Grid layout
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

{/* 
<meta name="viewport" content="width=device-width, initial-scale=1"></meta> 

Within the tag the width property controls the size of the viewport. 
It can be set either to a precise number of pixels like width=400 or 
to the special value device-width value which is the width of the 
screen in CSS pixels at a scale of 100%. device-width is the most 
commonly used width for responsive websites that scale across different screen sizes.

When the page is first loaded the initial-scale property controls 
the initial zoom level ie 1 Viewport pixel = 1 CSS pixel. 
User-scalable, maximum-scale and minimum-scale properties 
control how the user is able to zoom the page in or out.

You could setup an example html page and include the viewport 
tag and change the initial-scale attribute to see the difference. 
Also try viewing the page on different viewport sizes and orientation.
*/}


function debounce(fun, delay) {
    let inDebounce;
    return function () {
        const args = arguments;
        const context = this;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => {
            fun.apply(context, args);
        }, delay);
    };
}

function helper() {
    console.log('api call: ', arguments);
}

const debounceHelper = debounce(helper, 6000);
// debounceHelper();
// debounceHelper();

function throttle(fun, limit) {
    let lastFun;
    let lastRan;
    return function () {
        const args = arguments;
        const context = this;
        if (!lastRan) {
            fun.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFun);
            lastFun = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    fun.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

const throttleHelper = throttle(helper, 6000);
// throttleHelper(1);
// throttleHelper(2);
// throttleHelper(3);


Function.prototype.myBind = function (context) {
    const func = this;
    const prevArgs = [...arguments];
    return function () {
        const currentArgs = [...arguments];
        const combinedArgs = [...prevArgs, ...currentArgs];
        func.apply(context, combinedArgs);
    }
}



