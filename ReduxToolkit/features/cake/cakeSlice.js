const creatSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
	numOfCakes: 10
}

const cakeSlice = creatSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: (state) => {
			state.numOfCakes--
		},
		restocked: (state, action) => {
			state.numOfCakes += action.payload
		},
	},
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions