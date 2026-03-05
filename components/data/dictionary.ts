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
            { label: "Idiomas", href: "#languages" },
            { label: "Contacto", href: "#contact" },
        ],
        personal: {
            fullName: "Ziyad Ussene Adamo",
            headline: "Engenheiro Electrotécnico e de Telecomunicações",
            subheadline:
                "Licenciado com experiência prática em projectos de IoT, automação, sistemas de telecomunicações e optimização de energia.",
            location: "Maputo, Moçambique",
            email: "ziyadadamo58@gmail.com",
            phoneNumbers: ["+258 87 086 4573", "+258 83 332 4075", "+258 84 295 3132"],
            linkedin: "https://linkedin.com/in/ziyad-adamo",
            status: "Aberto a oportunidades",
            quickFacts: [
                { label: "Localização", value: "Maputo" },
                { label: "Idiomas", value: "Português, Inglês" },
                { label: "Áreas Chave", value: "IoT, Redes, Automação, Energia" },
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
                languages: "Idiomas e Qualidades",
                contact: "Vamos Conectar",
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
            footerLinks: {
                about: "Sobre Mim",
                experience: "Experiência",
                skills: "Competências",
                downloadCv: "Descarregar CV",
            },
        },
        about: {
            summary:
                "Sou licenciado em Engenharia Electrotécnica e de Telecomunicações pelo ISUTC, com bases sólidas em IoT, automação, optimização de energia e sistemas de telecomunicações. Através de estágios em radiodifusão e diagnóstico automóvel, fortaleci a minha capacidade de aplicar princípios de engenharia em ambientes operacionais reais.",
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
                "Se estiver a construir trabalho em IoT, telecomunicações ou automação, terei todo o gosto em conectar-me.",
            links: [
                { label: "Email", href: "mailto:ziyadadamo58@gmail.com" },
                { label: "LinkedIn", href: "https://linkedin.com/in/ziyad-adamo" },
            ],
        },
    }
};
