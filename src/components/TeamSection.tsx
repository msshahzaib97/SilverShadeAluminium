import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Linkedin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Compass, 
  FileCheck,
  Building,
  GraduationCap
} from 'lucide-react';
import { COMPANY_CONFIG } from '../data/content';

interface TeamSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

interface TeamMember {
  id: string;
  name: string;
  arabicName: string;
  role: string;
  arabicRole: string;
  department: string;
  experienceYears: number;
  credentials: string[];
  bio: string;
  image: string;
  specialization: string;
  keyProjects: string[];
  contactEmail: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filterDepartment, setFilterDepartment] = useState<'all' | 'engineering' | 'fabrication' | 'estimation' | 'quality'>('all');

  const teamMembers: TeamMember[] = [
    {
      id: 'eng-tariq',
      name: 'Eng. Tariq Al-Mansoor',
      arabicName: 'م. طارق المنصور',
      role: 'Chief Facade & Structural Engineer',
      arabicRole: 'رئيس مهندسي الواجهات والإنشاءات',
      department: 'engineering',
      experienceYears: 18,
      credentials: ['B.Sc. Civil & Structural Engineering', 'Estidama PQP Certified', 'Member UAE Society of Engineers'],
      bio: 'Leading structural facade calculations, wind-load modeling, and thermal-break curtain wall engineering across Abu Dhabi and Dubai high-rise and luxury residential villas.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      specialization: 'Curtain Wall 10/5 & 8/5 Structural Glass, High Wind-Load Engineering',
      keyProjects: ['Al Raha Beach Villa Facades', 'Saadiyat Cultural District Private Residences', 'Musaffah Commercial Showrooms'],
      contactEmail: 'engineering@silvershadealuminium.com'
    },
    {
      id: 'ustad-khalid',
      name: 'Master Craftsman Khalid Mahmoud',
      arabicName: 'المعلم خالد محمود',
      role: 'Head of Majlis & Qarmeed Craftsmanship',
      arabicRole: 'رئيس قسم بناء المجالس والقرميد الإسباني',
      department: 'fabrication',
      experienceYears: 22,
      credentials: ['Master Craftsman Guild Certification', 'Traditional Gulf Heritage Masonry', 'Spanish Clay Tile Specialist'],
      bio: 'Over two decades specializing in thermal-insulated Tabuk blockwork, authentic Spanish terracotta Qarmeed roof engineering, and decorative timber-lined majlis interiors.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      specialization: 'Tabuk Majlis Construction, Spanish Terracotta Qarmeed Tile Roofs',
      keyProjects: ['Khalifa City Royal Majlis', 'MBZ City Heritage Guest Lounges', 'Al Ain Farmhouse Majlis Projects'],
      contactEmail: 'majlis@silvershadealuminium.com'
    },
    {
      id: 'eng-sameer',
      name: 'Eng. Sameer Al-Khatib',
      arabicName: 'م. سمير الخطيب',
      role: 'Senior Aluminium CNC & Fabrication Manager',
      arabicRole: 'مدير تصنيع الألمنيوم والتحكم الرقمي CNC',
      department: 'fabrication',
      experienceYears: 14,
      credentials: ['M.Sc. Advanced Manufacturing & Mechatronics', 'German CNC Machinery Specialist (Emmegi & Elumatec)', 'Lean 6-Sigma Green Belt'],
      bio: 'Directs the 12,000 sq ft Musaffah fabrication factory, ensuring sub-millimeter precision corner crimping, automated CNC milling, and electrostatic architectural powder coating.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      specialization: '10cm & 10.5cm Profile Extrusion Machining, Thermal-Break Assembly',
      keyProjects: ['Dubai Hills Sliding Door Systems', 'Palm Jumeirah Glass Balustrades', 'Abu Dhabi Luxury Kitchen Installations'],
      contactEmail: 'factory@silvershadealuminium.com'
    },
    {
      id: 'eng-rashid',
      name: 'Eng. Rashid Zafar',
      arabicName: 'م. راشد ظفر',
      role: 'Principal Architectural Estimator & Project Director',
      arabicRole: 'رئيس قسم حساب الكميات وتخطيط المشاريع',
      department: 'estimation',
      experienceYears: 16,
      credentials: ['B.S. Architectural Engineering', 'RICS Quantity Surveying Certified', 'AutoCAD & BIM Revit Master'],
      bio: 'Provides transparent, itemized Bill of Quantities (BOQ), custom 3D shop drawings, and exact AED price formulations with zero hidden fees for villa owners and general contractors.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      specialization: 'Project Quantity Surveying, Fast-Track Municipality Submissions, BOQ Modeling',
      keyProjects: ['Yas Acres Window Packages', 'Al Barari Thermal Facades', 'Sharjah Waterfront Villas'],
      contactEmail: 'Silvershadesales@gmail.com'
    },
    {
      id: 'inspector-farooq',
      name: 'Farooq Al-Nuaimi',
      arabicName: 'فاروق النعيمي',
      role: 'Director of Quality Assurance & Site Compliance',
      arabicRole: 'مدير ضبط الجودة والتفتيش الميداني',
      department: 'quality',
      experienceYears: 15,
      credentials: ['ISO 9001:2015 Lead Auditor', 'ASTM Glass Testing Certified', 'Dubai & Abu Dhabi Municipality Code Inspector'],
      bio: 'Conducts rigorous pre-handover water penetration tests, acoustic decibel checks, silicone adhesion verification, and structural stability audits on every installed project.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      specialization: 'Acoustic Decibel Testing, Water Tightness ASTM E1105 Audits, Safety Balustrade Load Testing',
      keyProjects: ['Emirates Hills Glass Testing', 'Abu Dhabi Corniche Facade Audits', 'Jumeirah Golf Estates Villa Handover'],
      contactEmail: 'quality@silvershadealuminium.com'
    },
    {
      id: 'ustad-bilal',
      name: 'Bilal Al-Qureshi',
      arabicName: 'بلال القريشي',
      role: 'Master Tent Architect & Steel Forge Lead',
      arabicRole: 'كبير مهندسي الخيام الشتوية والإنشاءات الحديدية',
      department: 'fabrication',
      experienceYears: 19,
      credentials: ['Traditional Kuwaiti & Gulf Tent Guild Master', 'AWS Certified Structural Welder', 'Tensile Membrane Engineering'],
      bio: 'Master of authentic Kuwaiti steel sword arches (سيف حديد), German Mehler PVC heat-welded roofing, and panoramic 10cm sliding glass integration for desert and villa winter retreats.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      specialization: 'Kuwaiti Winter Tents, Sword Arch Steel Forging, Tensile Membrane Structures',
      keyProjects: ['Al Khatim Desert Retreat Tents', 'Sweihan Farm Luxury Winter Lounges', 'Dubai Desert VIP Pavilions'],
      contactEmail: 'tents@silvershadealuminium.com'
    }
  ];

  const filteredMembers = filterDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.department === filterDepartment);

  return (
    <section id="team" className="py-24 sm:py-32 bg-[#f8faf9] dark:bg-[#060a08] border-t border-emerald-900/10 dark:border-emerald-500/10 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-emerald-600 dark:bg-emerald-400" />
              <span className="text-xs font-bold tracking-[0.35em] text-emerald-700 dark:text-emerald-400 uppercase">
                ENGINEERING EXCELLENCE &amp; LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white">
              Meet Our <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Master Engineers</span> &amp; Fabricators
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Every Silver Shade architectural project is led by certified facade engineers, traditional master craftsmen, and ISO-certified quality inspectors with decades of UAE experience.
            </p>
          </div>

          {/* Direct Consultation Action */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('Engineering Consultation')}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Chief Engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-white/10">
          {[
            { id: 'all', label: 'All Leadership & Craftsmen' },
            { id: 'engineering', label: 'Facade & Structural Engineering' },
            { id: 'fabrication', label: 'Factory & Heritage Craftsmen' },
            { id: 'estimation', label: 'Quantity Surveying & Estimates' },
            { id: 'quality', label: 'Quality & Municipal QA' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterDepartment(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-none ${
                filterDepartment === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group bg-white dark:bg-[#0c120f] border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 p-6 shadow-xl hover:shadow-2xl hover:shadow-emerald-900/10 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative mb-5 overflow-hidden border border-slate-100 dark:border-white/10 bg-slate-100 dark:bg-white/5 aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Silver Shade Aluminium UAE`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Experience Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-600/90 text-white backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-emerald-400/30">
                    {member.experienceYears}+ Yrs UAE Exp
                  </div>

                  {/* Department Tag */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block">
                      {member.department.toUpperCase()}
                    </span>
                    <span className="text-white font-arabic text-xs font-semibold block" dir="rtl">
                      {member.arabicName}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-normal">
                  {member.bio}
                </p>

                {/* Credentials / Certifications */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/10 mb-4">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Key Credentials:
                  </div>
                  {member.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Profile &amp; Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/971523352536?text=Hello%20Silver%20Shade,%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(member.name)}%20regarding%20my%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  title="Direct WhatsApp Consultation"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Engineering Certifications Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-950/80 via-[#07120c] to-slate-950 border border-emerald-500/30 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified UAE Fabrication &amp; Engineering Facility</span>
            </div>
            <h3 className="text-2xl font-light text-white">
              Direct Engineering Oversight On Every Single Joint &amp; Extrusion
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              We do not outsource engineering or sub-contract master fabrication. All CAD shop drawings, CNC miter joints, thermal tests, and structural installations are performed directly by our in-house engineering team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="px-4 py-3 bg-white/5 border border-white/10 text-center">
              <span className="text-2xl font-bold text-emerald-400 block">15+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Years in UAE</span>
            </div>
            <div className="px-4 py-3 bg-white/5 border border-white/10 text-center">
              <span className="text-2xl font-bold text-emerald-400 block">100%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">In-House QA</span>
            </div>
            <div className="px-4 py-3 bg-white/5 border border-white/10 text-center">
              <span className="text-2xl font-bold text-emerald-400 block">15-Yr</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Warranty</span>
            </div>
          </div>
        </div>

      </div>

      {/* Team Member Deep Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#080e0a] border border-emerald-500/40 p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-white/10">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-emerald-500/30 shrink-0"
                />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
                    {selectedMember.department.toUpperCase()} • {selectedMember.experienceYears}+ YEARS EXPERIENCE
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedMember.name}
                  </h3>
                  <div className="text-sm font-arabic text-emerald-300 mb-2">
                    {selectedMember.arabicName} — {selectedMember.arabicRole}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>

              <div className="py-6 space-y-5 border-b border-white/10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Specialized Architectural Domain:
                  </h4>
                  <p className="text-xs text-slate-200 bg-white/5 p-3 border border-white/10">
                    {selectedMember.specialization}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Key Completed Landmark Projects:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedMember.keyProjects.map((proj, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    Professional Qualifications &amp; Accreditations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedMember.credentials.map((cred, idx) => (
                      <div key={idx} className="p-2 bg-emerald-950/40 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Direct Inquiries: <span className="text-emerald-400">{selectedMember.contactEmail}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedMember(null);
                      onOpenQuoteModal(`Consultation with ${selectedMember.name}`);
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase font-bold tracking-wider cursor-pointer"
                  >
                    Request Project Review
                  </button>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-semibold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
