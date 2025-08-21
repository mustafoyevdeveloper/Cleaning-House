import { Service, ServiceCategory } from './types';

const API_BASE = import.meta.env.VITE_API_BASE || '/api';
const ADMIN_TOKEN = 'admin-secret-token-123';

function authHeaders() {
  return ADMIN_TOKEN ? { Authorization: `Bearer ${ADMIN_TOKEN}` } : {};
}

export async function listServices(category?: ServiceCategory): Promise<Service[]> {
  const params = category ? `?category=${encodeURIComponent(category)}` : '';
  const res = await fetch(`${API_BASE}/services${params}`);
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

export async function getService(id: string): Promise<Service> {
  const res = await fetch(`${API_BASE}/services/${id}`);
  if (!res.ok) throw new Error('Failed to fetch service');
  return res.json();
}

export async function createService(input: Service): Promise<Service> {
  const res = await fetch(`${API_BASE}/services`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to create service');
  return res.json();
}

export async function updateService(id: string, input: Partial<Service>): Promise<Service> {
  const res = await fetch(`${API_BASE}/services/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to update service');
  return res.json();
}

export async function deleteService(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/services/${id}`, {
    method: 'DELETE',
    headers: { ...authHeaders() },
  });
  if (!res.ok) throw new Error('Failed to delete service');
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Settings
export type Settings = {
  siteName: string;
  phone: string;
  email: string;
  address: string;
  social: { facebook?: string; instagram?: string; telegram?: string };
  hero: { title?: string; subtitle?: string };
  bottomBar: { enabled: boolean; message: string; buttonText: string; buttonLink: string };
};

export async function getSettings(): Promise<Settings> {
  const res = await fetch(`${API_BASE}/settings`);
  if (!res.ok) throw new Error('Failed to fetch settings');
  return res.json();
}

export async function updateSettings(input: Partial<Settings>): Promise<Settings> {
  const res = await fetch(`${API_BASE}/settings`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to update settings');
  return res.json();
}

// Messages
export type ContactMessage = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  serviceNeeded: string;
  location?: string;
  details?: string;
  page?: string;
  status?: 'new' | 'read';
  createdAt?: string;
};

export async function submitMessage(input: Omit<ContactMessage, '_id' | 'status' | 'createdAt'>): Promise<ContactMessage> {
  const res = await fetch(`${API_BASE}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to submit message');
  return res.json();
}

export async function listMessages(): Promise<ContactMessage[]> {
  const res = await fetch(`${API_BASE}/messages`, { headers: { ...authHeaders() } });
  if (!res.ok) throw new Error('Failed to fetch messages');
  return res.json();
}

export async function deleteMessage(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/messages/${id}`, {
    method: 'DELETE',
    headers: { ...authHeaders() },
  });
  if (!res.ok) throw new Error('Failed to delete message');
}

export async function markMessageAsRead(id: string): Promise<ContactMessage> {
  const res = await fetch(`${API_BASE}/messages/${id}/read`, {
    method: 'PUT',
    headers: { ...authHeaders() },
  });
  if (!res.ok) throw new Error('Failed to mark message as read');
  return res.json();
}


