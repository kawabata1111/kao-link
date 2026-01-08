import { LucideIcon } from "lucide-react";

export interface CompanyInfo {
  name: string;
  representative: string;
  establishment: string;
  capital: string;
  employees: string;
  address: string;
  phone: string;
  email: string;
  mainBusiness: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface FlowStep {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface StrengthItem {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface NewsItem {
  date: string;
  category: string;
  title: string;
}