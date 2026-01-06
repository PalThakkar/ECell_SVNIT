"use client";
import React from "react";
import { Trophy, Medal, Award} from "lucide-react";

const LegoLeaderboardPage = () => {
  // Live leaderboard data
  const leaderboardData = [
    { rank: 1, teamName: "Team Alpha", points: 368 },
    { rank: 2, teamName: "Tech Titans", points: 358 },
    { rank: 3, teamName: "Innovation Squad", points: 352 },
    { rank: 4, teamName: "Growth Hackers", points: 345 },
    { rank: 5, teamName: "Startup Ninjas", points: 340 },
    { rank: 6, teamName: "Code Warriors", points: 335 },
    { rank: 7, teamName: "Dream Builders", points: 328 },
    { rank: 8, teamName: "Pixel Pioneers", points: 322 },
    { rank: 9, teamName: "Data Driven", points: 318 },
    { rank: 10, teamName: "Future Founders", points: 312 },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-yellow-700" />;
      default:
        return <Award className="w-5 h-5 text-gray-400" />;
    }
  };

  const getRankBadgeStyle = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-lg shadow-yellow-500/50";
      case 2:
        return "bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800 shadow-lg shadow-gray-400/50";
      case 3:
        return "bg-gradient-to-br from-yellow-600 to-yellow-700 text-white shadow-lg shadow-yellow-700/50";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50/30 to-gray-50">
      {/* Hero Section with Live Badge */}
      <section className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-300/5"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/10 rounded-full animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6 animate-slide-down">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  LEGO STARTUP
                </span>
              </h1>
            </div>
            
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Leaderboard
            </h2>

            <div
              className="flex items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-900 font-semibold text-sm">Real-time Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Full Leaderboard Table */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Live Standings
              </h3>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Team Name
                    </th>
                    <th className="px-8 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leaderboardData.map((team, index) => (
                    <tr
                      key={team.rank}
                      className={`transition-all duration-300 hover:bg-yellow-50 animate-fade-in-up ${
                        team.rank <= 3 ? "bg-yellow-50/30" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${getRankBadgeStyle(
                              team.rank
                            )}`}
                          >
                            {team.rank}
                          </div>
                          {team.rank <= 3 && (
                            <div className="flex items-center">
                              {getRankIcon(team.rank)}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span
                          className={`text-lg font-bold ${
                            team.rank <= 3 ? "text-gray-900" : "text-gray-700"
                          }`}
                        >
                          {team.teamName}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-xl">
                          <span className="text-2xl font-black text-yellow-600">
                            {team.points}
                          </span>
                          <span className="text-sm text-gray-600">pts</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Week Progress Info */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { week: 1, phase: "Ideation & Validation", status: "live" },
              { week: 2, phase: "Business Model", status: "upcoming" },
              { week: 3, phase: "MVP Development", status: "upcoming" },
              { week: 4, phase: "Final Pitch - D-Day", status: "upcoming" },
            ].map((weekInfo) => (
              <div
                key={weekInfo.week}
                className="p-6 rounded-2xl border-2 transition-all duration-300 bg-white border-gray-200 hover:border-yellow-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-gray-600">Week {weekInfo.week}</span>
                  {weekInfo.status === "live" && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">
                      LIVE
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{weekInfo.phase}</h4>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 flex-1 rounded-full ${
                      weekInfo.status === "completed"
                        ? "bg-green-500"
                        : weekInfo.status === "live"
                        ? "bg-yellow-400 animate-pulse"
                        : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LegoLeaderboardPage;
