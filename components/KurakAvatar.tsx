"use client";

import React from "react";

interface KurakAvatarProps {
  isSpeaking?: boolean;
  className?: string;
  size?: number;
  mood?: "happy" | "thinking" | "celebrating" | "talking";
}

export default function KurakAvatar({
  isSpeaking = false,
  className = "",
  size = 180,
}: KurakAvatarProps) {
  return (
    <div
      className={`relative inline-block select-none transition-transform duration-300 ${
        isSpeaking ? "scale-105" : ""
      } ${className}`}
      style={{ width: size, height: (size * 230) / 200 }}
    >
      <svg
        viewBox="0 0 200 230"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Niebieski Kurak - Twój AI Project Manager i Scrum Master"
        className="overflow-visible drop-shadow-xl"
      >
        <defs>
          {/* Błękitne i niebieskie gradienty ciała Kuraka */}
          <linearGradient id="kurakBlueBody" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="kurakBlueHead" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>

          <linearGradient id="kurakBlueWing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Aktówka i złote elementy */}
          <linearGradient id="briefcaseGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c1810" />
            <stop offset="50%" stopColor="#1e1008" />
            <stop offset="100%" stopColor="#150a04" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59F00" />
            <stop offset="50%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Złoto-bursztynowy krawat PM-a idealnie kontrastujący z błękitem */}
          <linearGradient id="pmTieGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59F00" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Cień pod nogami */}
        <ellipse cx="100" cy="222" rx="42" ry="7" fill="#000000" opacity="0.35" />

        {/* Nogi Kuraka */}
        <g className="k-legs" stroke="#F59F00" strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M82 192 L78 214 M78 214 l-10 6 M78 214 l2 9 M78 214 l10 5" />
          <path d="M118 192 L122 214 M122 214 l-10 5 M122 214 l2 9 M122 214 l10 6" />
        </g>

        {/* Ciało NIEBIESKIEGO Kuraka */}
        <g className="k-body">
          {/* Tułów */}
          <path
            d="M44 132 C40 96 70 82 100 84 C134 82 162 98 156 136 C152 178 128 198 100 198 C70 198 48 176 44 132Z"
            fill="url(#kurakBlueBody)"
            stroke="#1E40AF"
            strokeWidth="3.5"
          />
          {/* Pióra ogona w błękicie z akcentem morskim */}
          <path
            d="M150 120 C172 112 178 126 168 136 C178 140 172 154 156 146"
            fill="#0284C7"
            stroke="#0369A1"
            strokeWidth="3"
          />
        </g>

        {/* Elegancki kołnierzyk koszuli i krawat PM */}
        <g className="k-outfit">
          {/* Biały kołnierzyk */}
          <polygon points="90,88 100,102 100,90 88,86" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <polygon points="110,88 100,102 100,90 112,86" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
          {/* Złoty krawat PM-a */}
          <path
            d="M97 98 L103 98 L105 130 L100 138 L95 130 Z"
            fill="url(#pmTieGrad)"
            stroke="#B45309"
            strokeWidth="1.2"
          />
          {/* Węzeł krawata */}
          <polygon points="96,96 104,96 102,102 98,102" fill="#F59F00" stroke="#B45309" strokeWidth="1" />
          {/* Ozdobne paski na krawacie */}
          <line x1="97" y1="110" x2="103" y2="107" stroke="#FEF3C7" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="97" y1="120" x2="103" y2="117" stroke="#FEF3C7" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* AKTÓWKA PROJECT MANAGERA (Briefcase) */}
        <g className="k-briefcase" transform="translate(10, 8)">
          <rect x="22" y="145" width="56" height="42" rx="6" fill="#000000" opacity="0.3" />
          
          {/* Korpus ze skóry */}
          <rect
            x="20"
            y="142"
            width="56"
            height="40"
            rx="6"
            fill="url(#briefcaseGrad)"
            stroke="#3F2515"
            strokeWidth="2.5"
          />

          {/* Klapa aktówki */}
          <path
            d="M20 142 L76 142 L76 160 C76 160 58 166 48 166 C38 166 20 160 20 160 Z"
            fill="#3B1F0E"
            stroke="#5A351D"
            strokeWidth="1.5"
          />

          {/* Szwy */}
          <path d="M23 145 L73 145" stroke="#8D5B38" strokeWidth="0.9" strokeDasharray="2,2" />
          <path d="M23 178 L73 178" stroke="#8D5B38" strokeWidth="0.9" strokeDasharray="2,2" />

          {/* Rączka */}
          <path
            d="M40 142 C40 134 56 134 56 142"
            fill="none"
            stroke="#2C1810"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M41 142 C41 136 55 136 55 142"
            fill="none"
            stroke="#5A351D"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Złote klamry */}
          <rect x="30" y="157" width="6" height="9" rx="1.5" fill="url(#goldGrad)" stroke="#B45309" strokeWidth="0.8" />
          <rect x="60" y="157" width="6" height="9" rx="1.5" fill="url(#goldGrad)" stroke="#B45309" strokeWidth="0.8" />

          {/* Plakietka AI PM */}
          <circle cx="48" cy="172" r="3.2" fill="url(#goldGrad)" />
          <text x="48" y="173.3" fontSize="3.2" fontWeight="bold" textAnchor="middle" fill="#78350F">AI</text>
        </g>

        {/* Niebieskie Skrzydło trzymające aktówkę */}
        <path
          className="k-wing"
          d="M62 134 C44 142 46 162 58 164 C68 166 76 156 74 144"
          fill="url(#kurakBlueWing)"
          stroke="#1E40AF"
          strokeWidth="3"
        />
        <ellipse cx="58" cy="150" rx="6" ry="4" fill="#0284C7" opacity="0.6" />

        {/* Drugie skrzydło (gestykulujące jak manager) */}
        <path
          d="M140 135 C158 138 168 152 162 162 C154 168 142 160 136 148"
          fill="url(#kurakBlueWing)"
          stroke="#1E40AF"
          strokeWidth="3"
        />

        {/* Głowa NIEBIESKIEGO Kuraka */}
        <g className="k-head">
          {/* Czerwony grzebień */}
          <path
            d="M86 26 C84 12 98 10 100 22 C102 8 118 10 114 26 C126 18 134 30 120 36 Z"
            fill="#EF4444"
            stroke="#B91C1C"
            strokeWidth="2"
          />
          {/* Kształt głowy w błękitnym gradiencie */}
          <circle cx="100" cy="60" r="36" fill="url(#kurakBlueHead)" stroke="#1E40AF" strokeWidth="3" />
          
          {/* Policzki */}
          <circle cx="78" cy="70" r="6.5" fill="#38BDF8" opacity="0.6" />
          <circle cx="122" cy="70" r="6.5" fill="#38BDF8" opacity="0.6" />

          {/* Oczy */}
          <g className="k-eyes">
            <ellipse cx="87" cy="54" rx="7" ry="8.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
            <ellipse cx="114" cy="54" rx="7" ry="8.5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />
            
            {/* Źrenice */}
            <circle
              className="transition-all duration-150"
              cx={isSpeaking ? "88" : "89"}
              cy={isSpeaking ? "55" : "56"}
              r="3.8"
              fill="#0F172A"
            />
            <circle
              className="transition-all duration-150"
              cx={isSpeaking ? "113" : "112"}
              cy={isSpeaking ? "55" : "56"}
              r="3.8"
              fill="#0F172A"
            />
            
            {/* Blask w oczach */}
            <circle cx="90.5" cy="54" r="1.3" fill="#FFFFFF" />
            <circle cx="113.5" cy="54" r="1.3" fill="#FFFFFF" />
          </g>

          {/* Dziób Kuraka (animowany podczas mówienia TTS!) */}
          <g className={`transition-transform duration-150 ${isSpeaking ? "translate-y-0.5" : ""}`}>
            <path
              d="M90 66 L110 66 L100 78 Z"
              fill="#F59F00"
              stroke="#B45309"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d={isSpeaking ? "M93 75 L107 75 L100 87 Z" : "M93 72 L107 72 L100 82 Z"}
              fill="#EA580C"
              stroke="#B45309"
              strokeWidth="2"
              strokeLinejoin="round"
              className="transition-all duration-100"
            />
          </g>

          {/* Koral pod dziobem */}
          <path
            d="M98 80 C96 86 100 88 102 85 C104 88 108 85 106 80 Z"
            fill="#EF4444"
            stroke="#B91C1C"
            strokeWidth="1.2"
          />
        </g>

        {/* Symbole sukcesu PM / AI nad głową Kuraka */}
        <g className="k-pm-symbols">
          <path
            d="M152 38 L155 45 L162 48 L155 51 L152 58 L149 51 L142 48 L149 45 Z"
            fill="#38BDF8"
            className="animate-pulse"
          />
          <g transform="translate(142, 60)" fill="#10B981">
            <rect x="0" y="8" width="3" height="6" rx="1" />
            <rect x="5" y="4" width="3" height="10" rx="1" />
            <rect x="10" y="0" width="3" height="14" rx="1" />
          </g>
        </g>
      </svg>
    </div>
  );
}
