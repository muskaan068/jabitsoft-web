import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { clearLocalStorage, endPoint, envUrl, setLocalStorage } from '../../utils/Factory';
import styles from './Login.module.scss';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import VerificationPopup from './VerificationPopup';
import queryString from 'querystring'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  //router
  const router=useRouter();
  // State declaration for values
  const[adminId,setAdminId]=useState("");
  const[password,setPassword]=useState("");
  // State Declaration for Errors
  const[adminIdError,setAdminIdError]=useState("");
  const[passwordError,setPasswordError]=useState("");
  const [open, setOpen] = useState(false);
  const [message,setMessage]=useState("");
  const [messageColor,setMessageColor]=useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(()=>{
    clearLocalStorage();
  },[])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };




  // Handle Login
  const handleLogin=async(e)=>{
    e.preventDefault();
   try {
    if(adminId===""){
      setAdminIdError("Please enter the admin id!")
    }
    if(password===""){
      setPasswordError("Please enter the password!")
    }
    if(adminId!=="" && password!==""){
      const jsonObj={adminId,password};
      const encodedData=queryString.stringify(jsonObj);
      const url=`${envUrl.baseUrl}${endPoint.auth}`;
      await axios.post(url,encodedData,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}
      ).then((response)=>{
        console.log("ressss",response);
        if(response && response!==null){
          const {statusType,status,token}=response.data;
          if(response && statusType===1 && status===200){
            setLocalStorage("token",token);
            handleOpenModal();
            clearForm();
          }
           if(response && statusType===0 && status===200){
            setOpen(true);
            setMessage("Sorry adminid and password incorrect!");
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
  //Clear Form
  const clearForm=()=>{
    setAdminId('');
    setPassword("");
    setAdminIdError("");
    setPasswordError("")
  }

  

  return (
    <div className={styles.LoginWrapper}>
        <Container>
           <div className={styles.ContainerBox}>
              <div className={styles.LoginHeader}>
                  <Link href={"/admin"}>
                    <a>
                      <img src='/images/Logo.png' alt='logo' />
                    </a>
                  </Link>
              </div>
              <div className={styles.LoginContainer}>
                <div className={styles.LoginBox}>
                    <h1>LOG IN</h1>
                    <form onSubmit={handleLogin}>
                    <div className={styles.LoginForm}>
                      <div className={styles.FormGroup}>
                        <div className={styles.InputBox}>
                          <input type={"text"} onChange={(e)=>{setAdminId(e.target.value);setAdminIdError("")}} value={adminId}  placeholder="Login ID" />
                          <img src='/images/admin/lock.png' alt='lock' />
                        </div>
                        <span>{adminIdError && adminIdError}</span>
                      </div>
                      <div className={styles.FormGroup}>
                        <div className={styles.InputBox}>
                          <input type={"password"}  placeholder="Password" onChange={(e)=>{setPassword(e.target.value);setPasswordError("")}} value={password} />
                          <img src='/images/admin/pass.png' alt='pass' />
                        </div>
                        <span>{passwordError && passwordError}</span>
                      </div>
                      <div className={styles.FormGroup}>
                        <button >Login</button>
                      </div>
                    </div>
                    </form>
                </div>
              </div>
             
           </div>
        </Container>
        {/* Message alert */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={messageColor && messageColor} sx={{ width: '100%' }}>
          {message && message}
        </Alert>
      </Snackbar>
      <VerificationPopup
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        styles={styles}
        setOpen={setOpen}
        setMessage={setMessage}
        setMessageColor={setMessageColor}

     />
    </div>
  )
}

export default Login