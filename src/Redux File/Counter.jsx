import { useDispatch, useSelector } from "react-redux";
import { DEC, INC } from "./CounterSlice";

export const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <center>
            <h2>Count: {count}</h2>

            <button
                className="btn btn-primary"
                onClick={() => dispatch(INC())}
            >
                Inc
            </button>

            <button
                className="btn btn-danger"
                onClick={() => dispatch(DEC())}
            >
                Dec
            </button>
        </center>
    );
};