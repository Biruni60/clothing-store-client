

const ContactUs = () => {
    return (
        <div id='contact' className=' my-20 text-white px-20 pb-20'>
 <h2 className='text-yellow-600 text-center text-3xl pb-10'>---CONTACT US---</h2>

 <div className='lg:flex border p-10 rounded border-yellow-600'>
  <div className='lg:w-1/2'>
<img src="https://i.ibb.co/5sZFTvQ/3646374-1-removebg-preview.png" alt="" />
  </div>
  <div className='lg:w-1/2 my-auto '>
  <form className='text-black flex flex-col gap-4 '>
      <input placeholder='Name' className='w-full P-2 rounded-md' type="text" name="from_name" />
      <input placeholder='Email' className='w-full p-2 rounded-md' type="email" name="from_email" />
      <textarea placeholder='Message' className='w-full p-2 rounded-md' name="message" />
      <input className='text-white text-xl' type="submit" value="Send" />
    </form>
  </div>
 </div>
 </div>
    );
};

export default ContactUs;