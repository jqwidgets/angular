import { Component } from '@angular/core';

/* ---- reusable cell-template renderers (self-contained, inline styles) ----
   In the vanilla library these ship declaratively as the `cellTemplate`
   column option (jqxgrid.celltemplates.js). Here they are shown with the
   framework-agnostic `cellsrenderer` so the demo runs on jqwidgets-ng as-is. */
function wrap(html: string, align?: string): string {
    const j = align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start';
    return '<div style="display:flex;align-items:center;justify-content:' + j + ';height:100%;padding:0 8px;box-sizing:border-box">' + html + '</div>';
}
function badge(v: string, map: any): string {
    const c = map[v] || ['#f1f5f9', '#475569'];
    return wrap('<span style="display:inline-flex;align-items:center;gap:5px;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600;background:' + c[0] + ';color:' + c[1] + '"><span style="width:6px;height:6px;border-radius:50%;background:' + c[1] + '"></span>' + v + '</span>');
}
const AV = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#0891b2', '#16a34a'];
function avColor(s: string): string { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return AV[h % AV.length]; }
function avatar(name: string, sub: string): string {
    const ini = name.split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
    return wrap('<span style="width:30px;height:30px;border-radius:50%;flex:0 0 30px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px;background:' + avColor(name) + '">' + ini + '</span>' +
        '<span style="margin-left:9px;overflow:hidden"><span style="display:block;font-weight:600;font-size:13px;line-height:1.2">' + name + '</span>' + (sub ? '<span style="display:block;font-size:11.5px;color:#8a94a6">' + sub + '</span>' : '') + '</span>');
}
function money(v: number): string { const n = Number(v) || 0; return wrap('<span style="font-weight:600;color:' + (n >= 0 ? '#16a34a' : '#dc2626') + '">' + (n < 0 ? '-' : '') + '$' + Math.abs(n).toLocaleString() + '</span>', 'right'); }
function progress(v: number): string { const p = Math.max(0, Math.min(100, Number(v) || 0)); const col = p >= 85 ? '#16a34a' : p >= 50 ? '#2563eb' : '#f59e0b'; return wrap('<div style="display:flex;align-items:center;gap:8px;width:100%"><div style="flex:1;height:8px;background:#eef0f4;border-radius:6px;overflow:hidden"><i style="display:block;height:100%;width:' + p + '%;background:' + col + ';border-radius:6px"></i></div><span style="font-size:12px;color:#475569;min-width:32px;text-align:right">' + p + '%</span></div>'); }
function trend(v: number): string { const n = Number(v) || 0; const up = n >= 0; return wrap('<span style="display:inline-flex;align-items:center;gap:3px;font-weight:700;font-size:12.5px;color:' + (up ? '#16a34a' : '#dc2626') + '">' + (up ? '▲' : '▼') + ' ' + Math.abs(n) + '%</span>', 'right'); }
function bool(v: any): string { const on = !!v; return wrap('<span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:6px;background:' + (on ? '#dcfce7' : '#f1f5f9') + ';color:' + (on ? '#16a34a' : '#94a3b8') + '">' + (on ? '✓' : '✕') + '</span>', 'center'); }
function tags(v: string): string {
    const arr = String(v || '').split(',').map(s => s.trim()).filter(Boolean);
    const shown = arr.slice(0, 2), extra = arr.length - shown.length;
    let html = shown.map(t => '<span style="background:#eef2ff;color:#4338ca;border:1px solid #e0e7ff;padding:1px 8px;border-radius:6px;font-size:11.5px;font-weight:600;white-space:nowrap">' + t + '</span>').join(' ');
    if (extra > 0) { html += ' <span style="background:#f1f5f9;color:#64748b;padding:1px 8px;border-radius:6px;font-size:11.5px;font-weight:600">+' + extra + '</span>'; }
    return wrap('<div style="display:flex;gap:4px;overflow:hidden">' + html + '</div>');
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    data: any[] = this.generateData();

    source: any = {
        localdata: this.data,
        datatype: 'array',
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'status', type: 'string' },
            { name: 'plan', type: 'string' },
            { name: 'skills', type: 'string' },
            { name: 'usage', type: 'number' },
            { name: 'change', type: 'number' },
            { name: 'balance', type: 'number' },
            { name: 'verified', type: 'bool' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Member', datafield: 'name', width: 210, cellsrenderer: (r: any, c: any, v: any, d: any, p: any, rd: any) => avatar(v, rd.email) },
        { text: 'Status', datafield: 'status', width: 120, cellsrenderer: (r: any, c: any, v: any) => badge(v, { Active: ['#dcfce7', '#166534'], Trial: ['#dbeafe', '#1e40af'], Paused: ['#fef3c7', '#92400e'], Churned: ['#fee2e2', '#991b1b'] }) },
        { text: 'Plan', datafield: 'plan', width: 120, cellsrenderer: (r: any, c: any, v: any) => badge(v, { Free: ['#f1f5f9', '#475569'], Pro: ['#ede9fe', '#5b21b6'], Enterprise: ['#ccfbf1', '#115e59'] }) },
        { text: 'Skills', datafield: 'skills', width: 170, cellsrenderer: (r: any, c: any, v: any) => tags(v) },
        { text: 'Usage', datafield: 'usage', width: 150, cellsrenderer: (r: any, c: any, v: any) => progress(v) },
        { text: 'MRR', datafield: 'change', width: 100, cellsalign: 'right', cellsrenderer: (r: any, c: any, v: any) => trend(v) },
        { text: 'Balance', datafield: 'balance', width: 120, cellsalign: 'right', cellsrenderer: (r: any, c: any, v: any) => money(v) },
        { text: 'Verified', datafield: 'verified', width: 90, cellsalign: 'center', cellsrenderer: (r: any, c: any, v: any) => bool(v) }
    ];

    generateData(): any[] {
        const first = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Jamie', 'Avery', 'Quinn', 'Noah', 'Mia', 'Liam', 'Emma', 'Lucas', 'Olivia'];
        const last = ['Morgan', 'Chen', 'Patel', 'Kim', 'Garcia', 'Rossi', 'Nowak', 'Silva', 'Weber', 'Ivanov', 'Okafor', 'Nguyen', 'Costa', 'Berg'];
        const status = ['Active', 'Trial', 'Paused', 'Churned'];
        const plans = ['Free', 'Pro', 'Enterprise'];
        const skills = ['React', 'Vue', 'Angular', 'Node', 'Python', 'Go', 'SQL', 'Figma', 'AWS', 'Rust'];
        const pick = (a: any[]) => a[Math.floor(Math.random() * a.length)];
        const rint = (a: number, b: number) => Math.floor(a + Math.random() * (b - a + 1));
        const data: any[] = [];
        for (let i = 0; i < 60; i++) {
            const name = pick(first) + ' ' + pick(last);
            const sk: string[] = [];
            for (let s = 0, n = rint(1, 3); s < n; s++) { const x = pick(skills); if (sk.indexOf(x) < 0) { sk.push(x); } }
            data.push({
                name: name,
                email: name.toLowerCase().replace(' ', '.') + '@acme.io',
                status: pick(status),
                plan: pick(plans),
                skills: sk.join(', '),
                usage: rint(5, 100),
                change: Math.round((Math.random() * 65 - 25) * 10) / 10,
                balance: rint(-600, 5200),
                verified: Math.random() > 0.4
            });
        }
        return data;
    }
}
