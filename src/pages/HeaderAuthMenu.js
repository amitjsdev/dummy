import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setLocalStorage } from "../Helpers/storageHelper";
import { useEffect } from "react";

export default function HeaderAuthMenu() {
  const { t, i18n } = useTranslation();
  let currentLanguage = localStorage.getItem('currentLanguage');

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    localStorage.setItem('currentLanguage',languageValue);
    i18n.changeLanguage(languageValue);
  }
  useEffect(()=>{
    if(!!currentLanguage){
      i18n.changeLanguage(currentLanguage);
    }
  },[])

  return (
    <>
    <div>
      <h1>Auth</h1>
      <select className="custom-select" style={{width: 200,float:"right"}} onChange={changeLanguageHandler}>
        <option selected={currentLanguage=="en"} value="en" >English</option>
        <option selected={currentLanguage=="hn"} value="hn" >Hindi</option>
      </select>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/auth/home">Dashboard</Link> |{" "}
        <Link to="/auth/about">About</Link> |{" "}
        <Link to="/auth/contact">Contact</Link> |{" "}
        <Link to="/auth/user">Users</Link>
      </nav>
      <Outlet />
    </div>
     
   </>
  );
}