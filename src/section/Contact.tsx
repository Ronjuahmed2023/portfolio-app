import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"

export const Contact = () => {

  return (
    <div className="bg-black section">
      <div className="grid grid-rows-1 min-h-screen">
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
