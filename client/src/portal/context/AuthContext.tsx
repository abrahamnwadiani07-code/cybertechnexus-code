import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type PortalRole = 'admin' | 'company' | 'individual' | 'trainer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: PortalRole;
  company: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const USERS: Record<string, { password: string; user: User }> = {
  'admin@cybertechnexus.com': {
    password: 'CyB3rN3xu$2026!',
    user: { id: '1', name: 'Abraham N.', email: 'admin@cybertechnexus.com', role: 'admin', company: 'CyberTech Nexus', avatar: 'AN' },
  },
  'company@demo.com': { password: 'demo123', user: { id: '2', name: 'David Chen', email: 'company@demo.com', role: 'company', company: 'TechScale SaaS', avatar: 'DC' } },
  'student@demo.com': { password: 'demo123', user: { id: '3', name: 'Jessica Obi', email: 'student@demo.com', role: 'individual', company: 'Self', avatar: 'JO' } },
  'trainer@demo.com': { password: 'demo123', user: { id: '4', name: 'David Adesanya', email: 'trainer@demo.com', role: 'trainer', company: 'CyberTech Nexus', avatar: 'DA' } },
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('ctn_portal_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem('ctn_portal_user', JSON.stringify(user));
    else localStorage.removeItem('ctn_portal_user');
  }, [user]);

  const login = (email: string, password: string): boolean => {
    const entry = USERS[email.toLowerCase()];
    if (entry && entry.password === password) {
      setUser(entry.user);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
