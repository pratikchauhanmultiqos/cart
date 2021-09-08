const initialState = [
    {
        id: 1,
        label: "Test 1",
        isComplete: false
    },
    {
        id: 2,
        label: "Test 2",
        isComplete: false
    },
    {
        id: 3,
        label: "Test 3",
        isComplete: false
    },
]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_LIST": return state
        case "ADD_LIST":
            return [
                ...state,
                action.payload
            ];

        case "IS_COMPLETE":
            return [
                ...state.map(item => item.id === action.payload.id ? ({ ...item, isComplete: true }) : item)
            ]

        case "IS_COMPLETED":
            return [
                ...state.map(item => item.id === action.payload.id ? ({ ...item, isComplete: false }) : item)
            ]

        case "IS_DELETE":
            return [
                ...state.filter(item => item.id !== action.payload.id)
            ]
        default: return state
    }
}


export default listReducer;