import {useRef}from 'react';
import emailjs from '@emailjs/browser';


const Contact=()=>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sagp2bn', 'template_th1e9a8', form.current, '-MengV-k92fwR5xQn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <section>
            
            <div className='container'>
                <h4 className='--text-center'>get in touch</h4>

                <h2 className='--text-center'>
                    Contact Us
                </h2>
                <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center
                --dir-column'>
                    <input type="text" placeholder='Full Name'
                    name='user_name' required></input>
       
                   <input type="Email" placeholder='Email'
                    name='user_email' required></input>

                  <input type="text" placeholder='Subject'
                    name='subject' required></input>

                    <textarea name="message"
                    cols="30" rows="10"></textarea>

                    <button type="submit" className='--btn --btn-primary'>Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact