"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from '@/contexts/SessionContext';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const { session, isLoading } = useSession();

  // Redirect if already logged in
  if (!isLoading && session) {
    return <Navigate to="/dashboard" replace />;
  }

  // Custom theme with pink/purple colors
  const customTheme = {
    ...ThemeSupa,
    default: {
      ...ThemeSupa.default,
      colors: {
        ...ThemeSupa.default.colors,
        brand: '#9114af',
        brandAccent: '#ff5eb8',
        brandButtonText: 'white',
        defaultButtonBackground: '#f3f4f6',
        defaultButtonBackgroundHover: '#e5e7eb',
        defaultButtonBorder: '#d1d5db',
        defaultButtonText: '#374151',
        dividerBackground: '#e5e7eb',
        inputBackground: 'white',
        inputBorder: '#d1d5db',
        inputBorderHover: '#9114af',
        inputBorderFocus: '#ff5eb8',
        inputText: '#111827',
        inputLabelText: '#6b7280',
        inputPlaceholder: '#9ca3af',
        messageText: '#6b7280',
        messageTextDanger: '#dc2626',
        anchorTextColor: '#9114af',
        anchorTextHoverColor: '#ff5eb8',
      },
      space: {
        ...ThemeSupa.default.space,
        inputPadding: '12px',
        buttonPadding: '14px',
      },
      fontSizes: {
        ...ThemeSupa.default.fontSizes,
        baseBodySize: '16px',
        baseInputSize: '16px',
        baseLabelSize: '14px',
        baseButtonSize: '16px',
      },
      radii: {
        ...ThemeSupa.default.radii,
        borderRadiusButton: '12px',
        buttonBorderRadius: '12px',
        inputBorderRadius: '12px',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ff5eb8]/5 to-[#9114af]/5 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Auth
              supabaseClient={supabase}
              providers={['google']}
              appearance={{
                theme: customTheme,
                style: {
                  button: {
                    borderRadius: '12px',
                    fontWeight: '500',
                  },
                  input: {
                    borderRadius: '12px',
                  },
                  anchor: {
                    fontSize: '14px',
                  },
                },
                variables: {
                  default: {
                    colors: {
                      brand: '#9114af',
                      brandAccent: '#ff5eb8',
                    },
                  },
                },
              }}
              theme="light"
              redirectTo={`${window.location.origin}/dashboard`}
              showLinks={true}
              view="sign_in"
              localization={{
                variables: {
                  sign_in: {
                    email_label: 'Email address',
                    password_label: 'Password',
                    button_label: 'Sign in',
                    loading_button_label: 'Signing in...',
                    link_text: 'Already have an account? Sign in',
                  },
                },
              }}
            />

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="font-medium text-[#9114af] hover:text-[#ff5eb8] transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;