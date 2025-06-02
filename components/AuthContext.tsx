'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const checkTokenExpiration = () => {
    const loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
      const currentTime = Date.now();
      const timeElapsed = currentTime - parseInt(loginTime);
      const tenMinutesInMs = 10 * 60 * 1000; // 10 minutes in milliseconds
      
      if (timeElapsed >= tenMinutesInMs) {
        // Token has expired
        logout();
        alert('Your session has expired. Please log in again.');
        return false;
      }
    }
    return true;
  };

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      // Check if token has expired
      if (!checkTokenExpiration()) {
        return; // Token expired, user already logged out
      }
      
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        logout();
      }
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const login = (token: string, userData: User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    // Store login timestamp for token expiration tracking
    localStorage.setItem('loginTime', Date.now().toString());
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loginTime');
    setUser(null);
    setIsAuthenticated(false);
    router.push('/');
  };

  useEffect(() => {
    checkAuth();
    
    // Listen for storage changes in other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'token' || e.key === 'user' || e.key === 'loginTime') {
        checkAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check auth status periodically
    const interval = setInterval(checkAuth, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};