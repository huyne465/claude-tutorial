"use client";

import { useId, useState } from "react";
import { MAU_GHEP } from "../noi-dung";
import { CopyButton } from "./CopyButton";
import { Say } from "./Say";

type Fields = typeof MAU_GHEP;

const LABELS: { key: keyof Fields; label: string; placeholder: string }[] = [
  { key: "role", label: "Mình là ai", placeholder: "ví dụ: sinh viên năm 2 ngành Luật" },
  { key: "task", label: "Mình cần gì", placeholder: "ví dụ: tóm tắt chương 3 giáo trình" },
  { key: "audience", label: "Ai sẽ đọc", placeholder: "ví dụ: chính mình, để ôn thi" },
  { key: "format", label: "Trình bày ra sao", placeholder: "ví dụ: bằng gạch đầu dòng, thật ngắn" },
];

function ghep(f: Fields) {
  const v = (x: string, ph: string) => (x.trim() ? x.trim() : ph);
  return (
    `Mình là ${v(f.role, "[mình là ai]")}. ` +
    `Mình cần ${v(f.task, "[mình cần gì]")}. ` +
    `Người đọc là ${v(f.audience, "[ai sẽ đọc]")}. ` +
    `Bạn trình bày ${v(f.format, "[trình bày ra sao]")}. ` +
    `Nếu còn thiếu thông tin gì, hãy hỏi mình trước khi làm nhé.`
  );
}

export function PromptBuilder() {
  const [fields, setFields] = useState<Fields>(MAU_GHEP);
  const id = useId();
  const built = ghep(fields);

  return (
    <div className="builder">
      <div className="builder-head">
        <h3>Máy ghép prompt</h3>
        <span className="hand" style={{ fontSize: 22 }}>
          thử liền nè
        </span>
      </div>
      <p className="small" style={{ marginTop: 6, fontSize: 17 }}>
        Điền vào 4 ô, tớ ghép thành một lời nhờ hoàn chỉnh. Bấm sao chép rồi dán vào Claude.
      </p>

      <div className="grid grid-380 builder-fields">
        {LABELS.map(({ key, label, placeholder }) => (
          <div className="field" key={key}>
            <label htmlFor={`${id}-${key}`}>{label}</label>
            <input
              id={`${id}-${key}`}
              type="text"
              value={fields[key]}
              placeholder={placeholder}
              onChange={(e) => setFields((f) => ({ ...f, [key]: e.target.value }))}
            />
          </div>
        ))}
      </div>

      <p className="hand" style={{ marginTop: 22, fontSize: 22 }}>
        Lời nhờ của cậu:
      </p>
      <Say text={built} className="built" />

      <div className="builder-actions">
        <CopyButton text={built} />
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setFields({ role: "", task: "", audience: "", format: "" })}
        >
          Xoá hết để điền mới
        </button>
      </div>
    </div>
  );
}
