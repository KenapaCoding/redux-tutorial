import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../slices/counterSlice";


const Counter = () => {
    const count = useSelector((state : RootState) => state.counter.value)

    const dispatch = useDispatch<AppDispatch>()

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={() => dispatch(increment())}>
                Increment
            </button>
			<button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
			<button onClick={()=> dispatch(incrementByAmount(3))}>
				Increment by 5
			</button>
		</div>
	);
};

export default Counter;
