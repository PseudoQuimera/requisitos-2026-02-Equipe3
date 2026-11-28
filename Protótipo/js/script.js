
const A = {
    1: 'AT-01 Docente',
    2: 'AT-02 Gestor de internacionalização',
    3: 'AT-03 Analista de internacionalização',
    4: 'AT-04 Responsável pela pesquisa científica',
    5: 'AT-05 Administrador do sistema',
    6: 'AT-06 Gestor acadêmico'
};

const M = [
    [1, 'CDU-01 Currículo e formação', [1, 2, 4, 6]],
    [3, 'CDU-03 Publicações', [1, 2, 4]],
    [4, 'CDU-04 Classificar internacionalização', [2, 3, 4]],
    [6, 'CDU-06 Colaborações', [1, 2, 3, 4]],
    [7, 'CDU-07 Missões internacionais', [1, 2, 3]],
    [10, 'CDU-10 Indicadores', [2, 3, 4, 6]],
    [11, 'CDU-11 Relatórios', [2, 3, 4, 6]],
    [12, 'CDU-12 Configurar indicadores', [2]],
    [13, 'CDU-13 Versionar indicadores', [2]],
    [14, 'CDU-14 Divergências', [2, 3, 4, 5]],
    [15, 'CDU-15 Origem e histórico', [2, 3, 5]],
    [16, 'CDU-16 Integrações', [5]],
    [17, 'CDU-17 Usuários e permissões', [5]]
];

const D = [
    {
        id: 1,
        n: 'Ana Beatriz Lima',
        c: 'Direito',
        t: 'Doutora',
        f: [
            ['Doutorado', 'Universidade de Coimbra', 'Portugal'],
            ['Mestrado', 'UFC', 'Brasil']
        ]
    },
    {
        id: 2,
        n: 'Carlos Mendes',
        c: 'Engenharia',
        t: 'Doutor',
        f: [
            ['Doutorado', 'TU München', 'Alemanha']
        ]
    },
    {
        id: 3,
        n: 'Beatriz Souza',
        c: 'Psicologia',
        t: 'Mestra',
        f: [
            ['Mestrado', 'USP', 'Brasil']
        ]
    },
    {
        id: 4,
        n: 'Rafael Ponte',
        c: 'Medicina',
        t: 'Doutor',
        f: []
    }
];

const P = [
    {
        id: 1,
        t: 'Direito digital e proteção de dados',
        d: 1,
        tp: 'Artigo',
        a: 2024,
        v: 'European Data Law Review',
        ex: 1,
        co: 1,
        cl: 'Pendente'
    },
    {
        id: 2,
        t: 'Fundamentos do processo coletivo',
        d: 1,
        tp: 'Livro',
        a: 2022,
        v: 'Editora Forense',
        ex: 0,
        co: 0,
        cl: 'Pendente'
    },
    {
        id: 3,
        t: 'Otimização de redes elétricas',
        d: 2,
        tp: 'Artigo',
        a: 2024,
        v: 'IEEE Transactions on Power Systems',
        ex: 1,
        co: 1,
        cl: 'Internacional'
    },
    {
        id: 4,
        t: 'Estruturas em concreto reforçado',
        d: 2,
        tp: 'Capítulo',
        a: 2023,
        v: 'Springer',
        ex: 1,
        co: 0,
        cl: 'Pendente'
    },
    {
        id: 5,
        t: 'Ansiedade em estudantes universitários',
        d: 3,
        tp: 'Artigo',
        a: 2023,
        v: 'Revista Psicologia em Foco',
        ex: 0,
        co: 0,
        cl: 'Nacional'
    },
    {
        id: 6,
        t: 'Telemedicina no Nordeste',
        d: 4,
        tp: 'Trabalho em evento',
        a: 2025,
        v: null,
        ex: 0,
        co: 0,
        cl: 'Pendente'
    },
    {
        id: 7,
        t: 'Direito digital e proteção de dados',
        d: 1,
        tp: 'Trabalho em evento',
        a: 2024,
        v: 'Congresso LGPD',
        ex: 0,
        co: 0,
        cl: 'Nacional'
    }
];

const C = [
    [1, 'Univ. de Coimbra', 'Portugal', '2022–2024', 'P1'],
    [2, 'TU München', 'Alemanha', '2023–2025', 'P3'],
    [2, 'Univ. de São Paulo', 'Brasil', '2024', 'P4'],
    [3, 'UFC', 'Brasil', '2023', 'P5']
];

let MS = [
    {
        d: 2,
        dest: 'TU München',
        p: 'Alemanha',
        per: '03/2025',
        fin: 'Pesquisa colaborativa'
    }
];

let CF = [
    {
        n: 'Artigos em periódicos estrangeiros',
        m: 'Quantidade de artigos distintos',
        g: 'Ano'
    }
];

let VR = [
    {
        v: 1,
        dt: '01/11/2026',
        r: 'Grupo 3',
        j: 'Definição inicial',
        d: 'Contagem de artigos em periódicos com sede no exterior'
    }
];

let DV = [
    {
        id: 1,
        tp: 'Duplicada',
        rg: 'Pub. 1 e 7 — mesmo título (Direito digital…)',
        st: 'Aberta',
        nt: ''
    },
    {
        id: 2,
        tp: 'Incompleta',
        rg: 'Pub. 6 — periódico/editora ausente',
        st: 'Aberta',
        nt: ''
    },
    {
        id: 3,
        tp: 'Incompleta',
        rg: 'Docente Rafael Ponte — sem formação',
        st: 'Em análise',
        nt: 'Aguardando currículo'
    }
];

let US = [
    ['Ana Beatriz Lima', 'AT-01', 'N1', 1],
    ['Carlos Mendes', 'AT-01', 'N1', 1],
    ['Marcelo Ponte', 'AT-02', 'N4', 1],
    ['Julia Pires', 'AT-03', 'N3', 1],
    ['Lucas Reis', 'AT-05', 'N5', 1]
];

let LG = [];
let cur = 0;
let scr = 1;
let sd = 1;
let fl = {};

const CR = [
    ['docente', 'doc123', 1],
    ['gestor.dri', 'dri123', 2],
    ['analista.dri', 'ana123', 3],
    ['pesquisa', 'pes123', 4],
    ['admin', 'adm123', 5],
    ['gestor.acad', 'aca123', 6]
];

function showLogin() {
    document.body.classList.add('out');

    $('#lg').innerHTML = `
        <div class="lgw">
            <div class="lp">
                <span>
                    Para aprender<br>
                    é preciso<br>
                    <em>curiosidade</em>
                </span>
                <small>
                    SerCiente · protótipo com dados de exemplo
                </small>
            </div>

            <div class="lr">
                <h2>Entrar</h2>

                <p class="sub">
                    Use seu login e senha para acessar o sistema.
                </p>

                <label>
                    Login
                    <input id="lu" autocomplete="off"
                        onkeydown="if(event.key=='Enter')login()">
                </label>

                <label>
                    Senha
                    <input id="lp" type="password"
                        autocomplete="off"
                        onkeydown="if(event.key=='Enter')login()">
                </label>

                <div class="err" id="le" role="alert"></div>

                <div>
                    <button onclick="login()">Entrar</button>
                </div>

                <div class="box" style="margin-top:22px">
                    <b>Acessos de teste</b>

                    <p class="sub" style="margin:2px 0 8px">
                        Credenciais fictícias. A autenticação institucional
                        ainda está pendente (P-09).
                    </p>

                    ${tb(
                        ['Perfil', 'Login', 'Senha', ''],
                        CR.map((c, i) => [
                            A[c[2]],
                            c[0],
                            c[1],
                            `<button class="g" onclick="fillL(${i})">
                                Carregar
                            </button>`
                        ])
                    )}
                </div>
            </div>
        </div>
    `;
}

function fillL(i) {
    $('#lu').value = CR[i][0];
    $('#lp').value = CR[i][1];
    $('#le').textContent = '';
    $('#lp').focus();
}

function login() {
    const u = $('#lu').value.trim();
    const p = $('#lp').value;

    const c = CR.find(x => x[0] == u && x[1] == p);

    if (!c) {
        $('#le').textContent =
            'Login ou senha incorretos. Confira os dados ou carregue um acesso de teste.';
        return;
    }

    cur = c[2];
    fl = {};

    toast('Bem-vindo(a), ' + A[cur].slice(6));

    go();
}

function logout() {
    cur = 0;
    showLogin();
}

const $ = s => document.querySelector(s);
const y = new Date().toLocaleDateString('pt-BR');

const toast = m => {
    const t = $('#toast');

    t.textContent = m;
    t.style.display = 'block';

    clearTimeout(t._t);

    t._t = setTimeout(() => {
        t.style.display = 'none';
    }, 2600);
};

const dn = i => D.find(d => d.id == i).n;

const esc = s => String(s).replace(/[&<>"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
}[c]));

const ds = () => cur == 1
    ? D.filter(d => d.id == 1)
    : D;

const ps = () => cur == 1
    ? P.filter(p => p.d == 1)
    : P;

const opt = (a, s) => a.map(x =>
    `<option ${x == s ? 'selected' : ''}>${x}</option>`
).join('');

const tb = (h, r, e = 'Nenhum registro encontrado.') =>
    r.length
        ? `<div class="tw">
            <table>
                <tr>
                    ${h.map(x => `<th>${x}</th>`).join('')}
                </tr>

                ${r.map(x =>
                    `<tr>${x.map(c => `<td>${c}</td>`).join('')}</tr>`
                ).join('')}
            </table>
        </div>`
        : `<div class="empty">${e}</div>`;

const hd = (t, s) =>
    `<h2>${t}</h2><p class="sub">${s}</p>`;

function go() {
    if (!cur) return showLogin();

    document.body.classList.remove('out');

    $('#who').textContent = A[cur];

    const al = M.filter(m => m[2].includes(cur));

    if (!al.find(m => m[0] == scr)) {
        scr = al[0][0];
    }

    $('#nv').innerHTML = al.map(m =>
        `<button class="${m[0] == scr ? 'on' : ''}"
            onclick="scr=${m[0]};go()">
            ${m[1]}
        </button>`
    ).join('');

    $('#mn').innerHTML = S[scr]();
}

const S = {};

S[1] = () => {
    const l = ds();

    if (!l.find(d => d.id == sd)) {
        sd = l[0].id;
    }

    const d = D.find(x => x.id == sd);

    return hd(
        'Currículo, formação e titulação',
        'Consolida RF-01 e RF-02. ' +
        (cur == 1
            ? 'Você vê apenas os seus dados.'
            : 'Dados curriculares autorizados.')
    ) +

    `<div class="row">
        <label>
            Docente
            <select onchange="sd=+this.value;go()">
                ${l.map(x =>
                    `<option value="${x.id}"
                        ${x.id == sd ? 'selected' : ''}>
                        ${x.n}
                    </option>`
                ).join('')}
            </select>
        </label>
    </div>

    <div class="box">
        <b>${d.n}</b>
        <span class="tag">${d.t}</span>
        <br>
        <span style="color:var(--mu)">${d.c}</span>
    </div>

    <div class="box">
        <b>Formação acadêmica</b>

        ${tb(
            ['Nível', 'Instituição', 'País'],
            d.f,
            'Formação indisponível na fonte. Nenhum dado foi preenchido.'
        )}
    </div>`;
};

S[3] = () => {
    const l = ps().filter(p =>
        (!fl.d || p.d == fl.d) &&
        (!fl.tp || p.tp == fl.tp) &&
        (!fl.a || p.a == fl.a)
    );

    return hd(
        'Publicações científicas',
        'RF-03. Filtros de exemplo: docente, tipo e ano.'
    ) +

    `<div class="row">

        ${cur != 1 ? `
            <label>
                Docente
                <select onchange="fl.d=+this.value;go()">
                    <option value="">Todos</option>

                    ${D.map(d =>
                        `<option value="${d.id}"
                            ${fl.d == d.id ? 'selected' : ''}>
                            ${d.n}
                        </option>`
                    ).join('')}
                </select>
            </label>
        ` : ''}

        <label>
            Tipo
            <select onchange="fl.tp=this.value;go()">
                <option value="">Todos</option>
                ${opt([
                    'Artigo',
                    'Livro',
                    'Capítulo',
                    'Trabalho em evento'
                ], fl.tp)}
            </select>
        </label>

        <label>
            Ano
            <select onchange="fl.a=this.value;go()">
                <option value="">Todos</option>
                ${opt([2022, 2023, 2024, 2025], fl.a)}
            </select>
        </label>

        <button class="g" onclick="fl={};go()">
            Limpar filtros
        </button>

    </div>

    <div class="box">
        ${tb(
            [
                'Título',
                'Docente',
                'Tipo',
                'Ano',
                'Periódico/editora'
            ],
            l.map(p => [
                p.t,
                dn(p.d),
                p.tp,
                p.a,
                p.v || '<span class="tag w">ausente</span>'
            ]),
            'Nenhuma publicação corresponde aos filtros.'
        )}
    </div>`;
};

S[4] = () =>
    `${hd(
        'Classificar internacionalização',
        'RF-04. Critérios institucionais pendentes (P-01): a regra abaixo é só ilustrativa e o idioma isolado não classifica.'
    )}

    <div class="box">
        ${tb(
            [
                'Publicação',
                'Periódico/editora estrangeiro',
                'Coautor estrangeiro',
                'Classificação',
                ''
            ],

            P.map(p => [
                p.t + ' <small>(' + p.a + ')</small>',

                p.v
                    ? (p.ex ? 'Sim' : 'Não')
                    : '—',

                p.co ? 'Sim' : 'Não',

                `<select aria-label="Classificação"
                    onchange="P[${p.id - 1}].cl=this.value;
                    toast('Classificação registrada')">
                    ${opt(
                        ['Internacional', 'Nacional', 'Pendente'],
                        p.cl
                    )}
                </select>`,

                `<button class="g"
                    onclick="rg(${p.id - 1})">
                    Sugerir pela regra
                </button>`
            ])
        )}
    </div>`;

function rg(i) {
    const p = P[i];

    p.cl = !p.v
        ? 'Pendente'
        : (p.ex || p.co)
            ? 'Internacional'
            : 'Nacional';

    toast(
        p.v
            ? 'Sugestão aplicada: ' + p.cl
            : 'Dados insuficientes: mantido como Pendente'
    );

    go();
}

S[6] = () => {
    const l = C.filter(c => cur != 1 || c[0] == 1);

    return hd(
        'Colaborações científicas',
        'RF-06.'
    ) +

    `<div class="box">
        ${tb(
            ['Docente', 'Instituição', 'País', 'Período', 'Produção'],
            l.map(c => [
                dn(c[0]),
                c[1],
                c[2],
                c[3],
                c[4]
            ]),
            'Nenhuma colaboração registrada.'
        )}
    </div>`;
};

S[7] = () => {
    const l = MS.filter(m => cur != 1 || m.d == 1);

    return hd(
        'Missões internacionais',
        'RF-07. Campos e responsável pelo cadastro ainda pendentes (P-02); os campos abaixo são provisórios.'
    ) +

    `<div class="box">
        <div class="row">

            <label>
                Docente
                <select id="m0">
                    ${ds().map(d =>
                        `<option value="${d.id}">
                            ${d.n}
                        </option>`
                    ).join('')}
                </select>
            </label>

            <label>
                Destino*
                <input id="m1">
            </label>

            <label>
                País*
                <input id="m2">
            </label>

            <label>
                Período*
                <input id="m3" placeholder="MM/AAAA">
            </label>

            <label>
                Finalidade
                <input id="m4">
            </label>

            <button onclick="am()">
                Registrar missão
            </button>

        </div>

        ${tb(
            [
                'Docente',
                'Destino',
                'País',
                'Período',
                'Finalidade'
            ],
            l.map(m => [
                dn(m.d),
                m.dest,
                m.p,
                m.per,
                m.fin || '—'
            ]),
            'Nenhuma missão registrada.'
        )}
    </div>`;
};

function am() {
    const v = [0, 1, 2, 3, 4].map(i =>
        $('#m' + i).value.trim()
    );

    if (!v[1] || !v[2] || !v[3]) {
        return toast('Preencha destino, país e período.');
    }

    MS.push({
        d: +v[0],
        dest: v[1],
        p: v[2],
        per: v[3],
        fin: v[4]
    });

    toast('Missão registrada');

    go();
}

S[10] = () => {
    const a = fl.ia || '';

    const pb = P.filter(p =>
        !a || p.a == a
    );

    const q = [
        [
            'IND-01 Docentes com formação no exterior',
            D.filter(d =>
                d.f.some(f => f[2] != 'Brasil')
            ).length,
            D.length
        ],

        [
            'IND-02 Artigos em periódicos estrangeiros',
            pb.filter(p =>
                p.tp == 'Artigo' && p.ex
            ).length,
            pb.filter(p =>
                p.tp == 'Artigo'
            ).length
        ],

        [
            'IND-05 Produções distintas no período',
            pb.length,
            P.length
        ],

        [
            'IND-06 Missões internacionais',
            MS.length,
            MS.length || 1
        ],

        [
            'IND-07 Colaborações internacionais',
            C.filter(c =>
                c[2] != 'Brasil'
            ).length,
            C.length
        ],

        [
            'IND-09 Docentes com formação completa',
            D.filter(d =>
                d.f.length
            ).length,
            D.length
        ]
    ];

    return hd(
        'Indicadores',
        'RF-10. Fórmulas sujeitas a homologação (P-03). IND-08 em reavaliação e por isso não exibido.'
    ) +

    `<div class="row">
        <label>
            Ano de referência

            <select onchange="fl.ia=this.value;go()">
                <option value="">Todos (2022–2025)</option>
                ${opt([2022, 2023, 2024, 2025], a)}
            </select>
        </label>
    </div>

    <div class="kp">
        ${q.map((k, i) =>
            `<div class="box"
                style="--c:${[
                    '#004AF7',
                    '#87B7FE',
                    '#004AF7',
                    '#87B7FE',
                    '#004AF7',
                    '#87B7FE'
                ][i]}">

                <span style="color:var(--mu);font-size:13px">
                    ${k[0]}
                </span>

                <strong>${k[1]}</strong>

                <div class="bar"
                    style="width:${k[2]
                        ? Math.round(100 * k[1] / k[2])
                        : 0}%">
                </div>

                <small style="color:var(--mu)">
                    de ${k[2]}
                    · período: ${a || 'todos'}
                    · versão
                    ${VR.length
                        ? 'v' + VR[VR.length - 1].v
                        : '—'}
                </small>

            </div>`
        ).join('')}
    </div>`;
};

S[11] = () => {
    const l = P.filter(p =>
        !fl.rt || p.tp == fl.rt
    );

    return hd(
        'Relatórios',
        'RF-11. Painel da DRI: visão de indicadores internacionais. Exportação simulada.'
    ) +

    `<div class="box">

        <div class="row">

            <label>
                Tipo de produção

                <select onchange="fl.rt=this.value;go()">
                    <option value="">Todas</option>

                    ${opt([
                        'Artigo',
                        'Livro',
                        'Capítulo',
                        'Trabalho em evento'
                    ], fl.rt)}
                </select>
            </label>

            <button onclick="toast('Exportação simulada: arquivo CSV com '+${l.length}+' linhas')">
                Exportar CSV
            </button>

        </div>

        ${tb(
            [
                'Docente',
                'Título',
                'Tipo',
                'Ano',
                'Classificação'
            ],
            l.map(p => [
                dn(p.d),
                p.t,
                p.tp,
                p.a,
                p.cl
            ]),
            'Nenhum dado para os filtros selecionados.'
        )}

    </div>`;
};

S[12] = () =>
    hd(
        'Configurar indicadores',
        'RF-12. Elementos permitidos vêm de uma lista; não há edição livre de comandos.'
    ) +

    `<div class="box">

        <div class="row">

            <label>
                Nome*
                <input id="c0">
            </label>

            <label>
                Medida*

                <select id="c1">
                    <option value="">Selecione</option>

                    ${opt([
                        'Quantidade de artigos distintos',
                        'Quantidade de docentes distintos',
                        'Quantidade de missões',
                        'Percentual de registros completos'
                    ])}
                </select>
            </label>

            <label>
                Agrupamento

                <select id="c2">
                    ${opt([
                        'Ano',
                        'Docente',
                        'Curso',
                        'País'
                    ])}
                </select>
            </label>

            <button onclick="sc()">
                Salvar configuração
            </button>

        </div>

        ${tb(
            ['Nome', 'Medida', 'Agrupamento'],
            CF.map(c => [
                c.n,
                c.m,
                c.g
            ])
        )}

    </div>`;

function sc() {
    const n = $('#c0').value.trim();
    const m = $('#c1').value;

    if (!n || !m) {
        return toast('Informe o nome e a medida do indicador.');
    }

    CF.push({
        n,
        m,
        g: $('#c2').value
    });

    LG.unshift(
        y + ' · configuração de indicador “' + n + '”'
    );

    toast('Configuração salva');

    go();
}

S[13] = () =>
    hd(
        'Versionar indicadores',
        'RF-13. Cada alteração preserva a versão anterior.'
    ) +

    `<div class="box">

        <div class="row">

            <label>
                Nova definição*
                <input id="v0" size="40">
            </label>

            <label>
                Justificativa*
                <input id="v1" size="26">
            </label>

            <button onclick="nv()">
                Criar versão
            </button>

        </div>

        ${tb(
            [
                'Versão',
                'Data',
                'Responsável',
                'Justificativa',
                'Definição'
            ],

            VR.slice().reverse().map(v => [
                'v' + v.v,
                v.dt,
                v.r,
                v.j,

                esc(v.d) +
                (v.v > 1
                    ? '<br><small style="color:var(--mu)">Anterior: ' +
                        esc(VR[v.v - 2].d) +
                        '</small>'
                    : '')
            ])
        )}

    </div>`;

function nv() {
    const d = $('#v0').value.trim();
    const j = $('#v1').value.trim();

    if (!d || !j) {
        return toast('Informe a definição e a justificativa.');
    }

    VR.push({
        v: VR.length + 1,
        dt: y,
        r: A[cur].slice(6),
        j,
        d
    });

    toast(
        'Versão v' + VR.length +
        ' criada; v' + (VR.length - 1) +
        ' preservada'
    );

    go();
}

S[14] = () =>
    hd(
        'Divergências',
        'RF-14. ' +
        (cur == 5
            ? 'Como administrador, você apoia o lado técnico; a análise de conteúdo cabe a outros perfis (a detalhar).'
            : 'Registre a análise de cada ocorrência.')
    ) +

    `<div class="box">

        ${tb(
            [
                'Tipo',
                'Registro',
                'Situação',
                'Análise',
                ''
            ],

            DV.map((d, i) => [
                `<span class="tag w">${d.tp}</span>`,

                d.rg,

                d.st,

                `<input
                    id="n${i}"
                    value="${esc(d.nt)}"
                    aria-label="Análise"
                >`,

                `<button class="g"
                    onclick="
                        DV[${i}].nt=$('#n${i}').value;
                        DV[${i}].st='Em análise';
                        toast('Análise registrada');
                        go()
                    ">
                    Registrar
                </button>`
            ])
        )}

    </div>`;

S[15] = () =>
    hd(
        'Origem e histórico de atualização',
        'RF-15. Exibe apenas os metadados disponíveis.'
    ) +

    `<div class="box">

        ${tb(
            [
                'Dado',
                'Fonte',
                'Obtido em',
                'Processo',
                'Situação'
            ],

            [
                [
                    'Currículos',
                    'Importação de exemplo',
                    '10/11/2026 08:00',
                    'IMP-001',
                    'Concluído'
                ],

                [
                    'Publicações',
                    'Cadastro manual',
                    '12/11/2026 14:20',
                    '—',
                    'Concluído'
                ],

                [
                    'Vínculos',
                    'Não informada',
                    '—',
                    '—',
                    '<span class="tag w">metadados indisponíveis</span>'
                ]
            ]
        )}

    </div>`;

S[16] = () =>
    hd(
        'Situação das integrações',
        'RF-16 (condicional). Depende de autorização e viabilidade técnica (P-05).'
    ) +

    `<div class="box">

        ${tb(
            [
                'Integração',
                'Situação',
                'Última execução'
            ],

            [
                [
                    'Plataforma Lattes/CNPq',
                    'Não configurada',
                    '—'
                ],

                [
                    'Bases científicas',
                    'Não configurada',
                    '—'
                ],

                [
                    'Sistemas acadêmicos',
                    'Não configurada',
                    '—'
                ],

                [
                    'Autenticação institucional',
                    'Não configurada',
                    '—'
                ]
            ]
        )}

        <p class="sub" style="margin:10px 0 0">
            Nenhuma integração foi implementada neste protótipo.
        </p>

    </div>`;

S[17] = () =>
    hd(
        'Usuários e permissões',
        'RF-17. Níveis N1 a N5 são proposta para discussão com a DRI e a TI. Toda alteração é registrada.'
    ) +

    `<div class="box">

        ${tb(
            [
                'Usuário',
                'Perfil',
                'Nível',
                'Acesso'
            ],

            US.map((u, i) => [
                u[0],

                `<select
                    aria-label="Perfil"
                    onchange="uc(${i},1,this.value)">
                    ${opt(
                        [
                            'AT-01',
                            'AT-02',
                            'AT-03',
                            'AT-04',
                            'AT-05',
                            'AT-06'
                        ],
                        u[1]
                    )}
                </select>`,

                `<select
                    aria-label="Nível"
                    onchange="uc(${i},2,this.value)">
                    ${opt(
                        ['N1', 'N2', 'N3', 'N4', 'N5'],
                        u[2]
                    )}
                </select>`,

                `<button class="g"
                    onclick="uc(${i},3,${u[3] ? 0 : 1})">
                    ${u[3]
                        ? 'Ativo · desativar'
                        : 'Inativo · ativar'}
                </button>`
            ])
        )}

    </div>

    <div class="box">

        <b>Registro de alterações</b>

        ${LG.length
            ? '<ul>' +
                LG.map(l =>
                    '<li>' + esc(l) + '</li>'
                ).join('') +
                '</ul>'

            : '<div class="empty">Nenhuma alteração nesta sessão.</div>'
        }

    </div>`;

function uc(i, k, v) {
    US[i][k] = v;

    LG.unshift(
        y + ' · ' +
        US[i][0] +
        ': ' +
        ['', 'perfil', 'nível', 'acesso'][k] +
        ' → ' +
        (k == 3
            ? (v ? 'ativo' : 'inativo')
            : v)
    );

    toast('Alteração registrada');

    go();
}

// Inicialização do sistema
go();
