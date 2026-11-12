# Spec: Ảnh minh hoạ giao diện claude.ai cho sổ tay

## Objective

Sổ tay hiện chỉ tả đường đi bằng chữ ("Customize › Connectors", "bấm dấu +"...).
An không rành công nghệ, đọc chữ dễ lạc. Thêm ảnh chụp thật của claude.ai, mỗi
ảnh khoanh hồng + đánh số đúng chỗ cần bấm, đặt ngay dưới bước nó minh hoạ.

Người đọc: An, mở sổ trên máy tính hoặc điện thoại, vừa xem vừa làm theo trên
claude.ai bản web.

Thành công = An nhìn ảnh là biết bấm đâu, không phải hỏi lại.

### Danh sách ảnh

| Mã ảnh (file trong `public/anh/`) | Màn hình claude.ai | Khoanh gì | Đặt ở đâu trong `page.tsx` |
|---|---|---|---|
| `00-man-hinh-chat.jpg` | Trang chủ, ô chat có chữ mẫu (chưa gửi) | (1) ô chat, (2) nút gửi | Bước 0, dưới lưới 3 cột |
| `01-nut-cong.jpg` | Menu **+** trong khung chat đang mở | (1) nút +, (2) Upload or add files | Chương 1, dưới "4 mẹo nhỏ" |
| `01-new-chat.jpg` | Thanh bên trái | (1) New | Chương 1, cạnh ảnh trên |
| `02-projects.jpg` | Trang Projects | (1) Projects, (2) New project | Chương 2, thẻ "Mẹo: mỗi môn một Project" |
| `03-capabilities.jpg` | Settings › Capabilities | (1) Capabilities, (2-3) Create and edit files + công tắc | Chương 3, dưới 3 thẻ bước |
| `03-skills.jpg` | Customize › Skills › Discover | (1) Skills, (2) Discover, (3) dấu + | Chương 3, cạnh ảnh trên |
| `03-upload-skill.jpg` | Customize › Skills › menu Add | (1) Add, (2) Upload skill | Chương 3, khung "Nâng cao xíu" |
| `04-plugins.jpg` | Customize › Plugins › Discover | (1) Plugins, (2) Discover, (3) nút Add | Chương 4, khung "Cài plugin trong 4 bước" |
| `05-connectors.jpg` | Customize › Connectors › Discover | (1) Connectors, (2) Discover, (3) dấu + cạnh Gmail | Chương 5, khung "Nối một app" |
| `05-nut-connect.jpg` | Trang giới thiệu app Gmail | (1) Connect to Claude | Chương 5, dưới ảnh trên |
| `05-chat-connectors.jpg` | Menu + › Connectors trong khung chat | (1) +, (2) Connectors, (3) công tắc | Chương 5, ô "Bật hoặc tắt trong một cuộc chat" |

Ảnh lưu dạng JPEG 1280×800 (công cụ chụp xuất JPEG), tổng ~684 KB.
Tên tài khoản được thay bằng "An" ngay trên trang trước khi chụp; email, lịch sử chat,
tên dự án, artifact gần đây bị làm mờ.

Ngoài phạm vi: Chương 6, app điện thoại, ảnh động/video.

### Cách chụp (chạy trên Chrome của Huy qua extension Claude in Chrome)

1. Huy tự mở Chrome, đăng nhập claude.ai, bật extension. Claude không đăng nhập hộ.
2. Cửa sổ cố định 1280×800 để mọi ảnh cùng cỡ.
3. Trước mỗi ảnh, chèn `<style>` tạm vào trang để **làm mờ** (`filter: blur(6px)`):
   lịch sử chat, tên dự án, tên + email tài khoản, tên file cá nhân. Selector tìm
   lúc chạy bằng `read_page`/`find` vì claude.ai đổi class thường xuyên.
4. Chèn khung khoanh: `div` định vị theo `getBoundingClientRect()` của nút đích,
   viền 4px `#ff8fb1` + viền ngoài `#2e2140`, bóng cứng, huy hiệu số tròn. Cùng
   kiểu sticker với sổ tay.
5. Chụp với `save_to_disk`, rồi `zoom` kiểm từng vùng đã làm mờ. Còn đọc được chữ
   cá nhân thì chụp lại, không dùng ảnh đó.
6. Gỡ style + khung, chuyển màn hình tiếp. Xong thì đóng tab đã mở.
7. Chép ảnh đạt vào `public/anh/` theo mã ở bảng trên.

## Tech Stack

Có sẵn, không thêm gì: Next.js 16 (App Router), React 19, TypeScript 5.9.
Ảnh hiển thị bằng `next/image` (static import → tự có width/height, placeholder
mờ, tự nén webp/avif khi phục vụ).

## Commands

```
Cài:     npm install
Chạy:    npm run dev        → http://localhost:3000
Build:   npm run build      (cũng là bước kiểm: thiếu file ảnh thì build lỗi)
```

Dự án không có lint/test script.

## Project Structure

```
public/anh/              ảnh chụp claude.ai (mới)
app/components/Shot.tsx  khung ảnh: figure + link mở bản lớn + chú thích (mới)
app/globals.css          thêm .shot (viền, bóng, chú thích chữ tay, co theo điện thoại)
app/page.tsx             chèn <Shot> dưới từng bước
README.md                thêm 3 dòng: ảnh ở đâu, cách thay khi claude.ai đổi giao diện
```

## Code Style

Theo đúng kiểu hiện có: named export, props type ngay trên component, chú thích
tiếng Việt, tên file ảnh kebab-case không dấu, màu lấy từ biến CSS trong `:root`.

```tsx
import Image, { type StaticImageData } from "next/image";

type Props = { src: StaticImageData; alt: string; caption?: string };

/** Ảnh chụp màn hình claude.ai. Bấm vào để mở bản lớn ở tab mới. */
export function Shot({ src, alt, caption }: Props) {
  return (
    <figure className="shot">
      <a href={src.src} target="_blank" rel="noreferrer">
        <Image src={src} alt={alt} sizes="(max-width: 640px) 100vw, 720px" placeholder="blur" />
      </a>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
```

Dùng trong trang:

```tsx
import anhConnectors from "../public/anh/05-connectors.png";

<Shot
  src={anhConnectors}
  alt="Trang Customize, mục Connectors. Số 1 khoanh chữ Connectors, số 2 khoanh dấu cộng bên cạnh."
  caption="Bấm số 1 rồi số 2 nha"
/>
```

`alt` viết tiếng Việt, tả chỗ khoanh theo số, để trình đọc màn hình cũng dùng được.

## Testing Strategy

Không thêm framework test: việc này chủ yếu là ảnh và bố cục, kiểm bằng mắt.

1. `npm run build` qua, không lỗi TypeScript, không thiếu ảnh.
2. `npm run dev`, mở localhost:3000 qua trình duyệt, chụp từng chương ở hai
   cỡ: 1280px và 390px. Ảnh không tràn ngang, không có thanh cuộn ngang.
3. `zoom` từng ảnh trong `public/anh/`: không đọc được tên, email, tiêu đề
   chat, tên dự án nào của Huy.
4. Đối chiếu chữ trong sổ với chữ trên nút trong ảnh. Lệch thì sửa chữ trong sổ.

## Boundaries

- **Always:** làm mờ thông tin cá nhân trước mỗi lần chụp; zoom kiểm từng ảnh
  trước khi chép vào `public/anh/`; trên claude.ai chỉ xem, cuộn, mở menu/tab;
  gỡ style tạm và đóng tab sau khi xong.
- **Ask first:** mọi cú bấm làm đổi trạng thái (bật/tắt công tắc, Connect, Add,
  Upload, Allow, chấp nhận điều khoản); mở hộp thoại đăng nhập của app bên thứ
  ba; đổi ngôn ngữ giao diện claude.ai; sửa nội dung sổ ngoài tên nút; thêm
  thư viện.
- **Never:** đổi cài đặt tài khoản, nối app, cài plugin, gửi tin nhắn trong
  claude.ai; nhập mật khẩu hay đăng nhập hộ; lưu ảnh chưa làm mờ vào dự án;
  deploy lên Vercel.

## Success Criteria

- [x] Đủ 11 ảnh trong `public/anh/`, cùng tỉ lệ 1280×800.
- [x] Mỗi ảnh có ít nhất một khung hồng đánh số, nằm đúng nút được nhắc trong bước.
- [x] Zoom kiểm: 0 chữ cá nhân đọc được trên mọi ảnh.
- [x] Mỗi ảnh nằm dưới đúng bước ở bảng trên, có `alt` tiếng Việt, bấm vào mở
      bản lớn ở tab mới.
- [x] `npm run build` qua.
- [x] Ở 390px: ảnh co vừa chiều ngang, không cuộn ngang.
- [x] Tên nút trong sổ khớp tên nút trong ảnh.

## Open Questions

1. ~~Tài khoản của Huy đang dùng gói nào?~~ **Đã chốt: gói Pro.** Giữ `04-plugins.png`.
2. **Đã chốt: giữ giao diện tiếng Anh.** Không đổi ngôn ngữ tài khoản; tên nút
   trong sổ giữ tiếng Anh như hiện tại.
3. **Đã chốt: khung chat trống.** Không gửi tin nào.
4. **Đã chốt: có.** Giao diện thật khác chữ trong sổ → sửa chữ theo giao diện thật,
   báo lại trong tóm tắt.
