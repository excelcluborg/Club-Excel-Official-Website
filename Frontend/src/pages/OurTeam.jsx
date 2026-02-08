import { useState } from 'react';
import { Hexagon, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const OurTeam = () => {
    const advisors = [
        { name: "Swetanjali Mahrana", role: "Assistant Professor", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/swetanjali_p7ksis.jpg", color: "blue", catagory: "advisor" },
        { name: "Bandhan Panda", role: "Assistant Professor", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/bandhan_hzhdle.jpg", color: "blue", catagory: "advisor" }
    ];

    const members = [


        { name: "Payal", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/payaljr_xiugib.jpg", catagory: "member" },
        { name: "Govinda", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Govindajr_usc9uv.jpg", catagory: "member" },
        { name: "Rudransh", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/rudranshjr_nxkvf0.jpg", catagory: "member" },
        { name: "Gaurav Tiwari", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/gauravjr_rxtljg.jpg", catagory: "member" },
        { name: "Abhimanyu", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Abhimanyujr_z3wjz0.jpg", catagory: "member" },
        { name: "Sriya", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/usriyareddyjr_pmm8is.jpg", catagory: "member" },
        { name: "Sruti", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/srutiprustyjr_vby3el.jpg", catagory: "member" },
        { name: "Priya", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Priyapatrajr_eeil16.jpg", catagory: "member" },
        { name: "Sudip", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Sudipdasjr_ytmw61.jpg", catagory: "member" },
        { name: "Rudra", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Rudrajr_kafee9.jpg", catagory: "member" },
        { name: "Aman", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/amanjr_ivv3wt.jpg", catagory: "member" },
        { name: "Srikant", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/srikantjr_uathhu.jpg", catagory: "member" },
        { name: "Mohammad Ehsan", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/eshanjr_rkvouo.jpg", catagory: "member" },
        { name: "Sai Kalyan", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Ksaikalyanjr_qv8dwg.jpg", catagory: "member" },
        { name: "Disha", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/disha_pyzl3j.jpg", linkedin: "https://www.linkedin.com/in/disha-rani-dash-74409b2b5", catagory: "member" },
        { name: "Sweta Gupta", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sweta_ezhrdo.jpg", linkedin: "https://www.linkedin.com/in/sweta-gupta-67386b282", catagory: "member" },
        { name: "Renisha Parui", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/renisa_uovc0i.jpg", linkedin: "https://www.linkedin.com/in/renisha-p-3b264a263/", catagory: "member" },
        { name: "Abhisekh Padhy", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/abhishek_hzkvoq.jpg", linkedin: "https://www.linkedin.com/in/abhisekh-padhy-7374011b6", catagory: "member" },
        { name: "Biraja", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/biraja_iq7ctn.jpg", linkedin: "https://www.linkedin.com/in/biraja-nayak-993960310", catagory: "member" },
        { name: "Samiksha Mohapatra", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/samiksha_itykyp.jpg", linkedin: "https://www.linkedin.com/in/samiksha-mohapatra-a34517334/", catagory: "member" },
        { name: "Akash Kumar", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/akash_lql5nz.jpg", linkedin: "https://www.linkedin.com/in/akash-kumar-17576132b", catagory: "member" },
        { name: "Sujata Kumari", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sujata_jjepca.jpg", linkedin: "https://www.linkedin.com/in/sujata-kumari-44779b316/", catagory: "member" },
        { name: "Ashutosh Nayak", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/ashutoshnayak_eazzxe.jpg", linkedin: "https://www.linkedin.com/in/ashutosh-nayak-749ab4222", catagory: "member" },
        { name: "Tadvab Pradhan", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/tadvab_ekrdaa.jpg", linkedin: "https://www.linkedin.com/in/tadvab-pradhan-97a976300", catagory: "member" },
        { name: "Riya Suman Padhy", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/riya_runbp7.jpg", linkedin: "https://www.linkedin.com/in/riya-padhy-139397330", catagory: "member" },
        { name: "Amitanshu Sahu", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/amitanshu_koknf3.jpg", linkedin: "https://www.linkedin.com/in/amitanshusahu/", catagory: "member" },
        { name: "K Swagat Kumar", role: "Core Member", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/swagat_jk8i2u.jpg", linkedin: "https://www.linkedin.com/in/k-swagat-kumar-919046210/", catagory: "member" },
        { name: "sai sarthak sadangi", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495575/sai_sarthak_djsqze.jpg", linkedin: "https://www.linkedin.com/in/sai-sarthak-sadangi/", catagory: "member" },
        { name: "Ashmita Maharana", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495573/ashmita_fntwwo.jpg", linkedin: "https://www.linkedin.com/in/ashmita-maharana/", catagory: "member" },
        { name: "N Jayant Rao", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495573/Jayant.jpg_afk6gv.jpg", linkedin: "https://www.linkedin.com/in/n-jayant-rao-093036315", catagory: "member" },
        { name: "Md Amanullah", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495574/aman_juytvb.jpg", linkedin: "https://www.linkedin.com/in/md-amanullah-79523224b/", catagory: "member" },
        { name: "Ayush Kumar Gupta", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495576/ayush_ms1dw7.jpg", linkedin: "https://www.linkedin.com/in/ayush-kumar-gupta-a1450a324/", catagory: "member" },
        { name: "D.Jyothika", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495575/jyothika_yvu2br.jpg", linkedin: "https://www.linkedin.com/in/d-jyothika-2b5734332", catagory: "member" },
        { name: "Puja Pradhan", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495573/puja_uvpv2u.jpg", linkedin: "https://www.linkedin.com/in/puja-pradhan-34ba2b248", catagory: "member" },
        { name: "Vineet Patnaik", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495574/vineet_pchlrf.jpg", linkedin: "https://www.linkedin.com/in/vineet-patnaik-76857436b/", catagory: "member" },
        { name: "Ansuman Padhy", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495575/Ansuman_stu9vg.jpg", linkedin: "https://www.linkedin.com/in/ansuman-padhy-7603b5322/", catagory: "member" },
        { name: "Koustubha pathy", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495576/koustubh_k9nv5u.jpg", linkedin: "https://www.linkedin.com/in/koustubha-pathy-758243332", catagory: "member" },
        { name: "M.Roshni Princy", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495573/roshni_jaqco1.jpg", linkedin: "https://www.linkedin.com/in/m-roshni-princy-ba517a358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", catagory: "member" },
        { name: "Aditya kumar Rath", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495573/aditya_vlxeu1.jpg", linkedin: "https://www.linkedin.com/in/aditya-kumar-rath-849aa5309", catagory: "member" },
        { name: "Rajiv dey", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495574/rajiv_irdthi.jpg", linkedin: "https://www.linkedin.com/in/rajiv-dey-6b4033307", catagory: "member" },
        { name: "Yagyashini Bhagat", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495573/yagnyashini_hxzvfj.jpg", linkedin: "https://www.linkedin.com/in/yagyashini-bhagat-18151a332", catagory: "member" },
        { name: "Rishav Kumar Singh", role: "Core Member", img: "https://res.cloudinary.com/dia6lwiki/image/upload/v1770495574/rishav_foxeh8.jpg", linkedin: "https://www.linkedin.com/in/rishav-kumar-singh-81a69433b", catagory: "member" }
    ];

    const alumni = [
        { name: "Anwesh", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/anwesh_j8xqgs.jpg", catagory: "alumni" },
        { name: "Mayank", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/mayank_uftxop.jpg", catagory: "alumni" },
        { name: "SOUMIK BERA", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/soumik_m9lxpr.jpg", catagory: "alumni" },
        { name: "Bishal", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/bishal_c4efqq.jpg", catagory: "alumni" },
        { name: "Akshat", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/akshat_wekeyc.jpg", catagory: "alumni" },
        { name: "Naveen", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/naveen_bpyu9d.jpg", catagory: "alumni" },
        { name: "Abhinav", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/abhinav_go4b1h.jpg", catagory: "alumni" },
        { name: "Rahul Kumar", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/rahul_mensfn.jpg", catagory: "alumni" },
        { name: "Gourav", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/gourav_pixtgy.jpg", catagory: "alumni" },
        { name: "Asutosh", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/ashutosh_nwrl6m.png", catagory: "alumni" },
        { name: "Ashutosh Biswal", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/ashutoshbiswal_orvaln.jpg", catagory: "alumni" },
        { name: "Adil Zamal", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/adil_e3w7ij.jpg", catagory: "alumni" },
        { name: "Rishav Kumar", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/RishavKumar_lf5czv.jpg", catagory: "alumni" },
        { name: "Asish Patnaik", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/asishpatnaik_nd67pf.jpg", catagory: "alumni" },
        { name: "Aryan Asgar", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/aryan_hxght4.jpg", catagory: "alumni" },
        { name: "Chiranjeeb Nayak", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/chiranjeeb_gtyr83.jpg", catagory: "alumni" },
        { name: "K Nandini Dora", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/nandini_bp0vxa.jpg", catagory: "alumni" },
        { name: "Nikhil Kumar Singh", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/nikhil_culhu1.jpg", catagory: "alumni" },
        { name: "Ritik Kumar Kapsime", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/ritik_apzbpi.jpg", catagory: "alumni" },
        { name: "Sanat Dash", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sanat_kxlfc3.jpg", catagory: "alumni" },
        { name: "Sushovan Paul", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sushovan_dwlcoa.jpg", catagory: "alumni" },
        { name: "Sunny Kumar", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sunny_yg5zqc.jpg", catagory: "alumni" },
        { name: "Ashu Sharma", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/ashu_jtid6e.jpg", catagory: "alumni" },
        { name: "Akarsh Agarwal", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/akarsh_j6tmjx.jpg", catagory: "alumni" },
        { name: "Dipti Mishra", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/deepti_kmbddc.jpg", catagory: "alumni" },
        { name: "Hritvik Ranjan", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/hritvik_zvo6lq.jpg", catagory: "alumni" },
        { name: "Laxmi Narayan", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/narayan_wfr5np.jpg", catagory: "alumni" },
        { name: "Rupesh Raj Tripathy", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/rupesh_uu1mb1.jpg", catagory: "alumni" },
        { name: "Shradha Kyal", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sradha_qez6zn.jpg", catagory: "alumni" },
        { name: "Sonali Sahu", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sonali_g2ptnk.jpg", catagory: "alumni" },
        { name: "Niharika Kumari", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Niharika_ohixb1.jpg", catagory: "alumni" },
        { name: "Suraj Kumar Sahu", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/suraj_numqis.jpg", catagory: "alumni" },
        { name: "Sarbajit Mohanty", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sarbajit_k1crge.jpg", catagory: "alumni" },
        { name: "Sanjeev", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sanjeev_kxlni0.jpg", catagory: "alumni" },
        { name: "Pabitra", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Pabitra_fwoy8a.jpg", catagory: "alumni" },
        { name: "Vibhav", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/vibhav_mhouxi.jpg", catagory: "alumni" },
        { name: "Varsha", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/varsha_qvuk7t.jpg", catagory: "alumni" },
        { name: "Biswamohan", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Biswabhiya_ywj7nb.jpg", catagory: "alumni" },
        { name: "Faizan", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/faizanbhiya_wf694c.jpg", catagory: "alumni" },
        { name: "Kishlay", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/kishlaybhiya_o5oswh.png", catagory: "alumni" },
        { name: "Richa", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/richadi_rd4s1o.jpg", catagory: "alumni" },
        { name: "Ankit", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/Ankitbhiya_ueakc8.jpg", catagory: "alumni" },
        { name: "Srikant", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/srikant_ykiy5f.jpg", catagory: "alumni" },
        { name: "Sanket", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/sanket_n7jkqz.jpg", catagory: "alumni" },
        { name: "samrat", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/samrat_akx7s2.jpg", catagory: "alumni" },
        { name: "Rupa", role: "Club Alumni", img: "https://res.cloudinary.com/drliwoe9a/image/upload/v1770404485/rupa_e54xzg.jpg", catagory: "alumni" }
    ];

    const [activeSection, setActiveSection] = useState('members'); // 'Members' or 'Alumni'

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-32">
                <h1 data-aos="fade-up" className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
                    OUR TEAM
                </h1>
                <p data-aos="fade-up" data-aos-delay="100" className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                    The visionaries and innovators behind Club Excel. From our dedicated advisors to our successful alumni network.
                </p>
            </div>

            {/* Advisors Section */}
            <section className="mb-40">
                <h2 data-aos="fade-right" className="text-sm font-mono text-blue-500 mb-16 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span> Club Advisors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {advisors.map((advisor, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}
                            className="group relative p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 transition-all duration-500 tilt-card">
                            <div className="h-full bg-[#080808] rounded-[1.9rem] p-10 border border-white/5 relative overflow-hidden flex flex-col items-center">
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                                <div className="w-64 h-64 rounded-2xl overflow-hidden mb-10 border border-white/10 group-hover:border-blue-500/30 transition-all duration-700 bg-neutral-900 shadow-2xl">
                                    <img
                                        src={advisor.img.startsWith('http') ? advisor.img : `/members/${advisor.img}`}
                                        alt={advisor.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + advisor.name + "&background=111&color=fff"; }}
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{advisor.name}</h3>
                                <p className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase mb-1">Club Advisor</p>
                                <p className="text-neutral-500 font-mono text-[10px] tracking-[0.1em] uppercase mb-8">{advisor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Toggle Buttons */}
            <div className="flex justify-center gap-6 mb-20" data-aos="fade-up">
                <button
                    onClick={() => setActiveSection('members')}
                    className={`px-8 py-3 rounded-full font-mono text-sm tracking-widest transition-all duration-300 border ${activeSection === 'members'
                        ? 'bg-purple-500 text-white border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/20'
                        }`}
                >
                    CORE MEMBERS
                </button>
                <button
                    onClick={() => setActiveSection('alumni')}
                    className={`px-8 py-3 rounded-full font-mono text-sm tracking-widest transition-all duration-300 border ${activeSection === 'alumni'
                        ? 'bg-purple-500 text-white border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/20'
                        }`}
                >
                    CLUB ALUMNI
                </button>
            </div>

            {/* Members Section */}
            {activeSection === 'members' && (
                <section className="mb-40 transition-all duration-500">
                    <h2 data-aos="fade-right" className="text-sm font-mono text-purple-500 mb-16 uppercase tracking-widest flex items-center gap-3">
                        <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse"></span> Core Members
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {members.map((member, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={(idx % 4) * 50}
                                onClick={() => member.linkedin && window.open(member.linkedin, '_blank')}
                                className={`group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-500 tilt-card h-[480px] ${member.linkedin ? 'cursor-pointer' : ''}`}
                            >
                                <div className="h-full bg-[#080808] rounded-[2.4rem] p-10 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
                                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="w-40 h-40 rounded-3xl overflow-hidden mb-8 border border-white/5 group-hover:border-purple-500/20 transition-all duration-700 bg-neutral-900 shadow-2xl">
                                        <img
                                            src={member.img.startsWith('http') ? member.img : `/members/${member.img}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=111&color=fff"; }}
                                        />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">{member.name}</h4>
                                    <p className="text-[11px] text-purple-400/80 font-mono uppercase tracking-[0.25em]">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Alumni Section */}
            {activeSection === 'alumni' && (
                <section className="transition-all duration-500">
                    <h2 data-aos="fade-right" className="text-sm font-mono text-purple-500 mb-16 uppercase tracking-widest flex items-center gap-3">
                        <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse"></span> Distinguished Alumni
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {alumni.map((member, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={(idx % 4) * 50}
                                onClick={() => member.linkedin && window.open(member.linkedin, '_blank')}
                                className={`group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-500 tilt-card h-[480px] ${member.linkedin ? 'cursor-pointer' : ''}`}
                            >
                                <div className="h-full bg-[#080808] rounded-[2.4rem] p-10 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
                                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="w-40 h-40 rounded-3xl overflow-hidden mb-8 border border-white/5 group-hover:border-purple-500/20 transition-all duration-700 bg-neutral-900 shadow-2xl">
                                        <img
                                            src={member.img.startsWith('http') ? member.img : `/members/${member.img}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=111&color=fff"; }}
                                        />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">{member.name}</h4>
                                    <p className="text-[11px] text-purple-400/80 font-mono uppercase tracking-[0.25em]">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default OurTeam;
