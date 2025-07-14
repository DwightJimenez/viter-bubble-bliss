import React from "react";

const Form = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-pink-100 to-purple-100' id="contact">
        <div className='container'>
          <div className='flex flex-col gap-5 items-center'>
            <div className='text-center'>
              <h3>
                Get Your <span className='gradient-text'>Milk Tea</span> Fix
              </h3>
              <p>
                Have questions or want to share your favorite flavor? We'd love
                to hear from you!
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg w-3/4 h-full'>
              <form className='grid grid-cols-2 gap-6'>
                <div className="col-span-2 md:col-span-1">
                  <label for='name'>Your Name</label>
                  <input type='text' placeholder='Jane Doe' id='name' />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label for='email'>Email Address</label>
                  <input
                    type='text'
                    placeholder='jane@example.com'
                    id='email'
                  />
                </div>

                <div className='col-span-2'>
                  <label for='subject'>Subject</label>
                  <input
                    type='text'
                    placeholder="What's this about?"
                    id='subject'
                  />
                </div>
                <div className='col-span-2'>
                  <label for='message'>Your Message</label>
                  <textarea
                    type='text'
                    placeholder='Tell us about your favorite milk tea...'
                    id='message'
                  />
                </div>
                <button className='btn col-span-2 rounded-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
