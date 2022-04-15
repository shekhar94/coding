/**
 * 
 * catsanddogs
 * 
 * catscats -> valid
 * 
 * ['cats', 'dogs', 'and']
 */

function recursive(str, map) {
    if (str.length === 0) return true;

    let partialSol = false;
    for (let key of [...map.keys()]) {
        partialSol = partialSol || recursive(str.substring(0, str.length - key.length + 1), map);
    }
    return partialSol;
}


function memoized(str, map, dp) {
    if (str.length === 0) return true;
    if (dp.has(str)) return dp.get(str);

    let partialSol = false;
    for (let key of [...map.keys()]) {
        partialSol = partialSol || memoized(str.substring(0, str.length - key.length + 1), map);
        dp.set(str, partialSol);
    }
    return partialSol;
}

function validString(str, arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], true);
    }

    let start = 0;
    for (let i = 1; i < str.length; i++) {
        if (checkWord(start, i, str, map)) {
            start = i;
            if (i === str.length - 1) start = str.length;
        }
    }

    return start === str.length;
}

function checkWord(start, end, str, map) {
    return map.has(str.substring(start, end));
}



fun();

var fun = function () {
    console.log('dfd');
}

fun();
function fun() {
    console.log('dfs');
}

fun();









//
http://localhost:9000/graphql/products

graphql.js
query GET_PRODUCTS = gql`
    getProducts($input: input) {
        id
        name
        code
    }
`
//t 

ReactComponent

this.client.query(GET_PRODUCTS, {
    variables: {

    }
})

function onInvalidate() {
    // ...

}

class Product {
    constructor() {
        this.cache = {

        }
    }
    getKey({ sort, substring }) {
        return `${sort}-${substring}`;
    }
    async getProducts({ sort, substring }) {
        if (this.cache[getKey({ sort, substring })]) return this.cache[sort];
        const res = await this.client.query(GET_PRODUCTS, {
            variables: {
                substring,
            }
        })
        return this.cache[this.getKey({ sort, substring })] = res.sort((a, b) => a - b);
    }


    async getProductsObservable({ sort, substring }) {

        if (this.cache[getKey({ sort, substring })]) return this.cache[sort];
        return await this.client.query.watchQuery({
            query: GET_PRODUCTS,
            variables: {
                substring,
            }
        )
        // return this.cache[this.getKey({sort, substring})] = res.sort((a, b) => a - b);
    }
}

const singletonProduct = new Product();


class Bar extends React.ReactComponent {
    constructor(props) {

    }
    componentDidMount() {
        singletonProduct.getProducts({ sort: 'id' }).then((res) => {
            this.setState({ sortedProducts: res });
        }) // ?

        const query = singletonProduct.getProducts({ sort: 'id' });
        query.subscribe({
            next: sortedProducts => {
                this.setState({ sortedProducts });
            }
        })

    }

    render() {

    }
}

class Foo extends React.ReactComponent {
    render() {
        const sortedProducts = singletonProduct.getProducts({ sort: '' }) // ? 
    }
}



//

{
    products: [
        {
            id: 1,
            name: 'a',
        },
        {
            id: 2,
            name: 'a',
        },
        {
            id: 3,
            name: 'a',
        },
    ]
}

const singClient = new Client();

// global
function invalidate() {
    // ...
    singClient.resetCache();
}


// GET 

// memoize
class Client {
    constructor() {
        this.cache = {};
        this.subscribers = [];
    }
    resetCache() {
        this.cache = {};

    }
    addContext(context) {
        this.subscribers.push(context);
    }
    async fetch(url) {
        if (this.cache[url]) return this.cache[url];
        this.cache[url] = await getData(url);
        return this.cache[url];
    }
}


Page {

}

class WrapperComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedProducts: {}
        }
        singClient.addContext(this);
    }
    render() {
        const { Comp } = this.props;
        return (
            <Comp>
                );
                }
                }


                // graphql

Foo {
                    constructor(props) {
                    super(props);
        this.state = {
                    sortedProducts: {}
        }
        singClient.addContext(this);
    }
    render() {

                }
}


Bar {
                    constructor(props) {
                    super(props);
        this.state = {
                    sortedProducts: {}
        }
        singClient.addContext(this);
    }
    render() {

                }
}



