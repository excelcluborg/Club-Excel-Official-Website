import React, { useState, useEffect } from 'react';
import { Trophy, Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    // Modal state
    const [selectedImages, setSelectedImages] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [achRes, gallRes] = await Promise.all([
                    fetch('https://club-excel-official-website.onrender.com/api/achievements/achievements'),
                    fetch('https://club-excel-official-website.onrender.com/api/achievements/gallery')
                ]);

                if (!achRes.ok || !gallRes.ok) {
                    throw new Error('Failed to fetch data');
                }

                const achData = await achRes.json();
                const gallData = await gallRes.json();

                setAchievements(achData);
                setGallery(gallData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const openCarousel = (images, index = 0) => {
        setSelectedImages(images);
        setCurrentIndex(index);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen pt-32 pb-20 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-[10px] tracking-widest text-neutral-400 uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                        Hall of Fame
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">SUCCESS</span> STORIES
                    </h1>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">
                        Celebrating the milestones, victories, and creative excellence of the Club Excel community.
                    </p>
                </div>

                {/* Achievements Section */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <Trophy className="w-8 h-8 text-blue-500" />
                        <h2 className="text-3xl font-semibold text-white tracking-tight">Achievements</h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {achievements.map((item) => (
                            <motion.div
                                key={item._id}
                                variants={itemVariants}
                                onClick={() => item.photos?.length > 0 && openCarousel(item.photos)}
                                className="group relative bg-neutral-900/20 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                            >
                                {item.photos && item.photos.length > 0 && (
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={item.photos[0]}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Maximize2 className="w-8 h-8 text-white/50" />
                                        </div>
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {item.photos && item.photos.length > 1 && (
                                            <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                                                <ImageIcon className="w-3 h-3" /> +{item.photos.length - 1} more photos
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Gallery Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <ImageIcon className="w-8 h-8 text-emerald-500" />
                        <h2 className="text-3xl font-semibold text-white tracking-tight">Club Gallery</h2>
                    </div>

                    <div className="space-y-16">
                        {gallery.map((group) => (
                            <div key={group._id} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                                    <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                                        {group.groupName || 'Club Interaction'}
                                    </h3>
                                    <span className="text-[10px] text-neutral-500 font-mono">
                                        {group.photos.length} PHOTOS
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {group.photos.map((photo, index) => (
                                        <motion.div
                                            key={`${group._id}-${index}`}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            onClick={() => openCarousel(group.photos, index)}
                                            className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 group cursor-pointer"
                                        >
                                            <img
                                                src={photo}
                                                alt={group.groupName || 'Gallery Image'}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Maximize2 className="w-6 h-6 text-white/50" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Carousel Modal */}
            <AnimatePresence>
                {selectedImages && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImages(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    >
                        <button
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-[110]"
                            onClick={() => setSelectedImages(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={selectedImages[currentIndex]}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl shadow-blue-500/10"
                                />
                            </AnimatePresence>

                            {selectedImages.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:-left-20 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110"
                                    >
                                        <ChevronLeft className="w-8 h-8" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:-right-20 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110"
                                    >
                                        <ChevronRight className="w-8 h-8" />
                                    </button>
                                </>
                            )}

                            {/* Indicators */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                                {selectedImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
};

export default Achievements;
