"use client";

import React from 'react';
import { useSession } from '@/contexts/SessionContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

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
              <LogOut className="h-Let me continue with the dashboard page:

<dyad-write path="src/pages/Dashboard.tsx" description="Creating a basic dashboard page that will be protected">
"use client";

import React from 'react';
import { useSession } from '@/contexts/SessionContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to your Dashboard
              </h1>
              <p className="text-gray-600">
                This is your protected dashboard area. More features will be added here soon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10 rounded-xl p-6 border border-[#ff5eb8]/20">
                <h3 className="font-semibold text-gray-900 mb-2">Account Status</h3>
                <p className="text-gray-600">Active</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10 rounded-xl p-6 border border-[#ff5eb8]/20">
                <h3 className="font-semibold text-gray-900 mb-2">Email Verified</h3>
                <p className="text-gray-600">
                  {user?.email_confirmed_at ? 'Yes' : 'No'}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#ff5eb8]/10 to-[#9114af]/10 rounded-xl p-6 border border-[#ff5eb8]/20">
                <h3 className="font-semibold text-gray-900 mb-2">Member Since</h3>
                <p className="text-gray-600">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What's next?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#ff5eb8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#9114af] text-sm font-medium">1</span>
                  </div>
                  <span>Complete your profile information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#ff5eb8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#9114af] text-sm font-medium">2</span>
                  </div>
                  <span>Explore upcoming features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#ff5eb8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#9114af] text-sm font-medium">3</span>
                  </div>
                  <span>Stay tuned for updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;