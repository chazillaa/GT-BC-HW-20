import React from 'react';

export default function Contact() {
    return (
        <div className="d-flex justify-content-center align-items-center ">
            
        <section className="">

        <h2 className="text-center nes-text is-error m-4">Contact Me</h2>

        <form className="form text-center nes-container is-rounded">

           <div className="nes-field m-4">
           <h4 className="nes-text is-primary" for="name">Name</h4>
              <input id="name" className="input-text nes-input" type="text" required></input>
              
           </div>

           <div className="nes-field m-4">
           <h4 className="nes-text is-primary" for="email">E-mail</h4>
              <input id="email" className="input-text nes-input" type="email" required></input>
              
           </div>

           <div className="nes-field m-4">
           <h4 className="nes-text is-primary" for="textarea_field">Message</h4>
              {/* <input id="message" className="input-text nes-input" type="text" required></input> */}
              
              <textarea id="textarea_field" class="nes-textarea"></textarea>
           </div>

           <div className="nes-field m-4">
              <input className="nes-btn is-error" type="submit" value="Submit"></input>
           </div>
        </form>

     </section>
     </div>
    )
  }