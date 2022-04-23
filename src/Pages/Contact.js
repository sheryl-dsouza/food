import React from 'react'
import { Link} from "react-router-dom";
import './Vendor_Screen.css';
var perf =require('./form.html');

const Contact = () => {
    return (
      </div>
      <form>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="What's your question?"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
        </div>
    );
};
    
export default Contact;