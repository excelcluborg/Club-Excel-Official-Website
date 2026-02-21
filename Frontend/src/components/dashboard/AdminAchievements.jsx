import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, X, Upload, Trophy } from 'lucide-react';

const AdminAchievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        photos: []
    });
    const [selectedFiles, setSelectedFiles] = useState([]);

    const API_BASE_URL = 'https://club-excel-official-website.onrender.com/api/achievements/achievements';
    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        fetchAchievements();
    }, []);

    const fetchAchievements = async () => {
        try {
            const res = await fetch(API_BASE_URL);
            const data = await res.json();
            setAchievements(data);
        } catch (error) {
            console.error('Error fetching achievements:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        selectedFiles.forEach(file => data.append('photos', file));

        try {
            const url = editingId ? `${API_BASE_URL}/${editingId}` : API_BASE_URL;
            const method = editingId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
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
            setEditingId(null);
            setFormData({ name: '', description: '', photos: [] });
            setSelectedFiles([]);
            fetchAchievements();
        } catch (error) {
            console.error('Error saving achievement:', error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this achievement?')) return;
        try {
            const res = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!res.ok) {
                throw new Error('Failed to delete');
            }

            fetchAchievements();
        } catch (error) {
            console.error('Error deleting achievement:', error);
            alert(error.message);
        }
    };

    const openEditModal = (ach) => {
        setEditingId(ach._id);
        setFormData({ name: ach.name, description: ach.description, photos: ach.photos });
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setEditingId(null);
                        setFormData({ name: '', description: '', photos: [] });
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                >
                    <Plus className="w-4 h-4" /> ADD ACHIEVEMENT
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((ach) => (
                    <div key={ach._id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                        {ach.photos && ach.photos[0] && (
                            <div className="aspect-video relative overflow-hidden">
                                <img src={ach.photos[0]} alt={ach.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        )}
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">{ach.name}</h3>
                            <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{ach.description}</p>
                            <div className="flex gap-2">
                                <button onClick={() => openEditModal(ach)} className="p-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete(ach._id)} className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] w-full max-w-lg p-8 relative overflow-hidden">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-neutral-500 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                            {editingId ? 'EDIT ACHIEVEMENT' : 'ADD ACHIEVEMENT'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black text-neutral-500 tracking-[0.2em] ml-2">Title</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black text-neutral-500 tracking-[0.2em] ml-2">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all h-32 resize-none"
                                    required
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
                                    />
                                    <div className="w-full bg-white/5 border border-dashed border-white/10 rounded-2xl px-6 py-8 flex flex-col items-center gap-2 group-hover:border-blue-500/30 transition-all">
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
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 text-xs font-black uppercase tracking-[0.2em] transition-all disabled:opacity-50"
                            >
                                {loading ? 'PROCESSING...' : (editingId ? 'UPDATE ACHIEVEMENT' : 'ADD ACHIEVEMENT')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAchievements;
