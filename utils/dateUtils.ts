// utils/dateUtils.ts
export function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);

    // التحقق من صحة التاريخ
    if (isNaN(date.getTime())) {
      console.error("تاريخ غير صالح:", dateString);
      return "تاريخ غير معروف";
    }

    const now = new Date();

    // إذا كان التاريخ في المستقبل
    if (date > now) {
      return "من المستقبل";
    }

    let diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let diffInMinutes = Math.floor(diffInSeconds / 60);
    let diffInHours = Math.floor(diffInMinutes / 60);
    let diffInDays = Math.floor(diffInHours / 24);

    // حساب السنوات
    const years = Math.floor(diffInDays / 365);
    diffInDays = diffInDays % 365;

    // حساب الأشهر
    const months = Math.floor(diffInDays / 30);
    diffInDays = diffInDays % 30;

    // الأيام المتبقية
    const days = diffInDays;

    // بناء النص
    const parts = [];

    if (years > 0) {
      parts.push(`${years} ${years === 1 ? "سنة" : "سنوات"}`);
    }

    if (months > 0) {
      parts.push(`${months} ${months === 1 ? "شهر" : "أشهر"}`);
    }

    if (days > 0 && years === 0) {
      parts.push(`${days} ${days === 1 ? "يوم" : "أيام"}`);
    }

    // إذا كان الفرق أقل من يوم
    if (parts.length === 0) {
      if (diffInHours > 0) {
        parts.push(`${diffInHours} ${diffInHours === 1 ? "ساعة" : "ساعات"}`);
      } else if (diffInMinutes > 0) {
        parts.push(
          `${diffInMinutes} ${diffInMinutes === 1 ? "دقيقة" : "دقائق"}`,
        );
      } else if (diffInSeconds > 5) {
        parts.push(
          `${diffInSeconds} ${diffInSeconds === 1 ? "ثانية" : "ثواني"}`,
        );
      } else {
        return "منذ قليل"; // بدلاً من "منذ الآن" أو "لحظات"
      }
    }

    return `منذ ${parts.join(" و ")}`;
  } catch (error) {
    console.error("خطأ في تنسيق التاريخ:", error);
    return "تاريخ غير معروف";
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "تاريخ غير صالح";
    }

    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return "تاريخ غير معروف";
  }
}
