"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Menu, X, ChevronRight, MapPin, Star, Shield, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const destinations = [
  {
    id: 0,
    image: "/images/image1.png",
    title: "Tassili n'Ajjer",
    subtitle: "Algérie",
    description:
      "Découvrez les merveilles du Tassili n'Ajjer, un plateau montagneux situé dans le désert du Sahara, offrant des paysages à couper le souffle et un riche patrimoine culturel.",
  },
  {
    id: 1,
    image: "/images/image2.png",
    title: "Monument Valley",
    subtitle: "États-Unis",
    description:
      "Explorez les formations rocheuses emblématiques de Monument Valley, un paysage iconique qui a servi de décor à de nombreux films western américains.",
  },
  {
    id: 2,
    image: "/images/image3.png",
    title: "Cabane Forestière",
    subtitle: "Scandinavie",
    description:
      "Vivez l'authenticité de la nature nordique dans notre cabane rustique entourée par la forêt verdoyante et les paysages époustouflants.",
  },
  {
    id: 3,
    image: "/images/image4.png",
    title: "Lodge Montagnard",
    subtitle: "Canada",
    description:
      "Immergez-vous dans l'atmosphère chaleureuse de notre lodge en bois, parfait pour observer les étoiles et profiter de la tranquillité des montagnes.",
  },
  {
    id: 4,
    image: "/images/image5.png",
    title: "Lac Alpin",
    subtitle: "Italie",
    description:
      "Explorez les eaux turquoise et les montagnes majestueuses des lacs alpins, entre détente en bateau et randonnées spectaculaires.",
  },
  {
    id: 5,
    image: "/images/image6.png",
    title: "Côte Sauvage",
    subtitle: "Pays-Bas",
    description:
      "Promenez-vous le long des sentiers côtiers sereins avec des vues imprenables sur la mer du Nord et les dunes dorées des Pays-Bas.",
  },
]

// Avantages pour la section "Pourquoi Nous Choisir"
const benefits = [
  {
    icon: <MapPin className="w-6 h-6 text-[#84A98C]" />,
    title: "Destinations Exclusives",
    description: "Accédez à des lieux uniques et authentiques, soigneusement sélectionnés par nos experts.",
  },
  {
    icon: <Star className="w-6 h-6 text-[#84A98C]" />,
    title: "Expériences Sur Mesure",
    description: "Chaque voyage est personnalisé selon vos préférences pour une expérience inoubliable.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#84A98C]" />,
    title: "Sécurité Garantie",
    description: "Voyagez en toute tranquillité avec notre assistance disponible 24h/24 et 7j/7.",
  },
]

// Suggestions de recherche populaires
const popularSearches = [
  "Plages d'Algérie",
  "Randonnées dans l'Atlas",
  "Cuisine traditionnelle",
  "Festivals locaux",
  "Hébergements authentiques",
]

export default function Home() {
  const [activeDestination, setActiveDestination] = useState(0)
  const [defaultDestination] = useState(0)
  const [showSecondSet, setShowSecondSet] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Gérer le changement de style de la navigation lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Obtenir les destinations à afficher selon l'état
  const getVisibleDestinations = () => {
    if (!showSecondSet) {
      return destinations.slice(0, 4)
    } else {
      return destinations.slice(4, 6).concat(destinations.slice(0, 2))
    }
  }

  return (
    <main className="relative overflow-hidden">
      {/* Background Image avec overlay gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDestination}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0 h-screen"
        >
          <Image
            src={destinations[activeDestination].image || "/placeholder.svg"}
            alt={destinations[activeDestination].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

          {/* Overlay coloré pour correspondre au thème vert */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#354F52]/30 to-[#2F3E46]/30 mix-blend-overlay" />

          {/* Vignette pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#2F3E46]/80 backdrop-blur-md py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between text-white">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#84A98C] to-[#52796F] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">Bladi</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="relative group py-2">
              <span className="text-white font-medium">Accueil</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#84A98C] to-[#52796F] transform scale-x-100 transition-transform"></span>
            </Link>
            <Link href="#" className="relative group py-2">
              <span className="text-white/90 font-medium group-hover:text-white transition-colors">Explorer</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#84A98C] to-[#52796F] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="#" className="relative group py-2">
              <span className="text-white/90 font-medium group-hover:text-white transition-colors">À propos</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#84A98C] to-[#52796F] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
         

          <div className="hidden md:flex items-center gap-4">
            <Link href="/se-connecter" className="text-white/90 hover:text-white font-medium transition-colors">
              Se connecter
            </Link>
            <Link href="/s-inscrire">
              <Button className="bg-gradient-to-r from-[#52796F] to-[#354F52] hover:from-[#52796F]/90 hover:to-[#354F52]/90 text-white rounded-full px-6">
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Menu mobile */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[#2F3E46]/95 backdrop-blur-lg z-40 flex flex-col"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
                  <Link href="#" className="text-2xl font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
                    Accueil
                  </Link>
                  <Link
                    href="#"
                    className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Explorer
                  </Link>
                  <Link
                    href="#"
                    className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    À propos
                  </Link>
                  <div className="h-px w-16 bg-white/20 my-2"></div>
                  <Link
                    href="/login"
                    className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Se connecter
                  </Link>
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="bg-gradient-to-r from-[#52796F] to-[#354F52] hover:from-[#52796F]/90 hover:to-[#354F52]/90 text-white rounded-full px-8 py-6 text-lg">
                      S'inscrire
                    </Button>
                  </Link>
                
                  
                </div>
                
              </motion.div>
            )}
          </AnimatePresence>
          </nav>
        </div>
      
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen pt-24 md:pt-0">
        {/* Left Side - Main Destination */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDestination}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#84A98C] to-[#52796F]"></div>
                <span className="text-white/90 text-sm font-medium">{destinations[activeDestination].subtitle}</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {destinations[activeDestination].title}
              </h1>
              <p className="text-white/80 mb-8 max-w-md text-base md:text-lg">
                {destinations[activeDestination].description}
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-[#52796F] to-[#354F52] hover:from-[#52796F]/90 hover:to-[#354F52]/90 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 group">
                  <span>Explorer</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Destination Cards */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={showSecondSet ? "second" : "first"}
                initial={{ opacity: 0, x: showSecondSet ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: showSecondSet ? 0 : -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {getVisibleDestinations().map((destination, index) => (
                    <motion.div
                      key={destination.id}
                      className="relative group cursor-pointer"
                      whileHover={{ y: -10 }}
                      onMouseEnter={() => {
                        setActiveDestination(destination.id)
                        // Si c'est le quatrième slide (index 3) et qu'on n'est pas déjà sur le second set
                        if (index === 3 && !showSecondSet) {
                          setShowSecondSet(true)
                        }
                      }}
                      onMouseLeave={() => {
                        // Si on est sur le second set et qu'on quitte une carte, revenir au premier set
                        if (showSecondSet && Math.random() > 0.7) {
                          setShowSecondSet(false)
                        }
                      }}
                    >
                      <div className="rounded-2xl overflow-hidden relative aspect-[3/4] shadow-lg shadow-black/30 group-hover:shadow-xl group-hover:shadow-black/40 transition-all duration-300">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Overlay coloré au survol */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#354F52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <div className="text-xs opacity-80 mb-1 font-medium">{destination.subtitle}</div>
                          <div className="text-base md:text-lg font-semibold">{destination.title}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <div className="text-white/70 text-sm mb-2">Découvrir plus</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Section Destinations Paradisiaques */}
      <section className="relative py-20 bg-[#2F3E46] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#52796F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#84A98C]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Texte à gauche */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Découvrez des destinations paradisiaques
                </h2>
                <p className="text-[#CAD2C5] text-lg mb-8 max-w-lg">
                  Explorez, planifiez et vivez des expériences uniques dans nos régions. Des paysages à couper le
                  souffle vous attendent.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-[#84A98C] to-[#52796F] hover:from-[#84A98C]/90 hover:to-[#52796F]/90 text-white rounded-full px-8 py-6 text-lg">
                    Explorez
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Cartes à droite */}
            <div className="relative z-50">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-6 grid-rows-6 gap-4 h-[500px]"
              >
                {/* Carte principale */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="col-span-4 row-span-4 col-start-1 row-start-1 rounded-3xl overflow-hidden relative shadow-xl shadow-black/20 group"
                >
                  <Image
                    src="/images/image1.png"
                    alt="Tassili n'Ajjer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Tassili n'Ajjer</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      Des formations rocheuses distinctives forment une invitation aux aventuriers pour explorer ce
                      trésor naturel.
                    </p>
                  </div>
                </motion.div>

                {/* Carte secondaire */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="col-span-3 row-span-3 col-start-4 row-start-3 rounded-3xl overflow-hidden relative shadow-xl shadow-black/20 group"
                >
                  <Image
                    src="/images/image2.png"
                    alt="Paradis Tropical"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Paradis Tropical</h3>
                    <p className="text-xs text-white/80">
                      Explorez les routes bordées de palmiers menant à des plages de sable fin et des couchers de soleil
                      spectaculaires.
                    </p>
                  </div>
                </motion.div>

                {/* Carte tertiaire */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="col-span-2 row-span-3 col-start-5 row-start-1 rounded-3xl overflow-hidden relative shadow-xl shadow-black/20 group"
                >
                  <Image
                    src="/images/image3.png"
                    alt="Lac Alpin"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">Lac Alpin</h3>
                    <p className="text-xs text-white/80">
                      Découvrez les eaux cristallines et les montagnes majestueuses.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Recherche */}
      <section className="py-20 bg-[#f5f5f0] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Images à gauche */}
              <div className="lg:col-span-5 relative-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative z-10 h-[400px] md:h-[500px]"
                >
                  {/* Image principale (centre) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[320px] aspect-square z-20">
                    <div className="w-full h-full rounded-[20px] overflow-hidden shadow-xl">
                      <Image
                        src="/images/image4.png"
                        alt="Paysage d'Algérie"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Image secondaire (haut gauche) */}
                  <div className="absolute top-0 left-[10%] w-[40%] max-w-[180px] aspect-square z-10">
                    <div className="w-full h-full rounded-[20px] overflow-hidden shadow-lg">
                      <Image
                        src="/images/image5.png"
                        alt="Paysage d'Algérie"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Image tertiaire (bas droite) */}
                  <div className="absolute bottom-0 right-[10%] w-[45%] max-w-[200px] aspect-square z-10">
                    <div className="w-full h-full rounded-[20px] overflow-hidden shadow-lg">
                      <Image
                        src="/images/image6.png"
                        alt="Paysage d'Algérie"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Texte à droite */}
              <div className="lg:col-span-7 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2F3E46] mb-6">Recherchez une idée</h2>
                  <p className="text-[#52796F] text-lg mb-8 max-w-xl">
                    Que souhaitez-vous explorer ensuite ? Pensez à un lieu qui vous fait rêver, par exemple « plages
                    d'Algérie », et découvrez nos suggestions personnalisées.
                  </p>

                  {/* Barre de recherche */}
                  <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="w-5 h-5 text-[#52796F]" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Rechercher une destination, une activité..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-6 rounded-xl border-[#CAD2C5] bg-white/80 backdrop-blur-sm focus-visible:ring-[#52796F] focus-visible:border-[#52796F] text-[#2F3E46] placeholder-[#52796F]/50 shadow-md"
                    />
                    <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#52796F] to-[#354F52] hover:from-[#52796F]/90 hover:to-[#354F52]/90 text-white rounded-lg px-6">
                      Explorer
                    </Button>
                  </div>

                  {/* Recherches populaires */}
                  <div>
                    <p className="text-[#2F3E46] font-medium mb-3">Recherches populaires :</p>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((search, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="bg-white/70 backdrop-blur-sm text-[#52796F] px-4 py-2 rounded-full text-sm border border-[#CAD2C5] hover:bg-white hover:shadow-md transition-all duration-300"
                          onClick={() => setSearchQuery(search)}
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Nous Choisir */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F3E46] mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-[#52796F] text-lg max-w-2xl mx-auto">
              Explorez, Vivez, et Ressentez l'Algérie avec des expériences authentiques et personnalisées
            </p>
          </motion.div>

          {/* Avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#CAD2C5]/30 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2F3E46] mb-3">{benefit.title}</h3>
                <p className="text-[#52796F] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
