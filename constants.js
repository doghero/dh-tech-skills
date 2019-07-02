// @flow
import * as d3 from 'd3'

export type TrackId = 'ANDROID' | 'IOS' | 'WEB_CLIENT' | 'DEVOPS' | 'BACKEND' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'ANDROID': Milestone,
  'IOS': Milestone,
  'WEB_CLIENT': Milestone,
  'DEVOPS': Milestone,
  'BACKEND': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]
export let handleMilestones = []


export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const categoryWeight = {
 'A': 2,
 'B': 1.5,
 'C': 1,
 'D': 1,
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'ANDROID': Track,
  'IOS': Track,
  'WEB_CLIENT': Track,
  'DEVOPS': Track,
  'BACKEND': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "ANDROID": {
    "displayName": "Building: Android",
    "category": "A",
    "description": "Develops expertise in native Android",
    "milestones": [{
      "summary": "Works effectively within established Android architecture, following current best practices	",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Added existing button to a different Android surface",
        "Added events + properties tracking to analytics service (ex. Kissmetrics)",
        "Fetchs new models from our network layer and displays in a simple Activity with ListView",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Defines and creates new external requests with Android available tools and be able to handle them",
        "Understands the Android Lifecycle, Context and Application tools",
        "Be able to convert any class from Java to Kotlin",
      ],
      "examples": [
        "Migrate OkHttp to Retrofit 2 (asynchronous and synchronous). Usage of Gson lib to parse api results",
        "Added support for rendering a new type of stream item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of android platform constraints",
      "signals": [
        "Implements complex features with a large product surface area including Unit Tests and UI Tests (Espresso/UIAutomator)",
        "Works effectively with Room, Realm and Phoenix frameworks",
        "Adds support for new Android features after a major Android version upgrade",
      ],
      "examples": [
        "Designed Android caching strategy for offline access",
        "Integrated new payment gateway or implemented real time updating features",
        "Implemented Picture in Picture; Notification Channels; XML fonts; Adaptive Icons",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Knows how CI/CD work and can implement a new one from the ground (e.g. Fastlane, Xcode Server, Jenkins, Circle CI, Travis etc).",
      ],
      "examples": [
        "You understand and implement the MVP Architecture and MVVM Architecture",
        "Finds and resolves memory leaks using Android Profiler in Android Studio, providing better performance.",
        "Defined and developed DogHero's continuous delivery and integration strategy",
      ],
    }, {
      "summary": "Is an industry-leading expert in Android engineering or sets strategic mobile direction for an eng team	",
      "signals": [
        "Meaningfully contributes to major open source projects to Android Community",
        "Defines and builds industry-leading performatic solutions including solid and reusable architecture, test cases, to provide high crash free and bug free experiences.",
        "You can easily lead an Android Chapter, bringing smart tech inputs, being admirated as a role model for the team.",
      ],
      "examples": [
        "Implemented Instant run for Android; Created ActionBarSherlock",
        "Be able to migrate existing code to Modularized Architecture into Reusable Views; Be able to Modularize App and prepare its to Instant Apps",
        "You successfully lead the development of a new product from the ground, including setting up a new project, architecture, CI, dependencies, code patterns, performance, etc.",
      ],
    }],
  },

  "IOS": {
    "displayName": "Building: iOS",
    "category": "A",
    "description": "Develops expertise in native iOS",
    "milestones": [{
      "summary": "Works effectively within established iOS architecture, following current best practices",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Added events + properties tracking to analytics service (ex. Kissmetrics)",
        "Fetchs new models from our network layer and displays in a simple UIViewController",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Defines and creates new delegates and data sources using the iOS Protocol Concept",
        "Understands the UIKit Framework",
        "Be able to convert any class from Objective-C to Swift",
      ],
      "examples": [
        "Upgraded AFNetworking to a new Major Version",
        "Added support for rendering a new type of stream item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with  Android reactive programming framework",
        "Adds support for new iOS features after a major iOS version upgrade",
      ],
      "examples": [
        "Designed iOS caching strategy for offline reading",
        "Integrated new payment gateway or implemented real time updating features",
        "Implemented 3D touch and Rich Push notification widgets right after initial release",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Knows how CI/CD work and can implement a new one from the ground (e.g. Fastlane, Xcode Server, Jenkins, Circle CI, Travis etc).",
      ],
      "examples": [
        "You understand and implement the URLSession Architecture",
        "Finds and resolves memory leaks/zombie objects using debugging session memory management in Xcode, providing better performance.",
        "Defined and developed DogHero's continuous delivery and integration strategy",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Meaningfully contributes to major open source projects to iOS Community",
        "Defines and builds industry-leading performatic solutions including solid and reusable architecture, test cases, to provide high crash free and bug free experiences.",
        "You can easily lead an iOS Chapter, bringing smart tech inputs, being admirated as a role model for the team.",
      ],
      "examples": [
        "Implemented Instant run for iOS",
        "Be able to migrate existing code to Modularized Architecture into Reusable DHKits",
        "You successfully lead the development of a new product from the ground, including setting up a new project, architecture, CI, dependencies, code patterns, performance, etc.",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Building: Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Makes business logic changes in existing components",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Implemented nav-sticky using Bootstrap framework",
        "Makes simple external API cals and adequately consumes the result",
        "Properly implements media-queries and css grid system",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture	",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly, without side-effects",
      ],
      "examples": [
        "Built a modular input component, like Address or Payment Method which could be re-used on other places",
        "Manipulates and handles data accross different components using IO. Ex. Adds new credit card and automatically refreshes credit card listing",
        "Implements CSS + SVG animations to deliver high quality experiences to users",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Understands the complexity of development tasks and brings relevant technical insights to the team",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
      ],
      "examples": [
        "Fully implemented a new payment gateway and/or other major new features",
        "Deeply understands and implements Angular's lifecicle",
        "Crafts pixel perfect layout implementations, cross-browser/device. Using best practices in SEO, performance, semantic HTML, markups and ensuring scalability",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Constantly contributes to improve scalability and performance of the project",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Suggests and implements architectural changes that are relevant to the project",
        "Conceptualized and implemented the transition from Scooby to Courage.",
        "Consistently Implements Lazy loading strategies to optimize performance",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Meaningfully contributes to major open source projects",
        "Defined and lead the transition to PWA resulting in major conversion gains on DH's mobile offering",
        "Is a techical reference to the team, evangelizing best practices and elevating quality standards",
      ],
    }],
  },

  "DEVOPS": {
    "displayName": "Building: Devops",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and CI",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
    "Understands containers and VMs","Understands CI/CD concept and its softwares","Understands how to setup servers and clusters. Properly configures APACHE/Nginx",
      ],
      "examples": [
     "Makes changes to Dockerfiles that are simple to mantain and safe","Debugs and properly mantains existing Jenkins process","Implements SSL certification to servers runninng on AWS or GCE",      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
       "Understand networks and firewalls in cloud","Debug errors in running containers and servers","Ensures system reliability",
      ],
      "examples": [
        "Creates firewall rules to specify access in a cloud service","Created and mantained complete staging insfrastructure","Created monitoring and log infrastructure",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems","Designs moderately complex systems","Knows containers orchestration with Kubernetes or Docker Swarm",
      ],
      "examples": [
       "Migrated Scooby/ElasticSearch from AWS to GCE using docker","Solved  persistent reliability challenges with workers","Configured a Kubernetes environment and roubleshoot it",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
       "Designs complex projects that encompass multiple systems and technologies","Demonstrates deep knowledge of foundational systems","Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Defined and developed DogHero's continuous delivery strategy","Optimize spendings in cloud and do not lose performarce with them","Create and execute strategy to migrate big DB and migrate big SQL log data to a NoSQL DB",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Deep knowledge in Linux, network, Kernel, security updates and how to perform them.","Defines the strategic vision for foundational work and supporting technologies","Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Created end to end testing and monitoring structure that effectivelly eliminated downtime / major production bugs ","Devised infrastructure that seamlessly enables DH to test different production versions and automatically collect perfomance data in a scalable and automated way","Create a vulnerabilities map of servers, create a security architecture for them and hardening them.",
      ],
    }],
  },

  "BACKEND": {
    "displayName": "Building: Backend",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Ruby, Elixir or NodeJS",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices	",
      "signals": [
        "Creates CRUD API's",
        "Adds rails endpoints adequately using current architecture",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Implemented the backend structure for the Stories service",
        "Change views of endpoints",
        "Works primarily on tightly scoped, routine problems.",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Creates new API's endpoints that are non-derivetive (i.e no copy paste modify)",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Created new 'addresses' service/API solving significant and recurring bug's",
        "Consistently uses TDD to guarantee code quality",
        "Refactored the list API endpoing to significantly increase product performance",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Mantains and update Elastic Search implementation of Search algo",
        "Implemented payments integration with Mercado Pago and/or Iugu using Financials structure",
        "Built Penutbutter image server",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Migrated Reservations to Boardings structure, erradicating significant technical debt",
        "Planned and implemented complete migration from Quickblox to Ideafix",
        "Created the Financials Structure to properly conciliate payments/revenue",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, selected and implemented a new programing language (Scala, Elixir, Node...) to substitute Rails as the core programming language",
        "Planned and migrated Scooby to a new micro services structure, significantly enhancing performance and scalability of the system",
        "Implemented changes to the adopted framework's core to significantly enhance performance",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Executing: Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Writes effective technical specs outlining approach",
      ],
      "examples": [
        "Adequatelly breaks features into bite sized task's",
        "Delivered changes to the host intake implementing new addresses component",
        "Delivered new host profile page on time and error free",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Effectivelly prioritizes tasks that have the highest impact on the business, focusing on the companys / yout team's KRs",
      ],
      "examples": [
        "Delivered new payment screen on time",
        "Delivered rebranding project on one platform on time and error free",
        "Executed the DW new dispatching service on time",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Effectivelly coordinated and launched On Demand DogWalking",
        "Effectivelly led and delivered the boardings refactoring",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw the development of the new chat system, leading kickoff, interim meetings and communicating statuses all the way to the launch",
        "Coordinated the entire internationalization process of the DogHero platform",
        "Involved marketing, cx, ops and appropriate functions at project start",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to microservices infrastructure",
        "Acted as the manager in a major new product launch (ex. DogWalking) ensuring all involved teams hit their milestones",
        "Delivered multi-month engineering project on time and on budget",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Executing: Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively","Collaborates with others with empathy","Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Updates other teams (ops,mkt and tech) prior to making changes that influences their scopes","Updates project status changes in Trello promptly","Participates in Daily's in a efficient manner. Is constantly punctual",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Is crisp and direct on the way you provide feedback. Does not promote side conversation throught the corridors","Ensures stakeholders are aware of current blockers","Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively. Promotes effective 1:1","Activelly updates stake holders on project statuses","Proactively identifies and solves communication difficulties that arise in which you are directly involved",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others","Anticipates and shares schedule deviations in plenty of time","Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during outages","Gave a substantial Eng All Hands presentation on PWA","Constantly monitors and communicates the mais metrics in which the team is involved, leading the team to address the challenges effectively",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance","Contextualizes and clarifies ambiguous direction and strategy for others","Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Lead retreat workshop on interviewing / feedback","Identified best in class carrer growth management benchmarks and drove implementation throughout the engineering org","Consistently leads high quality all hands meetings",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team","Shares the right amount of information with the right people, at the right time","Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Delivered best in class presentations to potential investors on the state of enginnering @ DogHero","Created the communication plan for a large organizational change","Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Executing: Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped","Writes tests for every new feature and bug fix","Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug on Staging before it went live","Consistently delivers code that has been throughly tested and is production ready","Wrote hermetic tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable and efficiente","Adds tests for uncovered areas","Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Reduced Android app bundle size from 40MB to 20MB","Significantly reduced the number of errors in sentry and fabric","Removed Quickblox dependencies and its sync workers",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing","Gives thoughtful code reviews as a domain expert","Adds tooling to improve code quality",
      ],
      "examples": [
        "Rebuilt the staging environment, enabling proper testing","Guides other less experienced developers to implement best practices","Created tool/process that validates visual consistency from design to production",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error","Focuses the team on quality with regular reminders","Coordinates On Call team  priorities and projects",
      ],
      "examples": [
        "Implemented automated integration tests using calabash to our CI/CD pipeline","Rebuilt the reservations architecture transitioning to boarding negotiations, transfers and subscriptions","Proactivelly identified the need for oncall teams in major holidays and coordinated team members",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work","Identifies and eliminates single points of failure throughout the organization","Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for Fix-It week with exec team","Instituted and ensured success of a 20% time policy","Started and guaranteed success of a On Call team routine",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Executing: Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Collects, shares and incorporates user feedback into the product planning","Raises meaningful tensions in tactical meetings","Asks leadership team probing questions at all hands",
      ],
      "examples": [
        "Shadowed several DogWalkers to have a deep understand of the user needs","Identified shortcomings on the way a Squad operates and proposed valid improvements","Activelly participates on all hands meetings",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere","Makes design quality improvements unprompted","Is constantly available and responsive on #escalations",
      ],
      "examples": [
        "Identified, contacted and recommended a new payment gateway provider","Implemented Host Engagement e-mail ruler on spare time","Audited web client performance in Chrome and implemented fixes that improved load time",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
       "Demonstrates concepts proactively with prototypes","Fixes complicated bugs outside of regular domain","Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Implemented Slinky style guide to resolve style arguments and gain productivity","Identified and fixed the accepted bug","Proactivelly understood the Elastic Search algorithm and become the go to person when the team needs it",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies and practices to solve new classes of problem","Exemplifies grit and determination in the face of persistent obstacles","Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Implemente new hiring process, that raised candidate quality and satisfaction","Lead the resolution of a major crisis such as addressing Quickblox outages","Identified the problem, proposed and led the cure of the dehydration of Quickblox and/or Reservations enabling its phaseout",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues","Galvanizes the entire company and garners buy in for a new strategy","Changes complex organizational processes",
      ],
      "examples": [
	    "Identified and advocated the need for promotion of other team members to tech lead positions","Proposed and drove the changes to successfully implement the OKR/Squad model","Convinced leadership and engineering org to move to a different technical paradigm",      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Supporting: Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Implemented Slinky style guide to resolve style arguments and gain productivity","Identified and fixed the accepted bug","Proactivelly understood the Elastic Search algorithm and become the go to person when the team needs it",
      ],
      "examples": [
 "Collected and delivered feedback","Discussed career options and areas of interest informally","Acted as the main point of contact for a summer intern",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team","Offers effective career advice to group members, without being prescriptive","Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s ","Provided coaching on how to have difficult conversations","Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth","Advocates to align people with appropriate roles within organization","Works with managers to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression monthly","Suggested meaningfull changes for the squad structure that enabled professionals to thrive","Provides deeply honest and actionable performance reviews / feedbacks",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs","Develops best practices for conflict resolution","Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Acts as a facilitator and leader in cross team interactions","Built a resourcing plan based on company, team, and individual goals","Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders","Identified leadership training opportunities for senior leadership","Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to team leads","Devised leadership training curriculum for group leads","Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Supporting: Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
       "Reflects on meetings that leave them inspired or frustrated","Teaches others about existing processes","Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
       "Facilitated effective tactical meeting with empathy","Explained tactical meeting format to a new hire","Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs","Engages in organizational systems thinking","Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Became the facilitator and guardian of productive team standup meetings","Cread on-call engineer rotation routine","Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes and programs to solve ongoing organizational problems",
      "signals": [
       "Creates programs that meaningfully improve organizational diversity","Solves long-standing organizational problems","Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed work process within team that lead it to significantly better and consisten performance ","Championed the creation of managerial layer of LSE / Tech leads to address ongoing challenges ","Defined creation of new Squad to address significant organizational challenges",
     ],

    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution","Analyzes existing processes for bias and shortfall","Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Created carrer tracks for technical and people management roles","Crafted effective organizational design to tackle the challenges with international expansion/support","Analyzed the performance review rubric for meaningful discrepancies",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills","Creates new structures that provide unique growth opportunities","Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to recruit and train engineers over several periods, shaping the culture of the org","Directed resources to meaningfully improve diversity at all levels","Built the growth framework rubric",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Supporting: Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
      "Keeps a positive can do atitude that motivate others to go the extra mile","Applies the reasonable person principle to others (https://gosmallbiz.com/the-reasonable-person-principle/)","Avoids blame and focuses on positive change",
      ],
      "examples": [
       "Ensured group members were taking enough vacation avoinding burnout","Put themself in another's shoes to understand their perspective","Checked in with colleague showing signs of burnout ",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion","Validates ongoing work and sustains motivation","Proposes solutions when teams get bogged down or lose momentum",
      ],
       "examples": [
        "Coordinated a small celebration for a project launch","Connected tedious but necessary work the overall company goals","Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response, avoiding conflict escalation","Maintains a pulse on individual and team morale","Helps group members approach problems with curiosity",
      ],
      "examples": [
        "During crisis period effectivelly led the team with calm, focus and grit","During a time of high turnover, proactivelly worked with peers to ensure they were happy prevent attrition","Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively","Grounds group member anxieties in reality","Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context","Encouraged group members to focus on what they can control","Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out harmful narratives when appropriate","Works to reshape narratives from victimization to ownership","Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver","Challenged false narrative and redirected to compassion and empathy","Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Supporting: Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
       "Notices when someone is stuck and reaches out","Helps others break down problems into feasible, tangible next steps","Talks through problems non-judgmentally",
      ],
      "examples": [
        "Diagnoses problems and discuss them openly and mindfully","Unblocked a group member","Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
       "Gathers context outside the immediate problem","Recognizes issues within local environment and suggests change","Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Proposes effective decision making frameworks to advance the team","Convinced a group member to solve a problem directly, rather than doing it for them","Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement","Investigates motivation and externalities for consistent poor performance","Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures","Arranged a transfer to another team, resulting in improved performance","Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions","Inserts themself into conflict where appropriate to calm and mediate","Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty","Protected team from externalities so they could focus on goals","Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos","Repairs broken team dynamics and builds harmony","Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team","De-escalated serious tensions between teams","Rebuilt trust between team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Strengthening: Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice","Acts as sounding board for peers and more junior members","Provides sound advice when asked",
      ],
      "examples": [
       "Acted as an onboarding godfather","Paired with an engineer to help them with an unfamiliar area","Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices","Asks questions to illuminate concepts, rather than stating them","Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth","Offered unprompted feedback to help growth, with empathy","Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to DogHero's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others","Consistently works to increase the bus factor of systems","Created processes that ramp up new team members faster",
      ],
      "examples": [
        "Gave a DHTalks presentation on Bootstrap","Promoted Whatsapp integration All Hands meeting","Created a SCRUM/Design Sprint workshop that became part of the onboarding of new team members",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline","Draws positive attention to well-modeled mentor and teaching behaviours","Creates technical DHTalks series and lines up speakers",
      ],
      "examples": [
        "Created and led a Machine Learning study group ","Organized an Eng All Hands with an outside speaker","Created a technical mentorship program",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship","Empowers team members to develop themselves","Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Identified key competencies that the team did not master and created a training curriculum","Mentored mentors","Started a eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Strengthening: Evangelism",
    "category": "D",
    "description": "Promotes DogHero to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents DogHero well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network","Attends DogHero-hosted events and talks with guests","Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Wrote a product launch post on Medium / Linkedin","Acted as a guide for a non-friend visitor to the office","Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to DogHero","Joined public Slack group and represented DogHero appropriately, and well","Organizes positive small- or medium-sized events that spreads the Doghero engineering culture",
      ],
      "examples": [
        "Organizes dev talks that position DH as a great place to work","Organized participation in ITA's and POLI's career fair","Presented at a BrNewTech, Guru or StartupFarm",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of DogHero",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization","Builds fruitful partnerships with external organizations and universities","Writes blog posts about DogHero that receive moderate traffic",
      ],
      "examples": [
        "Represented DogHero on a panel at a conference such as Ecommerce Br","Built a durable, long-standing org relationship with top universities such as ITA, USP and INSPER","Built a durable, long-standing org relationship with Mastertech or Caelum",
      ],
    }, {
      "summary": "Establishes DogHero as an great, innovative company and workplace to the whole industry	",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent","Publishes material about DogHero's organizational or technical innovations","Leverages significant following to evangelise DogHero and its engineering culture",
      ],
      "examples": [
        "Published a paper on DogHero's technology in a peer-reviewed journal","Authored joint-press release with other major startups on the value of working on a high growth startup","Became a reference on Stack Overflow for best in class engineering practices",
      ],
    }, {
      "summary": "Introduces DogHero in a positive light to a wider audience outside the industry",
      "signals": [
      "Delivers key messages to broad, mainstream audiences","Influences people with large audiences to talk about DogHero positively","Drives recognition and adoption of DogHero in significant numbers",      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech","Keynoted a conference with widespread attention","Represented DogHero in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Strengthening: Recruiting",
    "category": "D",
    "description": "Strengthens DogHero's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at DogHero	",
      "signals": [
      "Reviews existing network for hiring leads regularly","Crafts great job descriptions to attract new talent to the organization","Writes clear and objective job descriptions for hiring",
      ],
      "examples": [
       "Meaningfully Participates in the interview process","Evaluates candidates performance in technical testing","Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Consistently interviews candidates and provides clear, objective feedback on candidates","Interviews candidates with empathy and treats them all with equal respect","Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating","Started a monthly mentoring session for candidates to meet DogHero's employees","Organized participation in ITA's and POLI's career fair",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy","Models great interview technique and feedback when shadowed","Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview tests which enabled DH to select top notch candidates","Brought candidates into our pipeline proactively, with a high conversion rate","Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Identifies key hiring criterias for each of the positions","Makes hiring decisions, resolving discrepancies between conflicting reports","Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Created a well rounded hiring rubric to evaluate candidates","Constructs a comprehensive picture of the candidates by using several different techniques to evaluate candidates, correctly identifying positive and negative aspects.","Developed GirlsInTech relationship significantly reshaping the candidate base",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team","Identifies and brings in promising acquisitions","Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
"Gathers benchmark, studies different interview/selection processes and crafts DogHero's process","Talked with a senior candidate over many months to fill a critical role","Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Strengthening: Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
       "Participates in team activities and offsites","Treats colleagues and clients with respect","Joins groups or committees outside regular duties",
      ],
      "examples": [
      "Joined and actively participated in DH's hackathon","Interacts with customers sheding a positive light on the DH team","Participated in DW activation visit to Nubank",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate","Collaborates with other engineers outside direct responsibilities","Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Constantly asks for and incorporates opinions of other team members","Brought shy and introverted people into a dominant conversation","Became the point of reference for summer interns, leading them to feel welcomed and valued",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
      "Consistently helps other teams that need technical support","Pitches in to help other teams hit deadlines, without missing own deadlines","Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Is constantly helpful on the #escalations channel","Implemented new payment gateway in MX, eventhough working on a Brazil focus squad, so that other teams could meet their goals","Stayed positive and improved team morale during period after former CTO layoff",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on #escalations, serving the team without complaint","Implements concrete programs to signficantly improve team inclusivity","Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities","Implemented a series of workshops in the Squad to make sure new voices were consistenly heard","While a bug fix was not possible, consistently took the lead in charging invoices that failed due to wrong Zip codes",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness","Holds individuals, teams, and leadership accountable to DogHero's values","Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Proposed and organized cross team offsite integration events that contributed to improved inter team relationship","Devised, delivered and acted on findings from a employee climate survey","Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())



export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0

    if (categoryId == 'A'){
      pointsByCategory.set(categoryId, currentPoints + (milestoneToPoints(milestone)) * 1)
    } else if(categoryId == 'B'){
      pointsByCategory.set(categoryId, currentPoints + (milestoneToPoints(milestone)) * 0.75)
    } else{
      pointsByCategory.set(categoryId, currentPoints + (milestoneToPoints(milestone)) * 0.5)
    }
  })
  
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}


export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number => {
  let weight = 0
  let total = 0

  trackIds.forEach((trackId) => {
    const categoryId = tracks[trackId].category
    console.log('categoryId :', categoryId);
    if (categoryId == 'A'){
      weight = 1
    } else if(categoryId == 'B'){
      weight = 0.75
    } else{
      weight = 0.5
    }
    total = total + milestoneToPoints(milestoneMap[trackId]) * weight
  })
  return Math.round(total)
}

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#EF3A5D', '#66CAD8', '#7C499D', '#008177'])

export const titles = [
  {label: 'Esta é uma auto-avaliação', minPoints: 0, maxPoints: 16},
  {label: 'Par de squad/time', minPoints: 0, maxPoints: 16},
  {label: 'Líder de squad/time que sou integrante', minPoints: 0, maxPoints: 16},
  {label: 'Meu gestor direto', minPoints: 0, maxPoints: 16},
  {label: 'Integrante do squad/time que eu lidero', minPoints: 0, maxPoints: 16},
  {label: 'Integrante de outro squad/time', minPoints: 0, maxPoints: 16},
  {label: 'Reporta pra mim', minPoints: 0, maxPoints: 16}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

	return titles.map(title => title.label);
}
