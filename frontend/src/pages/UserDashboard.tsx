import React, { useState } from 'react';
import { Card, Button, Badge } from '../components/ui';

interface UserDashboardProps {
  userName: string;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ userName }) => {
  const [activeTab, setActiveTab] = useState<'browse' | 'requests' | 'history'>('browse');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Mock data
  const availableFood = [
    {
      id: 1,
      restaurant: 'Green Bistro',
      foodItem: 'Fresh Sandwiches',
      quantity: '10 pieces',
      pickupTime: '6:00 PM - 8:00 PM',
      location: '123 Main St',
      distance: '0.5 km',
      description: 'Assorted fresh sandwiches with various fillings',
    },
    {
      id: 2,
      restaurant: 'Healthy Bites',
      foodItem: 'Vegetable Salad Bowls',
      quantity: '15 bowls',
      pickupTime: '7:00 PM - 9:00 PM',
      location: '456 Oak Ave',
      distance: '1.2 km',
      description: 'Fresh vegetable salads with dressing',
    },
    {
      id: 3,
      restaurant: 'Pizza Palace',
      foodItem: 'Assorted Pizzas',
      quantity: '8 pizzas',
      pickupTime: '5:30 PM - 7:30 PM',
      location: '789 Elm St',
      distance: '2.0 km',
      description: 'Cheese, pepperoni, and veggie pizzas',
    },
  ];

  const myRequests = [
    {
      id: 1,
      restaurant: 'Pizza Palace',
      foodItem: 'Assorted Pizzas',
      quantity: '3 pizzas',
      status: 'PENDING' as const,
      requestedAt: '2 hours ago',
    },
    {
      id: 2,
      restaurant: 'Taco Town',
      foodItem: 'Vegetarian Tacos',
      quantity: '8 tacos',
      status: 'APPROVED' as const,
      pickupTime: 'Today, 6:00 PM',
      requestedAt: '1 day ago',
    },
  ];

  const history = [
    { id: 1, restaurant: 'Green Bistro', foodItem: 'Sandwiches', quantity: '5 pieces', date: '2024-12-01', status: 'COMPLETED' },
    { id: 2, restaurant: 'Healthy Bites', foodItem: 'Salad Bowls', quantity: '3 bowls', date: '2024-11-28', status: 'COMPLETED' },
    { id: 3, restaurant: 'Pizza Palace', foodItem: 'Pizzas', quantity: '2 pizzas', date: '2024-11-25', status: 'COMPLETED' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome back, {userName}! 👋</h1>
              <p className="text-lg text-gray-600">Discover available food and manage your requests</p>
            </div>
            <div className="flex items-center gap-6">
              {/* Role Badge */}
              <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shadow-xl">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <span className="text-2xl">🍽️</span>
                </div>
                <div className="text-white">
                  <div className="text-xs font-medium uppercase tracking-wider opacity-90">Role</div>
                  <div className="text-lg font-bold">User</div>
                </div>
              </div>
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="w-14 h-14 rounded-full bg-linear-to-br from-emerald-400 via-teal-500 to-cyan-600 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white font-bold text-xl border-4 border-white/30 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 8px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {userName.charAt(0).toUpperCase()}
                </button>
                
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 border-b border-gray-100 bg-linear-to-br from-emerald-50 to-teal-50">
                      <div className="font-semibold text-gray-900">{userName}</div>
                      <div className="text-sm text-gray-600">User Account</div>
                    </div>
                    <button
                      onClick={() => {
                        // Handle logout
                        console.log('Logout clicked');
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-red-50 transition-colors flex items-center gap-3 text-red-600 font-medium"
                    >
                      <span className="text-xl">🚪</span>
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="p-6 text-center">
              <div className="text-4xl mb-3">🍽️</div>
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-gray-600">Available Foods</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <div className="text-4xl mb-3">📝</div>
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-gray-600">Pending Requests</div>
            </div>
          </Card>
          <Card>
            <div className="p-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <div className="text-2xl font-bold text-gray-900">15</div>
              <div className="text-gray-600">Completed</div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 bg-white p-2 rounded-2xl shadow-md">
          <button
            onClick={() => setActiveTab('browse')}
            className={`flex-1 py-3 px-6 font-semibold rounded-xl transition-all ${
              activeTab === 'browse'
                ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🔍 Browse Food
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex-1 py-3 px-6 font-semibold rounded-xl transition-all ${
              activeTab === 'requests'
                ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            📋 My Requests
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-6 font-semibold rounded-xl transition-all ${
              activeTab === 'history'
                ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            📚 History
          </button>
        </div>

        {/* Browse Food Tab */}
        {activeTab === 'browse' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableFood.map((food) => (
              <Card key={food.id}>
                <div className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{food.foodItem}</h3>
                    <Badge variant="success">{food.distance}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{food.description}</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2">🏪</span>
                      {food.restaurant}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2">📦</span>
                      {food.quantity}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2">🕐</span>
                      {food.pickupTime}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2">📍</span>
                      {food.location}
                    </div>
                  </div>
                  <Button className="w-full">🎯 Request Food</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* My Requests Tab */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {myRequests.map((request) => (
              <Card key={request.id}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{request.foodItem}</h3>
                      <p className="text-gray-600">{request.restaurant}</p>
                    </div>
                    <Badge
                      variant={
                        request.status === 'APPROVED'
                          ? 'success'
                          : request.status === 'PENDING'
                          ? 'warning'
                          : 'default'
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>Quantity: {request.quantity}</div>
                    {request.pickupTime && <div className="font-semibold text-emerald-600">Pickup: {request.pickupTime}</div>}
                    <div className="text-gray-500">Requested: {request.requestedAt}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <Card>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Pickup History</h3>
              <div className="space-y-4">
                {history.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">{item.foodItem}</div>
                      <div className="text-sm text-gray-600">{item.restaurant} • {item.quantity}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant="success">✓ {item.status}</Badge>
                      <div className="text-xs text-gray-500 mt-1">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
