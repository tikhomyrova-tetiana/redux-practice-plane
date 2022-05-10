import "./engine.css";
import { useSelector, useDispatch } from "react-redux";
import { switchEngine } from "../../store/plane/slice";
import { useState } from "react";
// import {allEngines} from '../../store/plane/selector'


export const Engine = () => {
  const dispatch = useDispatch()
  const [switcher1, setSwitcher1] = useState('off')
  const [switcher2, setSwitcher2] = useState('off')
  const [switcher3, setSwitcher3] = useState('off')
  const [switcher4, setSwitcher4] = useState('off')
  // const engines = useSelector(allEngines)

  return (
    <div className='button-container'>
      <button onClick={() => {
        dispatch(switchEngine("left")) && (switcher1 === 'off' ? setSwitcher1('on') : setSwitcher1('off'))
      }}>Left Engine {switcher1}</button>
      <button onClick={() => {
        dispatch(switchEngine("left_center")) && (switcher2 === 'off' ? setSwitcher2('on') : setSwitcher2('off'))
      }}>Left Center Engine {switcher2}</button>
      <button onClick={() => {
        dispatch(switchEngine("right_center")) && (switcher3 === 'off' ? setSwitcher3('on') : setSwitcher3('off'))
      }}>Right Center Engine {switcher3}</button>
      <button onClick={() => {
        dispatch(switchEngine("right")) && (switcher4 === 'off' ? setSwitcher4('on') : setSwitcher4('off'))
      }}>Right Engine {switcher4}</button>
    </div>
  );
};
