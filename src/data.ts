export const experience = [
  {
    role: 'DevOps Consultant', company: 'Orgate Limited', location: 'Auckland, New Zealand', period: 'Aug 2025 — Present', kind: 'Part-time',
    intro: 'Supporting cloud infrastructure, application delivery, and operational reliability across a collaborative engineering team.',
    points: [
      'Develop and maintain Terraform infrastructure-as-code and Bash scripts to streamline deployment workflows.',
      'Manage AWS environments across EC2, RDS, VPC, and IAM, supporting performance, scalability, and reliability.',
      'Implement monitoring and alerting to help teams identify and resolve system issues sooner.',
      'Work with developers and cross-functional partners on deployments, debugging, integration, and continuous improvement.',
    ], tools: ['AWS', 'Terraform', 'Bash', 'Zabbix', 'Linux', 'Agile'],
  },
  {
    role: 'DevOps Engineer', company: 'Proxmed Pty Ltd', location: 'Melbourne, Australia · Remote', period: 'Sep 2024 — Jul 2025', kind: 'Full-time',
    intro: 'Automated cloud infrastructure and delivery pipelines for cloud-based applications.',
    points: [
      'Built Python, Bash, and Terraform automation to deploy and manage 25+ cloud servers.',
      'Designed and optimised CI/CD pipelines, improving deployment efficiency by 50%.',
      'Reduced infrastructure costs by 20% through performance analysis and optimisation.',
      'Managed Docker environments and resolved system, deployment, and runtime issues across cloud applications.',
    ], tools: ['AWS', 'Terraform', 'Python', 'Bash', 'Docker', 'CI/CD'],
  },
];

export const projects = [
  {
    number: '01', category: 'Infrastructure automation', title: 'Non-production cloud scheduler',
    description: 'An automated schedule for non-production EC2, RDS, and DocumentDB resources, using Lambda and EventBridge to switch services on and off.',
    result: '≈ US$400 saved per month', technologies: ['AWS Lambda', 'EventBridge', 'EC2', 'RDS', 'DocumentDB'],
  },
  {
    number: '02', category: 'Infrastructure as code', title: 'Production migration to Terraform',
    description: 'Migrated production AWS infrastructure from AWS CDK to Terraform in one week, with AI-assisted conversion, validation, and troubleshooting.',
    result: 'Delivered in one week', technologies: ['AWS', 'AWS CDK', 'Terraform', 'Claude Sonnet'],
  },
  {
    number: '03', category: 'Web application & delivery', title: 'Expert Finance',
    description: 'A responsive mortgage web app with an interactive repayment calculator and repeatable AWS EC2 provisioning and application deployment.',
    result: 'Automated AWS deployment', technologies: ['React', 'Next.js', 'AWS EC2', 'Terraform', 'CI/CD'],
  },
  {
    number: '04', category: 'Monitoring & automation', title: 'Zabbix monitoring system',
    description: 'Centralised system monitoring with automated agent rollout and alerting designed to improve operational visibility and incident response.',
    result: 'Automated agent deployment', technologies: ['Zabbix', 'Bash', 'Linux', 'Monitoring'],
  },
  {
    number: '05', category: 'Identity & access', title: 'Guacamole remote access with SSO',
    description: 'A remote access setup integrating OpenID Connect authentication, supporting services, and automated deployment and configuration.',
    result: 'OIDC authentication', technologies: ['OIDC', 'Apache', 'Tomcat', 'MySQL'],
  },
];

export const skillGroups = [
  { label: 'Cloud', items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'RDS', 'EventBridge', 'Lambda', 'DocumentDB'] },
  { label: 'Infrastructure & delivery', items: ['Terraform', 'Docker', 'GitHub Actions', 'Bitbucket Pipelines', 'CI/CD'] },
  { label: 'Languages & systems', items: ['Python', 'Bash', 'SQL', 'Linux (Ubuntu)', 'Git'] },
  { label: 'Operations', items: ['Zabbix', 'Monitoring & alerting', 'Debugging', 'Unit testing', 'Distributed systems'] },
  { label: 'Ways of working', items: ['Agile', 'Jira', 'Cross-functional collaboration', 'AI-assisted development'] },
];

export const education = [
  { qualification: 'Master of Computer and Information Sciences', institution: 'Auckland University of Technology', year: 'Expected 2026', detail: 'Current CGPA 7.25 / 9.0 · A−', current: true },
  { qualification: 'Bachelor of Technology in Information Technology', institution: 'Manipal University Jaipur', year: '2024', detail: 'CGPA 8.06 / 10.0 · A−', current: false },
];
