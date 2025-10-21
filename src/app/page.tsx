import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Instagram, Youtube, Linkedin, Globe2, LogIn } from "lucide-react";

export default function TarumanagaraHero() {
  const [lang, setLang] = useState("ID");

  return (
	<>
	  <span className="sr-only">Media Sosial</span>
	  <div className="flex items-center gap-3">
		<a aria-label="Instagram" href="#" className="opacity-80 transition hover:opacity-100"><Instagram size={16} /></a>
		<a aria-label="YouTube" href="#" className="opacity-80 transition hover:opacity-100"><Youtube size={16} /></a>
		<a aria-label="LinkedIn" href="#" className="opacity-80 transition hover:opacity-100"><Linkedin size={16} /></a>
		<span className="mx-2 text-slate-400">|</span>
		<button className="inline-flex items-center gap-1 opacity-90 transition hover:opacity-100">
		  <LogIn size={16} />
		  <span>Sign In</span>
		</button>
		<span className="mx-2 text-slate-400">|</span>
		<button
		  className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 ring-1 ring-white/10 hover:bg-white/5"
		  onClick={() => setLang((p) => (p === "ID" ? "EN" : "ID"))}
		  aria-label="Language switcher"
		>
		  <Globe2 size={16} />
		  <span className="font-medium">{lang}</span>
		</button>
	  </div>


	  {/* Navigation */}
	  <header className="relative z-30">
		<div className="mx-auto max-w-7xl px-6 pt-3">
		  <div className="flex items-center justify-between rounded-2xl bg-slate-900/35 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/30 ring-1 ring-white/10">
			<div className="flex items-center gap-3">
			  <img src="/logo-yayasan.svg" alt="Yayasan Tarumanagara" className="h-8 w-auto" />
			</div>


			<nav className="hidden lg:block">
			  <ul className="flex items-center gap-10 text-sm text-slate-100">
				{[
				  "Tentang Kami",
				  "Berita & Kegiatan",
				  "Unit Kami",
				  "Kerja Sama",
				  "Karir",
				].map((item) => (
				  <li key={item}>
					<a
					  href="#"
					  className="opacity-90 transition hover:opacity-100 hover:underline underline-offset-8"
					>
					  {item}
					</a>
				  </li>
				))}
			  </ul>
			</nav>


			<button
			  aria-label="Cari"
			  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-white/10 transition hover:bg-white/5"
			>
			  <Search className="h-5 w-5" />
			  <span className="hidden sm:inline text-sm">Cari</span>
			</button>
		  </div>
		</div>
	  </header>


	  {/* Hero copy */}
	  <div className="relative z-20 mx-auto flex max-w-7xl flex-col px-6 pt-14 md:pt-20 lg:pt-24">
		<motion.div
		  initial={{ opacity: 0, y: 24 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.6, ease: "easeOut" }}
		  className="w-full max-w-3xl"
		>
		  <p className="font-serif text-xl text-slate-100/90 drop-shadow md:text-2xl">
			Tarumanagara Foundation
		  </p>
		  <h1 className="mt-2 font-extrabold tracking-tight text-slate-50 drop-shadow-2xl text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
			PRIDE IN EXCELLENCE
		  </h1>
		</motion.div>


		{/* Decorative bottom fade */}
		<div className="pointer-events-none mt-12 h-28 w-full bg-gradient-to-b from-transparent to-slate-950/80" />
	  </div>


	  {/* Subtle vignette */}
	  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
	</>
  );
}