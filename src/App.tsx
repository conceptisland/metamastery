import React, { useState } from 'react';
import {
  CheckCircle,
  BarChart,
  Settings,
  Target,
  Users,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Star,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Monitor
} from 'lucide-react';

const App = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MetaMastery.
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#curriculum" className="text-gray-600 hover:text-blue-600 font-medium transition">Curriculum</a>
              <a href="#results" className="text-gray-600 hover:text-blue-600 font-medium transition">Resultaten</a>
              <button
                onClick={scrollToPricing}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Start Nu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 skew-x-12 -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <span className="bg-blue-600 w-2 h-2 rounded-full mr-2"></span>
            Nieuw: De 2024 Strategie Update
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Stop met gokken. <br className="hidden md:block" />
            Draai <span className="text-blue-600">Winstgevende Meta Ads</span> als een Pro.
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            De complete cursus die je stap-voor-stap leert hoe je zelf succesvolle Facebook & Instagram campagnes opzet. Van de technische pixel-setup tot schaalbare strategieën.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold shadow-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Start Direct met Converteren
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#curriculum" className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-lg text-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center">
              Bekijk Inhoud
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Levenslang toegang</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Geschikt voor beginners & gevorderden</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Inclusief templates & checklists</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points (The "Why") */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Herken je dit?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Veel ondernemers verbranden budget omdat ze "gewoon op de promote knop drukken".
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-red-50 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dure Marketingbureaus</h3>
              <p className="text-gray-600">Je betaalt maandelijks €500-€1500 managementkosten aan een bureau, nog los van je advertentiebudget.</p>
            </div>
            <div className="p-8 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technische Hoofdpijn</h3>
              <p className="text-gray-600">Pixels, Conversie API, Domain Verificatie... Je loopt vast in de Business Manager instellingen.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Geen Resultaat</h3>
              <p className="text-gray-600">Je hebt wel eens ads gedraaid, maar het kostte meer dan het opleverde. Je weet niet wat je fout deed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution / Benefits */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                De Strategie + De Techniek. <br />
                <span className="text-blue-400">Alles in één pakket.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Dit is geen theoretisch verhaal. Ik leer je exact dezelfde methodes die ik gebruik voor mijn klanten. Zo bouw je een duurzame motor voor leads en sales.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Volledige Controle", desc: "Begrijp elke knop in Ads Manager. Nooit meer afhankelijk van anderen." },
                  { title: "Bewezen Strategieën", desc: "Copy-paste frameworks voor E-commerce en Leadgeneratie." },
                  { title: "Meetbaar Succes", desc: "Leer data lezen zodat je precies weet welke ad geld oplevert." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Abstract decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl">
                {/* Mockup of course interface */}
                <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-gray-500">Meta Business Manager Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-gray-700/50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                    <div className="text-center">
                      <PlayCircle className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <span className="text-sm text-gray-400">Video Module 1: De perfecte setup</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-700/50 rounded-lg p-3">
                      <div className="w-8 h-1 bg-gray-600 rounded mb-2"></div>
                      <div className="w-16 h-1 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-20 bg-gray-700/50 rounded-lg p-3">
                      <div className="w-8 h-1 bg-gray-600 rounded mb-2"></div>
                      <div className="w-16 h-1 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Float Card */}
                <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-4 rounded-lg shadow-xl border-l-4 border-green-500">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Resultaat</p>
                      <p className="font-bold text-lg">ROAS: 4.5x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Course Content</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">Wat ga je precies leren?</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Module 1: De Technische Fundering</h3>
                  <p className="text-gray-600 mt-2">Geen saaie theorie, maar praktisch instellen. We zorgen dat alles waterdicht staat.</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Business Manager correct aanmaken</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> De Meta Pixel & Conversie API (CAPI)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Domein verificatie & iOS 14+ events</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Module 2: Doelgroep & Strategie</h3>
                  <p className="text-gray-600 mt-2">Hoe vind je de mensen die wachten op jouw product?</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> De sales funnel: Awareness, Consideration, Conversion</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom Audiences & Lookalikes</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Budgettering: Hoeveel moet je uitgeven?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Module 3: De Perfecte Advertentie</h3>
                  <p className="text-gray-600 mt-2">Beelden en teksten die mensen laten stoppen met scrollen.</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Copywriting frameworks die verkopen</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Creatives maken zonder designer (Canva hacks)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> A/B testen: Wat werkt wel en niet?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Wat anderen zeggen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lisa de Vries",
                role: "E-commerce Eigenaar",
                text: "Ik was al maanden aan het prutsen. Na module 1 van deze cursus had ik mijn pixel eindelijk goed staan. Mijn eerste campagne draaide meteen 3.5 ROAS!"
              },
              {
                name: "Mark Jansen",
                role: "Makelaar",
                text: "Geen technisch gelul, maar heldere stappen. Ik genereer nu zelf mijn leads voor de helft van de prijs die ik eerst aan een bureau betaalde."
              },
              {
                name: "Sophie Bouwman",
                role: "Virtual Assistant",
                text: "Dankzij deze cursus kan ik nu ook ads aanbieden aan mijn eigen klanten. Het heeft mijn business model compleet veranderd."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om je business te schalen?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Bespaar duizenden euro's aan agency fees. Investeer één keer in jezelf en profiteer voor altijd.
          </p>

          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg mx-auto relative overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-bl-xl text-sm">
              TIJDELIJK AANBOD
            </div>

            <div className="mb-6">
              <p className="text-gray-500 line-through text-xl">Normaal €497</p>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gray-900">€197</span>
                <span className="text-gray-600">excl. btw</span>
              </div>
            </div>

            <button className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xl font-bold shadow-lg transform transition hover:scale-105 mb-6">
              Claim Mijn Toegang
            </button>

            <ul className="space-y-4 text-left mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Volledige Meta Ads Masterclass (12 modules)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Technische Setup Cheatsheet (PDF)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Bonus: Copywriting Template Pack</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Levenslang toegang tot updates</span>
              </li>
            </ul>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-sm">14 Dagen Niet-Goed-Geld-Terug</p>
                <p className="text-xs text-gray-500">Probeer de cursus risicoloos uit. Niet tevreden? Dan krijg je je geld terug.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {[
              { q: "Is deze cursus geschikt voor beginners?", a: "Absoluut. We beginnen bij de basis. Ik neem je scherm-voor-scherm mee door de technische installatie. Je hebt geen voorkennis nodig." },
              { q: "Hoeveel budget heb ik nodig voor ads?", a: "Je kunt al starten met €5 tot €10 per dag. In de cursus leer je hoe je met een klein budget kunt testen voordat je opschaalt." },
              { q: "Wordt de cursus geüpdatet?", a: "Ja, Meta verandert continu. Jij krijgt gratis toegang tot alle toekomstige updates van het lesmateriaal." },
              { q: "Hoe lang duurt de cursus?", a: "De cursus bestaat uit ongeveer 6 uur aan video's, opgeknipt in hapklare lessen van 10-15 minuten. Je kunt dit in je eigen tempo volgen." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 focus:outline-none"
                >
                  {item.q}
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-white">MetaMastery.</span>
            <p className="mt-2 text-sm">© 2024 Alle rechten voorbehouden.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;