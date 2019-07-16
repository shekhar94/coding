// zeta
// box model
// debounce
// position relative, absolute
// implement bind function
// Promise race

// center align child div
// child div can be moved
// inside parent 
// (write scalable css so that with 
// minor change child can be moved)

// <div class="parent">
//     <div class="child"></div>
// </div>

// .parent {

// }
// .child {

// }


// css box model
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
// Grid layout
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf


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
