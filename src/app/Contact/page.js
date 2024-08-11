import React from "react";
import cont from "../contact.module.css";
import Image from "next/image";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className={cont.imageforcontact}>
        <h1 className={cont.contactush1}>Contact us</h1>
        <Image
          className={cont.contactheroimages}
          width={1700}
          height={100}
          src={"/contactfirst.jpg"}
        />
      </div>
      <div className={cont.contactmain}>
        <h1 className={cont.contacth1}>Get in Touch</h1>
        <p className={cont.contactpasag}>We are here to contact you 24/7 </p>
      </div>

      <div className={cont.main_contact}>
        <div className={cont.right_contact}>
          <h4 className={cont.chat}>Our Contact information</h4>
          <p className={cont.chat_pasag}>
            after you submit the form, our team will get back to you within 24
            hours
          </p>
          <div className={cont.right_box}>
            <h6 className={cont.chat_with_us}>chat with us</h6>
            <p className={cont.chat_pasag}>Tourism12@gmail.com</p>
          </div>
          <div className={cont.right_box}>
            <h6 className={cont.chat_with_us}>Call us</h6>
            <p className={cont.chat_pasag}>+977 9800000000</p>
          </div>
          <div className={cont.right_box}>
            <h6 className={cont.chat_with_us}>Office Location</h6>
            <p className={cont.chat_pasag}>Bagbazar-28, Kathmandu</p>
          </div>
        </div>

        <form className={cont.form}>
          <div className={cont.form_name}>
            <div className={cont.two_form_name}>
              <label className={cont.label}>First Name</label>
              <input
                type="text"
                className={cont.firsttexts}
                placeholder="Enter First Name"
                required
              ></input>
            </div>
            <div className={cont.two_form_name}>
              <label className={cont.label}>Last Name</label>
              <input
                type="text"
                className={cont.firsttext}
                placeholder="Enter Last Name"
                required
              ></input>
            </div>
          </div>
          <label className={cont.label}>Email</label>
          <input
            type="email"
            className={cont.nametext}
            placeholder="Enter Your Email"
            required
          ></input>

          <label className={cont.label}>Subject</label>
          <input
            type="text"
            className={cont.nametext}
            placeholder="Enter Your Subject"
          ></input>
          <label className={cont.label}>Message</label>
          <textarea
            className={cont.textarea}
            placeholder="Write your message here....."
          ></textarea>
          <button className={cont.form_submit}>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default page;
