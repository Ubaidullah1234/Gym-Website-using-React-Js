import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "792fdabe-42fb-43c5-a7d9-ab94ed97a182");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> Send us a message</h3>
            <p>
                Feel free to reach out through contact from or find our contact 
                information below. Your feedback, questions and suggestion are important to us.
            </p>
            <ul>
                <li> <img src={mail} alt="" />
                    bronxclub11@gmail.com
                </li>
                <li><img src={phone} alt="" />+92 123-456-789</li>
                <li><img src={location} alt="" />Dummy Address</li>

            </ul>

        </div>

        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>
                    Your Name
                </label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />
                <label >Write Your Message</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn2 dark-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>

      
    </div>
  )
}

export default Contact
