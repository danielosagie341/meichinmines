import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import addressMarker from '../assets/images/addressMarker.svg';
import telephone from '../assets/images/telephone.svg';
import mail from '../assets/images/mail.svg';

interface ContactInfo {
  icon: string;
  title: string;
  content: string[];
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: addressMarker,
      title: 'Address',
      content: [
        'Directorate of Road Traffic Services,',
        'Cadastral Zone, B10 Udysens',
        'Crescent, Mabushi, Abuja'
      ]
    },
    {
      icon: telephone,
      title: 'Phone Number',
      content: ['+234 9127616959']
    },
    {
      icon: mail,
      title: 'Email',
      content: ['Meichinofficial@gmail.com']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                You can contact us directly through the form below, via email, or by phone. 
                We look forward to hearing from you and building a meaningful connection.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={info.icon} 
                      alt={`${info.title} icon`}
                      className="w-6 h-6 sm:w-7 sm:h-7 filter brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.content.map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          className="text-gray-600 text-sm sm:text-base break-words"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl sm:text-4xl text-yellow-500">
                  Send a Message
                </h3>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-4 text-gray-900 placeholder-gray-400 border-0 border-b-2 border-gray-200 bg-transparent focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-base sm:text-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-4 text-gray-900 placeholder-gray-400 border-0 border-b-2 border-gray-200 bg-transparent focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-base sm:text-lg"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    required
                    className="w-full px-4 py-4 text-gray-900 placeholder-gray-400 border-0 border-b-2 border-gray-200 bg-transparent focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none text-base sm:text-lg"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg min-w-[140px] flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-green-600 mt-4">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 mt-4">Failed to send message. Please try again later.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;