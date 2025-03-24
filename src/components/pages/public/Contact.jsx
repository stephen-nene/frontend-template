
  
import { useState } from "react";
import axios from "axios";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        "https://e-procurement-backend-7whg.onrender.com/api/v1.0/sendmail/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        setResponseMessage("Message sent successfully!");
        setFormData({ email: "", name: "", subject: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const faqs = [
    {
      question: "How do I sign up for the Tender?",
      answer:
        "You can sign up by visiting our website and following the registration process.",
    },
    {
      question: "What things should I prepare before starting?",
      answer:
        "Ensure you have all necessary documentation, including business registration and compliance certificates.",
    },
    {
      question: "Does the company need to subscribe?",
      answer:
        "Yes, a subscription is required to access premium features and tendering opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="w-full p-6">
      {/* Contact Form Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div
          className="relative w-full h-56 md:h-64 bg-cover bg-center flex items-center justify-center rounded-lg"
          style={{
            backgroundImage: "url('../src/assets/images/contactusss.png')",
          }}
        ></div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1>
              <b>Get In Touch</b>
            </h1>
            <p className="mt-2 text-gray-600">
              Providing valuable insights and practical advice related to the
              tendering process and eProcurement solutions.
            </p>
            <br />

            <div className="flex items-center gap-4 mb-4">
              <PhoneCall className="text-green-500" size={20} />
              <div>
                <h2 className="text-lg font-semibold">Phone Number</h2>
                <p className="text-gray-700">+254-786-987</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-green-500" size={20} />
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="text-gray-700">info@procure365@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-green-500" size={20} />
              <div>
                <h2 className="text-lg font-semibold">Address</h2>
                <p className="text-gray-700">Kilimani, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1"
                    placeholder="Daphne Smith"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mt-1"
                    placeholder="DaphneSmith@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1"
                  placeholder="Tender Review"
                  required
                />
              </div>
              <div>
                <label className="text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg mt-1"
                  placeholder="Write your message .."
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {responseMessage && (
              <p
                className={`mt-4 text-center ${
                  responseMessage.includes("success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Map */}
      <div className="w-full h-80 mt-6">
        <iframe
          title="Google Maps"
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.17714150902!2d36.785501!3d-1.2832539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a9bfb1c3d0b%3A0x5c3d8708d31d6352!2sKilimani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1677778309384!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div id="faq-section" className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Providing valuable insights and practical advice related to the
          tendering process and eProcurement solutions.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
          {/* FAQ Items */}
          <div className="w-full md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <button className="text-green-600 text-xl font-bold">
                    {openFAQ === index ? "−" : "+"}
                  </button>
                </div>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2 pl-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Image beside FAQ */}
          <div className="w-full md:w-1/2">
            <img
              src="/src/assets/faqs.png"
              alt="Support Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
