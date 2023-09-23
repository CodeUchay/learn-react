import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../store";
import { useSelector } from 'react-redux';

function LanguageSelector() {
  const [bgColor, setBgColor] = useState('');
  const selectedLanguage = useSelector((state) => state.language);
  const dispatch = useDispatch();

  
  useEffect (() => {
   setBgColor(selectedLanguage)
  },[]);


  const changeLanguage = (language) => {
    dispatch(setLanguage(language));
    setBgColor(language)
  };


  return (
    <div className="flex justify-center items-center gap-2">
      <div className={`border rounded-full border-primary-800 py-1 px-2 ${
        bgColor === 'en' && `bg-primary-800 text-white`
      }`}>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
      <div className={`border rounded-full border-primary-800 py-1 px-2 ${
        bgColor === 'fr' && `bg-primary-800 text-white`
      }`}>
        <button onClick={() => changeLanguage("fr")}>FR</button>
      </div>
    </div>
  );
}

export default LanguageSelector;
