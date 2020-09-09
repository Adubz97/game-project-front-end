const t = [
  {
    width: 17,
    height: 17,
    data:
      "uTv=,%$-$-$-$-$%,v=,v=,%$-$-$-$-$%,v=,M4M,%$-$%$#$%$-$%,M$#$M,M$#$M,%$-$%$#$%$-$%,M$#$M<-T-4+$-$C$-$;$-$C$-$;<C<+",
    name: "01 Rear Security Annex",
    hint: "! Look around with the mouse, move with W/A/S/D.",
    intro:
      "[SEC REF 672.A]\n\nThank you for arriving quickly. As you can see, the facility has been breached, and our security monitoring is offline. Containment and establishment of vision are our top priorities.\n\nAll occupants, codenamed 'Raven', will manifest as stationary statues when visible. Do not let your guard down, as they are active and extremely dangerous.\n\nYour mission is simple: enter the facility, bring our security cameras back online, and contain all active Raven. Ni pukha, ni pyera, comrade.",
    enter: {
      p1: {
        x: 96,
        y: 448,
      },
      p2: {
        x: 160,
        y: 512,
      },
    },
    exit: {
      p1: {
        x: 384,
        y: 448,
      },
      p2: {
        x: 448,
        y: 512,
      },
    },
    d: [
      {
        u: 3,
        v: 13,
        entranceDoor: !0,
      },
      {
        u: 12,
        v: 13,
        exitDoor: !0,
      },
    ],
    e: [
      {
        x: 463,
        y: 136,
        wake: "los",
      },
    ],
    t: [],
    c: [],
  },
  {
    width: 20,
    height: 14,
    data: "dDt;$5$t;$5$t;$5$+<d$5$+$-$d$5$+$-u5<-,vU,vU,vU,-uT-$tC$-$tC<tC",
    name: "02 Rear Annex Corridor",
    hint: "! Turn on all cameras using nearby terminals to proceed.",
    enter: {
      p1: {
        x: 32,
        y: 352,
      },
      p2: {
        x: 96,
        y: 416,
      },
    },
    exit: {
      p1: {
        x: 544,
        y: 128,
      },
      p2: {
        x: 608,
        y: 192,
      },
    },
    d: [
      {
        u: 17,
        v: 6,
        exitDoor: !0,
      },
      {
        u: 1,
        v: 10,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 368,
        y: 111,
      },
    ],
    t: [
      {
        u: 6,
        v: 7,
        control: "A",
      },
    ],
    c: [
      {
        u: 12,
        v: 9,
        control: "A",
        facing: 260,
        enabled: !1,
      },
    ],
  },
  {
    width: 20,
    height: 16,
    data:
      "[u$[$n$[$n$[$n$[$5D-$[$5$5$-$[$5$5$-$3<#$5$5<3$-$#$5$5$K$-$#$5$5$3<-45$5$3$v=$3$v=$3$v=$3u,5$t;D3",
    name: "03 Rear Hallway SW",
    hint: "! Raven are immobilized if spotted by security cameras.",
    chx: 0,
    chy: 32,
    enter: {
      p1: {
        x: 128,
        y: 256,
      },
      p2: {
        x: 192,
        y: 320,
      },
    },
    exit: {
      p1: {
        x: 544,
        y: 160,
      },
      p2: {
        x: 608,
        y: 224,
      },
    },
    d: [
      {
        u: 17,
        v: 4,
        exitDoor: !0,
      },
      {
        u: 4,
        v: 10,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 53,
        y: 427,
      },
      {
        x: 448,
        y: 192,
        wake: "los",
      },
      {
        x: 448,
        y: 77,
        wakeRadius: 192,
      },
    ],
    t: [
      {
        u: 14,
        v: 14,
        control: "A",
      },
    ],
    c: [
      {
        u: 11,
        v: 10,
        control: "A",
        facing: 135,
        enabled: !1,
      },
    ],
  },
  {
    width: 24,
    height: 18,
    data:
      "S<+<t3$-$+$-$t3$-$+$-$lD-<-DK$vE$K$%,=,=,%$K$%,=,=,%$3<vEDvv,vv,-$vED-$%,=,=,%$3$-$%,=,=,%$3$-$vE$3]-<-Dl$-$+$-$t3$-$+$-$t3<+<S",
    name: "04 Lobby SW",
    hint: "! Plan a route that exposes you as little as possible.",
    enter: {
      p1: {
        x: 448,
        y: 480,
      },
      p2: {
        x: 512,
        y: 544,
      },
    },
    exit: {
      p1: {
        x: 32,
        y: 384,
      },
      p2: {
        x: 96,
        y: 448,
      },
    },
    d: [
      {
        u: 1,
        v: 11,
        exitDoor: !0,
      },
      {
        u: 14,
        v: 14,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 702,
        y: 287,
      },
      {
        x: 480,
        y: 63,
      },
      {
        x: 288,
        y: 65,
      },
      {
        x: 288,
        y: 513,
      },
    ],
    t: [
      {
        u: 13,
        v: 11,
        control: "A",
      },
      {
        u: 19,
        v: 4,
        control: "B",
      },
      {
        u: 19,
        v: 13,
        control: "C",
      },
    ],
    c: [
      {
        u: 17,
        v: 7,
        control: "C",
        facing: 15,
        enabled: !1,
      },
      {
        u: 16,
        v: 6,
        control: "B",
        facing: 165,
        enabled: !1,
      },
      {
        u: 10,
        v: 11,
        control: "A",
        facing: 262,
        enabled: !1,
      },
    ],
  },
  {
    width: 22,
    height: 27,
    data:
      ";<#,t;$-$#,t;$-$tK,-Dt+$U$t+$U$t+$U$t+$U$t+$U$t#,%$%$%$%TK$v5$K$v5$K$v5D+$vU$+$%$M$%$%$E,#$vU$+$%$v%L#$v5$K$%$v%$#$+$#$v5$K$v5$K$E$-$E$K$E$-$E$K$E$-$E$K$E<E$K$v5$KuD;",
    name: "05 Mezzanine",
    hint: "! Some Raven are more active than others.",
    enter: {
      p1: {
        x: 288,
        y: 704,
      },
      p2: {
        x: 352,
        y: 768,
      },
    },
    exit: {
      p1: {
        x: 160,
        y: 32,
      },
      p2: {
        x: 224,
        y: 96,
      },
    },
    d: [
      {
        u: 5,
        v: 3,
        exitDoor: !0,
      },
      {
        u: 9,
        v: 21,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 615,
        y: 494,
        wake: "los",
      },
      {
        x: 271,
        y: 242,
      },
      {
        x: 207,
        y: 240,
      },
      {
        x: 224,
        y: 771,
        wake: "los",
        patrolDX: -96,
        patrolDY: 0,
      },
    ],
    t: [
      {
        u: 20,
        v: 14,
        control: "A",
      },
      {
        u: 7,
        v: 10,
        control: "B",
      },
    ],
    c: [
      {
        u: 14,
        v: 25,
        control: "A",
        facing: 270,
        enabled: !1,
      },
      {
        u: 5,
        v: 10,
        control: "B",
        facing: 70,
        enabled: !1,
      },
      {
        u: 9,
        v: 10,
        control: "B",
        facing: 110,
        enabled: !1,
      },
    ],
  },
  {
    width: 22,
    height: 19,
    data:
      "CuDK$-$v$K$-$%$%$%$%4%$K$-$%$%$%$E$K$-$%$%$%$%4%$#L-$%$%$%$E$#$vU,#$vU$+$vU$+L-$%$%$%$=$S$-$%$%$%$=$S$-$%$%$%$=$S$-$%$%$%$=$S$-$n$Su-<[$v%$[$-$-$=$%$[$v%$[u4",
    name: "06 Lab Storage",
    hint: "! Although dangerous, looking away may be a useful ruse.",
    chx: 0,
    chy: 32,
    enter: {
      p1: {
        x: 192,
        y: 32,
      },
      p2: {
        x: 256,
        y: 96,
      },
    },
    exit: {
      p1: {
        x: 192,
        y: 384,
      },
      p2: {
        x: 256,
        y: 448,
      },
    },
    d: [
      {
        u: 6,
        v: 3,
        entranceDoor: !0,
      },
      {
        u: 6,
        v: 11,
        exitDoor: !0,
      },
    ],
    e: [
      {
        x: 655,
        y: 497,
        wake: "los",
      },
      {
        x: 367,
        y: 83,
        wake: "los",
      },
      {
        x: 431,
        y: 142,
        wake: "los",
      },
      {
        x: 305,
        y: 329,
        wake: "los",
      },
      {
        x: 365,
        y: 378,
        wake: "los",
      },
      {
        x: 493,
        y: 312,
        wake: "los",
      },
      {
        x: 432,
        y: 528,
        wake: "los",
      },
    ],
    t: [
      {
        u: 1,
        v: 7,
        control: "A",
      },
      {
        u: 10,
        v: 16,
        control: "B",
      },
    ],
    c: [
      {
        u: 18,
        v: 8,
        control: "A",
        facing: 185,
        enabled: !1,
      },
      {
        u: 18,
        v: 16,
        control: "B",
        facing: 175,
        enabled: !1,
      },
    ],
  },
  {
    width: 21,
    height: 16,
    data:
      "3uL;$v=$;$v=$#<v=$#$M$5$%$%$5$#$M$5$5$5$#$M$5$%$%$5$#u$5Tv^,v^,v^,-$-<%$%$%$%D-$-$v-,-$-$v-]v-$Ku<",
    name: "07 Chemical Lab",
    hint: "! Most Raven will not attack you until they see you.",
    enter: {
      p1: {
        x: 128,
        y: 384,
      },
      p2: {
        x: 192,
        y: 448,
      },
    },
    exit: {
      p1: {
        x: 32,
        y: 384,
      },
      p2: {
        x: 96,
        y: 448,
      },
    },
    d: [
      {
        u: 1,
        v: 11,
        exitDoor: !0,
      },
      {
        u: 4,
        v: 11,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 560,
        y: 199,
        wake: "los",
        patrolDX: 0,
        patrolDY: -128,
      },
      {
        x: 144,
        y: 54,
        wake: "los",
      },
      {
        x: 431,
        y: 285,
        wake: "los",
      },
      {
        x: 240,
        y: 421,
        wake: "los",
        patrolDX: 384,
        patrolDY: 0,
      },
      {
        x: 200,
        y: 111,
        wake: "los",
      },
      {
        x: 47,
        y: 152,
        wake: "los",
      },
    ],
    t: [
      {
        u: 19,
        v: 9,
        control: "A",
      },
      {
        u: 9,
        v: 6,
        control: "B",
      },
      {
        u: 2,
        v: 6,
        control: "C",
      },
    ],
    c: [
      {
        u: 13,
        v: 7,
        control: "A",
        facing: 90,
        enabled: !1,
      },
      {
        u: 18,
        v: 3,
        control: "B",
        facing: 185,
        enabled: !1,
      },
      {
        u: 6,
        v: 5,
        control: "C",
        facing: 180,
        enabled: !1,
      },
    ],
  },
  {
    width: 19,
    height: 18,
    data:
      "t#<t;$-$t;$-$dT-$d$^$3T^$3$E$-<-DE$-$^,-<-$^,^<-$-,^$-$-$-,-<-$-$-D-$-$-$-$-$-,-$-$-$-$-$-,-$-$-$-$-$-,E$-$^,E$-$^ue",
    name: "08 Maintenance Corridor",
    hint: "",
    enter: {
      p1: {
        x: 224,
        y: 480,
      },
      p2: {
        x: 288,
        y: 544,
      },
    },
    exit: {
      p1: {
        x: 416,
        y: 32,
      },
      p2: {
        x: 480,
        y: 96,
      },
    },
    d: [
      {
        u: 13,
        v: 3,
        exitDoor: !0,
      },
      {
        u: 7,
        v: 14,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 446,
        y: 165,
        wake: "los",
        patrolDX: -192,
        patrolDY: 0,
      },
      {
        x: 543,
        y: 418,
        wake: "los",
        patrolDX: 0,
        patrolDY: 64,
      },
      {
        x: 352,
        y: 514,
        wake: "los",
        patrolDX: 96,
        patrolDY: 0,
      },
      {
        x: 351,
        y: 258,
        wake: "los",
      },
      {
        x: 47,
        y: 433,
        wake: "los",
      },
      {
        x: 544,
        y: 291,
        wake: "los",
      },
    ],
    t: [
      {
        u: 17,
        v: 10,
        control: "C",
      },
      {
        u: 5,
        v: 7,
        control: "A",
      },
      {
        u: 5,
        v: 12,
        control: "B",
      },
    ],
    c: [
      {
        u: 15,
        v: 16,
        control: "C",
        facing: 268,
        enabled: !1,
      },
      {
        u: 6,
        v: 10,
        control: "A",
        facing: 280,
        enabled: !1,
      },
      {
        u: 11,
        v: 13,
        control: "B",
        facing: 105,
        enabled: !1,
      },
    ],
  },
  {
    width: 21,
    height: 17,
    data:
      "Cu$d$-$U$d$-$U$d$-$U$d$-$5$5DC$-$5$U$C$-$5$U$C$M$U$C$M$5u45$5$;$v$5$;$v$5$;$v$5$;L-ed$-$tK$-$tK<t#",
    name: "09 Front Annex",
    hint: "",
    chx: 0,
    chy: 32,
    enter: {
      p1: {
        x: 192,
        y: 32,
      },
      p2: {
        x: 256,
        y: 96,
      },
    },
    exit: {
      p1: {
        x: 192,
        y: 448,
      },
      p2: {
        x: 256,
        y: 512,
      },
    },
    d: [
      {
        u: 6,
        v: 3,
        entranceDoor: !0,
      },
      {
        u: 6,
        v: 13,
        exitDoor: !0,
      },
    ],
    e: [
      {
        x: 304,
        y: 81,
        wake: "los",
      },
      {
        x: 112,
        y: 340,
        wake: "los",
        patrolDX: 256,
        patrolDY: 0,
      },
      {
        x: 80,
        y: 367,
        wake: "los",
        patrolDX: 256,
        patrolDY: 0,
        patrolStart: 150,
      },
      {
        x: 48,
        y: 398,
        wake: "los",
        patrolDX: 256,
        patrolDY: 0,
        patrolStart: 300,
      },
      {
        x: 495,
        y: 390,
        wake: "los",
      },
      {
        x: 432,
        y: 391,
        wake: "los",
      },
      {
        x: 336,
        y: 54,
        wake: "los",
      },
    ],
    t: [
      {
        u: 14,
        v: 12,
        control: "A",
      },
      {
        u: 19,
        v: 5,
        control: "B",
      },
    ],
    c: [
      {
        u: 11,
        v: 12,
        control: "A",
        facing: 185,
        enabled: !1,
      },
      {
        u: 18,
        v: 7,
        control: "B",
        facing: 220,
        enabled: !1,
      },
    ],
  },
  {
    width: 19,
    height: 23,
    data:
      "+u4C$=$U$C$=$U$C,5$-$5,K$5$-$5$S$5$-$5$S$5$-$5$;<5$-$5<#$vE$#$vE$#$-$5$-$5<#$-$5$-$5$;$-$5$-$5$;<5$-$5$S$5$-$5D3$5$-$U$3$5$-$U$3$5$-$5D3$5$-$5$5$3$5<5$5$3$v5$3$v5$3uD",
    name: "10 Facility Parking",
    hint: "! So many choices...",
    enter: {
      p1: {
        x: 256,
        y: 544,
      },
      p2: {
        x: 320,
        y: 608,
      },
    },
    exit: {
      p1: {
        x: 32,
        y: 352,
      },
      p2: {
        x: 96,
        y: 416,
      },
    },
    d: [
      {
        u: 1,
        v: 10,
        exitDoor: !0,
      },
      {
        u: 8,
        v: 16,
        entranceDoor: !0,
      },
    ],
    e: [
      {
        x: 367,
        y: 401,
        wake: "los",
        patrolDX: 0,
        patrolDY: -192,
      },
      {
        x: 532,
        y: 523,
        wake: "los",
      },
      {
        x: 207,
        y: 207,
        wake: "los",
        patrolDX: 0,
        patrolDY: 192,
      },
      {
        x: 415,
        y: 160,
        wake: "los",
        patrolDX: 0,
        patrolDY: 288,
      },
      {
        x: 159,
        y: 447,
        wake: "los",
        patrolDX: 0,
        patrolDY: -288,
      },
      {
        x: 159,
        y: 603,
        wake: "los",
        patrolDX: 32,
        patrolDY: 64,
      },
      {
        x: 542,
        y: 595,
        wake: "los",
        patrolDX: 0,
        patrolDY: 64,
        patrolStart: 1400,
      },
      {
        x: 143,
        y: 76,
        wake: "los",
      },
    ],
    t: [
      {
        u: 15,
        v: 19,
        control: "B",
      },
      {
        u: 14,
        v: 2,
        control: "A",
      },
      {
        u: 3,
        v: 1,
        control: "C",
      },
    ],
    c: [
      {
        u: 13,
        v: 19,
        control: "B",
        facing: 170,
        enabled: !1,
      },
      {
        u: 16,
        v: 8,
        control: "A",
        facing: 175,
        enabled: !1,
      },
      {
        u: 7,
        v: 8,
        control: "C",
        facing: 120,
        enabled: !1,
      },
    ],
  },
];
t.outro =
  "[SEC REF 672.C]\n\nThe facility is now in code yellow, thanks to your efforts. With all cameras back online, secondary cleanup crews will finish the job with minimal danger. We are pleased to report that no Raven escaped during the operation.\n\nYou are cleared to leave. Do svidaniya, comrade...\n\nYOU WIN";
const i = {
  i: {
    camera_arm: {
      x: 32,
      y: 32,
      w: 32,
      h: 32,
    },
    camera_head: {
      x: 0,
      y: 32,
      w: 21,
      h: 12,
    },
    door: {
      x: 64,
      y: 0,
      w: 32,
      h: 32,
    },
    floor: {
      x: 32,
      y: 0,
      w: 32,
      h: 32,
    },
    player: {
      x: 64,
      y: 32,
      w: 21,
      h: 15,
    },
    raven: {
      x: 96,
      y: 32,
      w: 18,
      h: 30,
    },
    terminal: {
      x: 96,
      y: 0,
      w: 32,
      h: 32,
    },
    wall: {
      x: 0,
      y: 0,
      w: 32,
      h: 32,
    },
  },
  s: {},
  a:
    "Monaco,'Lucida Sans Typewriter','Andale Mono','Lucida Console','Courier New',Courier,monospace",
  o(t) {
    const i = new Image();
    return (i.src = t), i;
  },
  r(t, i, s, h) {
    let e = this.i[t];
    i.drawImage(this.s.i, e.x, e.y, e.w, e.h, s, h, e.w, e.h);
  },
  l(t, i, s, h, e, a, o, r, l, n) {
    let$ = this.i[t];
    i.drawImage(this.s.i, $.x + s, $.y + h, e, a, o, r, l, n);
  },
  loadAllAssets() {
    i.s.i = i.o("assets/sprites.png");
  },
  n: (t) => t + "px " + i.a,
};
