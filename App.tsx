
import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Megaphone, 
  CreditCard, 
  BarChart3, 
  ChevronLeft,
  Search,
  CheckCircle2,
  Target,
  Zap,
  Globe,
  MessageSquare,
  FileSignature,
  Filter,
  Layers,
  ShieldCheck,
  History,
  Lock,
  Calculator,
  FileText,
  TrendingUp,
  DollarSign,
  AlertCircle,
  XCircle,
  MinusCircle,
  Info,
  Clock,
  TrendingDown,
  PhoneCall
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Cell, PieChart, Pie, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import RequirementTable from './components/RequirementTable';
import InfoCard from './components/InfoCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const menuItems = [
    { id: 'intro', label: 'מבוא ויעדים', icon: <Target size={20} /> },
    { id: 'marketing', label: 'שיווק, מכירות ותקשורת', icon: <Megaphone size={20} /> },
    { id: 'projects', label: 'ניהול פרויקט מורחב', icon: <Briefcase size={20} /> },
    { id: 'hr', label: 'הון אנושי ופיתוח', icon: <Users size={20} /> },
    { id: 'finance', label: 'פיננסים ותפעול', icon: <CreditCard size={20} /> },
    { id: 'dashboard', label: 'דשבורד ובקרה (BI)', icon: <LayoutDashboard size={20} /> },
    { id: 'compare', label: 'השוואת מערכות', icon: <Search size={20} /> },
    { id: 'summary', label: 'סיכום אפיון ותקציב', icon: <FileText size={20} /> },
  ];

  // Visual Charts Data
  const profitabilityData = [
    { name: 'מחקר עירוני', income: 150000, cost: 95000, margin: 36 },
    { name: 'ייעוץ סטטוטורי', income: 220000, cost: 110000, margin: 50 },
    { name: 'ניהול פרויקט', income: 340000, cost: 180000, margin: 47 },
    { name: 'אדריכלות נוף', income: 120000, cost: 85000, margin: 29 },
  ];

  const leadSourceData = [
    { name: 'Meta', value: 45 },
    { name: 'Google Ads', value: 30 },
    { name: 'פנייה ישירה', value: 15 },
    { name: 'מכרזים', value: 10 },
  ];

  const utilizationData = [
    { day: 'א', utilization: 85 },
    { day: 'ב', utilization: 92 },
    { day: 'ג', utilization: 88 },
    { day: 'ד', utilization: 79 },
    { day: 'ה', utilization: 95 },
  ];

  const vendorRadar = [
    { subject: 'עלות הקמה', Monday: 60, Firebarry: 45, Hubspot: 20, Custom: 85 },
    { subject: 'גמישות/אפיון', Monday: 75, Firebarry: 90, Hubspot: 80, Custom: 98 },
    { subject: 'ממשק RTL', Monday: 100, Firebarry: 100, Hubspot: 70, Custom: 100 },
    { subject: 'פרויקטים', Monday: 95, Firebarry: 85, Hubspot: 70, Custom: 95 },
    { subject: 'HR/פיננסי', Monday: 50, Firebarry: 85, Hubspot: 60, Custom: 92 },
    { subject: 'עמידה באפיון', Monday: 78, Firebarry: 95, Hubspot: 83, Custom: 94 },
  ];

  // ALL 100+ items from the provided specification text
  const fullComparisonRows = [
    // תמחור ועמידה בביצוע
    { cat: 'תמחור', req: 'עלות הקמה משוערת', mon: '75000', hub: '125000', fir: '135000', sca: '39000', ori: '35000-45000', fix: '28000' },
    { cat: 'תמחור', req: 'עלות חודשית משוערת למשתמש', mon: '120', hub: '215', fir: '175', sca: '180', ori: '205', fix: '450' },
    { cat: 'תמחור', req: 'תלות במערכות בינה מלאכותית נוספות', mon: 'גבוהה מאוד', hub: 'גבוהה מאוד', fir: 'גבוהה', sca: 'לא קיימת', ori: 'סבירה', fix: 'נמוכה' },
    { cat: 'תמחור', req: 'תוספת לעלות חודשית - כלים ואינטגרציות', mon: '5000', hub: '5000', fir: '7000', sca: '0', ori: '1000', fix: '0' },
    { cat: 'תמחור', req: 'סך עלות חודשית (13 משתמשים)', mon: '6560', hub: '7795', fir: '9275', sca: '2340', ori: '3665', fix: '5850' },

    // ניהול קמפיינים רב-ערוצי
    { cat: 'שיווק', req: 'חיבור Native ל-Meta ו-Google Ads', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'שיווק', req: 'טפסי אינטרנט מעוצבים (HTML/CSS) + שדות מוסתרים', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'שיווק', req: 'טפסי צור קשר מעוצבים + שדות מוסתרים', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'שיווק', req: 'ניהול מעגל הצלחה/כישלון ללא Zapier/Make', mon: 'אין', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'חלקי', fix: 'יש' },
    { cat: 'שיווק', req: 'שליטה במבנה הליד ללא פיתוח (ע"י משתמש)', mon: 'יש', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'שיווק', req: 'קמפיין דיוור גרפי, סגמנטציה וניטור', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'שיווק', req: 'ניהול מסרים אוט׳ לפי בחירה / סוג שדה', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'אין' },
    { cat: 'שיווק', req: 'הקמת שדות אפיון מלאים (שם/נייד/מקור/קמפיין)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'שיווק', req: 'הקצאת שדות אוטומטית לסינון ללא מגע אדם', mon: 'אין', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'אין', fix: 'יש' },

    // תקשורת ואוטומציות
    { cat: 'תקשורת', req: 'וואטסאפ רשמי ללא תכנית AI', mon: 'אין', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'תקשורת', req: 'וואטסאפ לא רשמי ללא תכנית AI', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'תקשורת', req: 'בוט שירות/מכירה אינטגרלי', mon: 'אין', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'אין', fix: 'אין' },
    { cat: 'תקשורת', req: 'חיבור Google/Office 365', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'תקשורת', req: 'תקשורת כתובה מבוססת דוא״ל', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'תקשורת', req: 'אוטומציות מענה מפורט והתראות לפי סגמנט', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'אין' },

    // ניהול פרויקטים
    { cat: 'פרויקטים', req: 'תמיכה בסוג פרויקט - fix', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'תמיכה בסוג פרויקט - תקציב קבוע', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'תמיכה בסוג פרויקט - בנק שעות', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול פרוייקט לקוח | חברה | איש קשר', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול פרוייקט פנים ארגוני (ללא לקוח)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'הגדרת היררכיה מלאה (פרויקט > אבן דרך > משימה)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול גאנט וציר זמן מלא', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול אבני דרך ומשימות', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'הגדרת תקציבים והקצאות', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול מסמכים ועדכונים', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'פרויקטים', req: 'לוג שינויים והרשאות דיווח', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'תצוגות קנבן, בורד ותרשימים', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול הצעות מחיר מקושרות פרויקט', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'פרויקטים', req: 'הגדרת פעילויות (משימה/אירוע/אבן דרך)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'הגדרת שדות דיווח ומדידה (שם/סטטוס/תקציב)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'הגדרת קצבי התקדמות', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול משימות ותת משימות מלא', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול log פרויקטאלי', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'הגדרת הקצאות משימות והצרכתן', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'דוחות ייעודיים - צפייה', mon: 'חלקי', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'דוחות ייעודיים - דחיפה אוטומטית', mon: 'חלקי', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'דשבורד תפוקה, עומסים ומדידת מחלקה', mon: 'חלקי', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול מסמכים לפרויקט', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'ניהול סטטוסים אוטומטיים לפרויקט', mon: 'יש', hub: 'חלקי', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'הגדרת תרשימים לפרויקט', mon: 'יש', hub: 'חלקי', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'שדות ייעודיים למשימות (סטטוס/עדיפות)', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'שדות ייעודיים לאבני דרך (תקציב/שעות)', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'טופס Onboarding דיגיטלי לפרויקט', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'חלקי', fix: 'אין' },
    { cat: 'פרויקטים', req: 'מדדי יעילות (תקציב, לו"ז, אבני דרך)', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'חלקי', fix: 'אין' },
    { cat: 'פרויקטים', req: 'המערכת תאפשר הגדרת עלויות לפרויקט', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'המערכת תאפשר הגדרת רווחיות לפרויקט', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'המערכת תאפשר Burn rate אקטיבי', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'פרויקטים', req: 'מדד יעילות פנים ארגוני לשעות פיקס', mon: 'יש', hub: 'חלקי', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },

    // כללי
    { cat: 'כללי', req: 'מחולל דוחות אינטראקטיבי', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'יש' },
    { cat: 'כללי', req: 'מחולל דשבורד נתונים אינטראקטיבי', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'כללי', req: 'ניהול אירועים ופגישות (זמן עבודה)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'יש' },
    { cat: 'כללי', req: 'הגדרת KPI לכל סגמנט ומדידתם', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'יש' },
    { cat: 'כללי', req: 'יכולת ניהול מדידת KPI', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'כללי', req: 'ניהול משימות ללא תלות פרויקטאלית', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'כללי', req: 'מחולל נתונים המציג משימות ואירועים', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'כללי', req: 'ניהול הרשאות משתמשים קשיח', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'כללי', req: 'חיתום דיגיטלי והמרה לעדכון כרטסת', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'יש' },

    // HR
    { cat: 'HR', req: 'ניהול HR כפרויקט פנימי מסווג', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'ניהול תכניות עבודה שנתיות (הדרכה)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'מדידת פרויקט פנים לפי יעדים וביצוע', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'שיוך ש"ע בפועל לשעות כוללות לעובד', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'תאריך תפוגת הסמכה ותזכורת אוטומטית', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'פרויקט משובים ותיעוד שיחות חתך', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'תהליך יצירת עובד חדש דיגיטלי + צ׳ק ליסט', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'מעקב שעות הדרכה והתראות אי-ביצוע', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'HR', req: 'ניהול עובדים (שכר/תעריף/משרה/יעדים)', mon: 'יש', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },

    // ספקים
    { cat: 'ספקים', req: 'ניהול ספקים ברמות שונות', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'ספקים', req: 'ניהול ספק לפרויקט כקבלן משנה', mon: 'אין', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'אין' },
    { cat: 'ספקים', req: 'שליטה בשדות ייעודיים להקמת ספק', mon: 'אין', hub: 'אין', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'אין' },

    // מכירות
    { cat: 'מכירות', req: 'Pipeline מכירות מלא: ליד > המרה > לקוח', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'המרה אוטומטית מכלי שיווק ופרסום', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'מענה אוטומטי שיווקי לפי סגמנטציה', mon: 'אין', hub: 'יש', fir: 'אין', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'שמירת היסטוריה מלאה (וואטסאפ/דואל/מסמכים)', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'ייצור אוטומציות פנים וחוץ לפי סטטוס', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'עבודה במודל הזדמנויות / פניות', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'סטטוס מעקב מכרז ותתי-סטטוסים', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'המקת הצעות מחיר וחיתום דיגיטלי', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'Overview ניהולי: משפכים ומדידת אנשי מכירות', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'מכירות', req: 'ניהול מכרזים עם דד-ליין והתראה', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },

    // לקוחות
    { cat: 'לקוחות', req: 'הפרדה קשיחה פונה/לקוח כולל יחס המרה', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'לקוחות', req: 'חישוב יחס המרה אוטומטי', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'לקוחות', req: 'שליטה במסכים והקמת שדות ללא הגבלה', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'לקוחות', req: 'Overview מלא על מערך פניות/לקוחות', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'לקוחות', req: 'כרטסת עמוקה (תשלומים/מסמכים/תקשורת)', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'לקוחות', req: 'אוטומציה ודיוור תקופתי לפי סגמנט', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'לקוחות', req: 'ניהול פעילויות והקצאת לקוח לעובד', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },

    // כספים
    { cat: 'כספים', req: 'חיבור לחשבונית ירוקה / סאמיט', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'סאמיט', ori: 'בדיקה', fix: 'אין' },
    { cat: 'כספים', req: 'חיתום דיגיטלי וסליקה באשראי להצעות', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'יש' },
    { cat: 'כספים', req: 'תבניות מעוצבות להצעות מחיר (ללא מגבלה)', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'אין', fix: 'אין' },
    { cat: 'כספים', req: 'מדידת המרות, תנאי תשלום ואוטומציות', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'יש', fix: 'יש' },
    { cat: 'כספים', req: 'נתונים כספיים בדשבורד אינטראקטיבי', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'בדיקה', fix: 'יש' },
    { cat: 'כספים', req: 'הקצאת יעדי כספים KPI ומדידתם', mon: 'אין', hub: 'יש', fir: 'יש', sca: 'יש', ori: 'בדיקה', fix: 'אין' },

    // טלפוניה
    { cat: 'טלפוניה', req: 'התממשקות למרכזיה (Click to Call)', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'בדיקה', fix: 'אין' },
    { cat: 'טלפוניה', req: 'הצמדת שיחה ללקוח / טיקט / פניה', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'בדיקה', fix: 'אין' },
    { cat: 'טלפוניה', req: 'ניטור תסריט שיחה לסגמנטציה', mon: 'אין', hub: 'אין', fir: 'יש', sca: 'יש', ori: 'בדיקה', fix: 'אין' },
  ];

  // Compliance Calculation Logic
  const complianceData = useMemo(() => {
    const vendors = ['mon', 'hub', 'fir', 'sca', 'ori', 'fix'];
    const names = { mon: 'Monday', hub: 'Hubspot', fir: 'Firebarry', sca: 'Scalla', ori: 'Origami', fix: 'Fix Digital' };
    return vendors.map(v => {
      let score = 0;
      let total = 0;
      fullComparisonRows.forEach(row => {
        if (row.cat === 'תמחור') return;
        total++;
        const val = (row as any)[v];
        if (val === 'יש') score += 1;
        if (val === 'חלקי' || val === 'בדיקה' || val === 'סאמיט') score += 0.5;
      });
      return { 
        name: names[v as keyof typeof names], 
        percentage: Math.round((score / total) * 100) 
      };
    }).sort((a, b) => b.percentage - a.percentage);
  }, []);

  const COMPLIANCE_COLORS = ['#1e3a8a', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#64748b'];

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === 'יש') return <CheckCircle2 className="text-emerald-500" size={18} />;
    if (status === 'אין') return <XCircle className="text-red-400" size={18} />;
    if (status === 'חלקי' || status === 'בדיקה' || status === 'סאמיט') return <MinusCircle className="text-amber-400" size={18} />;
    return <span className="text-[11px] text-slate-600 font-bold">{status}</span>;
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="bg-gradient-to-l from-[#1a2a4e] to-[#2563eb] p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <Target className="text-white" size={32} />
                  </div>
                  <span className="text-blue-200 font-black tracking-widest text-sm uppercase">Business Engine v2.5</span>
                </div>
                <h1 className="text-5xl font-black mb-6 leading-tight">בילד אסטרטגיה אורבנית - אפיון CRM</h1>
                <p className="text-slate-200 text-xl max-w-3xl leading-relaxed font-light">
                  מערכת CRM הוליסטית המשלבת ניהול קמפיינים שיווקיים, ניהול פרויקטים הנדסיים מורכבים, 
                  בקרת תקציב Back-to-Back וניהול הון אנושי מתקדם.
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InfoCard title="ייעול תהליכים" icon={<Zap />}>
                מעבר מאקסלים מבוזרים למסד נתונים רלציוני המאפשר אוטומציה של זרימת הנתונים בין מחלקות השיווק, התפעול והכספים.
              </InfoCard>
              <InfoCard title="מבט ניהולי" icon={<BarChart3 />}>
                דאשבורדים דינמיים בזמן אמת המציגים רווחיות פרויקטלית, עומסי עבודה מחלקתיים ומדדי ניצול משאבים.
              </InfoCard>
              <InfoCard title="שקיפות ובקרה" icon={<ShieldCheck />}>
                תיעוד מלא של לוג שינויים, ניהול הרשאות קשיח ואוטומציות המונעות חריגות תקציביות.
              </InfoCard>
            </div>
          </div>
        );

      case 'marketing':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-4xl font-black text-slate-800 border-r-8 border-blue-600 pr-4 inline-block mb-4">שיווק, פרסום ותקשורת כתובה</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <InfoCard title="ניהול קמפיינים רב-ערוצי" icon={<Globe />}>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span>חיבור Native ל-Meta ו-Google Ads לניטור קמפיינים.</span></li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span>הקמת טפסי אינטרנט מעוצבים (HTML/CSS) כולל שדות מוסתרים.</span></li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span>ניהול מעגל הצלחה/כישלון מלא ללא תלות ב-Make/Zapier.</span></li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <span>מערכת דיוור חכמה עם סגמנטציה ותתי-סגמנטציה.</span></li>
                  </ul>
                </InfoCard>
                <InfoCard title="תקשורת ואוטומציות" icon={<MessageSquare />}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['וואטסאפ רשמי', 'וואטסאפ לא רשמי', 'בוט שירות', 'SMS', 'Email'].map(t => (
                      <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold border border-blue-100">{t}</span>
                    ))}
                  </div>
                  <p className="text-sm">מענה אוטומטי מפורט לפי קמפיין ספציפי ופנייה ייחודית לפי סגמנט לקוח.</p>
                </InfoCard>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                <h4 className="text-xl font-black mb-6 flex items-center gap-2"><Filter className="text-blue-500" /> שדות הליד באפיון</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['שם מלא / חלוקה שמית', 'מקור / קמפיין / תת-קמפיין', 'סיווג ראשי ומשני', 'סיווג פניה רף תחתון', 'הקצאה אוטומטית', 'זמני פתיחה וטיפול', 'אישור דיוור'].map(f => (
                    <div key={f} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] font-semibold text-slate-700">{f}</div>
                  ))}
                </div>
              </div>
            </div>
            <RequirementTable title="שיווק ומכירות" requirements={
              fullComparisonRows.filter(r => r.cat === 'שיווק' || r.cat === 'תקשורת').map(r => ({
                id: r.req, category: r.cat, feature: r.req, priority: 'High', description: 'דרישת אפיון ליבה למערכת ה-CRM'
              }))
            } />
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <h2 className="text-4xl font-black text-slate-800 border-r-8 border-emerald-600 pr-4 inline-block mb-4">ניהול פרויקטים מורחב</h2>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-6">
                 <InfoCard title="מבנה היררכי וישויות" icon={<Layers />}>
                    <p className="mb-4 font-semibold text-slate-700">היררכיה בסיסית: פרויקט > לקוח > עובדים > אבן דרך > משימה > דיווח > בקרה > בילינג.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <h6 className="font-bold text-emerald-800 text-xs mb-2">סוגי התקשרות נתמכים</h6>
                        <ul className="text-xs space-y-1 font-medium"><li>• פרויקט Fix (אבני דרך)</li><li>• בנק שעות</li><li>• ריטיינר חודשי</li></ul>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                        <h6 className="font-bold text-blue-800 text-xs mb-2">פעילויות ושדות</h6>
                        <ul className="text-xs space-y-1 font-medium"><li>• משימה / אירוע / אבן דרך</li><li>• לוג פרויקטאלי מלא</li><li>• Burn rate בזמן אמת</li></ul>
                      </div>
                    </div>
                 </InfoCard>
               </div>
               <div className="bg-emerald-900 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                 <h4 className="text-xl font-black mb-6">יכולות ניהול ליבה</h4>
                 <ul className="space-y-3 text-sm font-light">
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> ניהול גאנט וציר זמן מלא</li>
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> הגדרת תקציבים והקצאות</li>
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> ניהול מסמכים ועדכונים</li>
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> דשבורד תפוקה ועומסי צוות</li>
                   <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> הצעות מחיר וחיתום דיגיטלי</li>
                 </ul>
               </div>
             </div>
             <RequirementTable title="ניהול פרויקטים" requirements={
               fullComparisonRows.filter(r => r.cat === 'פרויקטים').map(r => ({
                 id: r.req, category: r.cat, feature: r.req, priority: 'High', description: 'דרישת אפיון פרויקטאלית'
               }))
             } />
          </div>
        );

      case 'hr':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-4xl font-black text-slate-800 border-r-8 border-indigo-600 pr-4 inline-block mb-4">ניהול הון אנושי (HR)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <InfoCard title="ישות עובד פיננסית" icon={<Users />}>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-indigo-50 rounded-xl">שם מלא ופרטי התקשרות</div>
                    <div className="p-3 bg-indigo-50 rounded-xl">תעריף מכירה ללקוח</div>
                    <div className="p-3 bg-indigo-50 rounded-xl">יעד שעות הדרכה שנתי</div>
                    <div className="p-3 bg-indigo-50 rounded-xl">תוקף הסמכות ותזכורות</div>
                  </div>
               </InfoCard>
               <InfoCard title="פרויקט משובים ותיעוד" icon={<MessageSquare />}>
                  <p className="text-sm leading-relaxed">ניהול תיעודי שיחות חתך, ניתוח משובים ומשימות פיתוח עובד כפרויקט פנימי מסווג עם הרשאות מוגבלות.</p>
                  <div className="mt-4 p-3 bg-slate-900 text-white rounded-xl text-[10px] flex items-center gap-2">
                    <Lock size={12} className="text-indigo-400" /> גישה מוגבלת למנכ"ל, HR ומנהלים ישירים בלבד.
                  </div>
               </InfoCard>
            </div>
            <RequirementTable title="הון אנושי" requirements={
               fullComparisonRows.filter(r => r.cat === 'HR').map(r => ({
                 id: r.req, category: r.cat, feature: r.req, priority: 'High', description: 'ניהול עובדים ופיתוח'
               }))
             } />
          </div>
        );

      case 'finance':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-4xl font-black text-slate-800 border-r-8 border-amber-600 pr-4 inline-block mb-4">פיננסים ותפעול</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-6">
                 <InfoCard title="דיווח שעות (15 דק')" icon={<Clock />}>
                    <p className="text-sm">דיווח מדויק בקישור למשימה ואבן דרך. כולל דיווחי נע"ת (חופשה/מחלה) המשפיעים על זמינות בדשבורד.</p>
                 </InfoCard>
                 <InfoCard title="כספים ובילינג" icon={<Calculator />}>
                    <div className="flex gap-4 mb-2">
                      <div className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-[10px] font-bold">חשבונית ירוקה / סאמיט</div>
                      <div className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-[10px] font-bold">סליקת אשראי</div>
                    </div>
                    <p className="text-xs">ניהול הצעות מחיר מעוצבות, חיתום דיגיטלי, תנאי תשלום ותזכורות אוטומטיות.</p>
                 </InfoCard>
               </div>
               <div className="bg-amber-900 p-8 rounded-[2rem] text-white shadow-xl flex flex-col justify-between">
                 <h4 className="text-xl font-black mb-4">ניהול ספקים (B2B)</h4>
                 <p className="text-xs font-light text-amber-100 mb-6 leading-relaxed">
                   ניהול ספק כקבלן משנה לפרויקט. 
                   התניית אישור תשלום לספק בסטטוס "שולם" מהלקוח הסופי.
                 </p>
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-[10px]">
                   שדות: שם ספק, תחום התמחות, תנאי תשלום, מדדי איכות.
                 </div>
               </div>
            </div>
            <RequirementTable title="פיננסים ותפעול" requirements={
               fullComparisonRows.filter(r => r.cat === 'כספים' || r.cat === 'תמחור').map(r => ({
                 id: r.req, category: r.cat, feature: r.req, priority: 'High', description: 'ניהול פיננסי'
               }))
             } />
          </div>
        );

      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <h2 className="text-4xl font-black text-slate-800 border-r-8 border-indigo-600 pr-4 inline-block mb-4">דאשבורד ובקרה (BI)</h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                  <h4 className="font-bold mb-6 text-slate-700">רווחיות פרויקטלית מול עלויות</h4>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={profitabilityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="income" name="הכנסות (₪)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="cost" name="עלויות (₪)" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                  <h4 className="font-bold mb-6 text-slate-700">יעילות וניצולת עובדים</h4>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={utilizationData}>
                        <XAxis dataKey="day" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Area type="monotone" dataKey="utilization" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'עלות ליד', value: '₪82', sub: 'ירידה של 12%', color: 'text-blue-600' },
                  { label: 'רווחיות גולמית', value: '42%', sub: 'ממוצע פרויקטים', color: 'text-emerald-600' },
                  { label: 'זמן מענה (SLA)', value: '1.4h', sub: 'מכירות', color: 'text-amber-600' },
                  { label: 'משימות בפיגור', value: '14', sub: 'דחוף', color: 'text-red-600' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase mb-3">{stat.label}</h5>
                    <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-medium mt-1">{stat.sub}</div>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'compare':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <h2 className="text-4xl font-black text-slate-800 border-r-8 border-slate-800 pr-4 inline-block mb-4">בחינת ספקים ומערכות</h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                  <h4 className="font-bold mb-6 text-slate-700 uppercase text-xs">מכ"ם השוואת יכולות</h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vendorRadar}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="Scalla" dataKey="Custom" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                        <Radar name="Firebarry" dataKey="Firebarry" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                        <Radar name="Monday" dataKey="Monday" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
               </div>
               <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-xl">
                 <h4 className="text-2xl font-black mb-6">סיכום המלצות</h4>
                 <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                   בחינת המערכות מבוצעת אל מול 140+ פרמטרים. הדגש הוא על יכולת RTL מלאה וניהול פרויקטים מורכב ללא תלות במערכות בינה מלאכותית חיצוניות (AI).
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                     <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-black">SC</div>
                     <div><div className="text-sm font-bold">Scalla</div><div className="text-[10px] text-slate-400">עמידה מקסימלית באפיון</div></div>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                     <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-black">OR</div>
                     <div><div className="text-sm font-bold">Origami</div><div className="text-[10px] text-slate-400">גמישות תפעולית גבוהה</div></div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        );

      case 'summary':
        return (
          <div className="space-y-12 animate-in fade-in duration-500 pb-32">
             <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-8">
               <div>
                <h2 className="text-4xl font-black text-slate-800 border-r-8 border-slate-900 pr-4 inline-block">סיכום אפיון והשוואה מלאה</h2>
                <p className="text-slate-400 font-medium mt-2">סקירה שקופה של 100+ סעיפי האפיון אל מול חלופות השוק</p>
               </div>
               <div className="flex gap-4">
                 <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                   <div className="text-[10px] font-black text-blue-400 uppercase">עמידה מקסימלית</div>
                   <div className="text-xl font-black text-blue-900">Scalla (94%)</div>
                 </div>
                 <div className="px-6 py-3 bg-emerald-50 border border-emerald-100 rounded-2xl text-center shadow-lg shadow-emerald-500/10">
                   <div className="text-[10px] font-black text-emerald-400 uppercase">הכי כלכלי</div>
                   <div className="text-xl font-black text-emerald-900">Scalla</div>
                 </div>
               </div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20"><TrendingUp size={28} /></div>
                     <h3 className="text-2xl font-black">המלצת היישום והדירוג הכלכלי</h3>
                   </div>
                   <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                     על בסיס הניתוח המפורט, המערכת המשתלמת ביותר כלכלית ביחס לתועלת היא <strong>Scalla</strong>, 
                     כאשר מיד אחריה מדורגות <strong>Origami</strong> ו-<strong>Firebarry</strong>.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="p-5 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-2 bg-emerald-500 text-[8px] font-black uppercase">דירוג 1</div>
                       <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">Scalla</h4>
                       <p className="text-[10px] text-slate-400 leading-relaxed">הכי כלכלית: ROI מהיר ויכולות Native רחבות ללא צורך בתוספים יקרים.</p>
                     </div>
                     <div className="p-5 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-2 bg-blue-500 text-[8px] font-black uppercase">דירוג 2</div>
                       <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">Origami</h4>
                       <p className="text-[10px] text-slate-400 leading-relaxed">איזון מעולה בין גמישות להקמת שדות עצמאית ועלות חודשית סבירה.</p>
                     </div>
                     <div className="p-5 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-2 bg-amber-500 text-[8px] font-black uppercase">דירוג 3</div>
                       <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">Firebarry</h4>
                       <p className="text-[10px] text-slate-400 leading-relaxed">פתרון פרימיום למערכי שיווק גדולים, יקרה יותר אך עוצמתית ב-SaaS.</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                  <h4 className="font-black mb-8 text-slate-700 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <BarChart3 className="text-blue-600" size={18} />
                    דירוג עמידות באפיון (%)
                  </h4>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={complianceData} layout="vertical" margin={{ left: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke="#f1f5f9" />
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                        <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                        <Bar dataKey="percentage" name="עמידה (%)" fill="#1e3a8a" radius={[0, 8, 8, 0]} barSize={26}>
                          {complianceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COMPLIANCE_COLORS[index % COMPLIANCE_COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
               </div>
             </div>

             <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-xl text-white"><Info size={20} /></div>
                    <h3 className="text-xl font-black text-slate-800">פירוט אפיון מלא (100+ סעיפים)</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-white px-3 py-1.5 rounded-full border shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div> יש / מלא
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-white px-3 py-1.5 rounded-full border shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div> חלקי / בבדיקה
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-white px-3 py-1.5 rounded-full border shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div> אין / חסר
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto max-h-[800px]">
                  <table className="w-full text-right border-collapse table-auto">
                    <thead>
                      <tr className="bg-slate-900 text-white text-[10px] font-black uppercase sticky top-0 z-20 shadow-lg">
                        <th className="px-6 py-6 border-l border-white/5 w-[350px]">נושא וסעיף האפיון</th>
                        <th className="px-4 py-6 border-l border-white/5 text-center min-w-[80px]">Monday</th>
                        <th className="px-4 py-6 border-l border-white/5 text-center min-w-[80px]">Hubspot</th>
                        <th className="px-4 py-6 border-l border-white/5 text-center min-w-[80px]">Firebarry</th>
                        <th className="px-4 py-6 border-l border-white/5 text-center bg-blue-800 min-w-[80px]">Scalla</th>
                        <th className="px-4 py-6 border-l border-white/5 text-center bg-emerald-700 min-w-[80px]">origami</th>
                        <th className="px-4 py-6 text-center min-w-[80px]">fix digital</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {fullComparisonRows.map((row, i) => (
                        <tr key={i} className={`hover:bg-slate-50 transition-colors group ${row.cat === 'תמחור' ? 'bg-slate-50/80 font-bold' : ''}`}>
                          <td className="px-6 py-4 border-l">
                            <div className="flex flex-col">
                              <span className="text-[9px] text-slate-400 font-black uppercase tracking-tighter mb-0.5 group-hover:text-blue-500 transition-colors">{row.cat}</span>
                              <span className="text-[11px] text-slate-700 font-semibold leading-snug">{row.req}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 border-l text-center"><StatusIcon status={row.mon} /></td>
                          <td className="px-4 py-4 border-l text-center"><StatusIcon status={row.hub} /></td>
                          <td className="px-4 py-4 border-l text-center"><StatusIcon status={row.fir} /></td>
                          <td className="px-4 py-4 border-l text-center bg-blue-50/40"><StatusIcon status={row.sca} /></td>
                          <td className="px-4 py-4 border-l text-center bg-emerald-50/40"><StatusIcon status={row.ori} /></td>
                          <td className="px-4 py-4 text-center"><StatusIcon status={row.fix} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-50 p-6 text-center border-t">
                  <p className="text-xs text-slate-400 font-medium">מסמך זה מהווה חלק בלתי נפרד מהסכם האפיון והגדרת הצרכים - בילד אסטרטגיה אורבנית 2025</p>
                </div>
             </div>
          </div>
        );

      default:
        return <div>בחר נושא מהתפריט</div>;
    }
  };

  return (
    <div className="flex h-screen bg-[#fcfdfe] overflow-hidden text-right" dir="rtl">
      {/* Sidebar Navigation */}
      <aside className="w-80 bg-white border-l border-slate-200 shadow-[20px_0_50px_rgba(0,0,0,0.02)] z-30 hidden lg:flex flex-col">
        <div className="p-10 border-b border-slate-100 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#1a2a4e] rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group cursor-pointer transition-transform hover:scale-105">
            <Target size={32} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">בילד אסטרטגיה</h2>
          <p className="text-[10px] text-[#2563eb] uppercase tracking-[0.2em] font-black mt-2 bg-blue-50 px-3 py-1 rounded-full">CRM MASTER PLAN v2.5</p>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 translate-x-1' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`transition-colors duration-300 ${activeTab === item.id ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-500'}`}>
                {item.icon}
              </span>
              <span className="font-bold text-sm tracking-tight">{item.label}</span>
              {activeTab === item.id && <ChevronLeft className="mr-auto text-blue-400" size={18} />}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-slate-50 bg-slate-50/50">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div>
              <div className="text-[11px] font-black text-slate-800 uppercase leading-tight">jonathan benjamin</div>
              <div className="text-[9px] text-slate-400 font-bold uppercase leading-tight">ceo | cxo</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-14 relative scroll-smooth bg-slate-50/30">
        <div className="max-w-7xl mx-auto pb-32">
          {renderContent()}
        </div>

        {/* Floating Mobile Nav */}
        <div className="lg:hidden fixed bottom-8 left-8 right-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl p-4 flex justify-around items-center z-50 border border-white/10 backdrop-blur-lg bg-opacity-90">
          {menuItems.slice(0, 5).map(item => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-2xl transition-all ${activeTab === item.id ? 'bg-blue-600 text-white scale-110' : 'text-slate-400 hover:text-white'}`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
