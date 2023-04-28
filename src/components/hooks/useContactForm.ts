import { ChangeEvent, FormEvent, ChangeEventHandler, useState } from "react"

const API_URL = import.meta.env.VITE_APP_FORMSPREE_API_END_POINT

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const DEFAULT_CONTACT_FORM = {
  name: "",
  email: "",
  message: ""
}

const DEFAULT_SENT_BUTTON_TEXT = "Send Message"

export const useContactForm = () => {
  const [contactForm, setContactForm] = useState<ContactFormProps>(DEFAULT_CONTACT_FORM)
  const [isSuccessfullySubmited, setIsSuccessfullySubmited] = useState<Boolean>(false)
  const [sendButtonText, setSendButtonText] = useState<string>(DEFAULT_SENT_BUTTON_TEXT)

  const formInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    setContactForm({
      ...contactForm,
      [name]: event.target.value
    })
  }

  const formTextAreaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name
    setContactForm({
      ...contactForm,
      [name]: event.target.value
    })
  }

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSendButtonText("Sending")

    try {
      submitUserInputToFormspree(contactForm)
      resetForm()
    } catch (error: any) {
      console.log(error.message)
    }

  }

  const submitUserInputToFormspree = async (formData: ContactFormProps) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setIsSuccessfullySubmited(response.ok)
      setSendButtonText("Done")
    }
  }

  const resetForm = () => {
    setContactForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return {
    contactForm,
    isSuccessfullySubmited,
    sendButtonText,
    onFormInputChangeHandler: formInputChangeHandler,
    onFormTextAreaChangeHandler: formTextAreaChangeHandler,
    onFormSubmitHandler: formSubmitHandler
  }
}
