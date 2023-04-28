import { useContactForm } from "./hooks/useContactForm"
import { EmailSubmission } from "./EmailSubmission"

export const ContactForm = () => {
  const { contactForm, isSuccessfullySubmited, sendButtonText, onFormInputChangeHandler, onFormTextAreaChangeHandler, onFormSubmitHandler } = useContactForm()

  return (
    <div className="text-white font-poppins px-4 md:container md:flex md:mx-auto md:gap-8 md:justify-between md:items-center md:px-4 lg:container lg:flex lg:mx-auto lg:gap-12 lg:justify-between lg:items-center lg:px-4">
      <div className="basis-1/2">
        <h1 className="text-5xl font-black mb-8 mt-8 text-center sm:text-center md:text-6xl md:mt-0 md:text-left lg:text-7xl lg:mt-0 lg:text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-indigo-600">Let's </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800">Talk</span>
        </h1>
        <p className="text-base leading-5 text-center mb-8 sm:text-center md:w-11/12 md:text-lg md:text-left lg:w-11/12 lg:text-left">
          If you're interested in learning more about me, collaborating on a project, 
          or simply curious and want to say hello, please don't hesitate to send me a message. 
          I enjoy receiving messages from people on the internet!
        </p>
      </div>
      <div className="basis-1/2">
        <form onSubmit={onFormSubmitHandler}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className="mb-2 text-xs font-medium dark:text-white sm:text-base"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border py-2 md:py-3 px-4 border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-xs md:placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              style={{ backgroundColor: "#181818"}}
              value={contactForm.name}
              onChange={onFormInputChangeHandler}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="mb-2 text-xs font-medium dark:text-white md:text-base"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border py-2 md:py-3 px-4 border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-xs md:placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              style={{ backgroundColor: "#181818"}}
              value={contactForm.email}
              onChange={onFormInputChangeHandler}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="message"
              className="mb-2 text-xs font-medium dark:text-white md:text-base"
            >
              Message
            </label>
            <textarea
              cols={30} 
              rows={10}
              name="message"
              className="bg-gray-50 border py-2 md:py-3 px-4 border-gray-300 text-sm rounded-lg placeholder:text-xs md:placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your message"
              style={{ backgroundColor: "#181818"}}
              value={contactForm.message}
              onChange={onFormTextAreaChangeHandler}
              required
            >
            </textarea>
          </div>
          <div className="flex flex-col my-6">
          <button
            className="bg-gray-50 border py-2 md:py-3 px-4 border-gray-300 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer hover:text-indigo-600"
            style={{ backgroundColor: "#181818"}}
          >
            {sendButtonText}
          </button>
          </div>
          {isSuccessfullySubmited && <EmailSubmission />}
        </form>
      </div>
    </div>
  )
}
