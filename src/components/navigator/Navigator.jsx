import { useDispatch } from "react-redux";
import { changeNavigation } from "../../store/plane/slice";


export const Navigator = () => {
  const dispatch = useDispatch()

  return (
    <select onChange={(event) => dispatch(changeNavigation(event.target.value))}>
      <option value={0}>Manual</option>
      <option value={1}>Auto pilot</option>
      <option value={2}>Remote</option>
    </select>
  );
};
