import { useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { listServices, createService, updateService, deleteService, fileToDataUrl, getSettings, updateSettings } from '@/lib/api';
import type { Settings as SiteSettings } from '@/lib/api';
import type { Service, ServiceCategory, ServiceType } from '@/lib/types';
import { Trash2, Edit, Plus, Save, X, Image, CheckCircle, Clock, Shield, AlertTriangle, Eye } from 'lucide-react';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

type Draft = Service;

const emptyDraft: Draft = {
  category: 'residential',
  serviceType: 'standard-cleaning',
  title: '',
  description: '',
  features: [],
  duration: '',
  price: '',
  bestFor: '',
  images: { before: '', after: '' },
  order: 1,
  isActive: true,
};

export default function Admin() {
  const qc = useQueryClient();
  const [categoryFilter, setCategoryFilter] = useState<ServiceCategory>('residential');
  const [editing, setEditing] = useState<Draft | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services', categoryFilter],
    queryFn: () => listServices(categoryFilter),
  });
  const { data: settings } = useQuery({ queryKey: ['settings'], queryFn: getSettings });
  const [settingsDraft, setSettingsDraft] = useState<SiteSettings | null>(null);
  useEffect(() => {
    if (settings) setSettingsDraft(settings);
  }, [settings]);
  const saveSettingsMut = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['settings'] });
      toast.success('Site settings saved successfully!');
    },
    onError: () => toast.error('Failed to save settings'),
  });

  const createMut = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['services'] });
      toast.success('Service created successfully!');
    },
    onError: () => toast.error('Failed to create service'),
  });
  const updateMut = useMutation({
    mutationFn: ({ id, input }: { id: string; input: Partial<Service> }) => updateService(id, input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['services'] });
      toast.success('Service updated successfully!');
    },
    onError: () => toast.error('Failed to update service'),
  });
  const deleteMut = useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['services'] });
      toast.success('Service deleted successfully!');
      setDeleteConfirm(null);
    },
    onError: () => toast.error('Failed to delete service'),
  });

  const startCreate = () => setEditing({ ...emptyDraft, category: categoryFilter, serviceType: 'standard-cleaning' });
  const startEdit = (s: Service) => {
    const priceWithoutDollar = s.price?.startsWith('$') ? s.price.slice(1) : s.price;
    setEditing({ ...s, price: priceWithoutDollar || '' });
  };
  const cancelEdit = () => setEditing(null);
  const confirmDelete = (id: string) => setDeleteConfirm(id);
  const cancelDelete = () => setDeleteConfirm(null);
  const handleDelete = (id: string) => {
    deleteMut.mutate(id);
  };

  const setFeature = (idx: number, value: string) => {
    if (!editing) return;
    const next = [...editing.features];
    next[idx] = value;
    setEditing({ ...editing, features: next });
  };

  const addFeature = () => {
    if (!editing) return;
    setEditing({ ...editing, features: [...editing.features, ''] });
  };

  const removeFeature = (idx: number) => {
    if (!editing) return;
    const next = editing.features.filter((_, i) => i !== idx);
    setEditing({ ...editing, features: next });
  };

  const onPickImage = async (which: 'before' | 'after', file?: File) => {
    if (!editing || !file) return;
    const dataUrl = await fileToDataUrl(file);
    setEditing({ ...editing, images: { ...editing.images, [which]: dataUrl } });
  };

  const submit = async () => {
    if (!editing) return;
    const payload: Service = {
      category: editing.category,
      serviceType: editing.serviceType,
      title: editing.title.trim(),
      description: editing.description.trim(),
      features: editing.features.filter(Boolean),
      duration: editing.duration?.trim(),
      price: editing.price ? `$${editing.price}` : '',
      bestFor: editing.bestFor?.trim(),
      images: editing.images,
      order: editing.order ?? 1,
      isActive: editing.isActive ?? true,
    };
    if (editing._id) {
      await updateMut.mutateAsync({ id: editing._id, input: payload });
    } else {
      await createMut.mutateAsync(payload);
    }
    setEditing(null);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-bold text-brand-navy">Admin Panel</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as ServiceCategory)}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="brand" onClick={startCreate} className="w-full sm:w-auto">
                <Plus className="w-4 h-4" /> Add Service
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6 sm:space-y-10">
        {/* Settings Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-navy">Site Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 sm:p-6">
            <div>
              <Label>Site Name</Label>
              <Input value={settingsDraft?.siteName || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), siteName: e.target.value }))} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label>Phone</Label>
                <Input value={settingsDraft?.phone || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), phone: e.target.value }))} />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={settingsDraft?.email || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), email: e.target.value }))} />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <Label>Address</Label>
                <Input value={settingsDraft?.address || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), address: e.target.value }))} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Facebook</Label>
                <Input value={settingsDraft?.social?.facebook || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), social: { ...(prev as SiteSettings)?.social, facebook: e.target.value } }))} />
              </div>
              <div>
                <Label>Instagram</Label>
                <Input value={settingsDraft?.social?.instagram || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), social: { ...(prev as SiteSettings)?.social, instagram: e.target.value } }))} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Bottom Bar Message</Label>
                <Input value={settingsDraft?.bottomBar?.message || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), bottomBar: { ...(prev as SiteSettings)?.bottomBar, message: e.target.value } }))} />
              </div>
              <div>
                <Label>Bottom Bar Button Text</Label>
                <Input value={settingsDraft?.bottomBar?.buttonText || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), bottomBar: { ...(prev as SiteSettings)?.bottomBar, buttonText: e.target.value } }))} />
              </div>
            </div>
            <div>
              <Label>Bottom Bar Button Link</Label>
              <Input value={settingsDraft?.bottomBar?.buttonLink || ''} onChange={(e) => setSettingsDraft(prev => ({ ...(prev as SiteSettings), bottomBar: { ...(prev as SiteSettings)?.bottomBar, buttonLink: e.target.value } }))} />
            </div>
            <div className="flex justify-end">
              <Button variant="brand" disabled={!settingsDraft || saveSettingsMut.isPending} onClick={() => {
                if (settingsDraft) {
                  saveSettingsMut.mutate(settingsDraft);
                }
              }} className="w-full sm:w-auto">
                {saveSettingsMut.isPending ? 'Saving...' : 'Save Settings'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-navy flex items-center gap-2">
              <Eye className="w-5 h-5" />
              {categoryFilter === 'residential' ? 'Residential' : 'Commercial'} Services ({services.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground">Loading services...</p>
              </div>
            ) : services.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground">No services found for this category.</p>
                <p className="text-sm text-muted-foreground mt-2">Click "Add Service" to create your first service.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map((s) => (
                  <Card key={s._id} className="shadow-soft hover:shadow-brand transition-all duration-300">
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-brand-navy text-base sm:text-lg flex-1">{s.title}</CardTitle>
                        <div className="flex items-center gap-1 ml-2">
                          {s.isActive ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                      <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                        {s.images?.before ? (
                          <img src={s.images.before} alt="Before" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Image className="w-8 h-8" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{s.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-turquoise" />
                          <span className="text-muted-foreground">{s.duration || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3 text-brand-turquoise" />
                          <span className="text-muted-foreground">
                            {s.price ? (s.price.startsWith('$') ? s.price : `$${s.price}`) : 'N/A'}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <Button variant="brand-secondary" size="sm" onClick={() => startEdit(s)} className="w-full sm:w-auto">
                          <Edit className="w-4 h-4" /> Edit
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => confirmDelete(s._id!)} className="w-full sm:w-auto">
                          <Trash2 className="w-4 h-4" /> Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl overflow-hidden max-h-[95vh] sm:max-h-[90vh]">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
              <h2 className="text-lg sm:text-xl font-semibold text-brand-navy">{editing._id ? 'Edit Service' : 'Create Service'}</h2>
              <Button variant="ghost" onClick={cancelEdit} size="sm"><X className="w-4 h-4" /></Button>
            </div>
            <div className="p-4 sm:p-6 space-y-4 max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-80px)] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select value={editing.category} onValueChange={(v) => setEditing({ ...editing, category: v as ServiceCategory })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Service Type</Label>
                  <Select value={editing.serviceType} onValueChange={(v) => setEditing({ ...editing, serviceType: v as ServiceType })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {editing.category === 'residential' ? (
                        <>
                          <SelectItem value="standard-cleaning">Standard Cleaning</SelectItem>
                          <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                          <SelectItem value="move-in-out-cleaning">Move-in/Move-out Cleaning</SelectItem>
                          <SelectItem value="apartment-cleaning">Apartment Cleaning</SelectItem>
                          <SelectItem value="specialty-cleaning">Specialty Cleaning</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                          <SelectItem value="retail-cleaning">Retail Cleaning</SelectItem>
                          <SelectItem value="medical-clinic-cleaning">Medical/Clinic Cleaning</SelectItem>
                          <SelectItem value="restaurant-cleaning">Restaurant Cleaning</SelectItem>
                          <SelectItem value="post-construction-cleaning">Post-construction Cleaning</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Order</Label>
                  <Input 
                    type="number" 
                    min="1"
                    value={editing.order ?? 1} 
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      setEditing({ ...editing, order: value });
                    }} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Title</Label>
                  <Input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
                </div>
                <div>
                  <Label>Duration</Label>
                  <Input value={editing.duration} onChange={(e) => setEditing({ ...editing, duration: e.target.value })} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Price</Label>
                  <Input 
                    type="number"
                    min="0"
                    step="0.01"
                    value={editing.price} 
                    onChange={(e) => setEditing({ ...editing, price: e.target.value })} 
                    placeholder="e.g., 150"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Enter price (only numbers allowed)</p>
                </div>
                <div>
                  <Label>Best for</Label>
                  <Input value={editing.bestFor} onChange={(e) => setEditing({ ...editing, bestFor: e.target.value })} />
                </div>
              </div>

              <div>
                <Label>Description</Label>
                <Textarea rows={3} value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
              </div>

              <div>
                <Label>Features</Label>
                <div className="space-y-2">
                  {editing.features.map((f, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-2">
                      <Input value={f} onChange={(e) => setFeature(idx, e.target.value)} />
                      <Button variant="destructive" size="icon" onClick={() => removeFeature(idx)} className="w-full sm:w-auto"><Trash2 /></Button>
                    </div>
                  ))}
                  <Button variant="brand-outline" size="sm" onClick={addFeature} className="w-full sm:w-auto"><Plus className="w-4 h-4" /> Add feature</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Before image</Label>
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 mb-2">
                    {editing.images.before && <img src={editing.images.before} className="w-full h-full object-cover" />}
                  </div>
                  <Input type="file" accept="image/*" onChange={(e) => onPickImage('before', e.target.files?.[0])} />
                </div>
                <div>
                  <Label>After image</Label>
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 mb-2">
                    {editing.images.after && <img src={editing.images.after} className="w-full h-full object-cover" />}
                  </div>
                  <Input type="file" accept="image/*" onChange={(e) => onPickImage('after', e.target.files?.[0])} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                <Button variant="ghost" onClick={cancelEdit} className="w-full sm:w-auto"><X className="w-4 h-4" /> Cancel</Button>
                <Button variant="brand" onClick={submit} disabled={createMut.isPending || updateMut.isPending} className="w-full sm:w-auto">
                  {createMut.isPending || updateMut.isPending ? 'Saving...' : <><Save className="w-4 h-4" /> Save</>}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">Delete Service</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to delete this service? This action cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="ghost" onClick={cancelDelete} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={() => handleDelete(deleteConfirm)}
                disabled={deleteMut.isPending}
                className="w-full sm:w-auto"
              >
                {deleteMut.isPending ? 'Deleting...' : 'Delete Service'}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}


