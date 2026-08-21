import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl px-4 md:px-10 lg:px-20 py-12 pb-16">
      
      <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900">
          Let's Connect
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
           Have a project in mind or just want to say hi? Feel free to reach out directly or use the form. I'm always open to discussing new projects and creative ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Main Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-6 relative overflow-hidden group shadow-lg shadow-slate-200/50">
            <div className="absolute right-0 top-0 size-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500 -translate-y-1/2 translate-x-1/4"></div>
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Contact</h3>
                <p className="text-slate-600 text-sm mb-6">Drop me an email or reach out via WhatsApp.</p>
                <a href="mailto:faiqmisbah019@gmail.com" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0c3836] px-6 text-base font-bold text-white transition-all hover:bg-[#072725] hover:scale-[1.02] shadow-md shadow-[#0c3836]/20 w-full mb-3">
                    <span className="material-symbols-outlined mr-2 text-[20px]">mail</span>
                    faiqmisbah019@gmail.com
                </a>
                <a href="https://wa.me/6285218555204" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 px-6 text-base font-bold text-white transition-all hover:bg-emerald-700 hover:scale-[1.02] shadow-md shadow-emerald-600/20 w-full">
                    <span className="material-symbols-outlined mr-2 text-[20px]">phone</span>
                    +62 852-1855-5204
                </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
             {/* Location */}
             <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-300 transition-colors shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                    <h4 className="text-base font-bold text-slate-900">Location</h4>
                    <p className="text-sm text-slate-600">Indonesia</p>
                </div>
             </div>

             {/* Socials */}
             <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-300 transition-colors shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                    <h4 className="text-base font-bold text-slate-900">Socials</h4>
                    <div className="flex gap-4 mt-1">
                        <a href="https://www.linkedin.com/in/faiq-misbah/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium">LinkedIn</a>
                        <a href="https://github.com/faiqmisbah" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium">GitHub</a>
                        <a href="https://www.instagram.com/faiqmisbah_/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium">Instagram</a>
                        <a href="https://www.youtube.com/@faiqmisbahy" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm font-medium">YouTube</a>
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/50">
                <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-slate-800">Name</span>
                            <div className="relative">
                                <input 
                                  type="text" 
                                  name="from_name"
                                  placeholder="John Doe" 
                                  required
                                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:bg-white outline-none transition-all" 
                                />
                                <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-400 text-[20px] pointer-events-none">person</span>
                            </div>
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-slate-800">Email</span>
                            <div className="relative">
                                <input 
                                  type="email" 
                                  name="reply_to"
                                  placeholder="john@example.com" 
                                  required
                                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:bg-white outline-none transition-all" 
                                />
                                <span className="material-symbols-outlined absolute right-3 top-3.5 text-slate-400 text-[20px] pointer-events-none">alternate_email</span>
                            </div>
                        </label>
                    </div>
                    
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-800">Subject</span>
                        <select 
                          name="subject"
                          required
                          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:bg-white outline-none transition-all appearance-none"
                        >
                            <option>General Inquiry</option>
                            <option>Project Proposal</option>
                            <option>Freelance Opportunity</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-800">Message</span>
                        <textarea 
                          name="message"
                          placeholder="Tell me about your project..." 
                          required
                          className="w-full min-h-[160px] resize-none rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:bg-white outline-none transition-all"
                        ></textarea>
                    </label>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
                        <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                        <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800">
                        <span className="material-symbols-outlined text-rose-600">error</span>
                        <span className="text-sm font-medium">Failed to send message. Please try again or email me directly.</span>
                      </div>
                    )}

                    <div className="flex justify-end">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="group flex h-12 w-full sm:w-auto min-w-[160px] items-center justify-center gap-2 rounded-xl bg-[#0c3836] px-6 text-base font-bold text-white shadow-lg shadow-[#0c3836]/20 transition-all hover:bg-[#072725] hover:shadow-[#0c3836]/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                              <>
                                <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[20px]">send</span>
                              </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;