import React, { useState } from "react";


export const Register = (props) => {

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderRadius: '100%',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),

        control: () => ({
          width: 200,
        }),

        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }





    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [wallet, setWallet] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="username" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label className="label-select">
            Select Wallet Type:
            <select styles={customStyles} className="select" value={wallet} onChange={(e) => setWallet(e.target.value)}>
                <option  value="bnb"><p className="option">BNB</p></option>
                <option  value="btc"><p className="option">BTC (Bep20Sc)</p></option>
                <option  value="eth"><p className="option">ETH (Erc20)</p></option>
                
            </select>
            </label>

            <label htmlFor="name">Input wallet address</label> 

            <input value={address} onChange={(e) => setAddress(e.target.value)} name="wallet-address" id="address" placeholder="Wallet address" /> 

            <div className='full'   >
                    <div className=' full' >
                        <p>
                            <input type="checkbox" required id="reg_check" name="reg_check" />
                      <span>  I have read and agree to Grids <a href="#" target="_blank" >Terms of Service</a> and <a href="#" target="_blank">Privacy Policy </a></span>
                        </p>
                    </div>

                    <div className='reg_check'>
                    <p>
                         <input type="checkbox" required id="reg_check" name="reg_check" /> 
                         <span> I agree to receive marketing updates from Grid.</span></p>
                    </div>
                
                    </div>
            <button type="submit">Log In</button>
        </form>
        
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? <span>Login here.</span></button>
    </div>
    )
}