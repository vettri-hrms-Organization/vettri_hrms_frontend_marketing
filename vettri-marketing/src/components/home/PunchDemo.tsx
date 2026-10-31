"use client";

import { useId, useMemo, useState } from "react";

/**
 * The page's live thing: paste what a biometric machine sends (employee code and time, one punch per line)
 * and see the attendance record Vettri makes of it. Sample codes and names; the shift rule matches Vettri's
 * default general shift (09:30-18:30, late after 09:30, half day under 4h 30m).
 */

const ROSTER: Record<string, string> = {
  "1023": "Aarav Sharma",
  "1047": "Priya Gupta",
  "1052": "Rohan Iyer",
  "1061": "Ananya Rao",
  "1078": "Karthik Raja",
};

export const SAMPLE_PUNCHES = `1023 09:02
1047 09:41
1052 08:56
1023 18:47
1061 09:28
1047 13:05
1052 18:31
1061 13:59`;

type Row = { code: string; name: string; first: string; last: string | null; worked: string; status: string; tone: "ok" | "late" | "warn" };

const SHIFT_START = 9 * 60 + 30;
const HALF_DAY = 4 * 60 + 30;

function hhmm(total: number) {
  return `${Math.floor(total / 60)}h ${String(total % 60).padStart(2, "0")}m`;
}

export function toAttendance(raw: string): { rows: Row[]; skipped: number } {
  const byCode = new Map<string, number[]>();
  let skipped = 0;
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const match = trimmed.match(/^(\d{1,8})\D+([01]?\d|2[0-3])[:.]([0-5]\d)/);
    if (!match) {
      skipped++;
      continue;
    }
    const time = Number(match[2]) * 60 + Number(match[3]);
    byCode.set(match[1], [...(byCode.get(match[1]) ?? []), time]);
  }
  const rows: Row[] = [...byCode.entries()].map(([code, times]) => {
    const sorted = [...times].sort((a, b) => a - b);
    const first = sorted[0];
    const last = sorted.length > 1 ? sorted[sorted.length - 1] : null;
    const worked = last === null ? 0 : last - first;
    const fmt = (t: number) => `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
    let status = "Present";
    let tone: Row["tone"] = "ok";
    if (last === null) {
      status = "Missing out-punch";
      tone = "warn";
    } else if (worked < HALF_DAY) {
      status = "Half day";
      tone = "warn";
    } else if (first > SHIFT_START) {
      status = `Late by ${first - SHIFT_START} min`;
      tone = "late";
    }
    return { code, name: ROSTER[code] ?? `Employee ${code}`, first: fmt(first), last: last === null ? null : fmt(last), worked: last === null ? "—" : hhmm(worked), status, tone };
  });
  rows.sort((a, b) => a.name.localeCompare(b.name));
  return { rows, skipped };
}

export default function PunchDemo() {
  const [raw, setRaw] = useState(SAMPLE_PUNCHES);
  const { rows, skipped } = useMemo(() => toAttendance(raw), [raw]);
  const id = useId();
  const present = rows.filter((r) => r.tone !== "warn" || r.status === "Half day").length;
  return (
    <section className="h-split" aria-labelledby={`${id}-a`}>
      <div className="h-split__in">
        <label htmlFor={`${id}-input`} className="h-split__hint">
          Type or paste punches the way a biometric machine sends them: an employee code, then a time.
        </label>
        <textarea
          id={`${id}-input`}
          className="h-split__code"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          spellCheck={false}
          rows={9}
          aria-describedby={`${id}-help`}
        />
        <p id={`${id}-help`} className="h-split__help">
          {skipped > 0 ? `${skipped} line${skipped === 1 ? "" : "s"} skipped: use a code and a time like 1023 09:02.` : "Try changing a time, or delete someone's evening punch."}
        </p>
        <h2 id={`${id}-a`} className="h-split__head h-split__head--a">Punches in,</h2>
      </div>
      <div className="h-split__out">
        <div className="h-att" data-ui aria-live="polite">
          <div className="h-att__top">
            <strong>Attendance · Tuesday 28 October</strong>
            <span>General shift 09:30–18:30</span>
          </div>
          <table className="h-att__table">
            <caption className="visually-hidden">Attendance worked out from the punches</caption>
            <thead>
              <tr><th scope="col">Employee</th><th scope="col">In</th><th scope="col">Out</th><th scope="col">Worked</th><th scope="col">Status</th></tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr><td colSpan={5} className="h-att__empty">No punches yet.</td></tr>
              ) : rows.map((r) => (
                <tr key={r.code}>
                  <td><b>{r.name}</b><span>{r.code}</span></td>
                  <td>{r.first}</td>
                  <td>{r.last ?? "—"}</td>
                  <td>{r.worked}</td>
                  <td><em className={`h-att__tag h-att__tag--${r.tone}`}>{r.status}</em></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-att__foot">{present} of {rows.length} present · ready for payroll</div>
        </div>
        <p className="h-split__head h-split__head--b" aria-hidden="true">attendance out.</p>
      </div>
    </section>
  );
}
