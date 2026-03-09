import { profileData, ProfileData } from "../../src/data/profile";

export const profileDictionary: Record<string, ProfileData> = {
    en: profileData,
    pt: {
        meta: {
            title: "Ziyad Ussene Adamo | Engenheiro Electrotécnico e de Telecomunicações",
            description:
                "Portfólio de Ziyad Ussene Adamo, Engenheiro Electrotécnico e de Telecomunicações focado em IoT, automação, sistemas de telecomunicações e optimização de energia.",
            ogTitle: "Ziyad Ussene Adamo | Engenheiro Electrotécnico e de Telecomunicações",
            ogDescription:
                "IoT, automação, sistemas de telecomunicações e optimização de energia.",
            ogImage: "/og-za.svg",
        },
        nav: [
            { label: "Sobre", href: "#about" },
            { label: "Experiência", href: "#experience" },
            { label: "Educação", href: "#education" },
            { label: "Competências", href: "#skills" },
            { label: "Certificações", href: "#certifications" },
            { label: "Conquistas", href: "#achievements" },
            { label: "Projectos", href: "#projects" },
            { label: "Idiomas", href: "#languages" },
            { label: "Contacto", href: "#contact" },
        ],
        personal: {
            fullName: "Ziyad Ussene Adamo",
            headline: "Engenheiro Electrotécnico e de Telecomunicações",
            subheadline:
                "Licenciado com experiência prática em projectos de IoT, automação, sistemas de telecomunicações, optimização de energia e fluxos de trabalho com IA.",
            location: "Maputo, Moçambique",
            email: "ziyadadamo58@gmail.com",
            phoneNumbers: ["+258 87 086 4573", "+258 83 332 4075", "+258 84 295 3132"],
            linkedin: "https://linkedin.com/in/ziyad-adamo",
            status: "Aberto a oportunidades",
            quickFacts: [
                { label: "Localização", value: "Maputo" },
                { label: "Idiomas", value: "Português, Inglês" },
                { label: "Áreas Chave", value: "IoT, Redes, Automação, Fluxos de IA" },
            ],
        },
        ui: {
            heroPrimaryCta: "Ver Experiência",
            heroSecondaryCta: "Descarregar CV",
            sections: {
                about: "Sobre Mim",
                experience: "Experiência",
                education: "Educação",
                skills: "Competências Técnicas",
                certifications: "Cursos e Certificações",
                achievements: "Conquistas",
                projects: "Projectos em Destaque",
                languages: "Idiomas e Qualidades",
                contact: "Vamos Conectar",
                process: "Como Trabalho",
            },
            educationLevels: {
                higher: "Ensino Superior",
                secondary: "Ensino Secundário",
                primary: "Ensino Primário",
            },
            responsibilitiesTitle: "Responsabilidades",
            keyOutcomesTitle: "Resultados Chave",
            qualitiesTitle: "Qualidades Profissionais",
            copyEmail: "Copiar email",
            copied: "Copiado",
            clearFilter: "Limpar Filtro",
            filterHint: "Seleccione uma competência para filtrar experiências e conquistas relacionadas.",
            viewDetails: "Ver detalhes",
            showLess: "Mostrar menos",
            quickLinks: "Links Rápidos",
            builtWith: "Desenhado com {heart} & Construído com Next.js",
            footerDescription: "focado em resultados práticos de engenharia em IoT, telecomunicações, automação e fluxos de trabalho com IA.",
            footerLinks: {
                about: "Sobre Mim",
                experience: "Experiência",
                skills: "Competências",
                downloadCv: "Descarregar CV",
            },
        },
        about: {
            summary:
                "Como Engenheiro Electrotécnico e de Telecomunicações, combino bases técnicas sólidas em IoT, automação e redes com fluxos de trabalho assistidos por IA para entregar soluções digitais e inovação de forma mais rápida e com maior qualidade.",
            highlights: [
                {
                    title: "IoT e Automação",
                    description:
                        "Desenvolvi e estruturei um projecto de optimização de energia residencial baseado em IoT focado no controlo inteligente de tomadas e iluminação.",
                },
                {
                    title: "Sistemas Telecom",
                    description:
                        "Dei suporte a operações de transmissão, monitorização, calibração e continuidade técnica em emissões audiovisuais ao vivo.",
                },
                {
                    title: "Disciplina Profissional",
                    description:
                        "Demonstrei trabalho em equipa, comunicação eficaz, liderança, flexibilidade e resolução prática de problemas em ambientes técnicos.",
                },
            ],
        },
        process: {
            title: "Fluxo de Trabalho Assistido por IA",
            description: "Aproveito ferramentas modernas de IA para acelerar o desenvolvimento e a resolução de problemas, garantindo sempre a validação manual e a responsabilidade pelo resultado final.",
            steps: [
                {
                    title: "Descobrir",
                    subtitle: "Análise de Requisitos",
                    description: "Compreensão de restrições técnicas e definição do problema central.",
                },
                {
                    title: "Estruturar",
                    subtitle: "Organização de Tarefas",
                    description: "Uso de IA para debater a arquitectura e dividir requisitos em tarefas de engenharia accionáveis.",
                },
                {
                    title: "Prototipar",
                    subtitle: "Código e Construção Assistidos por IA",
                    description: "Aceleração da geração de código, documentação e prototipagem com Claude, VS Code (Copilot) e Vercel.",
                },
                {
                    title: "Validar",
                    subtitle: "Revisão Manual e Iteração",
                    description: "Testes rigorosos manuais, verificação operacional no mundo real e melhoria contínua.",
                },
            ]
        },
        experience: [
            {
                id: "tvm",
                role: "Estagiário de Telecomunicações e Audiovisual",
                company: "Televisão de Moçambique (TVM)",
                period: "Jul 2025 - Set 2025",
                location: "Maputo, Moçambique",
                responsibilities: [
                    "Prestei suporte técnico na operação e manutenção de equipamentos de transmissão audiovisual.",
                    "Colaborei em tarefas de integração de sistemas e optimização de fluxos de trabalho técnicos.",
                    "Participei na resolução de falhas técnicas durante emissões ao vivo.",
                    "Auxiliei na configuração e teste de equipamentos de telecomunicações.",
                    "Realizei monitorização em tempo real e suporte de calibração para preservar a qualidade da transmissão.",
                ],
                keyOutcomes: [
                    "Contribuí para a redução do tempo de inactividade em emissões ao vivo através da resposta a falhas técnicas.",
                    "Apoiei a implementação de melhorias técnicas que fortaleceram a eficiência operacional.",
                ],
            },
            {
                id: "uniservice",
                role: "Assistente de Técnico de Diagnóstico Electrónico Automóvel",
                company: "UNISERVICE, E.I.",
                period: "Fev 2025 - Jun 2025",
                location: "Xai-Xai, Gaza, Moçambique",
                responsibilities: [
                    "Diagnostiquei falhas em sistemas automóveis usando scanners e ferramentas especializadas.",
                    "Apoiei intervenções mecânicas e electrónicas durante rotinas de manutenção.",
                    "Registei e analisei dados de desempenho de veículos para optimização da manutenção.",
                    "Realizei testes direccionados em sistemas electrónicos automóveis para identificar as causas das falhas.",
                    "Interpretei códigos de erro e colaborei em planos de reparação com equipas de manutenção.",
                ],
            },
        ],
        education: [
            {
                id: "isutc",
                level: "higher",
                institution: "Instituto Superior de Transportes e Comunicações (ISUTC)",
                title: "Licenciatura em Engenharia Electrotécnica e de Telecomunicações",
                period: "2021 - 2025",
                location: "Maputo, Moçambique",
            },
            {
                id: "secondary",
                level: "secondary",
                institution: "Escola Secundária de Xai-Xai",
                title: "Ensino Secundário (Geral)",
                period: "2016 - 2021",
                location: "Xai-Xai, Gaza, Moçambique",
            },
            {
                id: "primary",
                level: "primary",
                institution: "Escola 1 de Janeiro",
                title: "Ensino Primário",
                period: "2008 - 2015",
                location: "Xai-Xai, Gaza, Moçambique",
            },
        ],
        skills: [
            {
                category: "IoT e Automação",
                items: [
                    "Conceitos de optimização de energia IoT",
                    "Integração de sensores e actuadores",
                    "Microcontroladores para automação",
                    "Programação ladder para PLC",
                    "Sistemas SCADA",
                ],
            },
            {
                category: "Redes e Telecomunicações",
                items: [
                    "Operação de equipamentos de transmissão",
                    "Monitorização de sinal de transmissão",
                    "Suporte técnico em telecomunicações",
                    "Conceitos básicos de redes e telecomunicações",
                ],
            },
            {
                category: "Electrónica e Diagnósticos",
                items: [
                    "Diagnóstico electrónico automóvel",
                    "Identificação de falhas com scanners",
                    "Interpretação de códigos de erro",
                    "Manutenção de equipamento audiovisual",
                ],
            },
            {
                category: "Ferramentas e Plataformas",
                items: [
                    "Microsoft Office",
                    "Google / Internet",
                    "Ferramentas de e-mail e redes sociais",
                    "Elaboração de relatórios técnicos",
                ],
            },
            {
                category: "Pontos Fortes Profissionais",
                items: [
                    "Comunicação eficaz",
                    "Trabalho em equipa",
                    "Capacidade de liderança",
                    "Resolução de problemas",
                    "Flexibilidade",
                    "Execução de tarefas com instruções claras",
                ],
            },
        ],
        coursesAndCertifications: [
            {
                id: "ready-to-work",
                type: "Curso",
                name: "Ready to Work",
                organization: "Absa Bank Mozambique",
                date: "Dez 2025",
                focus: "Competências profissionais, financeiras, interpessoais e de negócios.",
            },
            {
                id: "ielts",
                type: "Certificação",
                name: "IELTS Academic",
                organization: "IELTS",
                date: "Dez 2025",
                focus:
                    "Proficiência académica em Inglês, escrita estruturada, leitura crítica e comunicação oral formal.",
            },
            {
                id: "basic-robotics",
                type: "Curso e Certificação",
                name: "Basic Robotics",
                organization: "Basic Robotics",
                date: "Set 2023",
                focus:
                    "Conceitos fundamentais de robótica, noções básicas de C++ e integração prática de microcontroladores, sensores e actuadores.",
            },
        ],
        achievements: [
            {
                id: "iot-energy-project",
                title: "Optimização de Energia Residencial com IoT",
                description:
                    "Desenvolvi um sistema baseado em IoT para o controlo inteligente do consumo de energia residencial em tomadas e iluminação.",
                workflow: "Workflow: C++ + Microcontroladores + Prototipagem IoT",
            },
            {
                id: "scalable-model",
                title: "Modelo Escalonável de Eficiência",
                description:
                    "Estruturei um modelo replicável para eficiência energética residencial em Moçambique.",
            },
            {
                id: "tvm-technical-support",
                title: "Suporte Técnico de Transmissão de Emissão",
                description:
                    "Prestei suporte técnico a sistemas de transmissão e equipamento audiovisual profissional.",
            },
            {
                id: "infra-monitoring",
                title: "Monitorização de Infraestrutura Telecom",
                description:
                    "Participei na manutenção e monitorização de infraestruturas de telecomunicações e estúdios.",
            },
            {
                id: "broadcasting-observation",
                title: "Exposição a Operações de Radiodifusão",
                description:
                    "Observei e aprendi rotinas operacionais de emissão e electrónica aplicada à comunicação social.",
            },
            {
                id: "broadcast-failures",
                title: "Resposta Técnica em Emissões ao Vivo",
                description:
                    "Apoiei activamente na resolução de falhas técnicas durante emissões ao vivo para minimizar o tempo de inactividade.",
            },
            {
                id: "telecom-improvements",
                title: "Melhorias Operacionais em Telecom",
                description:
                    "Colaborei na implementação de soluções que melhoraram a eficiência operacional em sistemas de telecomunicações.",
            },
            {
                id: "routine-coordination",
                title: "Coordenação de Rotinas Técnicas",
                description:
                    "Apoiei na coordenação de rotinas técnicas para garantir a continuidade das transmissões.",
            },
            {
                id: "equipment-config",
                title: "Configuração e Teste de Equipamento Telecom",
                description:
                    "Auxiliei na configuração e teste de equipamento de telecomunicações para manter a operabilidade do sistema.",
            },
            {
                id: "automotive-diagnostics",
                title: "Diagnóstico de Electrónica Automóvel",
                description:
                    "Diagnostiquei e ajudei a resolver falhas em sistemas electrónicos de veículos modernos utilizando análise baseada em scanners.",
            },
            {
                id: "scanner-error-codes",
                title: "Análise de Falhas Baseada em Scanner",
                description:
                    "Utilizei scanners de diagnóstico e interpretei códigos de erro em sistemas automóveis modernos.",
            },
            {
                id: "academic-builds",
                title: "Projectos Académicos de Engenharia",
                description:
                    "Construí projectos académicos em electrónica e telecomunicações com aplicação técnica prática.",
            },
        ],
        projects: [
            {
                id: "iot-residential-energy-monitoring",
                slug: "iot-residential-energy-monitoring-smart-load-control-system",
                title: "Sistema IoT de Monitorização de Energia Residencial e Controlo Inteligente de Cargas",
                category: "Projecto Principal",
                isFlagship: true,
                priority: 100,
                typeLabel: "Projecto Individual de Engenharia de Final de Curso",
                role: "Engenheiro Único do Projecto · Design, Construção, Integração e Validação End-to-End",
                subtitle: "Projecto de engenharia de final de curso end-to-end, combinando medição energética em tempo real, controlo inteligente de cargas, visualização local e monitorização via browser num protótipo residencial funcional.",
                shortSummary: "Protótipo funcional de casa inteligente desenvolvido para monitorizar consumo eléctrico residencial, controlar cargas seleccionadas e fornecer visibilidade em tempo real local e via browser com hardware embutido de baixo custo.",
                heroImage: "/projects/pfc/pfc-functional-prototype-lit.jpg",
                overview: "Este projecto final de engenharia explorou uma abordagem IoT prática para optimização de energia residencial, combinando medição eléctrica em tempo real, controlo inteligente de cargas, feedback local ao utilizador e monitorização via Wi-Fi num único protótipo integrado.",
                problem: "Em muitos contextos residenciais, o uso de energia é pouco monitorizado e o controlo de aparelhos é maioritariamente manual, dificultando a detecção de consumos ineficientes e a gestão inteligente de cargas. Desenvolvido no contexto moçambicano, este projecto explorou uma prova de conceito prática e de baixo custo para melhorar visibilidade e controlo do uso energético doméstico.",
                solution: "O sistema integra um Arduino Mega WiFi 2560, módulos de detecção eléctrica, comutação baseada em relés, lógica assistida por PIR, agendamento por RTC, display gráfico local e uma camada web em ESP8266. Em conjunto, estes módulos permitem medição em tempo real, controlo selectivo de cargas, indicação de estado e acesso em rede local através de um dashboard no browser.",
                systemArchitectureImage: "/projects/pfc/pfc-system-architecture.png",
                systemArchitectureCaption: "Diagrama de ligação e integração ao nível do sistema, mostrando detecção, controlo, interface, comutação e cargas conectadas.",
                controlLogicImage: "/projects/pfc/pfc-system-architecture.png",
                circuitDesignImage: "/projects/pfc/pfc-prototype-top-view.jpg",
                physicalPrototypeImage: "/projects/pfc/pfc-functional-prototype-lit.jpg",
                functionalPrototypeText: "O projecto evoluiu além da simulação para um protótipo físico totalmente montado. A configuração de bancada integrou cargas, sensores, relés, interface de display e hardware de controlo embutido num demonstrador funcional de casa inteligente.",
                functionalPrototypeImages: [
                    {
                        src: "/projects/pfc/pfc-prototype-top-view.jpg",
                        caption: "Vista superior do protótipo de hardware integrado",
                        alt: "Vista superior do protótipo integrado de monitorização energética residencial",
                    },
                    {
                        src: "/projects/pfc/pfc-functional-prototype-lit.jpg",
                        caption: "Demonstração funcional com cargas residenciais conectadas",
                        alt: "Demonstração funcional do protótipo com cargas conectadas",
                    }
                ],
                localDisplayInterface: {
                    text: "Foi implementado um display gráfico local para fornecer visibilidade em tempo real de tensão, corrente, potência total, consumo por carga e informação temporal directamente no protótipo.",
                    image: "/projects/pfc/pfc-display-interface-closeup.jpg",
                    caption: "Interface local em tempo real mostrando medições eléctricas e dados de cargas.",
                    alt: "Interface local de monitorização mostrando medições eléctricas em tempo real",
                },
                webMonitoringControl: {
                    text: "Foi desenvolvido um dashboard local no browser através da camada de comunicação ESP8266, permitindo monitorização em tempo real e comutação manual de cargas seleccionadas na rede Wi-Fi local.",
                    image: "/projects/pfc/pfc-web-dashboard.png",
                    caption: "Dashboard web local para monitorização e controlo em tempo real.",
                    alt: "Dashboard web local para monitorização e controlo de cargas",
                },
                sensingAutomationDetail: {
                    text: "O protótipo também incorporou lógica baseada em presença e interação ambiental através de elementos adicionais de detecção, suportando comportamento de automação contextual.",
                    image: "/projects/pfc/pfc-pir-sensing-detail.jpg",
                    caption: "Vista de detalhe do subsistema de detecção e controlo.",
                    alt: "Detalhe do subsistema de detecção PIR e controlo",
                },
                embeddedLogicCommunicationText: "O sistema foi programado em duas camadas embutidas coordenadas: o Arduino Mega WiFi 2560 tratou detecção, cálculos eléctricos, temporização RTC, saída local no display, indicação de estado e controlo de relés; a camada web ESP8266 tratou conectividade Wi-Fi, serviço do browser, actualizações WebSocket em tempo real e troca de comandos remotos.",
                keyFeatures: [
                    "Monitorização de tensão, corrente e potência em tempo real",
                    "Visibilidade por carga para cargas residenciais seleccionadas",
                    "Controlo de cargas baseado em relés",
                    "Interface local em display gráfico",
                    "Monitorização e comutação via browser em Wi-Fi local",
                    "Comportamento assistido por RTC",
                    "Automação orientada por presença via PIR",
                    "Validação por protótipo físico",
                ],
                validationOutcomes: "O projecto foi validado através de um protótipo físico funcional e testes integrados de detecção, visualização, comunicação e controlo. O sistema final demonstrou visibilidade prática de consumo por carga, actuação bem-sucedida de relés, actualizações em tempo real no display local e interação via browser através da interface Wi-Fi.",
                limitationsFutureImprovements: "Este protótipo foi desenvolvido como prova de conceito de baixo custo e, por isso, permaneceu limitado a ambiente Wi-Fi local, montagem em escala de bancada e interação básica no dashboard. Melhorias futuras podem incluir histórico persistente, conectividade cloud, encapsulamento eléctrico mais robusto, analytics mais ricos e validação expandida em ambiente residencial real.",
                myContribution: "Desenhei, construí, programei, integrei, testei e documentei todo o sistema como projecto individual de engenharia de final de curso. O meu trabalho cobriu arquitectura de hardware, selecção de componentes, desenho de ligações, lógica embutida, integração de sensores, implementação do display, controlo de relés, comunicação Wi-Fi, monitorização via browser, montagem do protótipo e documentação técnica final.",
                toolsAndTech: [
                    "Arduino Mega WiFi 2560",
                    "ESP8266",
                    "ACS712",
                    "ZMPT101B",
                    "PIR Sensor",
                    "RTC Module",
                    "Graphic LCD 128x64",
                    "Relay Module",
                    "Arduino C/C++",
                    "HTML/CSS/JavaScript",
                    "WebSockets",
                    "Fritzing",
                    "IoT",
                    "Smart Home",
                    "Energy Monitoring"
                ],
                keyLearnings: [
                    "Integração end-to-end de sistemas embutidos e IoT",
                    "Pipeline de medição eléctrica em tempo real para ambiente residencial",
                    "Arquitectura de comunicação embutida com camada web em WebSockets",
                    "Validação conjunta de hardware e software em prototipagem física",
                    "Design prático de automação residencial de baixo custo",
                ],
                controlLogicImplementation: "A lógica central coordenou medição eléctrica, comutação por relés, actualização de display e sincronização de estado de rede através de rotinas embutidas estruturadas nas camadas Arduino Mega e ESP8266.",
                badges: [
                    "Flagship Project",
                    "IoT",
                    "Energy Monitoring",
                    "Smart Home",
                    "Arduino Mega WiFi 2560",
                    "ESP8266",
                    "WebSockets",
                    "Physical Prototype",
                ],
            },
            {
                id: "residential-water-tank",
                slug: "residential-water-tank-monitoring-pump-control-system",
                title: "Sistema de Monitorização e Controlo de Bombas para Tanques de Água Residenciais",
                category: "Projecto em Destaque",
                priority: 50,
                typeLabel: "Projecto Académico de Grupo",
                role: "Líder de Projecto · Programação Embutida · Integração Final & Testes",
                contributionSummary: "Desenvolvido como um projecto de grupo universitário, com a minha contribuição principal centrada na liderança do projecto, programação embutida, integração final do sistema e testes funcionais.",
                subtitle: "Protótipo embutido de monitorização e controlo para tanques de água residenciais usando ATmega328P, sensores de nível e validação de sistema orientada por simulação.",
                credibilityPhrase: "Validado através de simulação e prototipagem física.",
                heroImage: "/projects/water-tank/smt-proteus-circuit.png",
                overview: "Este projecto apresenta um sistema embutido projectado para monitorizar os níveis de tanques de água residenciais e suportar o controlo de bombas através de lógica baseada em sensores. Desenvolvido como um projecto de grupo universitário, combinou simulação de circuitos, programação de controlo, prototipagem física e validação funcional para uma solução prática de automação residencial de baixo custo.",
                problem: "Em muitas configurações residenciais, a gestão do nível do tanque de água ainda é realizada manualmente, o que pode levar à activação atrasada da bomba, transbordo do tanque ou situações de falta de água. Este projecto explorou uma solução embutida de baixo custo capaz de melhorar a consciencialização e o controlo dos níveis dos tanques utilizando detecção digital simples e feedback visual.",
                solution: "A solução proposta usa sensores de nível posicionados em limites de tanque chave, um microcontrolador ATmega328P para processamento lógico, indicação de nível baseada em LED e um estágio de controlo de bomba. A lógica de controlo foi primeiramente modelada e validada no Proteus, e depois implementada num protótipo físico funcional para verificar o comportamento real sob condições práticas de teste.",
                systemArchitectureImage: "/projects/water-tank/smt-block-diagram.png",
                controlLogicImage: "/projects/water-tank/smt-flowchart.png",
                circuitDesignImage: "/projects/water-tank/smt-proteus-circuit.png",
                physicalPrototypeImage: "/projects/water-tank/smt-physical-prototype.png",
                technicalConstraintsNotes: "O ecrã LCD fazia parte da arquitectura original do sistema e da intenção de design. No entanto, a integração completa do ecrã não foi concluída no protótipo funcional final devido a restrições práticas de implementação relacionadas ao uso directo do ATmega328P em vez de uma placa de desenvolvimento Arduino completa. O projecto, portanto, priorizou a validação da lógica central de detecção, indicação baseada em LED e comportamento do controlo da bomba.",
                myContribution: "Liderei o desenvolvimento do projecto, desenhei e implementei o código de controlo, validei o design do circuito com os colegas de equipa, concluí a montagem final, refinei a lógica de programação e realizei os testes funcionais finais. Embora o projecto tenha sido desenvolvido como um trabalho de grupo, assumi a responsabilidade principal pela integração final e conclusão.",
                toolsAndTech: [
                    "ATmega328P",
                    "Proteus",
                    "C/C++ Embutido",
                    "Programação estilo Arduino",
                    "Sensores de nível",
                    "LEDs",
                    "Controlo de bomba baseado em relé",
                    "Conceito de monitorização baseado em LCD"
                ],
                keyLearnings: [
                    "Design lógico de controlo embutido",
                    "Interpretação do estado do sensor",
                    "Validação baseada em simulação",
                    "Prototipagem física e testes práticos",
                    "Integração e teste de sistemas",
                    "Design prático de automação de baixo custo"
                ],
                controlLogicImplementation: "A lógica embutida foi implementada em C/C++ estilo Arduino, com entradas digitais mapeadas para sensores de nível de tanque e saídas atribuídas a indicadores LED e actuação de bomba. O loop de controlo avalia continuamente os estados dos sensores e actualiza o comportamento do sistema de acordo com as condições de nível de água predefinidas.",
                badges: ["Sistemas Embutidos", "Automação", "Proteus", "ATmega328P", "Simulação", "Controlo de Bombas", "Real Prototype", "Physical Validation", "Bench Testing"]
            }
        ],
        languages: ["Português", "Inglês"],
        qualities: [
            "Comunicação eficaz",
            "Trabalho em equipa",
            "Capacidade de liderança",
            "Capacidades de resolução de problemas",
            "Flexibilidade",
            "Capacidade de concluir tarefas devidamente instruídas e explicadas",
        ],
        contact: {
            heading: "Vamos conectar",
            message:
                "Se estiver a construir trabalho em IoT, telecomunicações, automação ou fluxos de trabalho com IA, terei todo o gosto em conectar-me.",
            links: [
                { label: "Email", href: "mailto:ziyadadamo58@gmail.com" },
                { label: "LinkedIn", href: "https://linkedin.com/in/ziyad-adamo" },
            ],
        },
    }
};
