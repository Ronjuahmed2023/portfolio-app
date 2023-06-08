
export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <div className="text-white">
      <hr className="opacity-50" />
      <footer className="h-24 bg-black px-4">
        <div className="flex flex-col-reverse justify-center items-center gap-2 h-full sm:flex-row sm:justify-between md:flex md:flex-row md:justify-between md:container md:m-auto">
          <p className="text-sm font-poppins">All rights reserved &copy; {date} Robiul Alom Ronju.</p>
          <div className="flex">
            <div className="h-15 w-15 pr-4 ">
              <a 
                href="https://github.com/Ronjuahmed2023"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://twitter.com/Ronjuofficial22"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=8801819068101&text&type=phone_number&app_absent=0"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://www.linkedin.com/in/seo-specialist-bangladesh01/"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://www.instagram.com/best_seoexpert/"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 pl-4">
              <a 
                href="https://www.youtube.com/channel/UCcPj3VfjvRL43nk8SoBZnjw"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
