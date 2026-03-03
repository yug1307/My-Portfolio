import React from 'react'
import Topbar from './Topbar';
import FooterOne from './FooterOne';
import ContactForm from "./ContactForm"
import { MapPin, Phone, Mail } from "lucide-react"; 

const ContactMe = () => {
  return (
    <>
    <Topbar/>
    <ContactForm/>
    <FooterOne/>
    </>
  )
}

export default ContactMe