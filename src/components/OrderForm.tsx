import { Project } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjects: Project[];
  totalCost: number;
}

export const OrderForm = ({ isOpen, onClose, selectedProjects, totalCost }: OrderFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectTitles = selectedProjects.map(p => p.title).join('\n');
    const message = `
مرحباً، أنا ${name}
رقم الهاتف: ${phone}
رقم الواتساب: ${whatsapp}
إجمالي السعر: ${totalCost} جنيه

المشاريع المختارة:
${projectTitles}
    `;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201030435987?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-right">تفاصيل الطلب</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-right block">اسم العميل</label>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-right"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">رقم الهاتف</label>
            <Input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-right"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">رقم الواتساب</label>
            <Input
              required
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="text-right"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">إجمالي السعر</label>
            <Input
              value={`${totalCost} جنيه`}
              readOnly
              className="text-right bg-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-right block">المشاريع المختارة</label>
            <div className="text-right bg-gray-100 p-2 rounded">
              {selectedProjects.map(project => (
                <div key={project.id}>{project.title}</div>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
            إرسال
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};