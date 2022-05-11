import { useDispatch, useSelector } from "react-redux";
import { changeThrust } from "../../store/plane/slice";
import { selectThrust} from "../../store/plane/selector";


export const Thrust = () => {
  const dispatch = useDispatch()
  const thrust = useSelector(selectThrust)

  return (
    <div className='thrust'>
      <button onClick={() =>dispatch(changeThrust(-10))} disabled={thrust === 0}>-</button>
      Thrust: {thrust}
      <button onClick={() =>dispatch(changeThrust(+10))} disabled={thrust === 100}>+</button>
    </div>
  );
};
