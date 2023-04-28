
export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <div className="text-white">
      <hr className="opacity-50" />
      <footer className="h-24 bg-black px-4">
        <div className="flex flex-col-reverse justify-center items-center gap-2 h-full sm:flex-row sm:justify-between md:flex md:flex-row md:justify-between md:container md:m-auto">
          <p className="text-sm font-poppins">All rights reserved &copy; {date} Polash Ahmad.</p>
          <div className="flex">
            <div className="h-15 w-15 pr-4 ">
              <a 
                href="https://github.com/polashahmad01"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://twitter.com/polashahmad01"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://www.linkedin.com/in/polashahmad01"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 px-4">
              <a 
                href="https://www.instagram.com/polashahmad01"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
            <div className="h-15 w-15 pl-4">
              <a 
                href="https://www.youtube.com/channel/UCYpAK2zyf2mnJI9RJZP59IQ"
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
