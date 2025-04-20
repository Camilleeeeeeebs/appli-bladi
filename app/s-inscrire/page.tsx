"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/case-a-cocher"
import { Label } from "@/components/ui/étiquette"

export default function SignupPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CAD2C5] to-[#84A98C]/30 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl overflow-hidden bg-white rounded-2xl shadow-xl shadow-[#354F52]/20 flex flex-col md:flex-row"
      >
        {/* Left side - Decorative */}
        <div className="w-full md:w-5/12 relative bg-gradient-to-br from-[#52796F] to-[#2F3E46] p-6 flex flex-col justify-between">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-[10%] right-[20%] w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
            <div className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>

            {/* Decorative circles */}
            <div className="absolute top-6 left-6 w-12 h-12 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-6 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <h2 className="ml-2 text-base font-semibold text-white">Bladi</h2>
              </div>

              <h1 className="text-2xl font-bold text-white mb-2">
                Rejoignez <br />
                l'aventure Bladi
              </h1>
              <p className="text-white/80 text-sm mb-4">Créez votre compte et commencez à explorer l'Algérie</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative z-10 mt-auto"
          >
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white">
                Guides personnalisés
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white">
                Communauté de voyageurs
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-7/12 p-6 flex items-center">
          <div className="w-full max-w-sm mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-[#2F3E46] mb-1">Créez votre compte</h2>
              <p className="text-gray-500 text-sm mb-5">Remplissez le formulaire pour vous inscrire</p>

              <form className="space-y-4">
                {/* Prénom et Nom sur la même ligne */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="text-xs font-medium text-gray-700">
                      Prénom
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Prénom"
                      className="h-10 px-3 text-sm rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#52796F] focus-visible:border-[#52796F] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="lastName" className="text-xs font-medium text-gray-700">
                      Nom
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Nom"
                      className="h-10 px-3 text-sm rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#52796F] focus-visible:border-[#52796F] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium text-gray-700">
                    Adresse e-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    className="h-10 px-3 text-sm rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#52796F] focus-visible:border-[#52796F] transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="text-xs font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-10 px-3 text-sm rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#52796F] focus-visible:border-[#52796F] transition-all pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="confirmPassword" className="text-xs font-medium text-gray-700">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-10 px-3 text-sm rounded-lg border-gray-200 bg-gray-50/50 focus-visible:ring-[#52796F] focus-visible:border-[#52796F] transition-all pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-1 data-[state=checked]:bg-[#52796F] data-[state=checked]:border-[#52796F]"
                  />
                  <Label htmlFor="terms" className="text-xs text-gray-500 font-normal">
                    J'accepte les{" "}
                    <Link href="#" className="text-[#52796F] hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-[#52796F] hover:underline">
                      politique de confidentialité
                    </Link>
                  </Label>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full h-10 bg-gradient-to-r from-[#52796F] to-[#354F52] hover:from-[#52796F]/90 hover:to-[#354F52]/90 text-white rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    S'inscrire
                  </Button>
                </motion.div>

                <div className="relative flex items-center gap-2 py-1">
                  <div className="flex-grow h-px bg-gray-200"></div>
                  <span className="text-xs font-medium text-gray-400">OU</span>
                  <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <motion.button
                    whileHover={{ y: -2, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    className="flex items-center justify-center h-9 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    className="flex items-center justify-center h-9 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
                  >
                    <svg width="16" height="16" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                    </svg>
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    className="flex items-center justify-center h-9 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.36 14.218c-.004-2.129 1.74-3.158 1.82-3.202-1.073-1.565-2.729-1.78-3.295-1.789-1.374-.15-2.733.83-3.436.83-.724 0-1.8-.822-2.984-.797-1.498.023-2.918.899-3.692 2.256-1.614 2.798-.409 6.911 1.127 9.175.778 1.106 1.681 2.337 2.86 2.294 1.16-.048 1.59-.731 2.996-.731 1.387 0 1.79.731 2.986.701 1.24-.019 2.019-1.095 2.76-2.212.897-1.269 1.255-2.522 1.269-2.583-.032-.012-2.381-.908-2.41-3.642z" />
                      <path d="M14.424 8.85c.617-.769 1.04-1.818.922-2.88-.896.042-2.019.622-2.657 1.374-.57.675-1.085 1.792-.956 2.833 1.019.074 2.071-.5 2.691-1.327z" />
                    </svg>
                  </motion.button>
                </div>
              </form>

              <p className="mt-5 text-center text-xs text-gray-500">
                Vous avez déjà un compte ?{" "}
                <Link href="/se-connecter" className="font-medium text-[#52796F] hover:text-[#354F52] transition-colors">
                  Connectez-vous
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
