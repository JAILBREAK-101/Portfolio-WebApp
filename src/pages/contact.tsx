import Layout from '../components/layout/Layout';
import ContactForm from '@/components/layout/ContactForm'; // Assuming you placed the form in a ContactForm component

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <small>Let's work together</small>

      <ContactForm />
    </Layout>
  );
}
