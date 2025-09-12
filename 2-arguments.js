// Script that prints a message depending on the number of arguments passed

const args = process.argv.slice(2); // بنشيل أول 2 عناصر (node واسم الملف)

// لو مفيش arguments
if (args.length === 0) {
  console.log("No argument"); // لا يوجد وسيطة
}
// لو فيه argument واحد بس
else if (args.length === 1) {
  console.log("Argument found"); // تم العثور على الوسيطة
}
// لو أكتر من واحد
else {
  console.log("Arguments found"); // تم العثور على الحجج
}
