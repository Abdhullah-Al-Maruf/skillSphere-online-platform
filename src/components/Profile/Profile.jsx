"use client";
import NotFound from "@/app/not-found";
import { authClient } from "@/lib/auth-client"; // import the auth client
import { Clock, GraduationCap } from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";
import { useState } from "react";
import { BiAward, BiTrendingUp } from "react-icons/bi";
import { UpdateProfileModal } from "./UpdateProfileModal";

export default function Profile() {
// for modal
const [modal,setModal]=useState(false)


  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="min-h-screen mb-15  p-4 md:p-8">
      {!user && (
        <NotFound/>
      )}

      {user && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-rose-400 to-orange-400 flex items-center justify-center">
                <Avatar className="w-full h-full">
                  <Avatar.Image
                    className=""
                    alt={user?.name || "User"}
                    src={user?.image || undefined}
                  />

                  <Avatar.Fallback>
                    {user?.name
                      ? user.name.trim().split(/\s+/)[0][0].toUpperCase()
                      : "U"}
                  </Avatar.Fallback>
                </Avatar>
              </div>
              <div className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-1.5 border-2 border-white">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              {user?.name}
            </h1>
            <p className="text-slate-500 mb-6">{user?.email}</p>

            <button 
            onClick={()=>setModal(true)}
            className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg shadow-orange-500/25">
              Update Profile
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Courses Enrolled */}
            <div className=" bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 mb-3">
                <GraduationCap className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Courses Enrolled
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 mb-3">
                <BiAward className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">08</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Certificates
              </div>
            </div>

            {/* Learning Hours */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 mb-3">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">142</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Learning Hours
              </div>
            </div>
          </div>

          {/* Growth Streak Section */}
          <div className=" bg-linear-to-r from-orange-50 to-rose-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-linear-to-br from-orange-500 to-amber-500 rounded-lg p-3 shadow-lg shadow-orange-500/20">
                <BiTrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Growth Streak</h3>
                <p className="text-sm text-slate-600">
                  You have logged 5 hours of learning this week!
                </p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end gap-2 h-12">
              <div className="w-2 bg-orange-300 rounded-full h-6 transition-all hover:h-8"></div>
              <div className="w-2 bg-orange-400 rounded-full h-8 transition-all hover:h-10"></div>
              <div className="w-2 bg-orange-500 rounded-full h-10 transition-all hover:h-12"></div>
              <div className="w-2 bg-amber-400 rounded-full h-7 transition-all hover:h-9"></div>
              <div className="w-2 bg-amber-500 rounded-full h-11 transition-all hover:h-12"></div>
            </div>
          </div>
        </div>
      )}

     <UpdateProfileModal
  isOpen={modal}
  image={user?.image}
  name={user?.name}
  onClose={()=>setModal(false)}
/>
    </div>
  );
}
