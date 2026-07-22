"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Lock,
  MapPin,
  PartyPopper,
  Sparkles,
  Trophy,
  Medal,
  Target,
} from "lucide-react";

const THEME_PRESETS = {
  yellow: {
    heroGlow: "from-yellow-400/10 to-yellow-300/5",
    heroAccent: "from-yellow-400 via-yellow-300 to-yellow-400",
    bar: "from-yellow-400 to-yellow-300",
    cardBorder: "border-yellow-200/50",
    statBg: "from-yellow-400/20 to-yellow-300/10",
    statBorder: "border-yellow-300/30",
    statText: "text-yellow-600",
    ring: "bg-yellow-400",
    softPanel: "from-yellow-50 via-white to-yellow-50",
    infoRing: "bg-yellow-400",
    button: "from-yellow-400 via-yellow-300 to-yellow-400",
    buttonHover:
      "hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500",
    noteBorder: "border-yellow-200",
    noteBg: "from-yellow-100 via-yellow-100 to-yellow-100",
    noteText: "text-yellow-700",
    titleText: "text-yellow-500",
  },
  orange: {
    heroGlow: "from-yellow-400/10 to-orange-400/5",
    heroAccent: "from-yellow-400 via-orange-300 to-yellow-400",
    bar: "from-yellow-400 to-orange-400",
    cardBorder: "border-yellow-200/50",
    statBg: "from-yellow-400/20 to-orange-300/10",
    statBorder: "border-yellow-300/30",
    statText: "text-orange-600",
    ring: "bg-yellow-400",
    softPanel: "from-yellow-50 via-white to-orange-50",
    infoRing: "bg-yellow-400",
    button: "from-yellow-400 via-orange-300 to-yellow-400",
    buttonHover:
      "hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-500",
    noteBorder: "border-orange-200",
    noteBg: "from-yellow-100 via-orange-50 to-yellow-100",
    noteText: "text-orange-700",
    titleText: "text-orange-500",
  },
  slate: {
    heroGlow: "from-slate-400/10 to-slate-300/5",
    heroAccent: "from-slate-500 via-slate-300 to-slate-500",
    bar: "from-slate-500 to-slate-300",
    cardBorder: "border-slate-200/50",
    statBg: "from-slate-400/20 to-slate-300/10",
    statBorder: "border-slate-300/30",
    statText: "text-slate-600",
    ring: "bg-slate-400",
    softPanel: "from-slate-50 via-white to-slate-50",
    infoRing: "bg-slate-400",
    button: "from-slate-500 via-slate-300 to-slate-500",
    buttonHover: "hover:from-slate-600 hover:via-slate-400 hover:to-slate-600",
    noteBorder: "border-slate-200",
    noteBg: "from-slate-100 via-slate-100 to-slate-100",
    noteText: "text-slate-700",
    titleText: "text-slate-500",
  },
};

const STATUS_UI = {
  comingSoon: {
    icon: Clock,
    iconBg: "from-yellow-400 to-yellow-300",
    title: "Registration Opening Soon",
    buttonLabel: "Coming Soon",
    buttonClass: "bg-gray-100 text-gray-500",
  },
  live: {
    icon: Sparkles,
    iconBg: "from-green-400 to-green-500",
    title: "Registration is Now Live!",
    buttonLabel: "Register Now →",
    buttonClass: "bg-transparent text-gray-900",
  },
  closed: {
    icon: Lock,
    iconBg: "from-gray-200 to-gray-200",
    title: "Registration Closed",
    buttonLabel: "Registration Closed",
    buttonClass: "bg-red-100 text-red-600",
  },
  concluded: {
    icon: PartyPopper,
    iconBg: "from-yellow-400 to-yellow-300",
    title: "Event Concluded Successfully!",
    buttonLabel: "Event Complete",
    buttonClass: "bg-yellow-100 text-yellow-700",
  },
};

const ICONS = {
  calendar: Calendar,
  mapPin: MapPin,
  target: Target,
};

function getTheme(theme) {
  return THEME_PRESETS[theme] ?? THEME_PRESETS.yellow;
}

function getIcon(iconName) {
  return ICONS[iconName] ?? Calendar;
}

function getWinnerIcon(position) {
  if (position === 1) return Trophy;
  return Medal;
}

function formatOrdinal(position) {
  if (position === 1) return "st";
  if (position === 2) return "nd";
  if (position === 3) return "rd";
  return "th";
}

function buildMetricCard(metric, theme, index) {
  return (
    <div
      className={`bg-linear-to-br ${theme.statBg} rounded-xl p-6 border ${theme.statBorder} hover:scale-105 transition-transform duration-300 animate-fade-in-up h-full`}
      style={{ animationDelay: `${0.2 + index * 0.2}s` }}
    >
      <div className={`text-3xl font-black ${theme.statText} mb-2`}>
        {metric.value}
      </div>
      <div className="text-gray-800 font-semibold">{metric.label}</div>
    </div>
  );
}

export default function EventPageTemplate({ event }) {
  const theme = getTheme(event.theme);
  const registration = event.registration ?? null;
  const registrationKey =
    registration?.status === "coming-soon"
      ? "comingSoon"
      : registration?.status;
  const registrationUi = registrationKey
    ? (STATUS_UI[registrationKey] ?? STATUS_UI.closed)
    : null;

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      <section className="relative overflow-hidden py-20 px-6">
        <div className={`absolute inset-0 bg-linear-to-r ${theme.heroGlow}`} />

        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-10 left-10 w-20 h-20 bg-linear-to-r ${theme.heroGlow} rounded-full animate-bounce-slow`}
          />
          <div
            className={`absolute top-32 right-20 w-16 h-16 bg-linear-to-r ${theme.heroGlow} rounded-full animate-pulse-slow`}
          />
          <div
            className={`absolute bottom-20 left-1/4 w-12 h-12 bg-linear-to-r ${theme.heroGlow} rounded-full animate-float`}
          />
          <div
            className={`absolute bottom-32 right-1/3 w-24 h-24 bg-linear-to-r ${theme.heroGlow} rounded-full animate-bounce-slow`}
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="animate-slide-down">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-900">
                <span
                  className={`bg-linear-to-r ${theme.heroAccent} bg-clip-text text-transparent animate-gradient`}
                >
                  {event.hero.line1}
                </span>
                <span
                  className={`block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-up ${event.hero.line2Class ?? ""}`}
                  style={{ animationDelay: "0.3s" }}
                >
                  {event.hero.line2}
                </span>
              </h1>
              <p
                className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                {event.hero.subtitle}
              </p>
              <div
                className={`w-32 h-1 bg-linear-to-r ${theme.bar} mx-auto mt-8 rounded-full animate-expand`}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border ${theme.cardBorder} hover:shadow-3xl hover:scale-105 transition-all duration-500`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {event.intro.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {event.intro.description}
                </p>
              </div>

              <div
                className={`grid gap-6 ${event.metrics.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
              >
                {event.metrics.map((metric, index) => {
                  const metricCard = buildMetricCard(metric, theme, index);

                  if (metric.href) {
                    return (
                      <Link
                        key={metric.label}
                        href={metric.href}
                        className="block h-full"
                      >
                        {metricCard}
                      </Link>
                    );
                  }

                  return <div key={metric.label}>{metricCard}</div>;
                })}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {event.focus.title}
                </h3>
                <div className="space-y-4">
                  {event.focus.items.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4 hover:bg-yellow-50 p-3 rounded-lg transition-colors duration-300"
                    >
                      <div
                        className={`w-8 h-8 ${theme.ring} rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-gentle`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4
                          className={`font-semibold ${item.titleClass ?? "text-gray-900"}`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {event.spotlight ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
                {event.spotlight.title}{" "}
                <span className={theme.titleText}>
                  {event.spotlight.titleAccent}
                </span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {event.spotlight.description}
              </p>
            </div>

            {event.spotlight.announcement ? (
              <div className="text-center py-20 animate-fade-in-up">
                <div
                  className={`w-32 h-32 bg-linear-to-br ${theme.button} rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-gentle`}
                >
                  <PartyPopper className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {event.spotlight.announcement.title}
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {event.spotlight.announcement.description}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {event.spotlight.cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group hover:transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="bg-linear-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200/50 group-hover:shadow-2xl group-hover:border-yellow-300 h-full">
                      <div
                        className={`w-16 h-16 bg-linear-to-br ${theme.button} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{card.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      {event.winners?.length ? (
        <section className={`py-20 bg-linear-to-br ${theme.softPanel}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
                {event.winners.title}{" "}
                <span className={theme.titleText}>
                  {event.winners.titleAccent}
                </span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {event.winners.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {event.winners.items.map((winner, index) => {
                const WinnerIcon = getWinnerIcon(winner.position);

                return (
                  <div
                    key={winner.position}
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div
                      className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 h-full flex flex-col items-center justify-center ${
                        winner.position === 1
                          ? "border-yellow-400 transform md:-translate-y-4 hover:scale-110 hover:shadow-2xl"
                          : winner.position === 2
                            ? "border-gray-300 hover:scale-105 hover:shadow-2xl"
                            : "border-yellow-600/50 hover:scale-105 hover:shadow-2xl"
                      }`}
                    >
                      <div
                        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 ${
                          winner.position === 1
                            ? "bg-linear-to-br from-yellow-400 to-yellow-500"
                            : winner.position === 2
                              ? "bg-linear-to-br from-gray-300 to-gray-400"
                              : "bg-linear-to-br from-yellow-600 to-yellow-700"
                        }`}
                      >
                        <WinnerIcon className="w-8 h-8 text-white" />
                      </div>

                      <div className="mt-8 mb-4">
                        <span
                          className={`text-6xl font-black ${winner.position === 1 ? "text-yellow-500" : winner.position === 2 ? "text-gray-400" : "text-yellow-700"}`}
                        >
                          {winner.position}
                        </span>
                        <span className="text-2xl text-gray-400 align-super">
                          {formatOrdinal(winner.position)}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
                        {winner.teamName}
                      </h3>

                      <div
                        className={`mt-4 px-4 py-2 rounded-full text-sm font-bold ${
                          winner.position === 1
                            ? "bg-yellow-100 text-yellow-700"
                            : winner.position === 2
                              ? "bg-gray-100 text-gray-700"
                              : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {winner.position === 1
                          ? "Champion"
                          : winner.position === 2
                            ? "Runner-up"
                            : "2nd Runner-up"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : event.winnerNote ? (
        <section className={`py-20 bg-linear-to-br ${theme.softPanel}`}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
                {event.winnerNote.title}
              </h2>
              <p
                className="text-xl text-gray-600 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {event.winnerNote.description}
              </p>
            </div>

            <div
              className={`bg-white rounded-3xl shadow-2xl border ${theme.noteBorder} overflow-hidden hover:shadow-3xl transition-shadow duration-500`}
            >
              <div
                className={`bg-linear-to-r ${theme.button} px-8 py-6 animate-gradient`}
              >
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {event.winnerNote.panelTitle}
                </h3>
                <p className="text-center text-gray-800 mt-2">
                  {event.winnerNote.panelSubtitle}
                </p>
              </div>

              <div className="p-8 md:p-12 text-center py-12 animate-fade-in-up">
                <div
                  className={`w-24 h-24 bg-linear-to-br ${theme.button} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle`}
                >
                  <PartyPopper className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {event.winnerNote.headline}
                </h3>
                <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
                  {event.winnerNote.body}
                </p>
                <div
                  className={`bg-linear-to-r ${theme.noteBg} border-2 ${theme.noteBorder} rounded-xl p-6 max-w-2xl mx-auto`}
                >
                  <p className={`font-semibold mb-2 ${theme.noteText}`}>
                    {event.winnerNote.calloutTitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {event.winnerNote.calloutBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {event.gallery?.photos?.length ? (
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 animate-fade-in-up">
                {event.gallery.title}{" "}
                <span className={theme.titleText}>
                  {event.gallery.titleAccent}
                </span>
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {event.gallery.description}
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex gap-6 px-6 overflow-x-auto scrollbar-hide hover-pause"
              style={{ scrollBehavior: "smooth" }}
            >
              {event.gallery.photos.map((photo, index) => (
                <div
                  key={`${photo.src}-${index}`}
                  className={`shrink-0 group relative ${photo.orientation === "horizontal" ? "w-150 h-100" : "w-75 h-112.5"} animate-slide-in-right`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <Image
                      src={photo.src}
                      alt={
                        photo.alt ?? `${event.hero.line1} - Photo ${index + 1}`
                      }
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {event.gallery.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {event.gallery.photos.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-yellow-400/30 hover:bg-yellow-400 transition-colors duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {registration ? (
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
                {registration.title}
              </h2>
              <p
                className="text-xl text-gray-600 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {registration.subtitle}
              </p>
            </div>

            <div
              className={`bg-white rounded-3xl shadow-2xl border ${theme.cardBorder} overflow-hidden hover:shadow-3xl transition-shadow duration-500`}
            >
              <div
                className={`bg-linear-to-r ${theme.button} px-8 py-6 animate-gradient`}
              >
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {registration.panelTitle}
                </h3>
                <p className="text-center text-gray-800 mt-2">
                  {registration.panelSubtitle}
                </p>
              </div>

              <div className="p-8 md:p-12">
                {registrationUi?.icon ? (
                  <div className="text-center py-12 animate-fade-in-up">
                    <div
                      className={`w-24 h-24 bg-linear-to-br ${registrationUi.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle shadow-lg`}
                    >
                      <registrationUi.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {registrationUi.title}
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      {registration.message}
                    </p>

                    {registration.status === "live" ? (
                      <>
                        <a
                          href={registration.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block bg-linear-to-r ${theme.button} ${theme.buttonHover} text-gray-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-gradient`}
                        >
                          {registration.actionLabel}
                        </a>
                        <p className="text-sm text-gray-500 mt-4">
                          {registration.helperText}
                        </p>
                      </>
                    ) : (
                      <div
                        className={`inline-block ${registrationUi.buttonClass} font-bold py-3 px-8 rounded-xl cursor-not-allowed`}
                      >
                        {registrationUi.buttonLabel}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {event.details?.items?.length ? (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 animate-fade-in-up">
                {event.details.title}{" "}
                <span className={theme.titleText}>
                  {event.details.titleAccent}
                </span>
              </h2>
              <p
                className="text-xl text-gray-600 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {event.details.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {event.details.items.map((item, index) => {
                const Icon = getIcon(item.icon);

                return (
                  <div
                    key={item.title}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.2}s` }}
                  >
                    <div
                      className={`w-16 h-16 ${theme.infoRing} rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.primary}</p>
                    <p className="text-gray-600 text-sm">{item.secondary}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }
        .animate-expand {
          animation: expand 1.5s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
