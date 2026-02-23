"use client";

import React, { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from '@/contexts/SessionContext';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { showError } from '@/utils/toast';

const Signup = () => {
  const { session, isLoading } = useSession();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);

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

  const handleSignUp = async (email: string, password: string, data: any) => {
    if (!agreeToTerms || !agreeToPrivacy) {
      showError('Please agree to both Terms & Conditions and Privacy Policy');
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: data.username,
          },
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error('Signup error:', error);
    }
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
              Create your account
            </h1>
            <p className="text-gray-600">
              Join us and start your journey
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
              view="sign_up"
              localization={{
                variables: {
                  sign_up: {
                    email_label: 'Email address',
                    password_label: 'Password',
                    button_label: 'Create account',
                    loading_button_label: 'Creating account...',
                    link_text: 'Already have an account? Sign in',
                  },
                },
              }}
              additionalData={{
                username: '',
              }}
            />

            {/* Terms and Privacy Checkboxes */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a 
                    href="https://refzone.com.au/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#9114af] hover:text-[#ff5eb8] font-medium transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={agreeToPrivacy}
                  onCheckedChange={(checked) => setAgreeToPrivacy(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a 
                    href="https://refzone.com.au/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#9114af] hover:text-[#ff5eb8] font-medium transition-colors"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="font-medium text-[#9114af] hover:text-[#ff5eb8] transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;