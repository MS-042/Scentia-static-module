export const screens = [
  // =========================
  // MARKETING (IDs 1-10)
  // =========================
  {
    id: 1,
    learningOutcome: 'Explain the role and importance of marketing',
    screenBG: '#F7EDE2',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Introduction to Marketing',
    bodyContent: [
      {
        type: 'text',
        value:
          'Marketing is the business function that identifies customer needs and determines how best to meet them.',
      },
      {
        type: 'subheading',
        value: 'Main Responsibilities',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Market Research</li>
            <li>Product Development</li>
            <li>Promotional Strategies</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 2,
    learningOutcome: 'Identify methods of segmenting consumer markets',
    screenBG: '#F9F3E8',
    containerBG: '#F3F4F6',
    contentPosition: 'middle',
    title: 'Market Segmentation',
    bodyContent: [
      {
        type: 'text',
        value:
          'Segmenting the market helps organizations target specific groups of consumers effectively.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Demographic', aside: 'Age, gender, income' },
          { main: 'Psychographic', aside: 'Lifestyle, values, interests' },
          { main: 'Behavioral', aside: 'Usage rate, brand loyalty' },
        ],
      },
    ],
  },
  {
    id: 3,
    learningOutcome: 'Analyze consumer decision-making processes',
    screenBG: '#EFE9DD',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Consumer Behavior',
    bodyContent: [
      {
        type: 'text',
        value:
          'Understanding how consumers make purchase decisions is critical for tailoring marketing strategies.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Stages of Decision-Making',
            aside:
              'Need recognition, information search, evaluation, purchase, post-purchase behavior',
          },
          {
            main: 'Influencing Factors',
            aside: 'Cultural, social, personal, psychological',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    learningOutcome: 'Develop brand positioning strategies',
    screenBG:
      'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop',
    containerBG: '#F3F4F6',
    contentPosition: 'middle',
    title: 'Brand Management',
    bodyContent: [
      {
        type: 'text',
        value:
          'Brand management involves creating and maintaining a strong perception of a product or service in the customer’s mind.',
      },
      {
        type: 'subheading',
        value: 'Key Components',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Brand Identity</li>
            <li>Brand Equity</li>
            <li>Brand Loyalty</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 5,
    learningOutcome: 'Examine various pricing models and strategies',
    screenBG: '#F8EFE2',
    containerBG: 'transparent',
    contentPosition: 'left',
    title: 'Pricing Strategies',
    bodyContent: [
      {
        type: 'text',
        value:
          'Pricing strategies vary from cost-based to value-based approaches.',
      },
      {
        type: 'subheading',
        value: 'Common Pricing Models',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Cost-Plus Pricing</li>
            <li>Penetration Pricing</li>
            <li>Skimming Pricing</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Best Used When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Penetration</td>
                <td>To quickly attract market share</td>
              </tr>
              <tr>
                <td>Skimming</td>
                <td>For innovative or unique products</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    ],
  },
  {
    id: 6,
    learningOutcome: 'Evaluate marketing distribution channel options',
    screenBG: '#EFEFEF',
    containerBG: '#ffffff',
    contentPosition: 'right',
    title: 'Marketing Channels',
    bodyContent: [
      {
        type: 'text',
        value:
          'Channels connect businesses with their target markets by delivering products and services.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Direct Distribution',
            aside: 'Manufacturer to consumer',
          },
          {
            main: 'Indirect Distribution',
            aside: 'Use of intermediaries like wholesalers or retailers',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    learningOutcome: 'Outline effective promotional mix elements',
    screenBG: '#EAE2F7',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Advertising and Promotion',
    bodyContent: [
      {
        type: 'text',
        value:
          'A promotional mix includes advertising, sales promotion, public relations, and personal selling.',
      },
      {
        type: 'subheading',
        value: 'Promotional Mix Breakdown',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Advertising: Paid non-personal communication</li>
            <li>Public Relations: Building relationships with publics</li>
            <li>Personal Selling: Direct communication with customers</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 8,
    learningOutcome: 'Assess digital marketing channels and tools',
    screenBG: '#F3F4F6',
    containerBG: '#ffffff',
    contentPosition: 'left',
    title: 'Digital Marketing',
    bodyContent: [
      {
        type: 'text',
        value:
          'Digital marketing employs online channels like search engines, social media, and email to connect with audiences.',
      },
      {
        type: 'flipCards',
        cards: [
          {
            main: 'SEO',
            aside: 'Improves visibility in search engine results',
          },
          { main: 'PPC', aside: 'Pay-per-click advertising model' },
          {
            main: 'Social Media',
            aside: 'Promotion and engagement on social networks',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    learningOutcome: 'Discuss challenges in international marketing',
    screenBG: '#EDF7FF',
    containerBG: '#F8FAFC',
    contentPosition: 'right',
    title: 'International Marketing',
    bodyContent: [
      {
        type: 'text',
        value:
          'Entering foreign markets involves navigating cultural, economic, and legal differences.',
      },
      {
        type: 'subheading',
        value: 'Key Considerations',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Cultural Sensitivity</li>
            <li>Regulatory Compliance</li>
            <li>Exchange Rate Fluctuations</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 10,
    learningOutcome: 'Evaluate ethical considerations in marketing',
    screenBG: '#FFF5F5',
    containerBG: '#ffffff',
    contentPosition: 'middle',
    title: 'Ethics in Marketing',
    bodyContent: [
      {
        type: 'text',
        value:
          'Ethical marketing practices ensure fair treatment of customers and truthful representation of products.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Transparency',
            aside: 'Honest communication about product features and pricing',
          },
          {
            main: 'Privacy',
            aside: 'Respect for customer data and information',
          },
        ],
      },
    ],
  },

  // =========================
  // OPERATIONS (IDs 11-20)
  // =========================
  {
    id: 11,
    learningOutcome:
      'Describe the fundamental concepts of operations management',
    screenBG: '#FEFBE7',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Introduction to Operations',
    bodyContent: [
      {
        type: 'text',
        value:
          'Operations management deals with designing and controlling the production process.',
      },
      {
        type: 'subheading',
        value: 'Core Elements',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Process Analysis</li>
            <li>Resource Planning</li>
            <li>Quality Control</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 12,
    learningOutcome: 'Analyze process design and workflow optimization',
    screenBG: '#F9F9F9',
    containerBG: '#F3F4F6',
    contentPosition: 'middle',
    title: 'Process Design',
    bodyContent: [
      {
        type: 'text',
        value:
          'Process design involves planning the flow of tasks and activities to create products or services efficiently.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Job Shop', aside: 'Low-volume, high-variety production' },
          {
            main: 'Assembly Line',
            aside: 'High-volume, low-variety production',
          },
          {
            main: 'Continuous Flow',
            aside: 'High-volume, standardized products',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    learningOutcome: 'Examine lean methodologies to reduce waste',
    screenBG: '#E2F7F1',
    containerBG: '#ffffff',
    contentPosition: 'right',
    title: 'Lean Management',
    bodyContent: [
      {
        type: 'text',
        value:
          'Lean management focuses on minimizing waste and maximizing productivity.',
      },
      {
        type: 'subheading',
        value: 'Seven Wastes',
      },
      {
        type: 'html',
        value: `
          <table>
            <thead>
              <tr>
                <th>Waste</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Overproduction</td>
                <td>Producing more than needed</td>
              </tr>
              <tr>
                <td>Defects</td>
                <td>Time spent fixing errors</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    ],
  },
  {
    id: 14,
    learningOutcome: 'Outline key components of supply chain management',
    screenBG: '#FFFBE5',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Supply Chain Basics',
    bodyContent: [
      {
        type: 'text',
        value:
          'A supply chain connects suppliers, manufacturers, warehouses, and customers.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Upstream',
            aside: 'Raw material suppliers',
          },
          {
            main: 'Downstream',
            aside: 'Distribution and retail to the end consumer',
          },
        ],
      },
    ],
  },
  {
    id: 15,
    learningOutcome: 'Implement quality management frameworks',
    screenBG: '#E7FAFC',
    containerBG: '#ffffff',
    contentPosition: 'middle',
    title: 'Quality Management',
    bodyContent: [
      {
        type: 'text',
        value:
          'Quality management ensures that products and services consistently meet customer expectations.',
      },
      {
        type: 'subheading',
        value: 'Popular Frameworks',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Total Quality Management (TQM)</li>
            <li>Six Sigma</li>
            <li>ISO Standards</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 16,
    learningOutcome: 'Plan and execute projects within scope, time, and budget',
    screenBG: '#F7EDE2',
    containerBG: '#F3F4F6',
    contentPosition: 'left',
    title: 'Project Management',
    bodyContent: [
      {
        type: 'text',
        value:
          'Project management requires defining project goals, scheduling tasks, and managing resources effectively.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Scope', aside: 'Defines boundaries of the project' },
          { main: 'Schedule', aside: 'Timeline and milestones' },
          { main: 'Budget', aside: 'Financial resources allocated' },
        ],
      },
    ],
  },
  {
    id: 17,
    learningOutcome: 'Determine capacity requirements for operations',
    screenBG: '#EFEFEF',
    containerBG: '#ffffff',
    contentPosition: 'middle',
    title: 'Capacity Planning',
    bodyContent: [
      {
        type: 'text',
        value:
          'Capacity planning involves matching the production capability to demand.',
      },
      {
        type: 'subheading',
        value: 'Key Considerations',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Demand Forecasting</li>
            <li>Peak vs. Average Load</li>
            <li>Long-Term vs. Short-Term Capacity</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 18,
    learningOutcome: 'Manage inventory levels for operational efficiency',
    screenBG: '#FFF5F5',
    containerBG: '#FFF',
    contentPosition: 'right',
    title: 'Inventory Management',
    bodyContent: [
      {
        type: 'text',
        value:
          'Inventory management aims to have the right product, in the right place, at the right time.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Economic Order Quantity (EOQ)',
            aside: 'Minimizes total ordering and holding costs',
          },
          {
            main: 'Just-in-Time (JIT)',
            aside: 'Reduces excess inventory by receiving goods only as needed',
          },
        ],
      },
    ],
  },
  {
    id: 19,
    learningOutcome: 'Evaluate factors in designing service operations',
    screenBG: '#E6E1FF',
    containerBG: '#FFFFFF',
    contentPosition: 'left',
    title: 'Service Operations',
    bodyContent: [
      {
        type: 'text',
        value:
          'Service operations often have high customer interaction and can be harder to standardize than manufacturing.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Front Office', aside: 'Directly handles customer needs' },
          {
            main: 'Back Office',
            aside: 'Administrative processes behind the scenes',
          },
        ],
      },
    ],
  },
  {
    id: 20,
    learningOutcome: 'Analyze sustainability measures in operations management',
    screenBG: '#F0FBF0',
    containerBG: '#ffffff',
    contentPosition: 'middle',
    title: 'Sustainability in Operations',
    bodyContent: [
      {
        type: 'text',
        value:
          'Sustainable operations reduce environmental impact and improve resource efficiency.',
      },
      {
        type: 'subheading',
        value: 'Initiatives',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Waste Reduction</li>
            <li>Energy Efficiency</li>
            <li>Closed-Loop Supply Chain</li>
          </ul>
        `,
      },
    ],
  },

  // =========================
  // FINANCE (IDs 21-30)
  // =========================
  {
    id: 21,
    learningOutcome: 'Interpret financial statements for decision-making',
    screenBG: '#F9F9F9',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Financial Reporting',
    bodyContent: [
      {
        type: 'text',
        value:
          'Financial reports—Balance Sheet, Income Statement, and Cash Flow—offer insights into a company’s performance.',
      },
      {
        type: 'subheading',
        value: 'Key Statements',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Balance Sheet: Assets, liabilities, equity</li>
            <li>Income Statement: Revenues, expenses, profit</li>
            <li>Cash Flow Statement: Operating, investing, financing</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 22,
    learningOutcome:
      'Apply time value of money concepts to evaluate investments',
    screenBG: '#FAF3E4',
    containerBG: '#F3F4F6',
    contentPosition: 'middle',
    title: 'Time Value of Money',
    bodyContent: [
      {
        type: 'text',
        value:
          'A dollar today is worth more than a dollar in the future due to its earning potential.',
      },
      {
        type: 'flipCards',
        cards: [
          {
            main: 'Present Value',
            aside: 'Current value of future cash flows',
          },
          {
            main: 'Future Value',
            aside: 'Value of current money at a future date',
          },
          {
            main: 'Discount Rate',
            aside: 'Interest rate used to find present values',
          },
        ],
      },
    ],
  },
  {
    id: 23,
    learningOutcome:
      'Evaluate project feasibility using capital budgeting methods',
    screenBG: '#FFFBE5',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Capital Budgeting',
    bodyContent: [
      {
        type: 'text',
        value:
          'Capital budgeting methods assess the profitability of long-term investments.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Net Present Value (NPV)',
            aside:
              'Difference between present value of cash inflows and outflows',
          },
          {
            main: 'Internal Rate of Return (IRR)',
            aside: 'Rate at which NPV equals zero',
          },
        ],
      },
    ],
  },
  {
    id: 24,
    learningOutcome:
      'Relate the concepts of risk and return to financial decisions',
    screenBG: '#F0F0F0',
    containerBG: '#fff',
    contentPosition: 'middle',
    title: 'Risk and Return',
    bodyContent: [
      {
        type: 'text',
        value: 'Investors expect higher returns for taking on higher risk.',
      },
      {
        type: 'subheading',
        value: 'Types of Risk',
      },
      {
        type: 'html',
        value: `
          <table>
            <thead>
              <tr>
                <th>Risk Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Systematic</td>
                <td>Market-related, unavoidable</td>
              </tr>
              <tr>
                <td>Unsystematic</td>
                <td>Company-specific, can be reduced via diversification</td>
              </tr>
            </tbody>
          </table>
        `,
      },
    ],
  },
  {
    id: 25,
    learningOutcome: 'Manage working capital to ensure liquidity',
    screenBG: '#FBF3F3',
    containerBG: 'transparent',
    contentPosition: 'left',
    title: 'Working Capital Management',
    bodyContent: [
      {
        type: 'text',
        value:
          'Working capital management focuses on current assets and current liabilities to maintain day-to-day operations.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Cash Management', aside: 'Ensuring sufficient liquidity' },
          {
            main: 'Accounts Receivable',
            aside: 'Optimizing credit policy and collections',
          },
          {
            main: 'Inventory Management',
            aside: 'Balancing stock levels and costs',
          },
        ],
      },
    ],
  },
  {
    id: 26,
    learningOutcome: 'Use ratio analysis to assess company performance',
    screenBG: '#EFEFEF',
    containerBG: '#FFFFFF',
    contentPosition: 'right',
    title: 'Ratio Analysis',
    bodyContent: [
      {
        type: 'text',
        value:
          'Ratios provide insights into profitability, liquidity, and solvency.',
      },
      {
        type: 'subheading',
        value: 'Common Ratios',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Current Ratio: Current assets / current liabilities</li>
            <li>Debt-to-Equity Ratio: Total liabilities / total equity</li>
            <li>Return on Equity: Net income / shareholder equity</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 27,
    learningOutcome: 'Compare various corporate financing sources',
    screenBG: '#F7F9FC',
    containerBG: '#ffffff',
    contentPosition: 'middle',
    title: 'Corporate Financing',
    bodyContent: [
      {
        type: 'text',
        value:
          'Companies use debt, equity, and hybrid instruments to raise capital.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Debt Financing',
            aside: 'Borrowed funds with interest obligations',
          },
          {
            main: 'Equity Financing',
            aside: 'Selling ownership shares to investors',
          },
        ],
      },
    ],
  },
  {
    id: 28,
    learningOutcome: 'Create financial forecasts for strategic planning',
    screenBG: '#E9F9E8',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Financial Forecasting',
    bodyContent: [
      {
        type: 'text',
        value:
          'Financial forecasting estimates future revenue, costs, and capital requirements.',
      },
      {
        type: 'subheading',
        value: 'Forecasting Techniques',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Time Series Analysis</li>
            <li>Regression Models</li>
            <li>Scenario Planning</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 29,
    learningOutcome: 'Assess the financial impact of mergers and acquisitions',
    screenBG: '#FEFBE7',
    containerBG: 'transparent',
    contentPosition: 'left',
    title: 'Mergers and Acquisitions',
    bodyContent: [
      {
        type: 'text',
        value:
          'Mergers and acquisitions can drive growth, enhance market share, and create synergies.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Merger', aside: 'Combining of two entities into one' },
          { main: 'Acquisition', aside: 'One company purchasing another' },
        ],
      },
    ],
  },
  {
    id: 30,
    learningOutcome: 'Discuss ethical responsibilities in corporate finance',
    screenBG: '#F9EFE4',
    containerBG: '#ffffff',
    contentPosition: 'right',
    title: 'Ethics in Finance',
    bodyContent: [
      {
        type: 'text',
        value:
          'Ethical principles in finance emphasize transparency, fairness, and accountability.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Insider Trading',
            aside: 'Illegal use of non-public information for profit',
          },
          {
            main: 'Corporate Governance',
            aside: 'Structure and systems that direct and control companies',
          },
        ],
      },
    ],
  },

  // =========================
  // STRATEGY (IDs 31-40)
  // =========================
  {
    id: 31,
    learningOutcome: 'Define basic concepts of strategic management',
    screenBG: '#F3F4F6',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Introduction to Strategy',
    bodyContent: [
      {
        type: 'text',
        value:
          'Strategy is the plan of action designed to achieve long-term goals and maintain competitive advantage.',
      },
      {
        type: 'subheading',
        value: 'Levels of Strategy',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Corporate</li>
            <li>Business</li>
            <li>Functional</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 32,
    learningOutcome: 'Conduct a SWOT analysis for strategic planning',
    screenBG: '#F8F8F8',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'SWOT Analysis',
    bodyContent: [
      {
        type: 'text',
        value:
          'SWOT stands for Strengths, Weaknesses, Opportunities, and Threats.',
      },
      {
        type: 'flipCards',
        cards: [
          { main: 'Strengths', aside: 'Internal, positive attributes' },
          { main: 'Weaknesses', aside: 'Internal, negative attributes' },
          { main: 'Opportunities', aside: 'External, potential advantages' },
          { main: 'Threats', aside: 'External, potential risks' },
        ],
      },
    ],
  },
  {
    id: 33,
    learningOutcome:
      'Use Porter’s Five Forces framework to evaluate industry attractiveness',
    screenBG: '#E9EFEF',
    containerBG: '#fff',
    contentPosition: 'right',
    title: 'Porter’s Five Forces',
    bodyContent: [
      {
        type: 'text',
        value:
          'Porter’s Five Forces assesses the competitive intensity of an industry.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Buyer Power',
            aside: 'Influence of customers',
          },
          {
            main: 'Supplier Power',
            aside: 'Influence of suppliers',
          },
          {
            main: 'Threat of Substitutes',
            aside: 'Availability of alternative products',
          },
          {
            main: 'Threat of New Entrants',
            aside: 'Barriers to entry for competitors',
          },
          {
            main: 'Competitive Rivalry',
            aside: 'Intensity of competition among existing firms',
          },
        ],
      },
    ],
  },
  {
    id: 34,
    learningOutcome:
      'Identify ways to achieve and sustain competitive advantage',
    screenBG: '#FCF7F1',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Competitive Advantage',
    bodyContent: [
      {
        type: 'text',
        value:
          'A competitive advantage is what sets an organization apart in the marketplace.',
      },
      {
        type: 'subheading',
        value: 'Sources of Advantage',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Cost Leadership</li>
            <li>Differentiation</li>
            <li>Niche Focus</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 35,
    learningOutcome:
      'Distinguish between corporate-level and business-level strategies',
    screenBG: '#F0FFF5',
    containerBG: '#FFF',
    contentPosition: 'left',
    title: 'Corporate Strategy',
    bodyContent: [
      {
        type: 'text',
        value:
          'Corporate strategy focuses on decisions regarding the overall scope and direction of an organization.',
      },
      {
        type: 'flipCards',
        cards: [
          {
            main: 'Growth Strategy',
            aside: 'Expansion of business operations',
          },
          {
            main: 'Stability Strategy',
            aside: 'Maintaining existing business levels',
          },
        ],
      },
    ],
  },
  {
    id: 36,
    learningOutcome: 'Formulate effective business-level strategies',
    screenBG: '#FFF7E5',
    containerBG: 'transparent',
    contentPosition: 'middle',
    title: 'Business Strategy',
    bodyContent: [
      {
        type: 'text',
        value:
          'Business strategy aligns resources and capabilities to competitive demands in individual markets.',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Cost Leadership: Compete by price</li>
            <li>Differentiation: Unique product features</li>
            <li>Focus Strategy: Specialized market segment</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 37,
    learningOutcome: 'Evaluate strategic alliances and partnerships',
    screenBG: '#E7F7F7',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Strategic Alliances',
    bodyContent: [
      {
        type: 'text',
        value:
          'Strategic alliances are formal relationships between companies to pursue shared goals.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Joint Ventures',
            aside: 'Form a new entity owned by two or more firms',
          },
          {
            main: 'Licensing Agreements',
            aside: 'Granting rights to use intellectual property',
          },
        ],
      },
    ],
  },
  {
    id: 38,
    learningOutcome:
      'Analyze strategies for expansion into international markets',
    screenBG: '#F8FAFC',
    containerBG: '#FFF',
    contentPosition: 'right',
    title: 'International Strategy',
    bodyContent: [
      {
        type: 'text',
        value:
          'International strategies address how companies expand and compete globally.',
      },
      {
        type: 'subheading',
        value: 'Common Approaches',
      },
      {
        type: 'html',
        value: `
          <ul>
            <li>Global Standardization</li>
            <li>Localization</li>
            <li>Transnational Strategy</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 39,
    learningOutcome: 'Describe approaches for innovation-led growth',
    screenBG: '#FAF0F0',
    containerBG: '#ffffff',
    contentPosition: 'middle',
    title: 'Innovation Strategy',
    bodyContent: [
      {
        type: 'text',
        value:
          'Innovation strategies focus on developing new products, processes, or business models.',
      },
      {
        type: 'flipCards',
        cards: [
          {
            main: 'Incremental Innovation',
            aside: 'Small improvements to existing products',
          },
          {
            main: 'Disruptive Innovation',
            aside: 'Creating new markets and value networks',
          },
        ],
      },
    ],
  },
  {
    id: 40,
    learningOutcome: 'Implement and control strategic initiatives effectively',
    screenBG: '#FFF5FA',
    containerBG: '#FFFFFF',
    contentPosition: 'middle',
    title: 'Implementation and Control',
    bodyContent: [
      {
        type: 'text',
        value:
          'Effective strategy execution requires alignment of people, processes, and resources.',
      },
      {
        type: 'accordions',
        items: [
          {
            main: 'Implementation Steps',
            aside: 'Planning, allocating resources, setting timelines',
          },
          {
            main: 'Control Mechanisms',
            aside: 'Performance metrics and feedback loops',
          },
        ],
      },
    ],
  },
];
