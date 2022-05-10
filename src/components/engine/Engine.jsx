import "./engine.css";
import { useSelector, useDispatch } from "react-redux";
import { switchEngine } from "../../store/plane/slice";
import { useState } from "react";
import {allEngines} from '../../store/plane/selector'


export const Engine = () => {
  const dispatch = useDispatch()
  
  const engines = useSelector(allEngines)

  return (
    <div className='button-container'>
      <button onClick={() => {
        dispatch(switchEngine("left"))
      }} 
      >Left Engine {engines.left ? "off" : "on"}</button>
      <button onClick={() => {
        dispatch(switchEngine("left_center"))
      }}>Left Center Engine {engines.left_center ? "off" : "on"}</button>
      <button onClick={() => {
        dispatch(switchEngine("right_center"))
      }}>Right Center Engine {engines.right_center ? "off" : "on"}</button>
      <button onClick={() => {
        dispatch(switchEngine("right"))
      }}>Right Engine {engines.right ? "off" : "on"}</button>
    </div>
  );
};
