"use client";

import { useState } from "react";
import Spinner from "./loader/Spinner";
import RevealWrapper from "../common/RevealWrapper";

import { 
  Star, Clock, Users, Bookmark, Share2, Check, ChevronDown, 
  ChevronUp, Play, Globe, Award, FileText, Zap 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CoursePage({ course }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50">
        <Spinner />
      </div>
    );
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Static course curriculum data
  const courseCurriculum = [
    {
      title: "Introduction to the Course",
      lectures: [
        { name: "Welcome & Course Overview", duration: "5:23", preview: true },
        { name: "How to Get the Most Out of This Course", duration: "4:12", preview: false },
        { name: "Setting Up Your Development Environment", duration: "8:45", preview: true }
      ]
    },
    {
      title: "Core Fundamentals",
      lectures: [
        { name: "Understanding the Basics", duration: "12:30", preview: true },
        { name: "Key Concepts Explained", duration: "15:20", preview: false },
        { name: "Practical Examples", duration: "18:45", preview: false },
        { name: "Common Pitfalls to Avoid", duration: "10:15", preview: false }
      ]
    },
    {
      title: "Advanced Techniques",
      lectures: [
        { name: "Deep Dive into Advanced Topics", duration: "22:10", preview: false },
        { name: "Optimization Strategies", duration: "19:30", preview: false },
        { name: "Real-world Applications", duration: "25:00", preview: false }
      ]
    },
    {
      title: "Project-Based Learning",
      lectures: [
        { name: "Project 1: Building Your First App", duration: "35:20", preview: true },
        { name: "Project 2: Advanced Implementation", duration: "42:15", preview: false },
        { name: "Project 3: Complete Solution", duration: "48:30", preview: false }
      ]
    },
    {
      title: "Best Practices & Tips",
      lectures: [
        { name: "Industry Best Practices", duration: "14:20", preview: false },
        { name: "Performance Optimization", duration: "16:45", preview: false },
        { name: "Debugging Techniques", duration: "12:30", preview: true }
      ]
    },
    {
      title: "Final Assessment & Certification",
      lectures: [
        { name: "Course Review & Recap", duration: "20:00", preview: false },
        { name: "Final Exam Preparation", duration: "15:30", preview: false },
        { name: "Getting Your Certificate", duration: "5:00", preview: false }
      ]
    }
  ];

  // Parse longDescription into bullet points (first 5 sentences)
  const learningPoints = course.longDescription
    .split(/[.!?]+/)
    .filter(s => s.trim().length > 20)
    .slice(0, 4)
    .map(s => s.trim() + ".");

  return (
    <RevealWrapper>
      <div className="min-h-screen bg-white">
      
   
      <section className="bg-linear-to-r from-[#ff8a00] to-[#ff3d00] text-white text-white pb-8">
        <div className="container mx-auto px-4 pt-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-white mb-4">
            <Link href="/courses" className="hover:text-white transition">Courses</Link>
            <span className="mx-2">›</span>
          
            <span className="mx-2">›</span>
            <span className="text-white">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
         
            <div className="lg:col-span-2 space-y-4">
              {/* Badge */}
              {course.badges && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500  text-xs font-semibold border border-orange-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  {course.badges}
                </span>
              )}

           
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-white leading-relaxed">
                {course.description}
              </p>

              {/*Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-white">{course.rating}</span>
                  <span className="text-white">(12,847 ratings)</span>
                </div>
                <span className="text-white">•</span>
                <div className="flex items-center gap-1 text-white">
                  <Users className="w-4 h-4" />
                  <span>45,231 students</span>
                </div>
                <span className="text-white">•</span>
                <div className="flex items-center gap-1 ">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-white text-sm">Created by</span>
                <a href={`/instructor/${course.instructor.toLowerCase().replace(/\s+/g, '-')}`} 
                   className="text-orange-400 hover:text-orange-300 font-medium text-sm underline">
                  {course.instructor}
                </a>
              </div>

              {/* Last Updated + Language */}
              <div className="flex flex-wrap gap-4 text-sm text-white">
                <span>Last updated: March 2026</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  English
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Subtitles: 12 languages
                </span>
              </div>
            </div>

          {/* desktop image */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer">
                <Image
                  src={course.image} 
                  alt={course.title}
                  width={500}
                    height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7  ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs">
                  <span className="bg-black/60 px-2 py-1 rounded">Preview: 2:34</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

  {/* mobile view */}
      <div className="lg:hidden px-4 -mt-6 relative z-10">
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-slate-200">
          <Image
            src={course.image} 
            alt={course.title}
            width={500}
               height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column - Minimal Content with Static Curriculum FAQ */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* What You'll Learn - Minimal */}
            <section className="border border-slate-200 rounded-xl p-5">
              <h2 className="text-lg font-bold text-slate-900 mb-3">What you ll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {learningPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Static Course Curriculum - FAQ Style Accordion */}
            <section className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-5 border-b border-slate-200 bg-slate-50">
                <h2 className="text-lg font-bold text-slate-900">Course Curriculum</h2>
                <p className="text-sm text-slate-500 mt-1">
                  {courseCurriculum.reduce((total, section) => total + section.lectures.length, 0)} lectures • {course.duration} total length
                </p>
              </div>
              
              {/* Accordion Sections */}
              <div className="divide-y divide-slate-100">
                {courseCurriculum.map((section, idx) => (
                  <div key={idx}>
                    <button
                      onClick={() => toggleSection(idx)}
                      className="w-full cursor-pointer flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        {expandedSection === idx ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                        <div>
                          <span className="font-medium text-slate-900 text-sm">{section.title}</span>
                          <span className="text-xs text-slate-500 ml-2">
                            {section.lectures.length} lectures
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">
                        {expandedSection === idx ? 'Collapse' : 'Expand'}
                      </span>
                    </button>
                    
                    {expandedSection === idx && (
                      <div className="px-4 pb-4 space-y-2">
                        {section.lectures.map((lecture, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                            <Play className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition-colors" />
                            <div className="flex-1">
                              <p className="text-sm text-slate-700 group-hover:text-orange-600 transition-colors">
                                {lecture.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-400">{lecture.duration}</span>
                              {lecture.preview && (
                                <span className="text-xs text-orange-600 font-medium">Preview</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

           
            <section className="border border-slate-200 rounded-xl p-5">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Requirements</h2>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-orange-500 mt-1">•</span>
                  Basic understanding of fundamental concepts
                </li>
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-orange-500 mt-1">•</span>
                  A computer with internet access
                </li>
                <li className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-orange-500 mt-1">•</span>
                  No prior experience required
                </li>
              </ul>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div >
              <div className="space-y-4 ">
                
                {/* Price Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 ">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-slate-900">{course.price}</span>
                    <span className="text-slate-400 line-through text-lg">$199.99</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {Math.round((1 - parseFloat(course.price.replace('$', '')) / 199.99) * 100)}% off
                    </span>
                  </div>
                  
                  <p className="text-sm text-red-600 font-medium mb-4 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    4 days left at this price!
                  </p>
                  
                  <button className="cursor-pointer w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-4 rounded-lg mb-3 transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
                    Add to cart
                  </button>
                  
                  <button className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3.5 px-4 rounded-lg transition-colors">
                    Buy now
                  </button>

                  {/* Wishlist & Share */}
                  <div className="flex gap-2 mt-3">
                    <button 
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-colors ${
                        isWishlisted 
                          ? 'bg-orange-50 border-orange-300 text-orange-600' 
                          : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                      {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                  
                  {/* Guarantees */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-sm">
                    <p className="flex items-center gap-2 text-slate-600">
                      <span className="text-green-600">✓</span> 
                      30-day money-back guarantee
                    </p>
                    <p className="flex items-center gap-2 text-slate-600">
                      <span className="text-green-600">✓</span> 
                      Full lifetime access
                    </p>
                    <p className="flex items-center gap-2 text-slate-600">
                      <span className="text-green-600">✓</span> 
                      Access on mobile and TV
                    </p>
                    <p className="flex items-center gap-2 text-slate-600">
                      <span className="text-green-600">✓</span> 
                      Certificate of completion
                    </p>
                  </div>
                </div>

                {/* Course Includes */}
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold mb-3 text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    This course includes:
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-slate-400" />
                      {course.duration} on-demand video
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      87 downloadable resources
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-slate-400" />
                      Access on mobile and TV
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-400" />
                      Certificate of completion
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-slate-400" />
                      Full lifetime access
                    </li>
                  </ul>
                </div>

                {/* Instructor Mini Card */}
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="font-semibold mb-3 text-slate-900">Instructor</h3>
                  <div className="flex items-center gap-3">
                    <Image 
                      src={course.InstructorImage} 
                      alt={course.instructor}
                      width={500}
                      height={500}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{course.instructor}</p>
                      <p className="text-xs text-slate-500">{course.level} Professional</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </RevealWrapper>
  );
}