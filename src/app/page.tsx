"use client";

import Topbar from "@/components/Topbar";
import React, { JSX, useState } from "react";

// /Users/budisanjaya/Downloads/webtrmfoundation/src/app/page.tsx

export default function Page(): JSX.Element {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	function validateEmail(e: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError("");
		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}
		// Placeholder: replace with real submit logic (API call)
		setSubmitted(true);
	}

	return (
		<main className="page">
			{/* Topbar shown above the header */}
			<div
				className="topbar"
				role="region"
				aria-label="announcement"
				style={{ background: "#0F2F5A", backdropFilter: "none" }}
			>
				<div className="topbar-inner" style={{ justifyContent: "space-between" }}>
					<span style={{ textAlign: "left" }}>Yayasan Tarumanagara - Pride in Excellence</span>
					<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
						<span style={{ color: "var(--muted)", fontWeight: 600 }}>Media Social</span>

						<div style={{ display: "flex", gap: 8, alignItems: "left" }}>
							<a
								className="topbar-cta"
								href="https://www.instagram.com/tarumanagara_foundation"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Follow us on Instagram"
							>
								<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
									<defs>
										<linearGradient id="ig-grad" x1="0" x2="1">
											<stop offset="0" stopColor="#f58529" />
											<stop offset="0.5" stopColor="#dd2a7b" />
											<stop offset="1" stopColor="#515bd4" />
										</linearGradient>
									</defs>
									<rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)" />
									<circle cx="12" cy="12" r="4.2" fill="#fff" />
									<circle cx="17" cy="7" r="0.9" fill="#fff" />
								</svg>
							</a>

							<a
								className="topbar-cta"
								href="https://www.tiktok.com/@your_profile"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Follow us on TikTok"
							>
								<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
									<rect x="2" y="2" width="20" height="20" rx="4" fill="#000" />
									<g transform="translate(5,4)">
										<path d="M6 2v7.2a3 3 0 1 1-1.5-2.6V3.2h-1.5V1.5H6z" fill="#00f2ea" opacity="0.95" />
										<path d="M7 2.2c.8.5 1.8.8 2.8.8V6.2c-1.2 0-2.3-.4-3.1-1.1V2.2z" fill="#ff004f" opacity="0.95" />
										<path d="M6 2v7.2a3 3 0 1 1-1.5-2.6V3.2h1.5z" fill="#fff" opacity="0.9" />
									</g>
								</svg>
							</a>

							<a
								className="topbar-cta"
								href="https://www.linkedin.com/in/your_profile"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Follow us on LinkedIn"
							>
								<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
									<rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
									<rect x="6.2" y="9.2" width="1.6" height="5.6" fill="#fff" rx="0.4" />
									<rect x="9.2" y="9.2" width="1.6" height="1.6" fill="#fff" rx="0.4" />
									<path d="M9.2 11.6h1.6v3.2H9.2z" fill="#fff" opacity="0.0" />
									<path d="M12.6 9.2h1.6v.9c.5-.7 1.4-1.2 2.4-1.2v1.5c-1.1 0-1.9.4-2.4 1.1V14h-1.6z" fill="#fff" />
								</svg>
							</a>

							<a
								className="topbar-cta"
								href="https://www.youtube.com/channel/your_channel"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Subscribe to our YouTube channel"
							>
								<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
									<rect x="2" y="5" width="20" height="14" rx="3" fill="#FF0000" />
									<polygon points="10,8 16,12 10,16" fill="#fff" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<header className="nav" role="navigation" aria-label="Main">
				<div className="brand">
					<img
						src="/Logo Yayasan Tarumanagara (White).png"
						alt="Yayasan Tarumanagara logo"
						style={{ width: 156, height: 56, objectFit: "contain", borderRadius: 6 }}
					/>
				</div>
				<nav className="actions" aria-label="Primary">
					<a className="link" href="#tentang-kami">Tentang Kami</a>
					<a className="link" href="#berita-&-kegiatan">Berita & Kegiatan</a>
					<a className="link" href="#unit-kami">Unit Kami</a>
					<a className="link" href="#kerjasama">Kerja Sama</a>
					<a className="link" href="#karir">Karir</a>	
					<a className="cta" href="#search" aria-label="Search"></a>
				</nav>
			</header>

			{/* Hero banner section */}
			<section
				className="hero-banner"
				aria-label="Hero illustration"
				style={{
					position: "relative",
					width: "100vw",
					marginLeft: "calc(50% - 50vw)", // full-bleed
					marginTop: "-140px", // move the hero up so it starts from the very top of the page
					height: "100vh", // fill the full viewport
					overflow: "hidden",
				}}
			>
				<figure style={{ margin: 0, display: "block", height: "100%" }}>
					<picture>
						<source
							srcSet="/HERO PICTURE.JPG 1200w, /HERO PICTURE.JPG 800w"
							sizes="(max-width: 880px) 100vw, 100vw"
						/>
						<img
							src="/HERO PICTURE.JPG"
							alt="Yayasan Tarumanagara students and staff"
							style={{
								position: "absolute",
								inset: 0,
								width: "100%",
								height: "100%",
								objectFit: "cover",
								// keep rounded corners off for a true full-bleed look
							}}
						/>
					</picture>
					<figcaption className="visually-hidden">
						Hero illustration showing students and staff of Yayasan Tarumanagara
					</figcaption>
				</figure>

				{/* subtle dark overlay to help contrast */}
				<div
					aria-hidden="true"
					style={{
						position: "absolute",
						inset: 0,
						background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)",
						zIndex: 1,
					}}
				/>
			</section>

			{/* Hero banner section */}
			<section className="hero">
				<div className="hero-content">
					<h1>Yayasan Tarumanagara</h1>
					<p className="lead">
						A platform to manage releases, collect feedback, and measure impact — built for small teams that want big results.
					</p>
				</div>
			</section>

			<section id="features" className="features">
				<h2>Core features</h2>
				<p className="sub">Everything teams need to deliver value predictably.</p>

				<ul className="feature-grid">
					<li>
						<svg className="icon" viewBox="0 0 24 24"><path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
						<h3>Release Tracking</h3>
						<p>Track deployments and changes with automatic release notes and rollbacks.</p>
					</li>
					<li>
						<svg className="icon" viewBox="0 0 24 24"><path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
						<h3>Feedback Loops</h3>
						<p>Gather user feedback directly from builds and prioritize what matters.</p>
					</li>
					<li>
						<svg className="icon" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
						<h3>Impact Metrics</h3>
						<p>Understand how releases affect engagement with simple, actionable metrics.</p>
					</li>
				</ul>
			</section>

			<section id="pricing" className="pricing">
				<h2>Pricing that scales</h2>
				<div className="plans">
					<div className="plan">
						<h3>Starter</h3>
						<p className="price">Free</p>
						<p>Up to 3 projects · Basic reports · Community support</p>
						<a className="button outline" href="#get-started">Choose</a>
					</div>
					<div className="plan recommended">
						<h3>Team</h3>
						<p className="price">$12/mo</p>
						<p>Unlimited projects · Advanced metrics · Priority support</p>
						<a className="button primary" href="#get-started">Choose</a>
					</div>
					<div className="plan">
						<h3>Enterprise</h3>
						<p className="price">Custom</p>
						<p>SAML · SLAs · Dedicated onboarding</p>
						<a className="button outline" href="#get-started">Contact</a>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div>
					<strong>YAYASAN TARUMANAGARA</strong> — PRIDE IN EXELLENCE. All rights reserved.
				</div>
				<div>
					<a className="link" href="#privacy">Privacy Policy</a>
					<a className="link" href="#terms">Terms of Service</a>
				</div>
			</footer>

			<style jsx>{`
				:root {
					--bg: #0f172a;
					--card: #0b1220;
					--muted: #9ca3af;
					--accent: #3b82f6;
					--glass: rgba(255,255,255,0.03);
				}

				/* Reserve space at top for the fixed topbar + header */
				.page {
					min-height: 100vh;
					color: #e6eef8;
					background: linear-gradient(180deg, #071129 0%, #041025 100%);
					font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
					padding: 140px 32px 32px; /* extra top padding for fixed header */
					display: flex;
					flex-direction: column;
					gap: 48px;
				}

				/* small announcement bar above header */
				.topbar {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					height: 36px;
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 60;
					background: linear-gradient(90deg, rgba(59,130,246,0.08), rgba(167,139,250,0.04));
					backdrop-filter: blur(6px);
				}
				.topbar-inner {
					max-width: 1100px;
					width: 100%;
					padding: 0 16px;
					display:flex;
					justify-content: center;
					gap:12px;
					align-items:center;
					color: var(--muted);
					font-size: 13px;
				}
				.topbar-cta {
					margin-left: 8px;
					background: rgba(255,255,255,0.04);
					color: #fff;
					padding:6px 10px;
					border-radius:8px;
					text-decoration:none;
					font-weight:600;
				}

				/* fixed header placed below the topbar */
				.nav {
					position: fixed;
					top: 36px; /* below topbar */
					left: 0;
					right: 0;
					z-index: 50;
					display: flex;
					justify-content: space-between;
					align-items: center;
					max-width: 1100px;
					margin: 0 auto;
					width: 100%;
					padding: 12px 16px;
					background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
					backdrop-filter: blur(6px);
					border-radius: 12px;
				}
				.brand { display:flex; align-items:center; gap:12px; font-weight:700; color: #fff; }
				.logo { width:36px; height:36px }
				.actions { display:flex; gap:12px; align-items:center }
				.link { color:var(--muted); text-decoration:none; padding:6px 8px; border-radius:8px }
				.cta { background:var(--glass); color:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:600 }

				/* hero - make it more prominent with a card-like content area */
				.hero {
					max-width: 1100px;
					margin: 0 auto;
					display: grid;
					grid-template-columns: 1fr 420px;
					gap: 32px;
					align-items: center;
					padding-top: 6px;
				}
				.hero-content {
					background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
					border: 1px solid rgba(255,255,255,0.03);
					padding: 28px;
					border-radius: 14px;
				}
				.hero-content h1 { font-size: clamp(32px, 5vw, 48px); margin:0 0 12px; color: #fff; letter-spacing: -0.02em; }
				.lead { color: var(--muted); margin-bottom:18px; max-width: 56ch; }

				.hero-ctas { display:flex; gap:12px; margin-bottom:18px; }
				.button {
					display:inline-flex;
					align-items:center;
					gap:8px;
					padding:12px 16px;
					border-radius:10px;
					text-decoration:none;
					cursor:pointer;
					border: none;
				}
				.button.primary { background: linear-gradient(90deg,var(--accent),#a78bfa); color: #041025; font-weight:700; }
				.button.ghost { background: transparent; color: var(--muted); border: 1px solid rgba(255,255,255,0.04); }
				.button.small { padding:10px 12px; font-size:14px; }

				.email-form { display:flex; gap:8px; align-items:center; margin-top:10px; flex-wrap:wrap; }
				.email-form input {
					background: rgba(255,255,255,0.03);
					border: 1px solid rgba(255,255,255,0.04);
					padding:12px 14px;
					border-radius:10px;
					color: #fff;
					min-width: 220px;
				}
				.form-error { color: #ffb3b3; margin-left:8px; font-size:13px; }
				.form-success { color:#86efac; margin-left:8px; font-size:13px; }

				.hero-illustration { display:flex; justify-content:center; align-items:center; }
				.illus { width:100%; height:auto; max-width:420px; }

				.features { max-width:1100px; margin:0 auto; text-align:center; padding:36px 0; }
				.features h2 { margin:0 0 6px; color:#fff }
				.features .sub { color:var(--muted); margin-bottom:24px }

				.feature-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:18px; list-style:none; padding:0; margin:0; }
				.feature-grid li { background: rgba(255,255,255,0.02); padding:18px; border-radius:12px; text-align:left; }
				.icon { width:28px; height:28px; color:#60a5fa; margin-bottom:8px }

				.pricing { max-width:1100px; margin:0 auto; padding:30px 0; text-align:center; }
				.plans { display:flex; gap:18px; justify-content:center; align-items:stretch; margin-top:18px; flex-wrap:wrap; }
				.plan { background: rgba(255,255,255,0.02); padding:20px; border-radius:12px; width:220px; display:flex; flex-direction:column; gap:12px; align-items:flex-start; }
				.plan.recommended { border: 1px solid rgba(255,255,255,0.06); box-shadow: 0 8px 30px rgba(59,130,246,0.08); }
				.price { font-size:20px; font-weight:700; color:#fff; }

				.footer { max-width:1100px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding:18px 0; color: var(--muted); }

				.visually-hidden { position:absolute; left:-10000px; top:auto; width:1px; height:1px; overflow:hidden; }

				@media (max-width: 880px) {
					.hero { grid-template-columns: 1fr; padding-top: 0 }
					.feature-grid { grid-template-columns: 1fr; }
					.plans { flex-direction:column; align-items:center }
					.nav { padding: 10px 12px; border-radius: 0; }
				}
			`}</style>
		</main>
	);
}