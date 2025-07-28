export interface CourseModuleRenderProps {
  icon: string
  id: number
  title: string
  topics: string[]
}

export const COURSE_MODULES: CourseModuleRenderProps[] = [
  {
    id: 1,
    title: 'plan.introduction.title',
    icon: '📘',
    topics: [
      'plan.introduction.whatIsReact',
      'plan.introduction.setupEnvironment',
      'plan.introduction.projectStructure'
    ]
  },
  {
    id: 2,
    title: 'plan.reactFundamentals.title',
    icon: '⚛️',
    topics: [
      'plan.reactFundamentals.jsxAndComponents',
      'plan.reactFundamentals.propsAndState',
      'plan.reactFundamentals.eventsAndForms',
      'plan.reactFundamentals.listsAndKeys',
      'plan.reactFundamentals.useEffect',
      'plan.reactFundamentals.conditionalRendering'
    ]
  },
  {
    id: 3,
    title: 'plan.hooksAndLogic.title',
    icon: '🧠',
    topics: [
      'plan.hooksAndLogic.performanceHooks',
      'plan.hooksAndLogic.useReducer',
      'plan.hooksAndLogic.contextAPI',
      'plan.hooksAndLogic.customHooks'
    ]
  },
  {
    id: 4,
    title: 'plan.reactRouter.title',
    icon: '🧩',
    topics: [
      'plan.reactRouter.installation',
      'plan.reactRouter.routingBasics',
      'plan.reactRouter.dynamicAndNestedRoutes',
      'plan.reactRouter.lazyLoading'
    ]
  },
  {
    id: 5,
    title: 'plan.tsEssentials.title',
    icon: '🧾',
    topics: [
      'plan.tsEssentials.typeBasics',
      'plan.tsEssentials.typeVsInterface',
      'plan.tsEssentials.genericsAndUnions',
      'plan.tsEssentials.typingFunctions',
      'plan.tsEssentials.tsconfig'
    ]
  },
  {
    id: 6,
    title: 'plan.tsInReact.title',
    icon: '🧱',
    topics: [
      'plan.tsInReact.typingComponents',
      'plan.tsInReact.typingHooks',
      'plan.tsInReact.typingApi',
      'plan.tsInReact.utilityTypes',
      'plan.tsInReact.errorTyping'
    ]
  },
  {
    id: 7,
    title: 'plan.workingWithApis.title',
    icon: '🔄',
    topics: [
      'plan.workingWithApis.fetchingData',
      'plan.workingWithApis.errorAndLoading',
      'plan.workingWithApis.reactQuery',
      'plan.workingWithApis.optimisticUpdates'
    ]
  },
  {
    id: 8,
    title: 'plan.formsAndValidation.title',
    icon: '✅',
    topics: [
      'plan.formsAndValidation.reactHookForm',
      'plan.formsAndValidation.typedFields',
      'plan.formsAndValidation.validation'
    ]
  },
  {
    id: 9,
    title: 'plan.architectureAndBestPractices.title',
    icon: '🧩',
    topics: [
      'plan.architectureAndBestPractices.organizingFiles',
      'plan.architectureAndBestPractices.componentResponsibility',
      'plan.architectureAndBestPractices.reusableLogic',
      'plan.architectureAndBestPractices.codeSplitting',
      'plan.architectureAndBestPractices.cleanCode'
    ]
  },
  {
    id: 10,
    title: 'plan.testing.title',
    icon: '🧪',
    topics: [
      'plan.testing.setup',
      'plan.testing.renderingTests',
      'plan.testing.mockingAsync',
      'plan.testing.testingHooks'
    ]
  }
]
