import { CopyButton } from "./components/CopyButton";
import { PromptBuilder } from "./components/PromptBuilder";
import { Say } from "./components/Say";
import { Shot } from "./components/Shot";
import {
  BoxIcon,
  CableIcon,
  Cat,
  CatMini,
  Heart,
  RecipeIcon,
  Sparkle,
} from "./components/Doodles";
import { CAP_NHAT, PROMPTS, TEN_EM, TEN_TO } from "./noi-dung";
import anhChat from "../public/anh/00-man-hinh-chat.jpg";
import anhNutCong from "../public/anh/01-nut-cong.jpg";
import anhNewChat from "../public/anh/01-new-chat.jpg";
import anhProjects from "../public/anh/02-projects.jpg";
import anhCapabilities from "../public/anh/03-capabilities.jpg";
import anhSkills from "../public/anh/03-skills.jpg";
import anhUploadSkill from "../public/anh/03-upload-skill.jpg";
import anhPlugins from "../public/anh/04-plugins.jpg";
import anhConnectors from "../public/anh/05-connectors.jpg";
import anhNutConnect from "../public/anh/05-nut-connect.jpg";
import anhChatConnectors from "../public/anh/05-chat-connectors.jpg";

/* ---------- dữ liệu nhỏ cho từng phần ---------- */

const NAV = [
  { href: "#prompt", label: "Cách nhờ Claude" },
  { href: "#luan", label: "Viết luận" },
  { href: "#skills", label: "Skills" },
  { href: "#plugins", label: "Plugins" },
  { href: "#ketnoi", label: "Kết nối app" },
  { href: "#hoi", label: "Hỏi cách cài" },
];

const TOC = [
  { href: "#prompt", bg: "bg-pink", t: "Cách nhờ Claude", d: "Cách viết lời nhờ (prompt) để Claude hiểu đúng ý ngay lần đầu." },
  { href: "#luan", bg: "bg-butter", t: "Viết luận", d: "Từ tìm ý tới sửa câu, mà bài vẫn là giọng văn của cậu." },
  { href: "#skills", bg: "bg-mint", t: "Skills", d: "Bật “công thức” để Claude làm được file Word, PowerPoint, PDF." },
  { href: "#plugins", bg: "bg-sky", t: "Plugins", d: "Cài nguyên một hộp đồ nghề chỉ với một nút bấm." },
  { href: "#ketnoi", bg: "bg-lilac", t: "Kết nối app", d: "Cho Claude đọc Google Drive, Gmail, Notion của cậu." },
  { href: "#hoi", bg: "bg-peach", t: "Hỏi cách cài", d: "Không biết chỉnh ở đâu thì hỏi chính Claude, nó chỉ từng bước." },
];

const FORMULA = [
  { bg: "bg-pink", k: "Mình là ai", v: "sinh viên năm 2 ngành Marketing" },
  { bg: "bg-butter", k: "Mình cần gì", v: "dàn ý cho bài luận 1500 chữ" },
  { bg: "bg-mint", k: "Ai sẽ đọc", v: "cô giáo chấm bài, hơi khó tính" },
  { bg: "bg-sky", k: "Trình bày ra sao", v: "gạch đầu dòng, có ví dụ" },
];

const ESSAY_STEPS = [
  { bg: "bg-pink", t: "Tìm ý", d: "Chưa biết bắt đầu từ đâu? Nhờ Claude bày ra vài hướng để cậu chọn.", p: PROMPTS.tim },
  { bg: "bg-butter", t: "Lập dàn ý", d: "Chọn được hướng rồi thì dựng khung xương cho bài.", p: PROMPTS.danY },
  {
    bg: "bg-mint",
    t: "Tự viết bản nháp",
    d: "Bước này cậu tự làm nha, xấu cũng không sao. Đây là lúc bài luận trở thành của cậu. Bí chỗ nào thì nhờ Claude gợi mở, đừng nhờ viết hộ:",
    p: PROMPTS.bi,
  },
  { bg: "bg-sky", t: "Nhờ góp ý", d: "Dán bản nháp vào, nhờ Claude chấm thử như thầy cô.", p: PROMPTS.gopY },
  { bg: "bg-lilac", t: "Chỉnh câu chữ", d: "Sửa xong ý rồi mới tới chính tả và câu văn.", p: PROMPTS.sua },
];

/* ---------- mảnh ghép nhỏ ---------- */

function Keys({ items }: { items: string[] }) {
  return (
    <div className="keys">
      {items.map((k, i) => (
        <span key={k} style={{ display: "contents" }}>
          {i > 0 && (
            <span className="key-sep" aria-hidden="true">
              ›
            </span>
          )}
          <span className="key">{k}</span>
        </span>
      ))}
    </div>
  );
}

function ChapterHead({
  n,
  bg,
  title,
  children,
}: {
  n: number;
  bg: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <p className={`chapter-tag ${bg}`}>Chương {n}</p>
      <h2 className="chapter-title">{title}</h2>
      <p className="chapter-lead">{children}</p>
    </>
  );
}

/* ---------- trang ---------- */

export default function Page() {
  return (
    <div className="page">
      {/* Thanh trên cùng */}
      <header className="wrap topbar">
        <a href="#top" className="brand">
          <CatMini />
          <span>sổ tay nhỏ</span>
        </a>
        <nav aria-label="Mục lục nhanh" className="nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="pill">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* Mở đầu */}
        <section id="top" className="wrap hero">
          <div className="hero-text">
            <p className="kicker">làm riêng cho {TEN_EM}</p>
            <h1 className="title">
              Sổ tay dùng <span className="title-chip">Claude</span>
            </h1>
            <p className="lead">
              Claude là một trợ lý AI biết đọc, biết viết, biết giải thích. Cuốn sổ này chỉ cậu cách
              nhờ Claude làm việc và viết luận, từng bước một, không cần biết gì về công nghệ.
            </p>
          </div>
          <div className="hero-side">
            <div className="bubble">
              An cứ nói chuyện với Claude như đang nhắn tin cho Huy nha hoặc Song Tử Pro. Gõ tiếng Việt bình thường là
              được, nếu đượt hì learn on tiktok về mấy câu promt thành thánh dùy ấy.
            </div>
            <div className="bubble-tail" aria-hidden="true" />
            <div className="mascot-row">
              <Sparkle className="sparkle" />
              <Cat className="cat-big" label="Chú mèo trắng má hồng đang cười" />
              <Heart className="heart" />
            </div>
          </div>
        </section>

        {/* Bước 0 */}
        <section className="wrap">
          <div className="step0 grid grid-210">
            <div>
              <p className="eyebrow">Bước 0</p>
              <h2>Mở Claude ở đâu?</h2>
            </div>
            <div>
              <p className="label">Trên máy tính</p>
              <p>
                Vào trang{" "}
                <a href="https://claude.ai" target="_blank" rel="noreferrer" style={{ fontWeight: 800 }}>
                  claude.ai
                </a>{" "}
                rồi đăng nhập bằng email hoặc tài khoản Google.
              </p>
            </div>
            <div>
              <p className="label">Trên điện thoại</p>
              <p>Tải app Claude trên App Store hoặc Google Play, đăng nhập cùng tài khoản đó.</p>
            </div>
            <div>
              <p className="label">Rồi sao nữa?</p>
              <p>Gõ vào ô chat phía dưới, bấm gửi. Vậy là cậu đã dùng Claude rồi đó.</p>
            </div>
          </div>
          <Shot
            className="shot wide"
            src={anhChat}
            alt="Màn hình chính của Claude. Số 1 khoanh ô chat ở giữa màn hình, số 2 khoanh nút mũi tên gửi ở góc phải ô chat."
            caption="1: gõ vào ô chat · 2: bấm mũi tên để gửi"
          />
        </section>

        {/* Mục lục */}
        <section className="wrap" style={{ paddingTop: 88 }} aria-labelledby="toc-title">
          <h2 id="toc-title" className="section-title">
            Trong sổ có gì nè
          </h2>
          <div className="toc grid grid-300">
            {TOC.map((c, i) => (
              <a key={c.href} href={c.href} className="toc-card">
                <span className={`num ${c.bg}`} aria-hidden="true">
                  {i + 1}
                </span>
                <span>
                  <span className="t">{c.t}</span>
                  <span className="d">{c.d}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Chương 1 */}
        <section id="prompt" className="wrap chapter">
          <ChapterHead n={1} bg="bg-pink" title="Cách Nhờ Claude">
            Lời nhờ (người ta hay gọi là <strong>prompt</strong>) càng rõ thì Claude làm càng đúng ý.
            Không cần văn hay, chỉ cần đủ 4 món dưới đây. Khi nhắn cho Claude, An cứ xưng “mình”,
            gọi “bạn” là được.
          </ChapterHead>

          <div className="formula">
            {FORMULA.map((f, i) => (
              <span key={f.k} style={{ display: "contents" }}>
                {i > 0 && (
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                )}
                <div className={`formula-piece ${f.bg}`}>
                  <p className="k">{f.k}</p>
                  <p className="v">{f.v}</p>
                </div>
              </span>
            ))}
          </div>

          <div className="grid grid-380 compare">
            <div className="card">
              <p className="chip dusk">Hơi mơ hồ</p>
              <p className="say">viết luận về mạng xã hội</p>
              <p className="small soft" style={{ marginTop: 16 }}>
                Claude phải tự đoán: dài bao nhiêu chữ? cho ai đọc? giọng nghiêm túc hay nhẹ nhàng?
                Đoán sai là cậu phải nhờ lại.
              </p>
            </div>
            <div className="card">
              <p className="chip bg-mint">Rõ ràng nè</p>
              <Say text={PROMPTS.good} />
              <div className="row-split">
                <p className="small soft">Claude biết đủ để làm đúng ngay lần đầu.</p>
                <CopyButton text={PROMPTS.good} />
              </div>
            </div>
          </div>

          <h3 className="sub-title">4 mẹo nhỏ mà có võ</h3>
          <div className="grid grid-240 tips">
            <div className="card">
              <p className="card-title">Đưa tài liệu cho Claude</p>
              <p className="small soft">
                Bấm dấu <strong>+</strong> trong khung chat › <strong>Upload or add files</strong> để
                gửi kèm file, ảnh, hoặc dán thẳng đoạn văn vào. Claude đọc xong rồi mới trả lời.
              </p>
            </div>
            <div className="card">
              <p className="card-title">Nhờ Claude hỏi lại</p>
              <p className="small soft">
                Thêm một câu: “Trước khi làm, hỏi mình vài câu cho rõ nhé.” Claude sẽ hỏi những gì
                cậu quên nói.
              </p>
            </div>
            <div className="card">
              <p className="card-title">Chưa ưng thì nói tiếp</p>
              <p className="small soft">
                Không cần viết lại từ đầu. Cứ nhắn “ngắn lại”, “dễ hiểu hơn”, “bớt trang trọng”, hay
                “giải thích như cho học sinh lớp 6”.
              </p>
            </div>
            <div className="card">
              <p className="card-title">Mỗi chuyện một cuộc chat</p>
              <p className="small soft">
                Đổi chủ đề thì bấm <strong>New</strong> ở góc trên bên trái để mở cuộc trò chuyện
                mới, Claude sẽ không bị lẫn chuyện cũ.
              </p>
            </div>
          </div>

          <div className="grid grid-380 shots">
            <Shot
              src={anhNutCong}
              alt="Khung chat với menu dấu cộng đang mở. Số 1 khoanh nút dấu cộng, số 2 khoanh mục Upload or add files."
              caption="Gửi kèm file: 1 bấm dấu +, 2 chọn Upload or add files"
            />
            <Shot
              src={anhNewChat}
              alt="Thanh bên trái của Claude. Số 1 khoanh nút New ở trên cùng."
              caption="Mở cuộc chat mới: bấm New"
            />
          </div>

          <PromptBuilder />
        </section>

        {/* Chương 2 */}
        <section id="luan" className="wrap chapter">
          <ChapterHead n={2} bg="bg-butter" title="Viết luận cùng Claude">
            Coi Claude như một người bạn học giỏi ngồi cạnh: gợi ý, góp ý, hỏi vặn. Còn ngòi bút vẫn
            nằm trong tay cậu. Đi lần lượt 5 bước này nha.
          </ChapterHead>

          <div className="two-col">
            <ol className="steps">
              {ESSAY_STEPS.map((s, i) => (
                <li key={s.t}>
                  <span className={`num lg ${s.bg}`} aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="card">
                    <p className="card-title">
                      <span className="sr-only">Bước {i + 1}: </span>
                      {s.t}
                    </p>
                    <p className="small soft">{s.d}</p>
                    <Say text={s.p} />
                    <div className="row-end">
                      <CopyButton text={s.p} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="side">
              <div className="note bg-butter tilt-r">
                <p className="hand">Nhớ nè</p>
                <p className="small">
                  Hỏi thầy cô xem môn đó cho dùng AI tới đâu. Mỗi trường, mỗi môn một luật khác nhau.
                </p>
                <p className="small">
                  Claude đôi khi nhớ nhầm tên sách, tác giả, số liệu. Trích dẫn nào cũng tự mở nguồn
                  ra kiểm tra lại nha.
                </p>
              </div>
              <div className="card raised">
                <p className="card-title">Mẹo: mỗi môn một Project</p>
                <p className="small soft">
                  Bấm <strong>Projects</strong> ở thanh bên trái, bấm <strong>New project</strong> để
                  tạo một dự án mới cho môn học, rồi thêm đề cương, slide bài giảng, yêu cầu của thầy
                  cô vào đó.
                </p>
                <p className="small soft">
                  Lần sau chat trong dự án đó, Claude đọc sẵn hết, khỏi gửi lại từ đầu.
                </p>
                <Shot
                  src={anhProjects}
                  alt="Trang Projects. Số 1 khoanh mục Projects ở thanh bên trái, số 2 khoanh nút New project ở góc trên bên phải."
                  caption="1: Projects · 2: New project"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* Chương 3 */}
        <section id="skills" className="wrap chapter">
          <ChapterHead n={3} bg="bg-mint" title="Skills: sổ công thức của Claude">
            Skill giống một tờ công thức nấu ăn. Bình thường Claude cất trong túi, khi cậu nhờ việc
            cần tới (ví dụ làm file PowerPoint) thì Claude tự lấy ra dùng. Cậu chỉ cần bật lên một lần.
          </ChapterHead>

          <div className="grid grid-300" style={{ marginTop: 32 }}>
            <div className="card raised stack">
              <p className="step-tag">Bước 1</p>
              <p className="card-title">Cho phép Claude tạo file</p>
              <Keys items={["Settings", "Capabilities"]} />
              <p className="small soft">
                Bật công tắc <strong>Create and edit files</strong>. Settings nằm trong menu khi bấm
                vào tên cậu ở góc dưới bên trái. Bật xong là Claude làm được file Word, Excel,
                PowerPoint và PDF.
              </p>
            </div>
            <div className="card raised stack">
              <p className="step-tag">Bước 2</p>
              <p className="card-title">Thêm skill khác (nếu cần)</p>
              <Keys items={["Customize", "Skills", "Discover"]} />
              <p className="small soft">
                Tìm skill cậu thích rồi bấm dấu <strong>+</strong> bên cạnh. Skill đã thêm nằm ở tab{" "}
                <strong>Yours</strong>.
              </p>
            </div>
            <div className="card raised stack">
              <p className="step-tag">Bước 3</p>
              <p className="card-title">Cứ nhờ như bình thường</p>
              <p className="small soft">
                Claude tự chọn skill hợp với việc. Muốn chắc ăn thì gọi tên luôn: “Dùng skill
                PowerPoint nha”.
              </p>
              <Say text={PROMPTS.ppt} className="say" />
              <div className="row-end" style={{ marginTop: 0 }}>
                <CopyButton text={PROMPTS.ppt} />
              </div>
            </div>
          </div>

          <div className="grid grid-380 shots">
            <Shot
              src={anhCapabilities}
              alt="Hộp Settings, mục Capabilities. Số 1 khoanh chữ Capabilities ở cột trái, số 2 khoanh dòng Create and edit files, số 3 khoanh công tắc của dòng đó."
              caption="Bước 1: 1 Capabilities · 2-3 bật Create and edit files"
            />
            <Shot
              src={anhSkills}
              alt="Trang Customize. Số 1 khoanh tab Skills, số 2 khoanh tab Discover, số 3 khoanh dấu cộng cạnh skill doc-coauthoring."
              caption="Bước 2: 1 Skills · 2 Discover · 3 bấm + để thêm"
            />
          </div>

          <div className="dashed">
            <p className="card-title" style={{ fontSize: 21 }}>
              Nâng cao xíu: có ai gửi cậu một skill (file .zip)?
            </p>
            <div style={{ marginTop: 10 }}>
              <Keys items={["Customize", "Skills", "+ Add", "Upload skill"]} />
            </div>
            <p className="small soft" style={{ marginTop: 10 }}>
              Chọn file .zip đó là xong. Skill tự tải lên chỉ mình cậu thấy. Chỉ cài skill từ người
              cậu tin tưởng thôi nha.
            </p>
            <Shot
              className="shot wide"
              src={anhUploadSkill}
              alt="Trang Customize, tab Skills. Số 1 khoanh nút Add ở góc trên bên phải, số 2 khoanh mục Upload skill trong menu vừa mở."
              caption="1: bấm Add · 2: chọn Upload skill"
            />
          </div>
        </section>

        {/* Chương 4 */}
        <section id="plugins" className="wrap chapter">
          <ChapterHead n={4} bg="bg-sky" title="Plugins: nguyên hộp đồ nghề">
            Nếu skill là một tờ công thức, thì plugin là cả một hộp: vài skill, vài kết nối app và vài
            lệnh tắt, gói sẵn cho một loại công việc. Cài một lần là có đủ món.
          </ChapterHead>

          <div className="grid grid-280 trio">
            <div className="item bg-mint">
              <RecipeIcon />
              <div>
                <p className="card-title">Skill</p>
                <p className="small">= một tờ công thức</p>
              </div>
            </div>
            <div className="item bg-lilac">
              <CableIcon />
              <div>
                <p className="card-title">Connector</p>
                <p className="small">= một sợi dây nối sang app khác</p>
              </div>
            </div>
            <div className="item bg-sky">
              <BoxIcon />
              <div>
                <p className="card-title">Plugin</p>
                <p className="small">= cả hộp, gồm nhiều món ở trên</p>
              </div>
            </div>
          </div>

          <div className="card raised-lg how">
            <p className="card-title" style={{ fontSize: 26 }}>
              Cài plugin trong 4 bước
            </p>
            <ol className="grid grid-210 how-list">
              <li>
                <span className="num bg-sky" aria-hidden="true">1</span>
                <span>
                  Mở <strong>Customize</strong> ở thanh bên trái.
                </span>
              </li>
              <li>
                <span className="num bg-sky" aria-hidden="true">2</span>
                <span>
                  Bấm tab <strong>Plugins</strong>, rồi tab <strong>Discover</strong> để xem danh sách.
                </span>
              </li>
              <li>
                <span className="num bg-sky" aria-hidden="true">3</span>
                <span>
                  Chọn plugin hợp với việc của cậu, đọc mô tả, bấm <strong>Add</strong> (hoặc dấu{" "}
                  <strong>+</strong>).
                </span>
              </li>
              <li>
                <span className="num bg-sky" aria-hidden="true">4</span>
                <span>
                  Dùng thử: trong khung chat gõ dấu <strong>/</strong> hoặc bấm <strong>+</strong> để
                  thấy các skill của plugin.
                </span>
              </li>
            </ol>
            <Shot
              className="shot wide"
              src={anhPlugins}
              alt="Trang Customize. Số 1 khoanh tab Plugins, số 2 khoanh tab Discover, số 3 khoanh nút Add của plugin Productivity."
              caption="1: Plugins · 2: Discover · 3: Add"
            />
          </div>
          <p className="small soft" style={{ marginTop: 18 }}>
            <strong>Lưu ý:</strong> Plugins cần gói trả phí (Pro trở lên). Đang dùng gói miễn phí thì
            Skills và Connectors vẫn đủ xài nha.
          </p>
        </section>

        {/* Chương 5 */}
        <section id="ketnoi" className="wrap chapter">
          <ChapterHead n={5} bg="bg-lilac" title="Nối Claude với app khác">
            Connector là sợi dây nối Claude với những app cậu đang dùng. Nối rồi thì Claude đọc được
            tài liệu trong đó, khỏi phải tải về rồi gửi lại.
          </ChapterHead>
          <div className="apps">
            <span>Google Drive</span>
            <span>Gmail</span>
            <span>Google Calendar</span>
            <span>Notion</span>
            <span className="more">và nhiều app khác</span>
          </div>

          <div className="two-col">
            <div className="card raised-lg connect">
              <p className="card-title" style={{ fontSize: 26 }}>
                Nối một app
              </p>
              <ol className="connect-list">
                <li>
                  <span className="num sm bg-lilac" aria-hidden="true">1</span>
                  <span>
                    Vào <strong>Customize</strong> › <strong>Connectors</strong>.
                  </span>
                </li>
                <li>
                  <span className="num sm bg-lilac" aria-hidden="true">2</span>
                  <span>
                    Bấm tab <strong>Discover</strong> để xem danh sách app.
                  </span>
                </li>
                <li>
                  <span className="num sm bg-lilac" aria-hidden="true">3</span>
                  <span>
                    Bấm vào tên app (ví dụ Gmail), rồi bấm <strong>Connect to Claude</strong>.
                  </span>
                </li>
                <li>
                  <span className="num sm bg-lilac" aria-hidden="true">4</span>
                  <span>
                    Đăng nhập tài khoản của app đó và bấm cho phép (<strong>Allow</strong>). Xong!
                  </span>
                </li>
              </ol>
              <Shot
                src={anhConnectors}
                alt="Trang Customize. Số 1 khoanh tab Connectors, số 2 khoanh tab Discover, số 3 khoanh dấu cộng cạnh app Gmail."
                caption="Bước 1-2: Connectors › Discover"
              />
              <Shot
                src={anhNutConnect}
                alt="Trang giới thiệu app Gmail. Số 1 khoanh nút Connect to Claude ở góc trên bên phải."
                caption="Bước 3: bấm Connect to Claude"
              />
              <div className="inset">
                <p style={{ fontWeight: 800 }}>Bật hoặc tắt trong một cuộc chat</p>
                <p className="soft" style={{ marginTop: 4 }}>
                  Bấm <strong>+</strong> ở góc dưới bên trái khung chat › <strong>Connectors</strong> ›
                  gạt công tắc của app.
                </p>
                <Shot
                  src={anhChatConnectors}
                  alt="Khung chat với menu dấu cộng đang mở. Số 1 khoanh nút dấu cộng, số 2 khoanh mục Connectors, số 3 khoanh công tắc bên cạnh Google Drive."
                  caption="1: dấu + · 2: Connectors · 3: gạt công tắc"
                />
              </div>
            </div>

            <div className="examples">
              <p className="hand" style={{ fontSize: 24 }}>
                Nối xong thì nhờ kiểu này:
              </p>
              {[PROMPTS.drive, PROMPTS.lich, PROMPTS.notion].map((p) => (
                <div className="example" key={p}>
                  <Say text={p} className="" />
                  <div className="row-end">
                    <CopyButton text={p} />
                  </div>
                </div>
              ))}
              <p className="small soft">
                Claude chỉ thấy những app cậu cho phép. Không dùng nữa thì vào{" "}
                <strong>Customize › Connectors</strong>, chọn app và ngắt kết nối.
              </p>
            </div>
          </div>
        </section>

        {/* Chương 6 */}
        <section id="hoi" className="wrap chapter">
          <ChapterHead n={6} bg="bg-peach" title="Không biết chỉnh ở đâu? Hỏi Claude luôn">
            Đây là bí kíp quan trọng nhất trong sổ. Claude chỉ cách dùng máy tính, điện thoại, app rất
            kiên nhẫn. Cậu hỏi lại mười lần nó cũng không cáu đâu.
          </ChapterHead>

          <div className="spell on-butter">
            <p className="hand" style={{ fontSize: 24 }}>
              Câu thần chú, cứ thế mà dán:
            </p>
            <Say text={PROMPTS.hoi} className="say big on-white" />
            <div className="row-split">
              <p className="small">
                Thay chữ trong ngoặc vuông bằng việc cậu muốn làm và máy cậu đang dùng.
              </p>
              <CopyButton text={PROMPTS.hoi} onButter />
            </div>
          </div>

          <div className="grid grid-240" style={{ marginTop: 24 }}>
            <div className="card">
              <p className="card-title">Chụp màn hình gửi kèm</p>
              <p className="small soft">
                Claude nhìn được ảnh. Gửi ảnh kèm câu “mình đang ở màn hình này, bấm vào đâu tiếp?”
              </p>
            </div>
            <div className="card">
              <p className="card-title">Kẹt bước nào nói bước đó</p>
              <p className="small soft">
                “Mình bị kẹt ở bước 3, màn hình không có nút đó.” Claude sẽ tìm đường khác.
              </p>
            </div>
            <div className="card">
              <p className="card-title">Gặp chữ lạ thì hỏi</p>
              <p className="small soft">“API là gì? Giải thích như cho người chưa học tin học bao giờ.”</p>
            </div>
            <div className="card">
              <p className="card-title">Nhờ tra hướng dẫn gốc</p>
              <p className="small soft">
                “Tìm trên support.claude.com hướng dẫn cách … rồi tóm tắt lại cho mình.”
              </p>
            </div>
          </div>
        </section>

        {/* Ghi nhớ */}
        <section className="wrap chapter" aria-labelledby="nho-title">
          <h2 id="nho-title" className="section-title">
            Mấy điều nhỏ xíu nên nhớ
          </h2>
          <div className="grid grid-230" style={{ marginTop: 28, gap: 24 }}>
            <div className="note bg-butter tilt-l">
              <p className="hand">Claude có thể sai</p>
              <p className="small">Nhất là số liệu, ngày tháng, tên sách. Chuyện quan trọng thì kiểm tra lại.</p>
            </div>
            <div className="note bg-mint tilt-r1">
              <p className="hand">Đừng dán mật khẩu</p>
              <p className="small">Mật khẩu, số thẻ, mã OTP thì không bao giờ đưa cho Claude nha.</p>
            </div>
            <div className="note bg-sky tilt-l1">
              <p className="hand">Tên nút có thể đổi</p>
              <p className="small">
                App hay cập nhật, chữ trên nút có thể khác chút xíu. Không thấy thì chụp màn hình hỏi
                Claude.
              </p>
            </div>
            <div className="note bg-pink tilt-r">
              <p className="hand">Không có câu hỏi ngốc</p>
              <p className="small">Hỏi gì cũng được, hỏi bao nhiêu lần cũng được. Thật đó.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Lời cuối */}
      <footer className="wrap end">
        <div className="end-card">
          <Cat size={140} eyes="happy" />
          <div>
            <p className="display">Kẹt chỗ nào thì nhắn tui nha.</p>
            <p style={{ marginTop: 10 }}>
              Huy làm cái nì vì muốn cậu đỡ mệt hơn một chút mỗi lần làm bài. Cố lên, có tui ở đây.
            </p>
            <p className="sign">{TEN_TO}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
