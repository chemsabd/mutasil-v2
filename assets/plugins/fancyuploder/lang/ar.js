// German translation provided courtesy of GitHub user Woersty.
// (C) 2021 CubicleSoft.  All Rights Reserved.

if (!$.fn.FancyFileUpload.langs)  $.fn.FancyFileUpload.langs = {};

$.fn.FancyFileUpload.langs['ar'] = {
	'Start uploading':
		'بدء عملية رفع الملفات',

	'Starting upload...':
		'جاري التحميل ...',

	'Upload completed':
		'تم رفع الملفات بنجاح',

	'There is a file upload still in progress.  Leaving the page will cancel the upload.\n\nAre you sure you want to leave this page?':
		'لا يزال هناك ملف قيد التحميل. ستؤدي مغادرة الصفحة إلى إلغاء التحميل.\n\nهل انت متأكد من مغادرة هذه الصفحة؟',

	'There is a file that was added to the queue but the upload has not been started.  Leaving the page will clear the queue and not upload the file.\n\nAre you sure you want to leave this page?':
		'يوجد ملف تمت إضافته إلى قائمة الانتظار ولكن لم يتم رفعه. ستؤدي مغادرة الصفحة إلى مسح قائمة الانتظار وعدم تحميل الملف.\n\nهل انت متأكد من مغادرة هذه الصفحة؟',

	'Cancel upload and remove from list':
		'إلغاء رفع الملف وإزالته من القائمة',

	'This file is currently being uploaded.\n\nStop the upload and remove the file from the list?':
		'جاري رفع هذا الملف حالياً.\n\nهل تريد إيقاف التحميل وإزالة الملف من القائمة؟',

	'This file is waiting to start.\n\nCancel the operation and remove the file from the list?':
		'هذا الملف في انتظار بدء الرفع.\n\nهل تريد إلغاء العملية وإزالة الملف من القائمة؟',

	'Preview':
		'استعراض',

	'No preview available':
		'لا يمكن استعراض الملف',

	'Invalid file extension.':
		'هذا النوع من الملفات غير مدعوم',

	'File is too large.  Maximum file size is {0}.':
		'الملف كبير جدا. الحد الأقصى لحجم الملف هو {0}.',

	'Remove from list':
		'ازالة من القائمة',

	'{0} of {1} | {2}%':
		'{0} من {1} | {2}%',

	'{0} | Network error, retrying in a moment... ({1})':
		'{0} | خطأ في الاتصال , جاري اعادة المحاولة... ({1})',

	'The upload was cancelled.':
		'تم الغاء عملية الرفع.',

	'The upload failed.  {0} ({1})':
		'فشلت عملية رفع الملف.  {0} ({1})',

	'The upload failed.':
		'فشلت عملية رفع الملف',

	'The server indicated that the upload was not successful.  No additional information available.':
		'فشل عملية الرفع. لا توجد معلومات إضافية متاحة.',

	'Browse, drag-and-drop, or paste files to upload':
		'استعرض الملفات أو اسحبها داخل الصندوق لتحميلها',

	'Record audio using a microphone':
		'تسجيل الصوت باستخدام ميكروفون',

	'Audio recording - {0}.mp3':
		'تسجيل - {0}.mp3',

	'Unable to record audio.  Either a microphone was not found or access was denied.':
		'تعذر تسجيل الصوت. لم يتم العثور على ميكروفون أو تم رفض الوصول له.',

	'Record video using a camera':
		'تسجيل الفيديو باستخدام الكاميرا',

	'Video recording - {0}.mp4':
		'تسجيل فيديو - {0}.mp4',

	'Unable to record video.  Either a camera was not found or access was denied.':
		'تعذر تسجيل الفيديو. لم يتم العثور على كاميرا أو تم رفض الوصول إليها.'
};

$.fn.FancyFileUpload.defaults.langmap = $.fn.FancyFileUpload.langs['ar'];
