import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
class Home extends React.Component {
  componentDidMount(){
   //animation code
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    
    
    
    $('input[type="radio"]').on('change',function() {
       
    
        if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            
            $('.white-panel').removeClass('right-log');
            
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
            
        }
    });
});
  }
 
  render() {
   
    return (
     
       
       <div class="login-reg-panel">
            <div class="login-info-box">
                <h2>Have an account?</h2>
                <p>To keep connected with us please login with your personal info</p>
                <label id="label-register" for="log-reg-show">Login</label>
                <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
            </div>
                        
            <div class="register-info-box">
                <h2>Don't have an account?</h2>
                <p>Hello, Friend!
Enter your personal details and start journey with us</p>
                <label id="label-login" for="log-login-show">Register</label>
                <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
            </div>
                        
            <div class="white-panel">
                <div class="login-show">
                <h2>LOGIN</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="button" value="Login" />
                
                </div>
                <div class="register-show">
                <h2>REGISTER</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="number" placeholder="Phone Number" />
                <input type="button" value="Register" />
                </div>
            </div>
            </div>
         
       
     
      
)
};
}
export default Home;