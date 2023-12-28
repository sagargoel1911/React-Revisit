import  { useCallback, useState,useEffect } from 'react'

let logTimer;
export default function useAuth() {
  const [userName,setUserName]=useState();
  const [currentExpirationDate,setCurrentExpirationDate]=useState();
  const logout=useCallback(()=>{
    setUserName(null);
    setCurrentExpirationDate(null);
    localStorage.removeItem('userData');
  },[]);
  const login=useCallback((userName,expirationDate)=>{
    setUserName(userName);
    const currentExpirationDate=expirationDate || new Date(new Date().getTime()+1000*60);
    setCurrentExpirationDate(currentExpirationDate);
    localStorage.setItem('userData',JSON.stringify({
      userName:userName,
      currentExpirationDate: currentExpirationDate.toISOString()
    }));
  },[]);
  useEffect(()=>{//handles the timeout
    if(userName && currentExpirationDate){
      let remainingTime=currentExpirationDate-new Date().getTime();
      logTimer=setTimeout(logout,remainingTime);
    }
    else{
      clearTimeout(logTimer);
    }
  },[userName,currentExpirationDate,logout]);
  useEffect(()=>{
    const storedData=JSON.parse(localStorage.getItem('userData'));
    if(storedData && storedData.userName && new Date()<new Date(storedData.currentExpirationDate)){
      login(storedData.userName,new Date(storedData.currentExpirationDate));
    }
  },[login]);
  return {userName,login,logout}
}

