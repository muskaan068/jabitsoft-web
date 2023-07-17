import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { endPoint, envUrl, setLocalStorage } from '../../utils/Factory';
import axios from 'axios';
import { useRouter } from 'next/router';

function VerificationPopup({handleCloseModal,openModal,styles,setOpen,setMessage,setMessageColor}) {
    const router=useRouter();
    const[securityCode,setSecurityCode]=useState("");
    const[securityCodeError,setSecurityCodeError]=useState("");

     // Handle Verify
  const handleVerifyCode=async(e)=>{
    e.preventDefault()
   try {
    if(securityCode===""){
        setSecurityCodeError("Please enter the security code!")
    }
   
    if(securityCode!==""){
      const jsonObj={securityCode};
      const url=`${envUrl.baseUrl}${endPoint.verifcation}`;
      await axios.post(url,jsonObj
      ).then((response)=>{
        if(response && response!==null){
          const {statusType,status,token,message}=response.data;
          if(response && statusType===1 && status===200){
            setLocalStorage("isAuth",true);
            handleCloseModal();
             router.push({pathname:'/admin/dashboard'});
          }
           if(response && statusType===0 && status===200){
            setOpen(true);
            setMessage(message);
            setMessageColor("error");
  
          }
          
        }
        
      }).catch((error)=>{
        const err=new Error(error)
        setOpen(true);
        setMessage(err && err.message);
        setMessageColor("error");
        console.log("",error)
      })
    }
   } catch (error) {
    const err=new Error(error)
    setOpen(true);
    setMessage(err && err.message);
    setMessageColor("error");
    console.log("",error)
   }
  }
  return (
        <Dialog
        open={openModal}
        // onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="xs"
        id='VerificationBox'
      >
       
        <DialogContent >
            <div className={styles.VerificationPopupBox}>
                <h3>VERIFICATION</h3>
                <form onSubmit={handleVerifyCode}>
                <div className={styles.LoginForm}>
                <div className={styles.FormGroup}>
                        <div className={styles.InputBox}>
                          <input type={"text"}   placeholder="Security Code" maxLength={6} onChange={(e)=>{setSecurityCode(e.target.value);setSecurityCodeError("")}} value={securityCode} />
                          <img src='/images/admin/lock.png' alt='lock' />
                        </div>
                        <span>{securityCodeError}</span>
                </div>
                <div className={styles.FormGroup}>
                <button >Verify</button>
                </div>
                
            </div>
            </form>
            </div>
        </DialogContent>
        
      </Dialog>
  )
}

export default VerificationPopup