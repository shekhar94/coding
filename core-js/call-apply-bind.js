// zeta
// box model
// debounce
// position relative, absolute
// implement bind function
// Promise race
// async and differ
// What is used to load script files in web (optimization)
// float left right css
// memoized function
// display flex
// difference between inline and inline-block
// check if object string is balanced and a valid json object
// e.g: "{a: 1, b: [1, 2, 3], c: { d: 3 }}"
// what is prototype and how it works in javascript
// how to make a function available on other function without using 
// prototype


{/* <div class="wrapper">
    <div class="child">
        <p>
            Some text center aligned
            button takes some height at bottom 
            of child div. Text inside should be center aligned 
            in remaining area

            Whole block is inside child
            ------------------------
                Text should be center 
                aligned here

            ------------------------
                Right aligned Button
            ------------------------

        </p>
        <button class="btn">Btn</button>
    </div>
</div> */}



// flux facebook
// redux
// deep clone object (deep cloning vs swallow cloning)
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



