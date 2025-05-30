export const screens = [
  /* =====================================================
     INTRODUCTION (p4)
     ===================================================== */
  {
    id: 1,
    learningOutcome:
      'Explain the purpose of the Stakeholder Engagement short course',
    screenBG: '#F7EDE2',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Course Overview (p4)',
    bodyContent: [
      {
        type: 'text',
        value:
          "The Stakeholder Engagement short course provides you with essential knowledge and skills to identify, analyse, classify and manage stakeholders in a range of organisational contexts. With a focus on evaluating stakeholder needs, interests and influence, you'll learn valuable techniques to effectively and consistently engage with a broad range of stakeholder groups." /* :contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1} */,
      },
      {
        type: 'subheading',
        value: 'Learning Outcomes',
      },
      {
        type: 'html',
        value: `
        <ul>
          <li>Identify different stakeholder types and segments</li>
          <li>Implement stakeholder engagement principles and processes</li>
          <li>Apply various techniques to categorise and analyse stakeholders needs and expectations</li>
          <li>Plan and monitor successful stakeholder engagement</li>
          <li>Facilitate meetings and workshops and build community engagement</li>
          <li>Apply methods to increase connection and build rapport with stakeholders</li>
          <li>Deal with difficult stakeholders and manage resistance</li>
        </ul>` /* :contentReference[oaicite:2]{index=2}&#8203;:contentReference[oaicite:3]{index=3} */,
      },
    ],
  },
  {
    id: 2,
    learningOutcome: 'Set personal learning objectives for the workshop',
    screenBG: '#FFFBE5',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Activity: Your Objectives (p4)',
    bodyContent: [
      {
        type: 'text',
        value:
          'What are your personal learning objectives for attending this course?' /* :contentReference[oaicite:4]{index=4}&#8203;:contentReference[oaicite:5]{index=5} */,
      },
    ],
  },

  /* =====================================================
     STAKEHOLDERS (p5)
     ===================================================== */
  {
    id: 3,
    learningOutcome:
      'Define a stakeholder in project and organisational contexts',
    screenBG: '#EFE9DD',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Stakeholder Definition (p5)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Any person or group who has an interest in or influence over the project or could be potentially affected by its delivery or outputs.',
      } /* :contentReference[oaicite:6]{index=6}&#8203;:contentReference[oaicite:7]{index=7} */,
      {
        type: 'text',
        value:
          'Stakeholders are the people, groups or organisations that are actively involved in, can influence or be affected by a project or initiative. This includes other teams, managers, suppliers, community organisations and strategic partners, both internal and external to the organisation.',
      } /* :contentReference[oaicite:8]{index=8}&#8203;:contentReference[oaicite:9]{index=9} */,
    ],
  },
  {
    id: 4,
    learningOutcome: 'Explain why stakeholder planning is critical to success',
    screenBG: '#FAF0F0',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Managing Expectations (p5)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Managing the expectations of stakeholders throughout the project is critical to its success. Taking the time at the beginning of the project to identify all the stakeholders, analyse their needs and come up with a communications strategy will help you balance differing interest and influence levels.',
      } /* :contentReference[oaicite:10]{index=10}&#8203;:contentReference[oaicite:11]{index=11} */,
    ],
  },

  /* =====================================================
     STAKEHOLDER TYPES (p6)
     ===================================================== */
  {
    id: 5,
    learningOutcome: 'List common external stakeholder types',
    screenBG: '#F8EFE2',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'External Stakeholders (p6)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Project stakeholders may be internal or external to the organisation. Their interests may be commercial, functional, political – positive or negative.',
      } /* :contentReference[oaicite:12]{index=12}&#8203;:contentReference[oaicite:13]{index=13} */,
      {
        type: 'html',
        value: `
          <ul>
            <li>Government</li>
            <li>Regulatory, industry and professional bodies</li>
            <li>Shareholders and investors</li>
            <li>Consultants</li>
            <li>Board of directors</li>
            <li>Investment analysts</li>
            <li>Partners</li>
            <li>Insurers and other commercial interests</li>
          </ul>` /* :contentReference[oaicite:14]{index=14}&#8203;:contentReference[oaicite:15]{index=15} */,
      },
    ],
  },
  {
    id: 6,
    learningOutcome: 'Identify core business stakeholder roles',
    screenBG: '#F0F0F0',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Business Stakeholders (p6)',
    bodyContent: [
      {
        type: 'html',
        value: `
          <ul>
            <li>Project Sponsor</li>
            <li>Managers of departments affected by the project</li>
            <li>Operational support</li>
            <li>Customers and end users of the project product or service</li>
          </ul>` /* :contentReference[oaicite:16]{index=16}&#8203;:contentReference[oaicite:17]{index=17} */,
      },
    ],
  },

  /* =====================================================
     BABOK® ROLES (pp6-7)
     ===================================================== */
  {
    id: 7,
    learningOutcome: 'Describe key BABOK® stakeholder roles',
    screenBG: '#EAE2F7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'BABOK® Roles (pp6-7)',
    bodyContent: [
      {
        type: 'text',
        value:
          'The Business Analysis Body Of Knowledge (BABOK®) defines some generic project stakeholder roles. Some examples of stakeholders who fit into each of these roles are listed in the definitions below.',
      } /* :contentReference[oaicite:18]{index=18}&#8203;:contentReference[oaicite:19]{index=19} */,
      {
        type: 'flipCards',
        cards: [
          {
            main: 'Sponsor',
            aside:
              'Sponsors are responsible for initiating the effort to define a business need and develop a solution that meets that need. They authorise the work to be performed and control the budget and scope for the initiative.',
          },
          {
            main: 'Project Manager',
            aside:
              "Project managers are responsible for managing the work required to deliver products and services that meet the business need, and for ensuring that the project's objectives are met while balancing the project factors including scope, budget, schedule, resources, quality and risk.",
          },
          {
            main: 'Customer',
            aside:
              'A customer acquires, purchases or may use products or services produced by the organisation and may have contractual or moral rights that the organisation is obliged to meet.',
          },
          {
            main: 'End User',
            aside:
              'End users are stakeholders who directly interact with the products and services produced by the organisation.',
          },
        ],
      } /* :contentReference[oaicite:20]{index=20}&#8203;:contentReference[oaicite:21]{index=21} */,
    ],
  },

  /* =====================================================
     STAKEHOLDER ENGAGEMENT (p10)
     ===================================================== */
  {
    id: 8,
    learningOutcome: 'Define stakeholder engagement',
    screenBG: '#FFF5F5',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Stakeholder Engagement (p10)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Stakeholder engagement is the establishing and maintaining effective working relationships with the stakeholders.',
      } /* :contentReference[oaicite:22]{index=22}&#8203;:contentReference[oaicite:23]{index=23} */,
      {
        type: 'text',
        value:
          'Stakeholder engagement is the systematic identification, analysis, planning and implementation of actions designed to influence stakeholders. A stakeholder engagement strategy identifies the needs of key groups, and the sponsor plays a vital role in ensuring those needs are met.',
      } /* :contentReference[oaicite:24]{index=24}&#8203;:contentReference[oaicite:25]{index=25} */,
    ],
  },
  {
    id: 9,
    learningOutcome: 'Recognise engagement positions and levels',
    screenBG: '#F3F4F6',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Positions & Levels (p10-11)',
    bodyContent: [
      {
        type: 'text',
        value:
          'A way to analyse and map stakeholders is to consider what their position to the project is. For example, are they: Advocates • Supporters • Blockers • Critics.',
      } /* :contentReference[oaicite:26]{index=26}&#8203;:contentReference[oaicite:27]{index=27} */,
      {
        type: 'accordions',
        items: [
          {
            main: 'Disengaged',
            aside:
              'Observed by their lack of response to meeting requests, surveys and other communication.',
          },
          {
            main: 'Marginally engaged',
            aside: 'Participate on occasion but provide limited feedback.',
          },
          {
            main: 'Responsive',
            aside:
              'Get involved when prompted and respond to surveys and join in conversations and workshops.',
          },
          {
            main: 'Proactively engaged',
            aside:
              'Willing to answer questions and may ask questions and contribute in ways you hadn’t yet thought about.',
          },
        ],
      } /* :contentReference[oaicite:28]{index=28}&#8203;:contentReference[oaicite:29]{index=29} */,
    ],
  },
  {
    id: 10,
    learningOutcome: 'Identify barriers to stakeholder engagement',
    screenBG: '#E0F7E4',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Activity: Engagement Barriers (p11)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Brainstorm with your group the potential barriers to successful stakeholder engagement.',
      } /* :contentReference[oaicite:30]{index=30}&#8203;:contentReference[oaicite:31]{index=31} */,
    ],
  },

  /* =====================================================
     ENGAGEMENT PRINCIPLES (p12)
     ===================================================== */
  {
    id: 11,
    learningOutcome: 'List core engagement principles',
    screenBG: '#EAE2F7',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Engagement Principles (p12)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Engaging the right people in the right way for your project can fundamentally affect its success.',
      } /* :contentReference[oaicite:32]{index=32}&#8203;:contentReference[oaicite:33]{index=33} */,
      {
        type: 'html',
        value: `
          <ul>
            <li>Plan for successful engagement</li>
            <li>Early and often.</li>
            <li>Right communication.</li>
            <li>Clarity of vision and purpose.</li>
            <li>Clear roles and responsibilities.</li>
            <li>Transparency and visibility.</li>
            <li>Find their ‘WIIFM’ (What’s In It For Me).</li>
            <li>Build relationships.</li>
            <li>Establish trust and rapport.</li>
            <li>Clear stakeholder feedback mechanisms.</li>
            <li>Be flexible.</li>
            <li>Take ownership.</li>
            <li>Recognise and acknowledge their skills, experience knowledge and contributions.</li>
            <li>Listen with presence.</li>
          </ul>` /* :contentReference[oaicite:34]{index=34}&#8203;:contentReference[oaicite:35]{index=35} */,
      },
    ],
  },

  /* =====================================================
     ENGAGEMENT PROCESS (p13)
     ===================================================== */
  {
    id: 12,
    learningOutcome: 'Outline the stakeholder engagement process',
    screenBG: '#FEFBE7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Engagement Process (p13)',
    bodyContent: [
      {
        type: 'text',
        value:
          'While there is no one single method or process for stakeholder engagement, there are various activities that should be performed:',
      } /* :contentReference[oaicite:36]{index=36}&#8203;:contentReference[oaicite:37]{index=37} */,
      {
        type: 'html',
        value: `
          <ol>
            <li>Identify your stakeholders</li>
            <li>Categorise</li>
            <li>Analyse</li>
            <li>Prioritise</li>
            <li>Plan for engagement</li>
            <li>Engage</li>
            <li>Ongoing monitoring</li>
          </ol>` /* :contentReference[oaicite:38]{index=38}&#8203;:contentReference[oaicite:39]{index=39} */,
      },
    ],
  },

  /* =====================================================
     IDENTIFICATION (p14)
     ===================================================== */
  {
    id: 13,
    learningOutcome: 'Describe the purpose of a stakeholder list',
    screenBG: '#F7EDE2',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Stakeholder Identification (p14)',
    bodyContent: [
      {
        type: 'text',
        value:
          'The first step in the stakeholder engagement process is to identify stakeholders and create a “stakeholder list”. This should be prepared early in the project by working with your project sponsor to create a list of all possible stakeholders.',
      } /* :contentReference[oaicite:40]{index=40}&#8203;:contentReference[oaicite:41]{index=41} */,
      {
        type: 'text',
        value:
          'It is important to identify stakeholders at the outset of any project as they will be involved in various stages in the life cycle to provide approvals, feedback or information.',
      } /* :contentReference[oaicite:42]{index=42}&#8203;:contentReference[oaicite:43]{index=43} */,
    ],
  },
  {
    id: 14,
    learningOutcome: 'Reflect on identification challenges',
    screenBG: '#E0F7E4',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Activity: Stakeholder Identification (p14)',
    bodyContent: [
      {
        type: 'text',
        value:
          'How do you identify your stakeholders? What are the challenges to stakeholder identification?',
      } /* :contentReference[oaicite:44]{index=44}&#8203;:contentReference[oaicite:45]{index=45} */,
    ],
  },

  /* =====================================================
     SEGMENTATION (p16)
     ===================================================== */
  {
    id: 15,
    learningOutcome: 'Explain stakeholder segmentation',
    screenBG: '#EAE2F7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Segmentation (p16)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Stakeholder segmentation is the process of dividing your stakeholders into clearly defined subgroups, or categories, who have common wants, needs and priorities.',
      } /* :contentReference[oaicite:46]{index=46}&#8203;:contentReference[oaicite:47]{index=47} */,
      {
        type: 'text',
        value:
          'Some common factors used to segment customers and users are: Geographical • Demographic • Psychographic • Behavioural.',
      } /* :contentReference[oaicite:48]{index=48}&#8203;:contentReference[oaicite:49]{index=49} */,
    ],
  },

  /* =====================================================
     CASE STUDY SCTOC (p16-17)
     ===================================================== */
  {
    id: 16,
    learningOutcome: 'Present the SCTOC Dog Expo scenario',
    screenBG: '#002C5F',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Case Study: SCTOC Dog Expo (pp16-17)',
    bodyContent: [
      {
        type: 'text',
        value:
          'The State Canine Training and Obedience Centre (SCTOC) was established in 1978 by a group of passionate dog breeders and owners to educate and promote dog obedience.',
      } /* :contentReference[oaicite:50]{index=50}&#8203;:contentReference[oaicite:51]{index=51} */,
      {
        type: 'text',
        value:
          'Each year, the SCTOC organises a ‘Dog Expo’ at a local community centre and attached park. The expo has many activities and things for participants to do including: Dog obedience and agility demonstrations • Market stalls • Kids rides and activities • Vet talks • Breeder displays and adoptions • Animal shelter and protection stalls • Food trucks for both people and pets',
      } /* :contentReference[oaicite:52]{index=52}&#8203;:contentReference[oaicite:53]{index=53} */,
    ],
  },
  {
    id: 17,
    learningOutcome: 'Segment Expo stakeholders, customers and users',
    screenBG: '#002C5F',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Activity: Expo Segments (p17)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Who are all the different stakeholders, customers and user types for the SCTOC Dog Expo? Divide them into segments of people with similar needs or concerns.',
      } /* :contentReference[oaicite:54]{index=54}&#8203;:contentReference[oaicite:55]{index=55} */,
    ],
  },

  /* =====================================================
     STAKEHOLDER ANALYSIS & CLASSIFICATION (pp18-19)
     ===================================================== */
  {
    id: 18,
    learningOutcome: 'Define stakeholder analysis and its purpose',
    screenBG: '#F9F3F3',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Stakeholder Analysis (p18)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Identifying and analysing the stakeholders who may be impacted by the change and assess their impact, participation, and needs throughout the project activities.',
      } /* :contentReference[oaicite:56]{index=56}&#8203;:contentReference[oaicite:57]{index=57} */,
      {
        type: 'text',
        value:
          'The purpose of stakeholder analysis is to review each stakeholder/stakeholder group and determine their likely expectations and needs at various stages of the project life cycle.',
      } /* :contentReference[oaicite:58]{index=58}&#8203;:contentReference[oaicite:59]{index=59} */,
    ],
  },
  {
    id: 19,
    learningOutcome: 'List analysis questions to ask',
    screenBG: '#F0F0F0',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Analysis Questions (p18)',
    bodyContent: [
      {
        type: 'html',
        value: `
        <ul>
          <li>What are the interests, concerns and expectations of each stakeholder group?</li>
          <li>How much power and influence does each stakeholder group have?</li>
          <li>What is the level of involvement or engagement required of each stakeholder group?</li>
          <li>How may each stakeholder group be impacted or affected, both positively and negatively?</li>
        </ul>`,
      } /* :contentReference[oaicite:60]{index=60}&#8203;:contentReference[oaicite:61]{index=61} */,
    ],
  },
  {
    id: 20,
    learningOutcome: 'Describe classification categories',
    screenBG: '#E9EFEF',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Classifying Stakeholders (p19)',
    bodyContent: [
      {
        type: 'html',
        value: `
        <ul>
          <li>Important – stakeholders who have power over the project’s success</li>
          <li>Influential – stakeholders who have power over the organisation of how the project is delivered</li>
          <li>Mandatory – the most critical stakeholder group that the project cannot progress without</li>
          <li>Beneficiaries – those stakeholders who receive a benefit from the project outcome</li>
          <li>Impacted – those stakeholders who may experience some form of penalty or be negatively affected</li>
        </ul>`,
      } /* :contentReference[oaicite:62]{index=62}&#8203;:contentReference[oaicite:63]{index=63} */,
    ],
  },

  /* =====================================================
     STAKEHOLDER ATTITUDES (p21)
     ===================================================== */
  {
    id: 21,
    learningOutcome: 'List questions for analysing attitudes',
    screenBG: '#FEFBE7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Stakeholder Attitudes (p21)',
    bodyContent: [
      {
        type: 'text',
        value:
          'It is critical to analyse each stakeholder’s attitudes, issues and motivations.',
      } /* :contentReference[oaicite:64]{index=64}&#8203;:contentReference[oaicite:65]{index=65} */,
      {
        type: 'html',
        value: `
        <ul>
          <li>What financial or emotional interest do they have in the project?</li>
          <li>What motivates stakeholders most of all?</li>
          <li>Who influences their opinions?</li>
          <li>What information do they want from you?</li>
          <li>What is the best way of communicating with them?</li>
        </ul>`,
      } /* :contentReference[oaicite:66]{index=66}&#8203;:contentReference[oaicite:67]{index=67} */,
    ],
  },

  /* =====================================================
     MATRIX & ANALYSIS ACTIVITY (p22)
     ===================================================== */
  {
    id: 22,
    learningOutcome: 'Introduce Mendelow’s Matrix',
    screenBG: '#F7EDE2',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Mendelow Matrix (p22)',
    bodyContent: [
      {
        type: 'text',
        value:
          'A common tool used to map stakeholder expectations and power is the Stakeholder Matrix.',
      } /* :contentReference[oaicite:68]{index=68}&#8203;:contentReference[oaicite:69]{index=69} */,
      {
        type: 'html',
        value: `
        <ul>
          <li>High Influence / High Interest – fully engage and satisfy</li>
          <li>High Influence / Low Interest – keep satisfied</li>
          <li>Low Influence / High Interest – keep informed</li>
          <li>Low Influence / Low Interest – monitor only</li>
        </ul>`,
      } /* :contentReference[oaicite:70]{index=70}&#8203;:contentReference[oaicite:71]{index=71} */,
    ],
  },
  {
    id: 23,
    learningOutcome: 'Plot SCTOC stakeholders on the matrix',
    screenBG: '#002C5F',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Activity: Stakeholder Matrix (p22)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Using a bit of creative licence, apply the Stakeholder Matrix to analyse the example stakeholders for the SCTOC Dog Expo.',
      } /* :contentReference[oaicite:72]{index=72}&#8203;:contentReference[oaicite:73]{index=73} */,
    ],
  },

  /* =====================================================
     ENGAGEMENT PLAN (p26)
     ===================================================== */
  {
    id: 24,
    learningOutcome: 'List fields in an engagement plan',
    screenBG: '#E0F7E4',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Engagement Plan Fields (p26)',
    bodyContent: [
      {
        type: 'html',
        value: `
        <ul>
          <li>Name, title, contact information and role</li>
          <li>Classification</li>
          <li>Level of involvement required</li>
          <li>Attitude</li>
          <li>Their level of influence & interest</li>
          <li>Subject areas needed</li>
          <li>Role and responsibilities</li>
          <li>Action plan to keep them engaged</li>
        </ul>`,
      } /* :contentReference[oaicite:74]{index=74}&#8203;:contentReference[oaicite:75]{index=75} */,
    ],
  },

  /* =====================================================
     COMMUNICATIONS (p27-28)
     ===================================================== */
  {
    id: 25,
    learningOutcome: 'Explain stakeholder communication needs',
    screenBG: '#F3F4F6',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Stakeholder Communications (p27)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Your ability to communicate will directly affect the quality and effectiveness of your relationships with stakeholders.',
      } /* :contentReference[oaicite:76]{index=76}&#8203;:contentReference[oaicite:77]{index=77} */,
      {
        type: 'text',
        value:
          'Each stakeholder will have different communication needs, and it is important to understand these needs and the specific information they require.',
      } /* :contentReference[oaicite:78]{index=78}&#8203;:contentReference[oaicite:79]{index=79} */,
    ],
  },
  {
    id: 26,
    learningOutcome: 'Use the 6W framework for comms planning',
    screenBG: '#FFF5F5',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: '6W Framework (p28)',
    bodyContent: [
      {
        type: 'html',
        value: `
        <ul>
          <li><strong>Who?</strong> Who needs to know?</li>
          <li><strong>Why?</strong> Why do stakeholders need to be communicated with?</li>
          <li><strong>What?</strong> What is of critical interest or concern?</li>
          <li><strong>When?</strong> How frequently should liaison occur?</li>
          <li><strong>Where?</strong> Where should the information be delivered?</li>
          <li><strong>How?</strong> How does each stakeholder prefer to receive information?</li>
        </ul>`,
      } /* :contentReference[oaicite:80]{index=80}&#8203;:contentReference[oaicite:81]{index=81} */,
    ],
  },
  {
    id: 27,
    learningOutcome: 'Draft a communications plan line',
    screenBG: '#002C5F',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Activity: Expo Comms Plan (p28)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Work with your group to brainstorm a communications plan for the SCTOC Dog Expo.',
      } /* :contentReference[oaicite:82]{index=82}&#8203;:contentReference[oaicite:83]{index=83} */,
    ],
  },

  /* =====================================================
     TRUST & RAPPORT (pp31-32)
     ===================================================== */
  {
    id: 28,
    learningOutcome: 'Define trust components',
    screenBG: '#E9F9E8',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Trust (p31)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Trust is the willingness of a party to be vulnerable to the actions of another party based on the expectation that the other will perform a particular action important to the trustor, irrespective of the ability to monitor or control that other party.',
      } /* :contentReference[oaicite:84]{index=84}&#8203;:contentReference[oaicite:85]{index=85} */,
      {
        type: 'text',
        value: 'Trust is a combination of ability, generosity and integrity.',
      } /* :contentReference[oaicite:86]{index=86}&#8203;:contentReference[oaicite:87]{index=87} */,
    ],
  },
  {
    id: 29,
    learningOutcome: 'Brainstorm trust-building actions',
    screenBG: '#F7EDE2',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Activity: Building Trust (p31)',
    bodyContent: [
      {
        type: 'text',
        value:
          'How do you build trust? Brainstorm ideas and examples that help build trust with diverse stakeholder individuals and groups.',
      } /* :contentReference[oaicite:88]{index=88}&#8203;:contentReference[oaicite:89]{index=89} */,
    ],
  },
  {
    id: 30,
    learningOutcome: 'Describe rapport and matching & mirroring',
    screenBG: '#EFEFEF',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Rapport (p32)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Rapport is the ability to relate to others in a way that creates a level of trust and understanding.',
      } /* :contentReference[oaicite:90]{index=90}&#8203;:contentReference[oaicite:91]{index=91} */,
      {
        type: 'text',
        value:
          'One factor in building rapport with another person is to subtlety make ourselves be a bit more like them. One way that we can do this is to match and mirror their words, tonality, and physiology.',
      } /* :contentReference[oaicite:92]{index=92}&#8203;:contentReference[oaicite:93]{index=93} */,
    ],
  },

  /* =====================================================
     EFFECTIVE MEETINGS & FACILITATION (pp33-36)
     ===================================================== */
  {
    id: 31,
    learningOutcome: 'Outline characteristics of successful meetings',
    screenBG: '#EAE2F7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Effective Meetings (p33)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Meetings are a significant means of communication and engagement with stakeholders. Successful meetings involve the right people, for a clear purpose, scheduled at a convenient time and place to cover specific topics.',
      } /* :contentReference[oaicite:94]{index=94}&#8203;:contentReference[oaicite:95]{index=95} */,
    ],
  },
  {
    id: 32,
    learningOutcome: 'Describe facilitator responsibilities',
    screenBG: '#F8F8F8',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Facilitation (p33)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Facilitation is the process of designing and conducting an effective meeting involving a group of people, to assist the group make decisions, solve problems, or exchange ideas and information.',
      } /* :contentReference[oaicite:96]{index=96}&#8203;:contentReference[oaicite:97]{index=97} */,
    ],
  },
  {
    id: 33,
    learningOutcome: 'Plan actions for meeting stages',
    screenBG: '#F0F0F0',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Activity: Facilitating a Meeting (p35)',
    bodyContent: [
      {
        type: 'text',
        value:
          'If you were facilitating a meeting of the stakeholders involved in organising the SCTOC Dog Expo, what actions would you take for each element: Planning, Execution, Closure?',
      } /* :contentReference[oaicite:98]{index=98}&#8203;:contentReference[oaicite:99]{index=99} */,
    ],
  },
  {
    id: 34,
    learningOutcome: 'Intervene when meetings go off track',
    screenBG: '#FFF5F5',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Intervention (p36)',
    bodyContent: [
      {
        type: 'text',
        value:
          'If the meeting is not going to plan, or the function of the group is preventing the outcome required, the facilitator will need to intervene to bring the meeting back on track.',
      } /* :contentReference[oaicite:100]{index=100}&#8203;:contentReference[oaicite:101]{index=101} */,
    ],
  },

  /* =====================================================
     COMMUNITY ENGAGEMENT (pp38-40)
     ===================================================== */
  {
    id: 35,
    learningOutcome: 'Define community engagement',
    screenBG: '#E0F7E4',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Community Engagement (p38)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Community engagement shifts the focus from delivering decisions to community groups, to including them in a more collective and inclusive process of decision making.',
      } /* :contentReference[oaicite:102]{index=102}&#8203;:contentReference[oaicite:103]{index=103} */,
    ],
  },
  {
    id: 36,
    learningOutcome: 'List methods of community engagement',
    screenBG: '#EAE2F7',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Engagement Methods (p38)',
    bodyContent: [
      {
        type: 'html',
        value: `
        <ul>
          <li>Public meetings and forums</li>
          <li>Events</li>
          <li>Surveys</li>
          <li>Focus groups and workshops</li>
          <li>Citizens' panels</li>
          <li>Website and blog</li>
          <li>Social media</li>
        </ul>`,
      } /* :contentReference[oaicite:104]{index=104}&#8203;:contentReference[oaicite:105]{index=105} */,
    ],
  },
  {
    id: 37,
    learningOutcome: 'Outline the community engagement process',
    screenBG: '#FAF0F0',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Engagement Process (p40)',
    bodyContent: [
      {
        type: 'html',
        value: `
          <ol>
            <li>Define the purpose and objectives of the engagement</li>
            <li>Identify community groups and stakeholders</li>
            <li>Plan the engagement process and identify resources needed</li>
            <li>Implement and monitor the community engagement plan</li>
            <li>Review the engagement information and data collected</li>
            <li>Apply the outcomes of the engagement</li>
            <li>Provide feedback to the community</li>
            <li>Evaluate the success of the community engagement process</li>
          </ol>` /* :contentReference[oaicite:106]{index=106}&#8203;:contentReference[oaicite:107]{index=107} */,
      },
    ],
  },

  /* =====================================================
     DIFFICULT STAKEHOLDERS, DEFENCE & RESISTANCE (pp45-47)
     ===================================================== */
  {
    id: 38,
    learningOutcome: 'Brainstorm difficult behaviours',
    screenBG: '#EFEFEF',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Activity: Difficult Behaviours (p45)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Brainstorm with your group examples of difficult behaviours stakeholders may exhibit.',
      } /* :contentReference[oaicite:108]{index=108}&#8203;:contentReference[oaicite:109]{index=109} */,
    ],
  },
  {
    id: 39,
    learningOutcome: 'List common defence mechanisms',
    screenBG: '#FFF7E5',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Defence Mechanisms (p45)',
    bodyContent: [
      {
        type: 'html',
        value: `
        <ul>
          <li>Displacement – Taking feelings out on others</li>
          <li>Denial – Denying that something exists</li>
          <li>Repression – Unconsciously keeping unpleasant information from your conscious mind</li>
          <li>Suppression – Consciously keeping unpleasant information from your conscious mind</li>
          <li>Sublimation – Converting unacceptable impulses into more acceptable outlets</li>
          <li>Projection – Assigning your own unacceptable feelings or qualities to others</li>
          <li>Intellectualisation – Thinking about stressful things in a clinical way</li>
          <li>Rationalisation – Justifying an unacceptable feeling or behaviour with logic</li>
          <li>Regression – Reverting to earlier behaviours</li>
          <li>Reaction Formation – Replacing an unwanted impulse with its opposite</li>
        </ul>`,
      } /* :contentReference[oaicite:110]{index=110}&#8203;:contentReference[oaicite:111]{index=111} */,
    ],
  },
  {
    id: 40,
    learningOutcome: 'Describe causes of resistance',
    screenBG: '#F7EDE2',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Resistance Causes (p47)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Cause  –  Reason: Rational • Habitual • Emotional • Identity • Ideological • Social • Cultural • Political.',
      } /* :contentReference[oaicite:112]{index=112}&#8203;:contentReference[oaicite:113]{index=113} */,
    ],
  },

  /* =====================================================
     MONITORING (p49) & JOURNAL (p50)
     ===================================================== */
  {
    id: 41,
    learningOutcome: 'Explain why ongoing monitoring is vital',
    screenBG: '#EAE2F7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Monitoring Engagement (p49)',
    bodyContent: [
      {
        type: 'text',
        value:
          'The more significant the impact of the change or its visibility within the organisation, the more attention is directed to managing stakeholder collaboration.',
      } /* :contentReference[oaicite:114]{index=114}&#8203;:contentReference[oaicite:115]{index=115} */,
      {
        type: 'text',
        value:
          'Poor relationships with stakeholders can have many detrimental effects on our work, including: failure to provide quality information • resistance to change • lack of support.',
      } /* :contentReference[oaicite:116]{index=116}&#8203;:contentReference[oaicite:117]{index=117} */,
    ],
  },
  {
    id: 42,
    learningOutcome: 'Capture personal commitments',
    screenBG: '#F3F4F6',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Activity: Learning Journal (p50)',
    bodyContent: [
      {
        type: 'text',
        value:
          'Take this opportunity to reflect on what you have learned in this workshop and consider the changes you can make to ensure that you apply the knowledge and skills you have gained. What do you want to Start • Stop • Change • Continue?',
      } /* :contentReference[oaicite:118]{index=118}&#8203;:contentReference[oaicite:119]{index=119} */,
    ],
  },

  /* =====================================================
     REFERENCES (p51)
     ===================================================== */
  {
    id: 43,
    learningOutcome: 'Access further study sources',
    screenBG: '#FFF5F5',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'References (p51)',
    bodyContent: [
      {
        type: 'html',
        value: `
          <ul>
            <li>Adkins, Lyssa – Coaching Agile Teams</li>
            <li>Covey, Stephen – The Speed of Trust</li>
            <li>PMBOK® Guide – Project Management Institute</li>
            <li>Freud, A. – The Ego and the Mechanisms of Defence</li>
            <li>IAP2 – Spectrum of Public Participation</li>
          </ul>` /* :contentReference[oaicite:120]{index=120}&#8203;:contentReference[oaicite:121]{index=121} */,
      },
    ],
  },
];