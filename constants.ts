import { Zap, Flame, Wifi, Users, TrendingUp, Award, Phone, Mail, FileText, CheckCircle } from "lucide-react";
import { CompanyInfo, NavItem, ServiceItem, FlowStep, StatItem, StrengthItem, NewsItem } from "./types";

export const COMPANY_INFO: CompanyInfo = {
  name: "株式会社KAO LINK",
  representative: "澤井優輝",
  establishment: "2025年9月24日",
  capital: "100万円",
  employees: "12名",
  address: "大阪府門真市松生町1-16-211",
  phone: "070-9047-1520",
  email: "kaolink.ltd@gmail.com",
  mainBusiness: "電気・ガス・通信の営業代行",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "ホーム", href: "#home" },
  { label: "会社概要", href: "#company" },
  { label: "事業内容", href: "#business" },
  { label: "採用情報", href: "#recruit" },
];

export const STATS: StatItem[] = [
  { number: 1000, suffix: "+", label: "契約実績", icon: FileText },
  { number: 98, suffix: "%", label: "顧客満足度", icon: Users },
  { number: 30, suffix: "%", label: "平均削減率", icon: TrendingUp },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "electric",
    title: "電力コスト削減",
    subtitle: "ELECTRICITY",
    description: "お客様の使用状況を分析し、最適な電力プランをご提案。年間で大幅なコスト削減を実現します。",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gas",
    title: "ガス料金最適化",
    subtitle: "GAS",
    description: "都市ガス・プロパンガスの料金を見直し、無駄のないプランへの切り替えをサポート。",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "internet",
    title: "通信費の見直し",
    subtitle: "INTERNET",
    description: "インターネット・携帯電話の契約を最適化。セット割引で更にお得に。",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=800",
  },
];

export const STRENGTHS: StrengthItem[] = [
  {
    title: "徹底したヒアリング",
    description: "お客様一人ひとりの生活スタイルや使用状況を丁寧にお伺いし、本当に必要なサービスだけをご提案します。無理な勧誘は一切行いません。",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    reverse: false,
  },
  {
    title: "透明な料金説明",
    description: "複雑な料金体系をわかりやすく説明。隠れたコストや条件も全てオープンにお伝えします。ご納得いただけるまで何度でもご説明いたします。",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    reverse: true,
  },
  {
    title: "充実のアフターサポート",
    description: "契約後も安心。お困りごとがあれば、いつでもご相談ください。長期的なお付き合いを大切にし、定期的な見直しも承ります。",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    reverse: false,
  },
];

export const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "まずはお気軽にご連絡ください",
  },
  {
    step: "02",
    title: "ヒアリング",
    description: "現在のご契約内容・ご要望をお伺いします",
  },
  {
    step: "03",
    title: "ご提案",
    description: "最適なプランをご提案いたします",
  },
  {
    step: "04",
    title: "ご契約・サポート",
    description: "契約後も安心のサポート体制",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  { date: "2025.10.01", category: "RECRUIT", title: "新規パートナー様募集中" },
  { date: "2025.09.25", category: "INFO", title: "Webサイトを公開しました" },
  { date: "2025.09.24", category: "COMPANY", title: "株式会社KAO LINKを設立いたしました" },
];