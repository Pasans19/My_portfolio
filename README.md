# Personal Portfolio Website

A modern, responsive portfolio website built with React.js featuring a contact form that allows visitors to send messages directly to your email.



## 🌟 Features

- **Responsive Design**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Interactive UI**: Modern interface with smooth animations and transitions
- **Contact Form**: Integrated with EmailJS to receive messages directly to your inbox
- **Project Showcase**: Beautifully display your projects with filterable categories
- **Social Media Integration**: Connect with visitors through your social profiles

## 📋 Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Contact Form Configuration](#contact-form-configuration)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Demo

View the live demo: [Your Portfolio URL](https://your-portfolio-url.com)

## 💻 Technologies

This project is built with:

- React.js
- CSS3 with custom animations
- EmailJS for form submission
- React Icons
- React Router

## ⚙️ Setup and Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git

# Navigate to the project directory
cd portfolio-website

# Install dependencies
npm install

# Start the development server
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000)

## 📬 Contact Form Configuration

The contact form uses EmailJS to send messages directly to your email. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (connect your Gmail, Outlook, etc.)
3. Create an email template with variables that match your form fields:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Get your service ID, template ID, and public key
5. Update the configuration in `src/components/Contact.js`:

```javascript
emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  form.current,
  'YOUR_PUBLIC_KEY'       // Replace with your public key
)
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Projects.js
│   │   └── ...
│   ├── styles/
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🌐 Deployment

The site can be deployed using various platforms:

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

Pasan Ransika - [pasansransika@gmail.com](mailto:pasansransika@gmail.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

Made with ❤️ by Pasans(https://your-portfolio-url.com)
