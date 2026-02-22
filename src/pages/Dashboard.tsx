import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, User } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ff5eb8] to-[#9114af] bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Welcome to your dashboard</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
              <div className="w-8 h-8 bg-gradient-to-r from-[#ff5eb8] to-[#9114af] rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium">{user?.email}</p>
                <p className="text-xs text-gray-500">Logged in</p>
              </div>
            </div>
            
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Welcome</CardTitle>
              <CardDescription>
                This is your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The dashboard will be designed later with more features and functionality.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Account Info</CardTitle>
              <CardDescription>
                Your account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Email:</span>
                <span className="font-medium">{user?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email Verified:</span>
                <span className={`font-medium ${user?.email_confirmed_at ? 'text-green-600' : 'text-amber-600'}`}>
                  {user?.email_confirmed_at ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Sign In:</span>
                <span className="font-medium">
                  {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Coming Soon</CardTitle>
              <CardDescription>
                More features to be added
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Additional dashboard components and features will be implemented in future updates.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Dashboard page - More features coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;