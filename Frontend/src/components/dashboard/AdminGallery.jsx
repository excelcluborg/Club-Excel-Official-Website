import React, { useState, useEffect } from 'react';
import { Plus, Trash2, X, Upload, Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const AdminGallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        groupName: ''
    });
    const [selectedFiles, setSelectedFiles] = useState([]);

    // Carousel state
    const [selectedImages, setSelectedImages] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const API_BASE_URL = 'https://club-excel-official-website.onrender.com/api/achievements/gallery';
    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setGalleryItems(data);
        } catch (error) {
            console.error('Error fetching gallery:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedFiles.length === 0) {
            alert('Please select at least one photo');
            return;
        }
        setLoading(true);

        const data = new FormData();
        data.append('groupName', formData.groupName);
        selectedFiles.forEach(file => data.append('photos', file));

        try {
            const res = await fetch(API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Operation failed');
            }

            setIsModalOpen(false);
            setFormData({ groupName: '' });
            setSelectedFiles([]);
            fetchGallery();
        } catch (error) {
            console.error('Error saving gallery item:', error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        if (!window.confirm('Are you sure you want to delete this gallery item?')) return;
        try {
            const res = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!res.ok) {
                throw new Error('Failed to delete');
            }

            fetchGallery();
        } catch (error) {
            console.error('Error deleting gallery item:', error);
            alert(error.message);
        }
    };

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

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setFormData({ groupName: '' });
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                >
                    <Plus className="w-4 h-4" /> ADD GALLERY ITEM
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                    <div
                        key={item._id}
                        onClick={() => openCarousel(item.photos)}
                        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:border-emerald-500/30 transition-all duration-300"
                    >
                        <div className="aspect-square relative overflow-hidden bg-black/20">
                            {item.photos && item.photos[0] ? (
                                <>
                                    <img src={item.photos[0]} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 className="w-8 h-8 text-white/50" />
                                    </div>
                                    {item.photos.length > 1 && (
                                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-white">
                                            +{item.photos.length - 1} MORE
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-700">
                                    <ImageIcon className="w-12 h-12 opacity-20" />
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">{item.groupName || 'No Group Name'}</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-neutral-500 text-xs uppercase tracking-widest">{item.photos.length} PHOTOS</p>
                                <button onClick={(e) => handleDelete(e, item._id)} className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Modal */}
            {selectedImages && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedImages(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-[110]"
                        onClick={() => setSelectedImages(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImages[currentIndex]}
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                            alt="Carousel item"
                        />

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

                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedImages.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Upload Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] w-full max-w-lg p-8 relative overflow-hidden">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-neutral-500 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
                            ADD GALLERY ITEM
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black text-neutral-500 tracking-[0.2em] ml-2">Group Name (Optional)</label>
                                <input
                                    type="text"
                                    value={formData.groupName}
                                    onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-emerald-500/50 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black text-neutral-500 tracking-[0.2em] ml-2">Photos</label>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        multiple
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        required
                                    />
                                    <div className="w-full bg-white/5 border border-dashed border-white/10 rounded-2xl px-6 py-8 flex flex-col items-center gap-2 group-hover:border-emerald-500/30 transition-all">
                                        <Upload className="w-6 h-6 text-neutral-500" />
                                        <span className="text-[10px] text-neutral-500 font-black tracking-widest uppercase">
                                            {selectedFiles.length > 0 ? `${selectedFiles.length} files selected` : 'CLICK TO UPLOAD IMAGES'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl py-4 text-xs font-black uppercase tracking-[0.2em] transition-all disabled:opacity-50"
                            >
                                {loading ? 'PROCESSING...' : 'ADD TO GALLERY'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminGallery;
