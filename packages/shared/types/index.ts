export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'unqualified' | 'customer';

export interface Lead {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  tags?: string[];
  status?: LeadStatus;
  createdAt: string;
}
