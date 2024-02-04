import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="" src={Logo}/>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque repellat aliquid officia nulla quibusdam fuga, accusantium necessitatibus tempore qui, nesciunt architecto, expedita quod corrupti alias! Minus repudiandae harum mollitia.
          </p>
          <p>
          © Evogym All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h1 className="font-bold">Links</h1>
          <p className="my-5"> Massa orci senectus</p>
          <p className="my-5"> Lorem ipsum dolor sit amet</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h1 className="font-bold">Contact Us</h1>
          <p className="my-5">Rem neque repellat aliquid officia nulla</p>
          <p className="my-5">Minus repudiandae harum mollitia.</p>
          <p>(333) 1515-6278</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer