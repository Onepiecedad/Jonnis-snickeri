import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChefHat, 
  BookOpen, 
  Home, 
  Sparkles, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Filter,
  Bot,
  Mic,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Quote,
  Play,
  Volume2,
  Headphones
} from 'lucide-react';
import './App.css';

// Image URLs from vision expert
const images = {
  hero: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4',
  about: 'https://images.unsplash.com/photo-1499744349893-0c6de53516e6',
  customFurniture: 'https://images.unsplash.com/photo-1737534884876-426964ba462a',
  kitchenCabinets: 'https://images.pexels.com/photos/7587482/pexels-photo-7587482.jpeg',
  fineDetails: 'https://images.unsplash.com/photo-1650362598376-af674d46570b',
  workshop: 'https://images.unsplash.com/photo-1683115099413-5b7d85c2950c',
  tools: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg',
  tradition: 'https://images.unsplash.com/photo-1724053317312-1e64ef028420',
  craftsmanship: 'https://images.pexels.com/photos/5974326/pexels-photo-5974326.jpeg',
  woodwork: 'https://images.unsplash.com/photo-1626977990625-18e01e4cfe7b',
  storage: 'https://images.unsplash.com/photo-1560698421-8b6a7d0d89dc',
  process: 'https://images.unsplash.com/photo-1683115099119-1af60e697f9a'
};

const services = [
  {
    title: 'Platsbyggda Kök',
    description: 'Skräddarsydda kök som passar just ditt hem och dina behov.',
    icon: ChefHat,
    image: images.kitchenCabinets,
    features: ['Unik design', 'Kvalitetsmaterial', 'Perfekt passform']
  },
  {
    title: 'Bokhyllor & Förvaring',
    description: 'Eleganta förvaringslösningar som maximerar ditt utrymme.',
    icon: BookOpen,
    image: images.storage,
    features: ['Optimalt utnyttjande', 'Tidlös design', 'Hållbar konstruktion']
  },
  {
    title: 'Fönsterrenoveringar',
    description: 'Återställer gamla fönster till deras forna glans.',
    icon: Home,
    image: images.fineDetails,
    features: ['Bevarande hantverk', 'Energieffektivitet', 'Originalkaraktär']
  },
  {
    title: 'Finsnickeri',
    description: 'Detaljerade träarbeten som förhöjer ditt hem.',
    icon: Sparkles,
    image: images.woodwork,
    features: ['Handgjord kvalitet', 'Artistisk finish', 'Personlig touch']
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Första Kontakt',
    description: 'Vi diskuterar dina behov och idéer',
    icon: Phone
  },
  {
    step: 2,
    title: 'Platsbesök & Mätning',
    description: 'Noggrann uppmätning och konsultation',
    icon: Home
  },
  {
    step: 3,
    title: 'Design & Offert',
    description: 'Skräddarsydd design och transparent prissättning',
    icon: BookOpen
  },
  {
    step: 4,
    title: 'Tillverkning',
    description: 'Handgjord tillverkning i vår verkstad',
    icon: Award
  },
  {
    step: 5,
    title: 'Installation & Leverans',
    description: 'Professionell installation och färdigställande',
    icon: CheckCircle
  }
];

const testimonials = [
  {
    name: 'Maria Andersson',
    location: 'Stockholm',
    text: 'Fantastisk kvalitet! Vårt nya kök överträffade alla förväntningar.',
    rating: 5,
    image: images.tradition
  },
  {
    name: 'Erik Johansson',
    location: 'Göteborg',
    text: 'Johnny och teamet levererade exakt vad de lovade. Perfekt hantverk.',
    rating: 5,
    image: images.craftsmanship
  },
  {
    name: 'Anna Lindberg',
    location: 'Malmö',
    text: 'Bästa investeringen vi gjort för vårt hem. Tack för det fantastiska arbetet!',
    rating: 5,
    image: images.tools
  }
];

const galleryItems = [
  { category: 'Kök', image: images.kitchenCabinets, title: 'Modernt Skandinaviskt Kök' },
  { category: 'Förvaring', image: images.storage, title: 'Platsbyggd Garderob' },
  { category: 'Fönster', image: images.fineDetails, title: 'Renoverade Originalfönster' },
  { category: 'Kök', image: images.customFurniture, title: 'Rustik Köksö' },
  { category: 'Förvaring', image: images.woodwork, title: 'Bokhylla i Massiv Ek' },
  { category: 'Fönster', image: images.workshop, title: 'Restaurerade Sekelskiftesfönster' }
];

function App() {
  const [activeFilter, setActiveFilter] = useState('Alla');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const filteredGallery = activeFilter === 'Alla' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Function to handle CTA button clicks
  const handleCTAClick = (ctaType) => {
    if (ctaType === 'assistant') {
      // Scroll to Johnny's Assistant section
      document.getElementById('johnnys-assistant')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    } else if (ctaType === 'quote') {
      // Scroll to contact form
      document.getElementById('kontakt')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-50 to-sage-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-wood-200"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-serif font-bold text-wood-800"
            whileHover={{ scale: 1.05 }}
          >
            Johnny's Snickeri
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Hem', 'Tjänster', 'Om Oss', 'Galleri', 'Kontakt'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-wood-700 hover:text-forest-600 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => handleCTAClick('quote')}
            className="bg-forest-600 text-white px-6 py-2 rounded-full hover:bg-forest-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Be om Offert
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hem" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-wood-900/70 to-forest-900/50 z-10" />
          <img 
            src={images.hero} 
            alt="Snickeriverkstad" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center text-white px-6 max-w-4xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Snickeri med tradition –<br />
            <span className="text-wood-300">byggt för att hålla</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-wood-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Handgjorda träarbeten av högsta kvalitet. 
            Över 20 års erfarenhet av att skapa hem som varar generationer.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              onClick={() => handleCTAClick('quote')}
              className="bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-forest-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Be om Offert <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
            
            <motion.button 
              onClick={() => handleCTAClick('assistant')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="inline mr-2" size={20} />
              Prata med Johnny's Assistant
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-800 mb-6">
              Våra Specialiteter
            </h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto">
              Vi erbjuder skräddarsydda lösningar inom finsnickeri och träarbeten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gradient-to-br from-wood-50 to-sage-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/50 to-transparent" />
                  <service.icon className="absolute bottom-4 right-4 text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-wood-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-wood-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-forest-700">
                      <CheckCircle size={16} className="mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="omoss" className="py-20 bg-gradient-to-br from-sage-50 to-wood-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-800 mb-6">
                Om Oss
              </h2>
              <p className="text-lg text-wood-700 mb-6">
                Johnny's Snickeri grundades med en vision om att bevara traditionellt svenskt hantverk 
                och kombinera det med modern funktionalitet. Med över 20 års erfarenhet av finsnickeri 
                och träarbeten har vi byggt upp ett rykte för exceptionell kvalitet och personlig service.
              </p>
              <p className="text-lg text-wood-700 mb-8">
                Varje projekt vi tar oss an behandlas med samma omsorg och uppmärksamhet på detaljer. 
                Vi tror på att skapa möbler och inredningar som inte bara ser vackra ut, utan som 
                också står emot tidens tand och kan föras vidare till nästa generation.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600 mb-2">20+</div>
                  <div className="text-wood-600">År av erfarenhet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600 mb-2">500+</div>
                  <div className="text-wood-600">Nöjda kunder</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600 mb-2">100%</div>
                  <div className="text-wood-600">Handgjort</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={images.about} 
                  alt="Vår verkstad" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-900/30 to-transparent" />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Award className="text-forest-600 mb-2" size={32} />
                <div className="font-semibold text-wood-800">Certifierad Snickare</div>
                <div className="text-sm text-wood-600">Traditionellt hantverk</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-800 mb-6">
              Så Arbetar Vi
            </h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto">
              En tydlig process från första kontakt till färdig produkt
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-forest-300 to-wood-300 hidden lg:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-gradient-to-br from-wood-50 to-sage-50 rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl font-serif font-semibold text-wood-800 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-wood-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <step.icon size={24} />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-wood-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-forest-50 to-sage-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-800 mb-6">
              Vad Våra Kunder Säger
            </h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto">
              Läs vad våra nöjda kunder har att säga om vårt arbete
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <Quote className="text-forest-400 mx-auto mb-6" size={48} />
              
              <p className="text-xl text-wood-700 italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-wood-400 fill-current" size={20} />
                ))}
              </div>
              
              <div className="font-semibold text-wood-800 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-wood-600">
                {testimonials[currentTestimonial].location}
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-forest-600' : 'bg-forest-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleri" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-800 mb-6">
              Våra Projekt
            </h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto mb-8">
              Se exempel på vårt arbete inom olika kategorier
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Alla', 'Kök', 'Förvaring', 'Fönster'].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-forest-600 text-white shadow-lg'
                      : 'bg-wood-100 text-wood-700 hover:bg-wood-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="inline mr-2" size={16} />
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={`${item.category}-${index}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-forest-600 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Johnny's Assistant Section - Now with Real ElevenLabs Widget */}
      <section id="johnnys-assistant" className="py-20 bg-gradient-to-br from-wood-900 to-forest-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Träffa Johnny's <span className="text-wood-300">AI Assistant</span>
              </h2>
              <p className="text-xl text-wood-100 mb-8">
                Vår intelligenta röstassistent är här för att hjälpa dig 24/7. 
                Ställ frågor om våra tjänster, be om råd eller boka en konsultation - 
                allt genom naturlig svenska konversation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-forest-400 mr-3" size={20} />
                  <span>Naturlig svenska konversation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-forest-400 mr-3" size={20} />
                  <span>Expertkunskap om snickeri och träarbeten</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-forest-400 mr-3" size={20} />
                  <span>Hjälp med projekt planering och råd</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-forest-400 mr-3" size={20} />
                  <span>Direkt kontakt med Johnny's team</span>
                </div>
              </div>

              <div className="bg-forest-800/50 backdrop-blur-sm rounded-2xl p-6 border border-forest-600/30">
                <div className="flex items-center mb-4">
                  <Volume2 className="text-forest-400 mr-3" size={24} />
                  <span className="text-lg font-semibold">Prova Röstassistenten</span>
                </div>
                <p className="text-forest-100 mb-4">
                  Klicka på assistenten till höger för att starta en naturlig röstkonversation på svenska.
                </p>
                <div className="flex items-center text-forest-300 text-sm">
                  <Headphones className="mr-2" size={16} />
                  Rekommenderat: Använd hörlurar för bästa ljudkvalitet
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative">
                {/* ElevenLabs ConvAI Widget */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  <div className="text-center mb-6">
                    <Bot className="mx-auto text-forest-400 mb-4" size={48} />
                    <h3 className="text-2xl font-semibold mb-2">Johnny's Assistant</h3>
                    <p className="text-forest-200">Klicka för att starta röstsamtal</p>
                  </div>
                  
                  {/* ElevenLabs Widget Embed */}
                  <div className="flex justify-center">
                    <elevenlabs-convai agent-id="agent_01jxhg639qe9jb2kawq0qf9a21"></elevenlabs-convai>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-4 text-sm text-forest-200">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        Online nu
                      </div>
                      <div className="flex items-center">
                        <Mic className="mr-1" size={14} />
                        Röststyrd
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating animation elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-forest-400 rounded-full opacity-70"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-wood-400 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-wood-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-800 mb-6">
              Kontakta Oss
            </h2>
            <p className="text-xl text-wood-600 max-w-2xl mx-auto">
              Redo att förverkliga ditt drömhem? Hör av dig så diskuterar vi ditt projekt.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-wood-800 mb-6">
                  Skicka oss ett meddelande
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Förnamn</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-wood-200 focus:border-forest-500 focus:outline-none transition-colors"
                        placeholder="Ditt förnamn"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-700 font-medium mb-2">Efternamn</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-wood-200 focus:border-forest-500 focus:outline-none transition-colors"
                        placeholder="Ditt efternamn"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-wood-700 font-medium mb-2">E-post</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-wood-200 focus:border-forest-500 focus:outline-none transition-colors"
                      placeholder="din@email.se"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-wood-700 font-medium mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-wood-200 focus:border-forest-500 focus:outline-none transition-colors"
                      placeholder="+46 70 123 45 67"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-wood-700 font-medium mb-2">Meddelande</label>
                    <textarea 
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-wood-200 focus:border-forest-500 focus:outline-none transition-colors"
                      placeholder="Berätta om ditt projekt..."
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="w-full bg-forest-600 text-white py-4 rounded-lg font-semibold hover:bg-forest-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Skicka Meddelande
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-serif font-semibold text-wood-800 mb-6">
                    Kontaktinformation
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <MapPin className="text-forest-600 mr-4" size={24} />
                      <div>
                        <div className="font-semibold text-wood-800">Adress</div>
                        <div className="text-wood-600">Snickerigatan 12, 123 45 Stockholm</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="text-forest-600 mr-4" size={24} />
                      <div>
                        <div className="font-semibold text-wood-800">Telefon</div>
                        <div className="text-wood-600">+46 8-123 45 67</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="text-forest-600 mr-4" size={24} />
                      <div>
                        <div className="font-semibold text-wood-800">E-post</div>
                        <div className="text-wood-600">info@johnnyssnickeri.se</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MessageCircle className="text-forest-600 mr-4" size={24} />
                      <div>
                        <div className="font-semibold text-wood-800">WhatsApp</div>
                        <div className="text-wood-600">+46 70-123 45 67</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-serif font-semibold text-wood-800 mb-6">
                    Öppettider
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-wood-700">Måndag - Fredag</span>
                      <span className="text-wood-600">07:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-wood-700">Lördag</span>
                      <span className="text-wood-600">09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-wood-700">Söndag</span>
                      <span className="text-wood-600">Stängt</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-forest-600 to-wood-700 rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-2xl font-serif font-semibold mb-4">
                    Akut Service
                  </h3>
                  <p className="mb-4 text-forest-100">
                    Behöver du akut hjälp? Vi erbjuder jourservice för brådskande reparationer.
                  </p>
                  <motion.button 
                    className="bg-white text-forest-700 px-6 py-3 rounded-full font-semibold hover:bg-forest-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ring Jouren: 070-123 45 67
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Johnny's Snickeri</h3>
              <p className="text-wood-300 mb-6">
                Handgjorda träarbeten av högsta kvalitet. 
                Tradition möter modern funktionalitet.
              </p>
              <div className="flex space-x-4">
                <Facebook className="text-wood-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Instagram className="text-wood-400 hover:text-white cursor-pointer transition-colors" size={24} />
                <Linkedin className="text-wood-400 hover:text-white cursor-pointer transition-colors" size={24} />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Tjänster</h4>
              <ul className="space-y-3 text-wood-300">
                <li><a href="#" className="hover:text-white transition-colors">Platsbyggda Kök</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bokhyllor & Förvaring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fönsterrenoveringar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Finsnickeri</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Länkar</h4>
              <ul className="space-y-3 text-wood-300">
                <li><a href="#" className="hover:text-white transition-colors">Om Oss</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Galleri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
              <ul className="space-y-3 text-wood-300">
                <li>Snickerigatan 12</li>
                <li>123 45 Stockholm</li>
                <li>+46 8-123 45 67</li>
                <li>info@johnnyssnickeri.se</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-wood-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-wood-400 mb-4 md:mb-0">
                © 2025 Johnny's Snickeri. Alla rättigheter förbehållna.
              </div>
              <div className="flex space-x-6 text-wood-400">
                <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
                <a href="#" className="hover:text-white transition-colors">Användarvillkor</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;