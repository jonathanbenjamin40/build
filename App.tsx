
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Megaphone, 
  CreditCard, 
  BarChart3, 
  Settings2,
  ChevronLeft,
  Search,
  CheckCircle2,
  Clock,
  TrendingUp,
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
  Calculator
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area
} from 'recharts';
import RequirementTable from './components/RequirementTable';
import InfoCard from './components/InfoCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const menuItems = [
    { id: 'intro', label: 'מבוא ויעדים', icon: <Target size={20} /> },
    { id: 'marketing', label: 'שיווק, מכירות ותקשורת', icon: <Megaphone size={20} /> },
    { id: 'projects', label: 'ניהול פרויקטים מורחב', icon: <Briefcase size={20} /> },
    { id: 'hr', label: 'הון אנושי ופיתוח', icon: <Users size={20} /> },
    { id: 'finance', label: 'פיננסים ותפעול', icon: <CreditCard size={20} /> },
    { id: 'dashboard', label: 'דשבורד ובקרה (BI)', icon: <LayoutDashboard size={20} /> },
    { id: 'compare', label: 'השוואת מערכות', icon: <Search size={20} /> },
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

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

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
              <InfoCard title="ייעול תהליכים (Process Optimization)" icon={<Zap />}>
                מעבר מאקסלים מבוזרים למסד נתונים רלציוני המאפשר אוטומציה של זרימת הנתונים בין מחלקות השיווק, התפעול והכספים.
              </InfoCard>
              <InfoCard title="מבט ניהולי (BI Executive View)" icon={<BarChart3 />}>
                דאשבורדים דינמיים בזמן אמת המציגים רווחיות פרויקטלית, עומסי עבודה מחלקתיים ומדדי ניצול משאבים.
              </InfoCard>
              <InfoCard title="שקיפות ובקרה (Control & Audit)" icon={<ShieldCheck />}>
                תיעוד מלא של לוג שינויים, ניהול הרשאות קשיח (HR/פיננסי) ואוטומציות המונעות חריגות תקציביות.
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
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                      <span>חיבור Native ל-Meta ו-Google Ads לניטור קמפיינים נפרד ומקביל.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                      <span>יכולת הקמת טפסי אינטרנט מעוצבים (HTML/CSS) כולל שדות מוסתרים והטמעה מלאה.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                      <span>ניהול מעגל הצלחה/כישלון מלא ללא תלות ב-Zapier/Make.</span>
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard title="תקשורת ואוטומציות (Omnichannel)" icon={<MessageSquare />}>
                  <p className="text-xs font-bold text-slate-400 mb-2 uppercase">ערוצי תקשורת נתמכים:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['וואטסאפ רשמי', 'וואטסאפ לא רשמי', 'בוט שירות/מכירה', 'SMS', 'Email', 'חיבור Google/Office 365'].map(t => (
                      <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold border border-blue-100">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• מענה אוטומטי מפורט לפי קמפיין ספציפי ותיעוד לשדה פנייה.</li>
                    <li>• פנייה ייחודית לפי סגמנט / מקור פניה / תת-סיווג.</li>
                    <li>• אוטומציה לא רקרוסיבית בעמידה בתנאי סף ללא מגע אדם.</li>
                  </ul>
                </InfoCard>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                  <Filter className="text-blue-500" />
                  שדות נתונים ומבנה הליד
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'שם מלא / חלוקה שמית', 'נייד', 'מקור / קמפיין / תת קמפיין',
                    'סיווג ראשי / משני', 'סיווג פניה רף תחתון', 'הקצאה אוטומטית', 'זמני פתיחה | טיפול',
                    'מזהה מקור הליד', 'דואל', 'אישור דיוור'
                  ].map(field => (
                    <div key={field} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-xs font-semibold text-slate-700">{field}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-900 rounded-2xl text-white">
                  <h5 className="font-bold text-sm mb-2 flex items-center gap-2"><Zap size={14} className="text-blue-400" /> מערך דיוור חכם</h5>
                  <p className="text-[11px] text-blue-200 leading-relaxed">
                    יכולת יצירת קמפיין דיוור מבוסס דוא"ל, גרפיקה, עיצוב ומלל. 
                    ניטור כמותי ומדידה, הגדרת קהלי יעד לפי סגמנטציה והקמת תתי-סגמנטציה.
                  </p>
                </div>
              </div>
            </div>

            <RequirementTable 
              title="שיווק, מכירות ותקשורת" 
              requirements={[
                { id: 'm1', category: 'Marketing', feature: 'ניהול קמפיינים Meta/Google', priority: 'High', description: 'ניטור נפרד ומקביל ללא תלות כמותית' },
                { id: 'm2', category: 'Marketing', feature: 'טפסי HTML/CSS עצמאיים', priority: 'High', description: 'כולל שדות מוסתרים והטמעה מלאה' },
                { id: 'm3', category: 'Marketing', feature: 'מערך אוטומציות לקוח', priority: 'High', description: 'פניה ייחודית לפי סגמנט/מקור/קמפיין' },
                { id: 'm4', category: 'Marketing', feature: 'תקשורת רב-ערוצית (וואטסאפ/SMS)', priority: 'High', description: 'וואטסאפ רשמי/לא רשמי ובוט שירות' },
                { id: 'm5', category: 'Marketing', feature: 'טיוב שדות אוטומטי', priority: 'High', description: 'הקצאת נתונים אוטומטית לסינון ללא מגע אדם' },
                { id: 'm6', category: 'Marketing', feature: 'מערכת דיוור גרפית מורכבת', priority: 'Medium', description: 'ניטור כמותי ומדידת קמפיין דיוור' },
              ]} 
            />
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <h2 className="text-4xl font-black text-slate-800 border-r-8 border-emerald-600 pr-4 inline-block mb-4">ניהול פרויקטים מורחב</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-6">
                 <InfoCard title="ישויות וסוגי פרויקטים" icon={<Layers />}>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <h5 className="font-bold text-slate-800 mb-3 border-b pb-1 underline decoration-emerald-200">סוגי התקשרות</h5>
                        <ul className="space-y-2 font-semibold">
                          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> פרויקט Fix (אבני דרך)</li>
                          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> ריטיינר חודשי</li>
                          <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> בנק שעות</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 mb-3 border-b pb-1 underline decoration-emerald-200">ישויות לפרויקט</h5>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 font-medium">מנהל/ת פרויקט | מנהל | הנהלה | ספק</li>
                          <li className="flex items-center gap-2 font-medium">הקבלת לקוח לפרויקט / פרויקט ארגוני</li>
                        </ul>
                      </div>
                    </div>
                 </InfoCard>

                 <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <h4 className="font-bold mb-6 flex items-center gap-2">
                      <FileSignature className="text-emerald-600" />
                      הצעות מחיר, סטטוסים וחיתום דיגיטלי
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <h6 className="font-bold mb-2">ניהול הצעות מחיר</h6>
                        <p>הצעות מחיר מקושרות חברה/לקוח, הגדרת סטטוסים ואוטומציות לחיתום דיגיטלי מלא.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <h6 className="font-bold mb-2">פעילויות ושדות מותאמים</h6>
                        <p>הגדרת פעילויות (משימה, אירוע, אבן דרך) ושדות ייעודיים לפי סוג הפרויקט.</p>
                      </div>
                    </div>
                 </div>
               </div>

               <div className="space-y-6">
                 <div className="bg-emerald-900 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                   <h4 className="text-xl font-black mb-6">יכולות ניהול ליבה</h4>
                   <ul className="space-y-3 text-sm font-medium">
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> ניהול גאנט וציר זמן מלא</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> ניהול אבני דרך ומשימות</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> הגדרת תקציבים והקצאות</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> ניהול מסמכים ועדכונים</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> לוג שינויים והרשאות דיווח</li>
                     <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> תצוגות קנבן, בורד ותרשימים</li>
                   </ul>
                 </div>
               </div>
             </div>

             <RequirementTable 
              title="ניהול פרויקטים" 
              requirements={[
                { id: 'p1', category: 'Project', feature: 'ניהול גאנט וציר זמן מלא', priority: 'High', description: 'כולל ניהול אבני דרך, משימות ותתי משימות מלא' },
                { id: 'p2', category: 'Project', feature: 'ניהול תקציב ותקציבים מורכב', priority: 'High', description: 'הגדרת תקציב, הקצאות והצרכת משימות לפרויקט' },
                { id: 'p3', category: 'Project', feature: 'הצעות מחיר וחיתום דיגיטלי', priority: 'High', description: 'קישור לקוח/חברה כולל סטטוסים ואוטומציות חכמות' },
                { id: 'p4', category: 'Project', feature: 'דשבורד תפוקה ועומסים', priority: 'High', description: 'הגדרת דוחות ודשבורדים ייעודיים לניטור עומסי צוות' },
                { id: 'p5', category: 'Project', feature: 'ניהול מסמכים ועדכונים', priority: 'Medium', description: 'ניהול פנימי/חיצוני של מסמכים ועדכונים לפרויקט' },
                { id: 'p6', category: 'Project', feature: 'תצוגות מגוונות (קנבן/בורד)', priority: 'Medium', description: 'הגדרת משימות במגוון תצוגות ותרשימים לפרויקט' },
              ]} 
            />
          </div>
        );

      case 'hr':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-4xl font-black text-slate-800 border-r-8 border-indigo-600 pr-4 inline-block mb-4">ניהול הון אנושי ופיתוח (HR & L&D)</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="space-y-6">
                 <InfoCard title="ישות עובד - נתונים עמוקים" icon={<Users />}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                        <h6 className="font-bold text-indigo-700 text-xs mb-2 flex items-center gap-1"><CreditCard size={12}/> נתונים פיננסיים</h6>
                        <ul className="text-[11px] text-slate-600 space-y-1">
                          <li>• עלות שכר מעביד</li>
                          <li>• תקורה מחלקתית משויכת</li>
                          <li>• הגדרת שעות תקן חודשיות</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                        <h6 className="font-bold text-purple-700 text-xs mb-2 flex items-center gap-1"><Target size={12}/> פיתוח מקצועי (L&D)</h6>
                        <ul className="text-[11px] text-slate-600 space-y-1">
                          <li>• תוכנית הדרכה שנתית</li>
                          <li>• מונה שעות הדרכה אוטומטי</li>
                          <li>• סטטוס הסמכות ותאריכי תפוגה</li>
                        </ul>
                      </div>
                    </div>
                 </InfoCard>

                 <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                    <h4 className="font-bold mb-6 flex items-center gap-2"><Zap className="text-indigo-500" /> Workflows ב-HR</h4>
                    <ul className="space-y-4 text-sm font-medium">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs mt-0.5">1</div>
                        <div>
                          <p className="text-slate-800">תהליך Onboarding אוטומטי</p>
                          <p className="text-[10px] text-slate-400 font-normal">צ'ק-ליסט למנהלת תפעול: חוזה, חומרה, הרשאות.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs mt-0.5">2</div>
                        <div>
                          <p className="text-slate-800">מעקב שעות הדרכה</p>
                          <p className="text-[10px] text-slate-400 font-normal">התראה למנהל אם עובד לא דיווח הדרכה רבעונית.</p>
                        </div>
                      </li>
                    </ul>
                 </div>
               </div>

               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <h4 className="font-bold mb-6 flex items-center gap-2"><MessageSquare className="text-indigo-500" /> מנגנון משובים ותיעוד</h4>
                  <div className="space-y-4">
                    <div className="p-5 bg-slate-50 rounded-2xl border-r-4 border-indigo-400">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm">כרטסת שיחות (Timeline)</span>
                        <History size={14} className="text-slate-300" />
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed mb-3">סוג שיחה (שנתי/שכר), מראיין, סיכום Rich Text וקבצים מצורפים.</p>
                      <div className="p-3 bg-white rounded-xl border border-slate-100 text-[10px] text-indigo-600 font-bold">
                        משימות התפתחות: גזירת משימות ישירות מהמשוב עם תאריך יעד.
                      </div>
                    </div>
                    <div className="p-4 bg-indigo-900 rounded-2xl text-white">
                      <h5 className="font-bold text-xs mb-2 flex items-center gap-2"><Lock size={12} className="text-indigo-300" /> הפרדת הרשאות קשיחה</h5>
                      <p className="text-[10px] text-indigo-200 leading-relaxed font-light">
                        גישה לנתוני שכר, חוזי העסקה ומשובים מוגבלת למנכ"ל, HR ומנהלים ישירים בלבד.
                      </p>
                    </div>
                  </div>
               </div>
            </div>
            <RequirementTable 
              title="הון אנושי ופיתוח" 
              requirements={[
                { id: 'h1', category: 'HR', feature: 'ישות עובד פיננסית', priority: 'High', description: 'עלות שכר מעביד ותקורה מחלקתית' },
                { id: 'h2', category: 'HR', feature: 'תהליך Onboarding אוטומטי', priority: 'High', description: 'פתיחה אוטומטית של רשימת משימות למנהלת תפעול' },
                { id: 'h3', category: 'HR', feature: 'כרטסת שיחות ומשובים', priority: 'High', description: 'תיעוד שיחות ב-Rich Text כולל קבצים ומשימות התפתחות' },
                { id: 'h4', category: 'HR', feature: 'מונה שעות הדרכה', priority: 'Medium', description: 'סיכום אוטומטי מדיווחים תחת קטגוריית הדרכה' },
                { id: 'h5', category: 'HR', feature: 'הפרדת הרשאות קשיחה', priority: 'High', description: 'נעילה הרמטית של נתוני שכר ומשובים' },
              ]} 
            />
          </div>
        );

      case 'finance':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-4xl font-black text-slate-800 border-r-8 border-amber-600 pr-4 inline-block mb-4">פיננסים ותפעול</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-6">
                 <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                   <h4 className="font-bold mb-6 flex items-center gap-2"><Clock className="text-amber-600" /> מבנה דיווח שעות ונוכחות</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="p-5 bg-slate-50 rounded-2xl">
                        <h6 className="font-bold mb-3 text-amber-800">דיווח שעות פרויקטלי</h6>
                        <ul className="space-y-2 text-xs">
                          <li className="flex gap-2">✓ דיוק של רבע שעה</li>
                          <li className="flex gap-2">✓ בחירת פרויקט + אבן דרך</li>
                          <li className="flex gap-2">✓ הזנת תיאור עבודה</li>
                        </ul>
                      </div>
                      <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100">
                        <h6 className="font-bold mb-3 text-amber-800">דיווחי נע"ת (נוכחות)</h6>
                        <ul className="space-y-2 text-xs">
                          <li className="flex gap-2">• מחלה, מילואים, חופשה</li>
                          <li className="flex gap-2">• משפיע על זמינות בדאשבורד</li>
                          <li className="flex gap-2">• דיוח הוצאות (צילום קבלה מהנייד)</li>
                        </ul>
                      </div>
                   </div>
                 </div>

                 <InfoCard title="אוטומציית חיובים והתחשבנות" icon={<Calculator />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="p-3 bg-white border rounded-xl flex items-center justify-between shadow-sm">
                          <span className="text-xs font-bold">בנק שעות</span>
                          <span className="text-[10px] text-amber-600">התראה ב-10% יתרה</span>
                        </div>
                        <div className="p-3 bg-white border rounded-xl flex items-center justify-between shadow-sm">
                          <span className="text-xs font-bold">חשבוניות API</span>
                          <span className="text-[10px] text-amber-600">הפקה בסימון אבן דרך</span>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-900 rounded-2xl text-white">
                        <h6 className="text-xs font-bold mb-2">התחשבנות בין-מחלקתית</h6>
                        <p className="text-[10px] font-light leading-relaxed text-slate-400">
                          חלוקת הכנסות ועלויות בין 5 יחידות הרווח של החברה (Inter-company).
                        </p>
                      </div>
                    </div>
                 </InfoCard>
               </div>

               <div className="space-y-6">
                 <div className="bg-amber-900 p-8 rounded-[2rem] text-white shadow-xl h-full relative overflow-hidden">
                   <h4 className="text-xl font-black mb-6">ניהול ספקים (Back-to-Back)</h4>
                   <p className="text-sm font-light mb-6 text-amber-100 leading-relaxed">
                     התניית אישור תשלום לספק משנה בקבלת תשלום מהלקוח הסופי.
                   </p>
                   <div className="space-y-4">
                     <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                       <h6 className="text-xs font-bold mb-1">אוטומציית "שלם וקבל"</h6>
                       <p className="text-[10px] text-amber-200">סטטוס אבן דרך לקוח "שולם" -{'>'} משימת אישור תשלום לספק.</p>
                     </div>
                     <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                       <h6 className="text-xs font-bold mb-1">כרטיס ספק מורחב</h6>
                       <p className="text-[10px] text-amber-200">פרטי חשבון, תנאי תשלום (שוטף+30) ומדדי איכות.</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
            <RequirementTable 
              title="פיננסים ותפעול" 
              requirements={[
                { id: 'f1', category: 'Finance', feature: 'דיווח שעות (רבע שעה)', priority: 'High', description: 'דיוק מקסימלי לחיוב לקוח ומעקב רווחיות' },
                { id: 'f2', category: 'Finance', feature: 'דיווחי נע"ת (נוכחות)', priority: 'High', description: 'ניהול מחלות, מילואים וחופשות כולל הוצאות' },
                { id: 'f3', category: 'Finance', feature: 'אוטומציית חיובים (API)', priority: 'High', description: 'חיבור למערכת הנהלת חשבונות להפקה אוטומטית' },
                { id: 'f4', category: 'Finance', feature: 'ניהול ספקי משנה (B2B)', priority: 'High', description: 'התניית תשלום לספק בתשלום מלקוח' },
                { id: 'f5', category: 'Finance', feature: 'התחשבנות בין-מחלקתית', priority: 'Medium', description: 'חלוקת הכנסות ועלויות בין יחידות רווח' },
              ]} 
            />
          </div>
        );

      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <h2 className="text-4xl font-black text-slate-800 border-r-8 border-indigo-600 pr-4 inline-block mb-4">דאשבורד ובקרה (Business Intelligence)</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                  <h4 className="font-bold mb-6 text-slate-700">רווחיות לפי מחלקה ופרויקט (%)</h4>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={profitabilityData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                        <Legend />
                        <Bar dataKey="income" name="הכנסות (₪)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="cost" name="עלויות (₪)" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                  <h4 className="font-bold mb-6 text-slate-700">מקורות לידים וביצועי קמפיינים</h4>
                  <div className="h-72 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={leadSourceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {leadSourceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 lg:col-span-2">
                  <h4 className="font-bold mb-6 text-slate-700">ניצולת כח אדם שבועית (Utilization Rate)</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={utilizationData}>
                        <defs>
                          <linearGradient id="colorUtil" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="utilization" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUtil)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'עלות ליד ממוצעת', value: '₪82', sub: 'ירידה של 12% מהחודש שעבר', color: 'text-blue-600' },
                  { label: 'רווחיות גולמית חזויה', value: '42%', sub: 'מבוסס על צבר הזמנות נוכחי', color: 'text-emerald-600' },
                  { label: 'ממוצע זמן טיפול (SLA)', value: '1.4h', sub: 'זמן פתיחה עד מענה ראשון', color: 'text-amber-600' },
                  { label: 'משימות בפיגור', value: '14', sub: 'מצריך התייחסות מנהל פרויקט', color: 'text-red-600' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{stat.label}</h5>
                    <div>
                      <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{stat.sub}</div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'compare':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
             <h2 className="text-4xl font-black text-slate-800 border-r-8 border-slate-800 pr-4 inline-block mb-4">בחינת ספקים ומערכות חלופיות</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                  <h4 className="font-bold mb-6 text-slate-700 uppercase text-sm tracking-widest">מכ"ם הערכת יכולות</h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={vendorRadar}>
                        <PolarGrid stroke="#f1f5f9" />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 700 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="Monday CRM" dataKey="Monday" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                        <Radar name="Firebarry" dataKey="Firebarry" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                        <Radar name="Scalla / Origami" dataKey="Custom" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                        <Legend iconType="circle" />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
               </div>

               <div className="space-y-6">
                 <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
                   <h4 className="text-2xl font-black mb-6">סיכום המלצות לבחירה</h4>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                     בחינת המערכות מבוצעת אל מול 140+ פרמטרים פונקציונליים שהוגדרו באפיון המורחב. 
                     הדגש הושם על יכולת ניהול פרויקטים הנדסיים מחד, ומערך שיווק אוטומטי מאידך.
                   </p>
                   <div className="space-y-4">
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center font-black">FB</div>
                        <div>
                          <div className="text-sm font-bold">Firebarry</div>
                          <div className="text-[10px] text-slate-400">עמידה מקסימלית באפיון (95%)</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center font-black">SC</div>
                        <div>
                          <div className="text-sm font-bold">Scalla / Fix Digital / Origami</div>
                          <div className="text-[10px] text-slate-400">גמישות פיתוח מלאה במחיר תחרותי</div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase border-b">
                      <th className="px-8 py-6">פרמטר בחינה כלכלי</th>
                      <th className="px-8 py-6">Monday CRM</th>
                      <th className="px-8 py-6">Hubspot</th>
                      <th className="px-8 py-6">Firebarry</th>
                      <th className="px-8 py-6">Scalla / פיקס דיגיטל / אוריגמי</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6">עלות הקמה משוערת</td>
                      <td className="px-8 py-6">₪45,000 - 60,000</td>
                      <td className="px-8 py-6">₪120,000 - 135,000</td>
                      <td className="px-8 py-6">₪90,000 - 110,000</td>
                      <td className="px-8 py-6 text-emerald-600">₪28,000 - 39,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6">עלות חודשית למשתמש</td>
                      <td className="px-8 py-6 font-medium">$40</td>
                      <td className="px-8 py-6 font-medium">$65 - $75</td>
                      <td className="px-8 py-6 font-medium">₪150 - 190</td>
                      <td className="px-8 py-6 font-medium">₪180 - 240</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6">תלות במערכות צד ג'</td>
                      <td className="px-8 py-6 text-red-500 uppercase">גבוהה מאוד</td>
                      <td className="px-8 py-6 text-red-500 uppercase">גבוהה מאוד</td>
                      <td className="px-8 py-6 text-amber-500 uppercase">גבוהה</td>
                      <td className="px-8 py-6 text-emerald-500 uppercase">0% - 70%</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="px-8 py-6 text-sm">יכולת עמידה במסמך אפיון</td>
                      <td className="px-8 py-6 text-sm text-amber-500">75% - 80%</td>
                      <td className="px-8 py-6 text-sm text-amber-500">82% - 84%</td>
                      <td className="px-8 py-6 text-sm text-emerald-600 font-black">95%</td>
                      <td className="px-8 py-6 text-sm text-emerald-600">88% - 96%</td>
                    </tr>
                  </tbody>
                </table>
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
        
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
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
        <div className="max-w-6xl mx-auto pb-32">
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
