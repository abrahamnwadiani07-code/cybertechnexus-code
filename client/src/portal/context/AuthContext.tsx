import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analyst' | 'viewer';
  company: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const DEMO_USERS: Record<string, { password: string; user: User }> = {
  'admin@cybertechnexus.com': {
    password: 'demo123',
    user: { id: '1', name: 'Abraham N.', email: 'admin@cybertechnexus.com', role: 'admin', company: 'CyberTech Nexus', avatar: 'AN' },
  },
  'analyst@demo.com': {
    password: 'demo123',
    user: { id: '2', name: 'Sarah Chen', email: 'analyst@demo.com', role: 'analyst', company: 'Acme Corp', avatar: 'SC' },
  },
  'demo@demo.com': {
    password: 'demo',
    user: { id: '3', name: 'Demo User', email: 'demo@demo.com', role: 'viewer', company: 'Demo Organization', avatar: 'DU' },
  },
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
    const entry = DEMO_USERS[email.toLowerCase()];
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
