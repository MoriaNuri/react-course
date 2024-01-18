console.log('Hi there');

var store;
var unsubscribe;



const initialState = { cars: [] };
function myReducer(state = initialState, action = {}) {
    var cars;
    switch (action.type) {
        case 'ADD_CAR':
            cars = [...state.cars, 'CAR']
            return { ...state, cars }
        case 'REMOVE_CAR':
            cars = state.cars.slice();
            cars.pop();
            return { ...state, cars }
        default:
            return state;
    }
}


function init() {
    store = createStore(myReducer);
    console.log('initial state', store.getState());

    unsubscribe = store.subscribe(() => {
        console.log('Subscriber!', store.getState());
        document.querySelector('pre').innerText = JSON.stringify(store.getState())
    });

    store.subscribe(() => {
        console.log('ME TOO!', store.getState());
    });
}

function go() {
    const action = {
        type: 'ADD_CAR',
    };
    store.dispatch(action);
}

function onUnsubscribe() {
    unsubscribe();
}












