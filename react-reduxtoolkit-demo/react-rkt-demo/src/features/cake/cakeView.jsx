import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice"

export const CakeView = () => {
	const [value, setValue] = useState(1);

	const numOfCakes = useSelector((state) => state.cake.numOfCakes)
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of cake - {numOfCakes}</h2>
			<button onClick={() => dispatch(ordered())}>Order Cake</button>
			<input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
			<button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
		</div>
	)
}