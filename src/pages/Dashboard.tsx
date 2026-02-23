"use client";

import React from 'react';
import { useSession } from '@/contexts/SessionContext';
import { Button } from '@/components/ui/button';
import { LogOut, User, Bell, Settings, CreditCard, Users, BarChart3, FileText } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useSession();

  const handleSignOut = async () => {
    await signOut();
    showSuccess('Successfully signed out');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ff5eb8]/5 to-[#9114af]/5">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#ff5eb8] to-[#9114af]"></div>
            <span className="text-xl font-bold text-gray-900">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#ff5eb8] to-[#9114af] flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {user?.email}
              </span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="border-gray-300 hover:bg-gray-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.email?.split('@')[0] || 'User'}!
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your account today.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10">
                  <Users className="h-6 w-6 text-[#9114af]" />
                </div>
                <span className="text-sm font-medium text-gray-500">Active</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Account Status</h3>
              <p className="text-gray-600 text-sm">Your account is active and ready to use</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10">
                  <CreditCard className="h-6 w-6 text-[#9114af]" />
                </div>
                <span className="text-sm font-medium text-gray-500">Verified</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {user?.email_confirmed_at ? 'Verified' : 'Pending'}
              </h3>
              <p className="text-gray-600 text-sm">
                {user?.email_confirmed_at ? 'Email confirmed' : 'Check your email to verify'}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10">
                  <BarChart3 className="h-6 w-6 text-[#9114af]" />
                </div>
                <span className="text-sm font-medium text-gray-500">Member Since</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}
              </h3>
              <p className="text-gray-600 text-sm">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Join date'}
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10">
                  <Settings className="h-6 w-6 text-[#9114af]" />
                </div>
                <span className="text-sm font-medium text-gray-500">Settings</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Profile</h3>
              <p className="text-gray-600 text-sm">Manage your account settings</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Recent activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                  <Button variant="ghost" size="sm" className="text-[#9114af] hover:text-[#ff5eb8]">
                    View all
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ff5eb8]/20 to-[#9114af]/20 flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-[#9114af]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">Account created</h4>
                      <p className="text-sm text-gray-600">
                        Welcome to our platform! Your account was successfully created.
                      </p>
                      <span className="text-xs text-gray-500 mt-2 block">
                        {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Recently'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ff5eb8]/20 to-[#9114af]/20 flex items-center justify-center flex-shrink-0">
                      <Bell className="h-5 w-5 text-[#9114af]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">Welcome notification</h4>
                      <p className="text-sm text-gray-600">
                        Check your email for a welcome message and next steps.
                      </p>
                      <span className="text-xs text-gray-500 mt-2 block">Today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Quick links */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h2>
                
                <div className="space-y-4">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#9114af]/30 hover:bg-[#9114af]/5 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#ff5eb8]/10 to-[#9114af]/10 flex items-center justify-center group-hover:from-[#ff5eb8]/20 group-hover:to-[#9114af]/20 transition-colors">
                      <User className="h-5 w-5 text-[#9114af]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Edit Profile</h4>
                      <p className="text-sm text-gray-600">Update your personal information</p>
                    </div>
                  </Link>
                  
                  <Link
                    to="/settings"
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#9114af]/30 hover:bg-[#9114af]/5 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#ff5eb8]/10 to-[#9114af]/10 flex items-center justify-center group-hover:from-[#ff5eb8]/20 group-hover:to-[#9114af]/20 transition-colors">
                      <Settings className="h-5 w-5 text-[#9114af]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Settings</h4>
                      <p className="text-sm text-gray-600">Configure your account preferences</p>
                    </div>
                  </Link>
                  
                  <Link
                    to="/documents"
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#9114af]/30 hover:bg-[#9114af]/5 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#ff5eb8]/10 to-[#9114af]/10 flex items-center justify-center group-hover:from-[#ff5eb8]/20 group-hover:to-[#9114af]/20 transition-colors">
                      <FileText className="h-5 w-5 text-[#9114af]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Documents</h4>
                      <p className="text-sm text-gray-600">View and manage your files</p>
                    </div>
                  </Link>
                </div>

                {/* What's next section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">What's next?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#ff5eb8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#9114af] text-sm font-medium">1</span>
                      </div>
                      <span className="text-sm text-gray-600">Complete your profile setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#ff5eb8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#9114af] text-sm font-medium">2</span>
                      </div>
                      <span className="text-sm text-gray-600">Explore available features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#ff5eb8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#9114af] text-sm font-medium">3</span>
                      </div>
                      <span className="text-sm text-gray-600">Stay tuned for updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;