import "./dashboard.css";
import { Engine, Navigator, Thrust } from "../index";
import { useSelector } from "react-redux";
import { selectTotalPower } from "../../store/plane/selector";

export const Dashboard = () => {
  const totalPower = useSelector(selectTotalPower)

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <h3>Total power: {totalPower}</h3>
      <Engine />
      <Navigator />
      <Thrust />
    </div>
  );
};
