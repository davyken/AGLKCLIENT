'use client';

import { useState, useEffect } from 'react';

const API_BASE = 'https://aglk.onrender.com';

interface Listing {
  _id: string;
  type: string;
  product: string;
  status: string;
  price: number | null;
  quantity: number;
  unit: string;
  location: string;
  userPhone: string;
  userName: string;
  createdAt: string;
}

interface ListingFormData {
  type: string;
  product: string;
  quantity: number;
  unit: string;
  price: number | null;
  location: string;
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'sell' | 'buy'>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState<Listing | null>(null);
  const [formData, setFormData] = useState<ListingFormData>({
    type: 'sell',
    product: '',
    quantity: 1,
    unit: 'kg',
    price: null,
    location: ''
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest('.menu-dropdown')) setMenuOpen(null);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const res = await fetch(`${API_BASE}/listing`);
      const data = await res.json();
      const listingsArr: Listing[] = Array.isArray(data) ? data : (data as any).data || [];
      setListings(listingsArr);
      setLoading(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch listings');
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      const res = await fetch(`${API_BASE}/listing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        fetchListings();
        setCreateModal(false);
        setFormData({ type: 'sell', product: '', quantity: 1, unit: 'kg', price: null, location: '' });
      }
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const handleEdit = (listing: Listing) => {
    setEditModal(listing);
    setFormData({
      type: listing.type,
      product: listing.product,
      quantity: listing.quantity,
      unit: listing.unit || 'kg',
      price: listing.price,
      location: listing.location || ''
    });
    setMenuOpen(null);
  };

  const handleSaveEdit = async () => {
    if (!editModal) return;
    try {
      const res = await fetch(`${API_BASE}/listing/${editModal._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        fetchListings();
        setEditModal(null);
      }
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this listing?')) return;
    try {
      const res = await fetch(`${API_BASE}/listing/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchListings();
        setMenuOpen(null);
      }
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const filteredListings = listings.filter(l => {
    if (filter !== 'all' && l.type !== filter) return false;
    if (statusFilter !== 'all' && l.status !== statusFilter) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-900 text-emerald-300';
      case 'matched': return 'bg-blue-900 text-blue-300';
      case 'completed': return 'bg-purple-900 text-purple-300';
      case 'cancelled': return 'bg-red-900 text-red-300';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'sell' ? 'bg-emerald-600' : 'bg-amber-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-gray-400 animate-pulse">Loading listings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-4">
        <div className="text-red-400">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Listings</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-3">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="sell">Sell</option>
              <option value="buy">Buy</option>
            </select>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="matched">Matched</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <button
            onClick={() => setCreateModal(true)}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
          >
            + Add Listing
          </button>
        </div>

        {filteredListings.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No listings found
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Type</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Product</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Quantity</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Price</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Location</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Status</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Date</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredListings.map((listing) => (
                    <tr key={listing._id} className="hover:bg-gray-800/50">
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white ${getTypeColor(listing.type)}`}>
                          {listing.type.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 font-medium text-white">{listing.product}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-400">{listing.quantity} {listing.unit}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-400">
                        {listing.price ? `${listing.price.toLocaleString()} XAF` : '-'}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-400">{listing.location || '-'}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                          {listing.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-500 text-sm">
                        {new Date(listing.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setMenuOpen(menuOpen === listing._id ? null : listing._id);
                            }}
                            className="p-1 text-gray-400 hover:text-white"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="5" r="2"/>
                              <circle cx="12" cy="12" r="2"/>
                              <circle cx="12" cy="19" r="2"/>
                            </svg>
                          </button>
                          {menuOpen === listing._id && (
                            <div className="menu-dropdown absolute right-0 mt-1 w-28 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                              <button onClick={(e) => { e.stopPropagation(); handleEdit(listing); }} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Edit</button>
                              <button onClick={(e) => { e.stopPropagation(); handleDelete(listing._id); }} className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700">Delete</button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredListings.length} of {listings.length} listings
        </div>

        {createModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">Create Listing</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="sell">Sell</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Product</label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    placeholder="e.g. Tomatoes"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Quantity</label>
                    <input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Unit</label>
                    <input
                      type="text"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                      placeholder="e.g. kg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Price (XAF)</label>
                  <input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value ? parseInt(e.target.value) : null })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    placeholder="e.g. 5000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    placeholder="e.g. Douala"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleCreate}
                  className="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
                >
                  Create
                </button>
                <button
                  onClick={() => { setCreateModal(false); setFormData({ type: 'sell', product: '', quantity: 1, unit: 'kg', price: null, location: '' }); }}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {editModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">Edit Listing</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="sell">Sell</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Product</label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Quantity</label>
                    <input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Unit</label>
                    <input
                      type="text"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Price (XAF)</label>
                  <input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value ? parseInt(e.target.value) : null })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditModal(null)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}