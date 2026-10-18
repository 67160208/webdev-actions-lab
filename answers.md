## Exercise 4: Workflow เริ่มเมื่อใด และ Job deploy ทำอะไร
Workflow เริ่มทำงานเมื่อมีการ push ขึ้น branch main หรือเมื่อกดรันเองจากแท็บ Actions (workflow_dispatch)
Job `deploy` รันบนเครื่อง ubuntu-latest โดย
1. ดึงโค้ดจาก Repository (checkout)
2. ตรวจว่ามี index.html (ขั้นตอน Challenge)
3. ตั้งค่า GitHub Pages (configure-pages)
4. อัปโหลดไฟล์ทั้งโฟลเดอร์เป็น Artifact
5. Deploy Artifact ขึ้น GitHub Pages แล้วได้ URL เว็บไซต์

## คำถามท้ายแลป
1) **GitHub Actions ต่างจาก GitHub Pages อย่างไร?**
Actions คือระบบรันงานอัตโนมัติ (CI/CD) เมื่อเกิดเหตุการณ์ เช่น push ส่วน Pages คือบริการโฮสต์เว็บ Static ให้เข้าถึงผ่าน URL สาธารณะ ในแลปนี้ Actions เป็นตัวนำไฟล์ไป deploy ให้ Pages

2) **ทำไมเลือก trigger ด้วย push ที่ branch main?**
main เป็น branch หลักที่มีโค้ดเวอร์ชันพร้อมใช้งาน เมื่อ push แล้ว เว็บจะอัปเดตอัตโนมัติทันที ไม่ต้อง deploy เอง และไม่ deploy จาก branch ที่ยังทดลองอยู่

3) **ถ้าแก้ไฟล์ในเครื่องแต่ไม่ได้ push เว็บจะเปลี่ยนไหม?**
ไม่เปลี่ยน เพราะ GitHub Pages ใช้ไฟล์ที่อยู่บน GitHub เท่านั้น การแก้ในเครื่องยังไม่ถูกส่งไป และ Workflow ไม่ถูกเรียก

4) **ทำไมโปรเจกต์ PHP + MySQL รันบน GitHub Pages โดยตรงไม่ได้?**
GitHub Pages รองรับเฉพาะไฟล์ Static (HTML, CSS, JavaScript) ไม่มีเซิร์ฟเวอร์ที่ประมวลผล PHP และไม่มีฐานข้อมูล MySQL ต้องแยกส่วนหน้าเว็บมาไว้ที่ Pages หรือใช้โฮสติ้งที่รองรับ PHP

5) **ขั้นตอนค้นหาสาเหตุเมื่อ Workflow เป็น Failed**
1. เปิดแท็บ Actions แล้วคลิก run ที่ล้มเหลว
2. ดูว่า step ไหนมีเครื่องหมายแดง แล้วเปิด log ของ step นั้น
3. อ่านข้อความ error เช่น YAML ผิดรูปแบบ, path ผิด, สิทธิ์ (permissions) ไม่พอ หรือยังไม่ได้ตั้ง Source เป็น GitHub Actions ใน Settings → Pages
4. แก้ไขโค้ดหรือ YAML ในเครื่อง แล้ว commit และ push ใหม่
5. ตรวจว่า Workflow ผ่าน (สีเขียว) แล้ว Hard Refresh เว็บไซต์
