import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '../HText.tsx/HText';




type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if(!isValid){
      e.preventDefault();
    }
  }
  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}
      >
        {/*Header */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum porro. Porro ab accusamus quod, iusto odit dicta exercitationem impedit vitae eligendi ullam earum. Modi optio officia dignissimos corporis inventore?
          </p>
        </motion.div>
        {/*FORM AND IMAGE */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form target='_blank' onSubmit={onSubmit} action='https://formsubmit.co/your@email.com' method='POST'>
              <input 
              className={inputStyles}
              type='text'
              placeholder='NAME'
              {...register("name",{
                required:true,
                maxLength:100
              })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 characters."}
                </p>
              )}

              <input 
              className={inputStyles}
              type='text'
              placeholder='E-MAIL'
              {...register("email",{
                required:true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email adress."}
                </p>
              )}

              <textarea 
              className={inputStyles}
              placeholder='MESSAGE'
              rows={4}
              cols={500}
              {...register("message",{
                required:true,
                maxLength:2000
              })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                </p>
              )}

              <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div 
          className='relative mt-16 basis-2/5 md:mt-0'
          initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2 , duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img
              className='w-full'
              alt=''
              src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs