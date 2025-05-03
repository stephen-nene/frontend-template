import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Alert, AlertTitle, AlertDescription } from '@/components/shadcn/alert';
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/shadcn/card';
import {
  CheckCircle,
  XCircle,
  Loader2,
  ArrowRight,
  MailOpen,
  Mail,
  Edit2,
} from 'lucide-react';
import { apiClient } from '@/services/apiClient';
import { toast } from 'sonner';
import { useUserStore } from "@/store/useUserStore";
import { set } from 'react-hook-form';


const EmailVerification = () => {
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);
  const { setUser, user } = useUserStore();
  const [email, setEmail] = useState('');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(user)

  useEffect(() => {
    const verifyEmail = async () => {
      // Get token from URL query params
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');

      if (!token) {
        setStatus('error');
        setMessage('Verification token is missing.');
        return;
      }

      try {
        const response = await apiClient.get(`profile/auth/signup?token=${token}`);
        setStatus('success');
        setMessage(response.data.detail || 'Your email has been verified successfully!');
        setUserData(response.data.user);
        setUser(response.data.user);

        // Optional: Auto redirect after successful verification
        // setTimeout(() => {
        //   navigate('/login');
        // }, 5000);
      } catch (error) {
        setStatus('error');
        setMessage(
          error.response?.data?.detail || 
          'Email verification failed. Please try again or contact support.'
        );
      }
    };

    verifyEmail();
  }, [location, navigate]);

  const handleReactivate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setError("");

    try {
     const res =  await apiClient.post("profile/auth/activate/resend",
        { "email": user?.email}
      )

      if (res.status === 200) {
        setMessage(res?.data?.detail || "Activation email has been resent successfully!");
      }
      
    } catch (error) {
      console.error("Error:", error.response);
      setMessage(error.response?.data?.detail || "Failed to resend activation email.");
      // setError("An error occurred while sending the activation email.");
      
    }finally{
      setIsLoading(false);
    }



  };
  const handleResendVerification = async () => {
    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmail('');
      toast.error('Please enter a valid email address.');
      return;
    }
    setError("");
    setIsResending(true);
    try {
      await apiClient.put('profile/auth/update-email', { "email": user.email });
      setMessage('Verification email has been resent. Please check your inbox.');
      setIsEditingEmail(false);
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to resend verification email. Please try again.');
      // setMessage(
      //   error.response?.data?.detail ||
      //   'Failed to resend verification email. Please try again.'
      // );
    }finally{
      setIsResending(false);
    }
  };
  const renderErrorContent = () => (
    <>
      <div className="flex justify-center">
        <div className="rounded-full bg-red-100 p-3 dark:bg-red-900">
          <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
        </div>
      </div>
      
      <Alert variant="destructive" className="mt-4">
        <AlertTitle>Verification Failed</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>

      {error && (
        <Alert variant="warning">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {message.includes('expired') && (
        <div className="mt-4 space-y-4">
          {isEditingEmail ? (
            <div className="space-y-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full ${error ? 'border-amber-500' : ''}`}
              />
              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={() => setIsEditingEmail(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleResendVerification}
                  disabled={isResending}
                >
                  {isResending ? 'Sending...' : 'Update & Resend'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <>
              {user === null ? (
               


                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please log in to resend the verification email.
                </p>
              ):(
                <>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Current email: {email}
                </p>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={handleReactivate}
                    disabled={isLoading}
                  >
                    Resend to Current Email
                    <MailOpen className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    className="flex-1"
                    variant="outline"
                    onClick={() => setIsEditingEmail(true)}
                  >
                    Change Email
                    <Edit2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                </>
              )}
              {/* [to resend the token you must be loggenin */}
              </>
            </div>
          )}
        </div>
      )}
    </>
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-950">
      <Card className="w-full max-w-md border-gray-200 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight dark:text-gray-100">
            Email Verification
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {status === 'loading' && (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-blue-500 dark:text-blue-400" />
              <p className="text-lg font-medium dark:text-gray-300">
                Verifying your email address...
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Please wait while we verify your email address.
              </p>
            </div>
          )}

          {status === 'success' && (
            <>
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              <Alert variant="success" className="mt-4">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>

              {userData && (
                <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-2 font-medium dark:text-gray-200">Account Details</h3>
                  <p className="flex items-center gap-2 text-sm dark:text-gray-300">
                    <Mail className="h-4 w-4" />
                    {userData.email}
                  </p>
                  {userData.username && (
                    <p className="mt-1 text-sm dark:text-gray-300">
                      Username: {userData.username}
                    </p>
                  )}
                </div>
              )}

              <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                You will be redirected to login in a few seconds...
              </p>
            </>
          )}
          {status === 'error' && renderErrorContent()}

          {status === 'errore' && (
            <>
              <div className="flex justify-center">
                <div className="rounded-full bg-red-100 p-3 dark:bg-red-900">
                  <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
              </div>
              
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Verification Failed</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>

              <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                The link might be expired or invalid. Please try again or contact support.
              </p>
            </>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-3">
          {/* {status === 'success' && ( */}
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
              onClick={() => navigate('/login')}
            >
              Go to Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          {/* )} */}



          <div className="text-center">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Return home
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmailVerification;