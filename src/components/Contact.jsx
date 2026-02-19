import React from 'react';

const Contact = () => {
    return (
        <div className="pt-24 container mx-auto px-4 min-h-screen">
            <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                        We'd love to hear from you. Please reach out to us using the contact details below or fill out the form.
                    </p>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Address</h3>
                        <p className="text-gray-600">Markaz Knowledge City, Kerala, India</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">info@as-swuffah.org</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">+91 123 456 7890</p>
                    </div>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-32" placeholder="How can we help?"></textarea>
                    </div>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
