'use client';

import { useState, useEffect } from 'react';

const API_BASE = 'https://aglk.onrender.com';

interface User {
  _id: string;
  phone: string;
  name: string;
  role: string;
  location: string;
  trustScore: number;
  language: string;
  preferredChannel: string;
  produces: string[];
  needs: string[];
  businessName: string;
  isBanned: boolean;
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<'all' | 'farmer' | 'buyer'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editModal, setEditModal] = useState<User | null>(null);
  const [editForm, setEditForm] = useState({ name: '', location: '', role: '' });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest('.menu-dropdown')) setMenuOpen(null);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/users`);
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
};
  
  const handleEdit = (user: User) => {
    setEditModal(user);
    setEditForm({ name: user.name || '', location: user.location || '', role: user.role || '' });
    setMenuOpen(null);
  };

  const handleSaveEdit = async () => {
    if (!editModal) return;
    try {
      const res = await fetch(`${API_BASE}/users/${editModal.phone}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      if (res.ok) {
        fetchUsers();
        setEditModal(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleBan = async (phone: string) => {
    try {
      const res = await fetch(`${API_BASE}/users/${phone}/ban`, { method: 'PUT' });
      if (res.ok) {
        fetchUsers();
        setMenuOpen(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (phone: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
    try {
      const res = await fetch(`${API_BASE}/users/${phone}`, { method: 'DELETE' });
      if (res.ok) {
        fetchUsers();
        setMenuOpen(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRoleColor = (role: string) => {
    return role === 'farmer' 
      ? 'bg-emerald-900 text-emerald-300' 
      : 'bg-amber-900 text-amber-300';
  };

  const getTrustScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 50) return 'text-amber-400';
    return 'text-red-400';
  };

  const filteredUsers = users.filter(user => {
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesSearch = user.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.phone.includes(searchQuery);
    return matchesRole && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-gray-400 animate-pulse">Loading users...</div>
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
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Users</h1>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-auto"
          />
          <select 
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value as any)}
            className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="all">All Roles</option>
            <option value="farmer">Farmers</option>
            <option value="buyer">Buyers</option>
          </select>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No users found
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Name</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Phone</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Role</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Location</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Trust</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Channel</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredUsers.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-800/50">
                      <td className="px-4 sm:px-6 py-4 font-medium text-white">{user.name || '-'}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-400 font-mono text-sm">{user.phone}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-400">{user.location || '-'}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className={`font-medium ${getTrustScoreColor(user.trustScore || 0)}`}>
                          {user.trustScore || 0}%
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-400">{user.preferredChannel || '-'}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setMenuOpen(menuOpen === user._id ? null : user._id);
                            }}
                            className="p-1 text-gray-400 hover:text-white"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="5" r="2"/>
                              <circle cx="12" cy="12" r="2"/>
                              <circle cx="12" cy="19" r="2"/>
                            </svg>
                          </button>
                          {menuOpen === user._id && (
                            <div className="menu-dropdown absolute right-0 mt-1 w-32 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                              <button onClick={(e) => { e.stopPropagation(); handleEdit(user); }} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Edit</button>
                              <button onClick={(e) => { e.stopPropagation(); handleBan(user.phone); }} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Ban</button>
                              <button onClick={(e) => { e.stopPropagation(); handleDelete(user.phone); }} className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700">Delete</button>
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
          Showing {filteredUsers.length} of {users.length} users
        </div>

        {editModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-white mb-4">Edit User</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Role</label>
                  <select
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  >
                    <option value="farmer">Farmer</option>
                    <option value="buyer">Buyer</option>
                  </select>
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