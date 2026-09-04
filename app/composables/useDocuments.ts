export type DocumentLanguage = {
  code: string
  label: string
}

export type FederationDocument = {
  id: number
  title: string
  description: string
  category: string
  format: string
  year: string
  languages: DocumentLanguage[]
}

export type DocumentCategory = {
  id: string
  name: string
  icon: string
}

export const useDocuments = () => {
  const categories: DocumentCategory[] = [
    {
      id: 'sport-rules',
      name: 'Sport Rules',
      icon: '🥋',
    },
    {
      id: 'organizing-rules',
      name: 'Organizing Rules',
      icon: '🏛️',
    },
    {
      id: 'branding',
      name: 'Branding',
      icon: '🎨',
    },
    {
      id: 'statutes',
      name: 'Statutes',
      icon: '📜',
    },
    {
      id: 'legal-rules',
      name: 'Legal Rules',
      icon: '⚖️',
    },
    {
      id: 'commission-rules',
      name: 'Commission Rules',
      icon: '👥',
    },
    {
      id: 'medical',
      name: 'Medical & Anti-Doping',
      icon: '🩺',
    },
    {
      id: 'referees',
      name: 'Referees',
      icon: '👨‍⚖️',
    },
    {
      id: 'coaches',
      name: 'Coaches',
      icon: '🥇',
    },
    {
      id: 'waivers',
      name: 'Waivers',
      icon: '📝',
    },
    {
      id: 'miscellaneous',
      name: 'Miscellaneous',
      icon: '📌',
    },
    {
      id: 'finances',
      name: 'Finances',
      icon: '💰',
    },
    {
      id: 'annual-report',
      name: 'Annual Reports',
      icon: '📊',
    },
    {
      id: 'minutes',
      name: 'Minutes',
      icon: '🗂️',
    },
  ]

  const documents: FederationDocument[] = [
    {
      id: 1,
      title: 'Kumite Competition Rules',
      description:
        'Official rules and regulations governing Kumite competitions.',
      category: 'sport-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 2,
      title: 'Kata Competition Rules',
      description:
        'Official regulations governing Kata competitions and judging.',
      category: 'sport-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 3,
      title: 'Para Karate Competition Rules',
      description:
        'Rules and regulations for Para Karate competitions.',
      category: 'sport-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 4,
      title: 'World Ranking Rules',
      description:
        'Official criteria and regulations for athlete world rankings.',
      category: 'sport-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 5,
      title: 'Competition Rules Bulletin',
      description:
        'Latest competition rules updates and official interpretations.',
      category: 'sport-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 6,
      title: 'Karate Championship Qualification System',
      description:
        'Qualification requirements for official karate championships.',
      category: 'sport-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 7,
      title: 'NKF General Organising Rules',
      description:
        'General organisational rules for official federation events.',
      category: 'organizing-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 8,
      title: 'Karate One Premier League',
      description:
        'Regulations governing Karate One Premier League events.',
      category: 'organizing-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 9,
      title: 'Karate One Series A',
      description:
        'Official regulations for Karate One Series A competitions.',
      category: 'organizing-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 10,
      title: 'Karate One Youth League',
      description:
        'Competition regulations for youth karate events.',
      category: 'organizing-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 11,
      title: 'Protocol Rules',
      description:
        'Official event protocol and ceremony guidelines.',
      category: 'organizing-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 12,
      title: 'NKF Brand Book',
      description:
        'Official Nigerian Karate Federation brand identity guidelines.',
      category: 'branding',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 13,
      title: 'NKF Logo Usage Guidelines',
      description:
        'Rules governing proper use of the federation logo.',
      category: 'branding',
      format: 'PDF',
      year: '2026',
      languages: [
        { code: 'SVG', label: 'Vector' },
        { code: 'PNG', label: 'PNG' },
      ],
    },
    {
      id: 14,
      title: 'Competition Branding Manual',
      description:
        'Visual branding standards for federation competitions.',
      category: 'branding',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 15,
      title: 'NKF Statutes',
      description:
        'The statutes governing the Nigerian Karate Federation.',
      category: 'statutes',
      format: 'PDF',
      year: '2026',
      languages: [
        { code: 'EN', label: 'English' },
        { code: 'FR', label: 'French' },
      ],
    },

    {
      id: 16,
      title: 'Disciplinary and Ethics Code',
      description:
        'Ethical standards and disciplinary procedures.',
      category: 'legal-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 17,
      title: 'Conflict of Interest Regulation',
      description:
        'Rules regarding conflicts of interest within the federation.',
      category: 'legal-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 18,
      title: 'Code of Prevention of Manipulation of Competitions',
      description:
        'Regulations protecting the integrity of karate competitions.',
      category: 'legal-rules',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 19,
      title: 'Referee Commission Regulations',
      description:
        'Official rules governing federation referees.',
      category: 'referees',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 20,
      title: 'NKF Referee Rules',
      description:
        'Rules and requirements for certified karate referees.',
      category: 'referees',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 21,
      title: 'Referee Ranking Criteria',
      description:
        'Criteria used for referee ranking and advancement.',
      category: 'referees',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 22,
      title: 'Referee Course Application Form',
      description:
        'Application requirements for official referee courses.',
      category: 'referees',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 23,
      title: 'Guidelines for Handling Official Protest',
      description:
        'Procedures for handling official protests during events.',
      category: 'referees',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 24,
      title: 'NKF General Regulations for Coaches',
      description:
        'General regulations and requirements for federation coaches.',
      category: 'coaches',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 25,
      title: 'List of Accredited Coaches',
      description:
        'Official list of currently accredited federation coaches.',
      category: 'coaches',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 26,
      title: 'Coach Course Programme',
      description:
        'Summary of official coach training programmes.',
      category: 'coaches',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 27,
      title: 'Medical Rules',
      description:
        'Medical requirements and regulations for karate athletes.',
      category: 'medical',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 28,
      title: 'Concussion Protocol',
      description:
        'Official concussion assessment and return-to-play procedures.',
      category: 'medical',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 29,
      title: 'Anti-Doping Rules',
      description:
        'Anti-doping regulations and athlete responsibilities.',
      category: 'medical',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 30,
      title: 'NKF Waiver Individual Under 18',
      description:
        'Official waiver form for athletes below 18 years.',
      category: 'waivers',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 31,
      title: 'NKF Waiver Individual 18+',
      description:
        'Official waiver form for adult athletes.',
      category: 'waivers',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 32,
      title: 'Strategic Plan 2026–2030',
      description:
        'Federation strategic goals and development roadmap.',
      category: 'miscellaneous',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 33,
      title: 'Safe Sport Policy',
      description:
        'Policies protecting athletes and participants.',
      category: 'miscellaneous',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 34,
      title: 'NKF Budget 2026',
      description:
        'Official federation budget for the 2026 financial year.',
      category: 'finances',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 35,
      title: 'Financial Report 2025',
      description:
        'Annual financial report of the federation.',
      category: 'finances',
      format: 'PDF',
      year: '2025',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 36,
      title: 'Fees and Conditions 2026',
      description:
        'Official fees, conditions and federation requirements.',
      category: 'finances',
      format: 'PDF',
      year: '2026',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 37,
      title: 'Annual Report 2025',
      description:
        'Official Nigerian Karate Federation annual report.',
      category: 'annual-report',
      format: 'PDF',
      year: '2025',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 38,
      title: 'Annual Report 2024',
      description:
        'Official Nigerian Karate Federation annual report.',
      category: 'annual-report',
      format: 'PDF',
      year: '2024',
      languages: [{ code: 'EN', label: 'English' }],
    },

    {
      id: 39,
      title: '2025 Executive Committee Minutes',
      description:
        'Summary and official minutes of Executive Committee meetings.',
      category: 'minutes',
      format: 'PDF',
      year: '2025',
      languages: [{ code: 'EN', label: 'English' }],
    },
    {
      id: 40,
      title: '2024 Congress Minutes',
      description:
        'Official minutes from the annual federation congress.',
      category: 'minutes',
      format: 'PDF',
      year: '2024',
      languages: [{ code: 'EN', label: 'English' }],
    },
  ]

  const activeCategory = useState<string>(
    'documents-active-category',
    () => 'all',
  )

  const searchQuery = useState<string>(
    'documents-search-query',
    () => '',
  )

  const selectedDocument = useState<FederationDocument | null>(
    'documents-selected-document',
    () => null,
  )

  const isPreviewOpen = useState<boolean>(
    'documents-preview-open',
    () => false,
  )

  const filteredDocuments = computed(() => {
    return documents.filter((document) => {
      const matchesCategory =
        activeCategory.value === 'all' ||
        document.category === activeCategory.value

      const query = searchQuery.value.toLowerCase().trim()

      const matchesSearch =
        !query ||
        document.title.toLowerCase().includes(query) ||
        document.description.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  })

  const getCategoryCount = (categoryId: string) => {
    return documents.filter(
      (document) => document.category === categoryId,
    ).length
  }

  const getCategoryName = (categoryId: string) => {
    return (
      categories.find(
        (category) => category.id === categoryId,
      )?.name || 'Documents'
    )
  }

  const openPreview = (document: FederationDocument) => {
    selectedDocument.value = document
    isPreviewOpen.value = true
  }

  const closePreview = () => {
    isPreviewOpen.value = false

    setTimeout(() => {
      selectedDocument.value = null
    }, 250)
  }

  return {
    categories,
    documents,
    activeCategory,
    searchQuery,
    selectedDocument,
    isPreviewOpen,
    filteredDocuments,
    getCategoryCount,
    getCategoryName,
    openPreview,
    closePreview,
  }
}