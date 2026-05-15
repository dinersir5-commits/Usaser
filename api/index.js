export const config = { runtime: "edge" };

const _0x5a21 = ["\x68\x6f\x73\x74", "\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e", "\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", "\x74\x65", "\x74\x72\x61\x69\x6c\x65\x72", "\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67", "\x75\x70\x67\x72\x61\x64\x65", "\x66\x6f\x72\x77\x61\x72\x64\x65\x64", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x68\x6f\x73\x74", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x72\x6f\x74\x6f", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x6f\x72\x74", "\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e", "\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d", "\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72"];

const _0x44f12a = (process.env[_0x5a21[13]] || "")["\x72\x65\x70\x6c\x61\x63\x65"](/\/$/, "");
const _0x1c3b92 = new Set(_0x5a21.slice(0, 13));

export default async function (_0x228f41) {
  const _0x3d91fa = "3|1|4|0|2"["\x73\x70\x6c\x69\x74"]("|");
  let _0x551a2b = 0;
  
  while (true) {
    switch (_0x3d91fa[_0x551a2b++]) {
      case "0":
        if (!_0x44f12a) return new Response("\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64", { status: 500 });
        continue;
      case "1":
        try {
          const _0x1a2b3c = _0x228f41.url.indexOf("/", 8);
          const _0x4d5e6f = _0x1a2b3c === -1 ? _0x44f12a + "/" : _0x44f12a + _0x228f41.url.slice(_0x1a2b3c);
          const _0x112233 = new Headers();
          let _0x445566 = null;

          for (const [_0xaa, _0xbb] of _0x228f41.headers) {
            if (_0x1c3b92.has(_0xaa) || _0xaa.startsWith(_0x5a21[14])) continue;
            if (_0xaa === _0x5a21[15]) { _0x445566 = _0xbb; continue; }
            if (_0xaa === _0x5a21[16]) { if (!_0x445566) _0x445566 = _0xbb; continue; }
            _0x112233.set(_0xaa, _0xbb);
          }

          if (_0x445566) _0x112233.set(_0x5a21[16], _0x445566);

          const _0x778899 = _0x228f41.method;
          return await fetch(_0x4d5e6f, {
            method: _0x778899,
            headers: _0x112233,
            body: !["\x47\x45\x54", "\x48\x45\x41\x44"].includes(_0x778899) ? _0x228f41.body : undefined,
            duplex: "\x68\x61\x6c\x66",
            redirect: "\x6d\x61\x6e\x75\x61\x6c"
          });
        } catch (_0xe0) {
          return new Response("\x42\x61\x64\x20\x47\x61\x74\x65\x77\x61\x79", { status: 502 });
        }
      case "2":
        // Junk code / Noise
        const _0xdead = (a, b) => a + b;
        _0xdead(10, 20);
        break;
      case "3":
        if (typeof _0x228f41 === "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64") return;
        continue;
      case "4":
        continue;
    }
    break;
  }
}
