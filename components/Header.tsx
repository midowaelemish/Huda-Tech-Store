import "../styles/header.css";

export default function Header({ title }: { title?: string }) {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* شعار أو أيقونة */}
        <div className="header-icon">
          <svg
            className="icon-store"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="header-title">{title || "هدى تك"}</h1>

        {/* عناصر إضافية (اختيارية) */}
        <div className="header-actions">
          <button className="header-btn" aria-label="القائمة">
            <svg
              className="icon-menu"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* شريط سفلي مزخرف */}
      <div className="header-bottom-bar"></div>
    </header>
  );
}
