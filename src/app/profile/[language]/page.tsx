import IconBlog from '@/components/icon/Blog'
import IconGithub from '@/components/icon/Github'
import IconLinkedin from '@/components/icon/LinkedIn'
import IconNpm from '@/components/icon/Npm'
import IconVSCode from '@/components/icon/VSCode'
import ChatbotButton from '@/components/profile/ChatbotButton'
import ChatbotSection from '@/components/profile/ChatbotSection'
import JavaProjectsAccordion from '@/components/profile/JavaProjectsAccordion'

export async function generateStaticParams() {
  return [{ language: 'ko' }, { language: 'ja' }]
}

export default function ProfilePage({
  params,
}: {
  params: { language: 'ko' | 'ja' }
}) {
  const language = params.language

  const TECH_STACK = {
    // 프론트엔드
    NEXTJS: 'Next.js',
    TYPESCRIPT: 'TypeScript',
    REACT: 'React',
    JAVASCRIPT: 'JavaScript',
    VUE: 'Vue.js',
    SCSS: 'SCSS',
    TAILWIND: 'Tailwind CSS',
    STYLED_COMPONENTS: 'Styled Components',
    WEB_COMPONENTS: 'Web Components',
    LIT: 'Lit',
    JQUERY: 'jQuery',

    // 백엔드
    JAVA: 'Java',
    NODEJS: 'Node.js',
    EXPRESS: 'Express',
    SPRING_BOOT: 'Spring Boot',
    MYBATIS: 'MyBatis',

    // 데이터베이스
    MONGODB: 'MongoDB',
    MYSQL: 'MySQL',
    ORACLE: 'Oracle',
    POSTGRESQL: 'PostgreSQL',
    SUPABASE: 'Supabase',

    // 기타
    DOCKER: 'Docker',
    AWS: 'AWS',
    FIREBASE: 'Firebase',
    C_SHARP: 'C#',
    STORYBOOK: 'Storybook',
    PLAYWRIGHT: 'Playwright',
    JEST: 'Jest',
    CYPRESS: 'Cypress',
    POSTMAN: 'Postman',
    PIXI: 'Pixi.js',
    LANGCHAIN: 'LangChain',
    VITE: 'Vite',
    GEMINI: 'Google Gemini API',
    LINESDK: 'LINE Messaging API SDK',
    CSV_PARSER: 'csv-parse',
    POSTCSS: 'PostCSS',
    VSCODE_EXTENSION_API: 'VSCode Extension API',
    VERCEL: 'Vercel',
    GAS: 'Google Apps Script',
  }

  return (
    <div className="relative mx-auto w-full max-w-[750px] px-5 sm:px-6">
      <div className="py-8">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            {language === 'ko'
              ? '안녕하세요, 이호연입니다.'
              : 'こんにちは、李虎演(イホヨン)です。'}
          </h1>
          <p className="mt-4 text-base text-muted-foreground whitespace-pre-wrap">
            {language === 'ko'
              ? `코드 한 줄이 화면의 요소가 되고 작은 컴포넌트들이 모여 하나의 완성된 인터페이스로 쌓아져 가는 과정에서 가장 큰 즐거움을 느낍니다.\n\n사용자에게 작은 미소를 선사하는 창의적인 디테일과 인터랙션을 탐구하는 과정을 즐깁니다.\n새로운 기술을 탐구하고 꾸준함과 책임감을 통해 사용자와 동료 모두에게 신뢰를 주는 안정적인 결과물을 만들어내는 것을 목표로 합니다.\n\n그 과정을 공유하며 다시 새로운 것을 배울 동력을 얻는 선순환을 계속 만들어가고 싶습니다.\n\n이 블로그는 저의 기술적인 놀이터이기도 합니다. 비즈니스 목표를 떠나 웹 기술로 구현할 수 있는 재미있는 상상들을 마음껏 실험하는 공간으로 꾸려나가고 싶습니다.`
              : '一行のコードが画面の要素となり、小さなコンポーネントが集まって一つの完成されたインターフェースに積み上がっていく過程に、最も大きな楽しさを感じます。\n\nユーザーに小さな微笑みをもたらす、創造的なディテールとインタラクションを探求するプロセスを楽しみます。\n新しい技術を探求し、着実さと責任感を持って、ユーザーとチームの双方から信頼される安定した成果物を生み出すことを目標としています。\n\nその過程を共有し、再び新しいことを学ぶ原動力を得るという好循環を、これからも作り続けていきたいです。\n\nこのブログは、私の技術的な遊び場でもあります。ビジネスの目標を離れ、ウェブ技術で実現できる楽しい想像を存分に実験する空間として、育てていきたいです。'}
          </p>
        </div>

        {/* 연락처 섹션 */}
        <div className="mb-8">
          {/* 위치 정보 */}
          <div className="mb-4 flex items-center gap-2 text-muted-foreground">
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
            </svg>
            <span>{language === 'ko' ? '일본, 도쿄' : '日本、東京'}</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/ho1112"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chomin transition-colors"
            >
              <IconGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lee-hoyeon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chomin transition-colors"
            >
              <IconLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:carrien1112@gmail.com"
              className="hover:text-chomin transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 챗봇 섹션 */}
        <ChatbotSection language={language} />

        {/* 프로필 콘텐츠 섹션들 - 하이브리드 스타일 */}
        <div className="space-y-8">
          {/* 경력 섹션 - 카드 스타일 + 타임라인 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Work Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-chomin pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-chomin rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? '프론트엔드 엔지니어 - 프리랜서'
                    : 'フロントエンドエンジニア - フリーランス'}
                </h3>
                {/* leverages */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '인재스카우트 업계 • 2024.03 - 현재'
                    : '人材スカウト業界 • 2024.03 - 現在'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '신졸용 인재 스카우트 시스템의 toB, toC시스템 개발',
                        '학생관리, 검색, 유저 리스트, 오퍼, 이벤트 기능 추가',
                        '컴포넌트 구조 재설계, 리팩토링',
                        '기업 리브랜딩 대응',
                        '생산성 향상(storybook, playwirght, pre-commit hooks)',
                        'Sentry 에러 모니터링 및 버그 수정',
                      ]
                    : [
                        '新卒向けの人材スカウトシステムのtoB・toCシステム開発',
                        '学生管理、検索、ユーザーリスト、オファー、イベント機能追加',
                        'コンポーネント構造の再設計、リファクタリング',
                        '企業リブランディング対応',
                        '生産性向上(storybook, playwirght, pre-commit hooks)',
                        'Sentryエラーモニタリングとバグ修正',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* ピッコマ */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '웹툰・웹소설업계 • 2023.09 - 2024.02'
                    : 'webマンガ・ノベル業界 • 2023.09 - 2024.02'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '웹소설 응모 페이지 마이그레이션(vue -> react)',
                        'Next.js, Tailwind CSS 도입으로 성능 개선',
                        '신규 캠페인 페이지 작성 scroll, observer event 디자인 적용',
                        '응모폼, 서버 전송 API 연결',
                      ]
                    : [
                        'ノベルズ応募ページのマイグレーション(vue -> react)',
                        'Next.js, Tailwind CSSを導入してパフォーマンス改善',
                        '新規キャンペーンページ、scroll, observer eventデザイン適用',
                        '応募フォーム、サーバー送信API繋ぎ込み',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* skyticket */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '여행・호텔업계 • 2021.05 - 2023.07'
                    : '旅行・ホテル業界 • 2021.05 - 2023.07'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'MAU700만의 자사 서비스',
                        '호텔·투어·항공권 예약 시스템 및 캠페인 페이지 개발',
                        '다중 기술 스택 환경에서 Web Components를 활용한 통합 네비게이션 개발',
                        'SEO 최적화 및 Core Web Vitals 개선 작업',
                        '외부 API 연동 및 데이터 분석 시스템 구축',
                      ]
                    : [
                        'MAU700万の自社サービス',
                        'ホテル・ツアー・航空券予約システム及びキャンペーンページ開発',
                        '複数技術スタック環境でWeb Componentsを活用した統合ナビゲーション開発',
                        'SEO最適化及びCore Web Vitals改善作業',
                        '外部API連携及びデータ分析システム構築',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* webGame */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? 'Web게임업계 • 2020.12 - 2021.04'
                    : 'Webゲーム業界 • 2020.20 - 2021.04'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? ['레거시 시스템 최신화 및 리팩토링', '리뉴얼 작업']
                    : [
                        'レガシーシステムの最新化とリファクタリング',
                        'リニューアル作業',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* フリーランス - Java */}
              <div className="border-l-4 border-gray-300 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? 'Java 풀스택 엔지니어 - 프리랜서'
                    : 'Java フルスタックエンジニア - フリーランス'}
                </h3>
                {/* 東証 */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '증권업계• 2020.01 - 2020.11'
                    : '証券業界• 2020.01 - 2020.11'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'toC용 주식 투자 정보 검색 시스템 신규 개발',
                        '기술 스택 설계 및 환경 구축',
                      ]
                    : [
                        'toC向けの株式投資情報配信システムを新規開発',
                        '技術スタック設計',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* konami */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '물류업계• 2019.08 - 2019.12'
                    : '物流業界• 2019.08 - 2019.12'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '소비세 증세에 대응하여 기반 시스템 수정',
                        '재고 관리, 집계 시스템 개발',
                      ]
                    : [
                        '消費税増税に対応して基盤システム修正',
                        '在庫管理, 集計システム開発',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* 正社員 */}
              <div className="border-l-4 border-gray-300 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? 'Java 풀스택 엔지니어'
                    : 'Java フルスタックエンジニア'}
                </h3>
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '株式会社GROP SC 시스템솔루션부 • 2018.04 - 2019.06'
                    : '株式会社GROP SC システムソリューション部 • 2018.04 - 2019.06'}
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'Java 기반의 웹 서비스, 네이티브 프로그램 개발 및 유지보수',
                        'Spring Boot를 활용한 백엔드 API 개발',
                        '데이터베이스 설계 및 최적화',
                      ]
                    : [
                        'JavaベースのWebサービス, ネイティブプログラム開発とメンテナンス',
                        'Spring Bootを活用したバックエンドAPI開発',
                        'データベース設計と最適化',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 기술 스택 섹션 - 카드 스타일 + 태그 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Tech Stack
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  {language === 'ko' ? '프론트엔드' : 'フロントエンド'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.REACT,
                    TECH_STACK.NEXTJS,
                    TECH_STACK.JAVASCRIPT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    TECH_STACK.STYLED_COMPONENTS,
                    TECH_STACK.SCSS,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-chomin/10 text-chomin px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  {language === 'ko' ? '테스팅' : 'テスト'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.PLAYWRIGHT,
                    TECH_STACK.CYPRESS,
                    TECH_STACK.STORYBOOK,
                    TECH_STACK.JEST,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  {language === 'ko' ? '개발 도구' : '開発ツール'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', TECH_STACK.DOCKER, 'Figma'].map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Professional Projects 섹션 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Professional Projects
            </h2>
            <div className="space-y-6">
              {/* 인재소개 leverages */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '인재스카우트' : '人材スカウト'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko' ? '2024.03 - 현재' : '2023.03 - 現在'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '기업용 대시보드에서 과거 6개월간의 오퍼 수나 이벤트 참가 수 등의 주요 지표를 집계하여 전월 대비 증감률과 함께 수치와 그래프로 시각화하는 기능을 개발',
                        '검색 조건 저장, 유저 숨기기, 한정 이벤트 기능 추가',
                        '기업 리브랜딩에 대응해 테마 컬러 변경 작업, 가이드라인 컬러 통합 관리',
                        'storybook 도입으로 컴포넌트 문서화, 디자이너 연계 강화',
                        'pre-commit hooks 도입으로 ESLint 자동 실행(import sort & unused)',
                        'E2E 테스트 도입(playwright)으로 테스트 자동화, 기존 15분짜리 수동 테스트를 2분으로 단축',
                        'Sentry 에러 모니터링 및 수정, 주간 에러 건수를 94% 절감(1,065건 -> 60건)',
                        'Node, Next.js 버전 업그레이드 대응',
                      ]
                    : [
                        '企業向けダッシュボードにおいて、過去6ヶ月間のオファー数やイベント参加数などの主要指標を集計し、前月比の増減率と共に数値とグラフで可視化する機能を開発',
                        '検索条件保存、ユーザー非表示、限定イベント機能追加',
                        '企業リブランディング対応に伴い、テーマカラー変更作業、ガイドラインカラー統合管理',
                        'storybook導入でコンポーネントドキュメント化、デザイナー連携強化',
                        'pre-commit hooks導入でESLint自動実行(import sort & unused)',
                        'E2Eテスト導入(playwright)でテスト自動化、従来15分の手動テストを2分に短縮',
                        'Sentryエラー監視と修正、週次エラー件数を94%削減(1,065件 -> 60件)',
                        'Node, Next.jsバージョンアップデート対応',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.SCSS,
                    TECH_STACK.DOCKER,
                    TECH_STACK.STORYBOOK,
                    TECH_STACK.PLAYWRIGHT,
                    TECH_STACK.POSTGRESQL,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ピッコマ */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-green-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? '웹툰・웹소설 플랫폼'
                    : 'webマンガ・ノベルプラットフォーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2023.09 - 2024.02'
                    : '2023.09 - 2024.02'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '전년도(2023) 노벨 응모 페이지 Next.js로 마이그레이션',
                        '2024년 노벨 응모 페이지 신규 작성',
                        'scroll, observer event로 스크롤에 의한 동적 디자인 적용',
                        '시즌별 디자인 작성',
                        '반응형 디자인으로 모바일 사용자 경험 개선',
                        '응모 API 연동',
                        '일본, 한국 팀 커뮤니케이션 브리지 역할 및 기술 연동 지원',
                      ]
                    : [
                        '2023年のノベル応募ページをNext.jsへマイグレーション',
                        '2024年のノベル応募ページを新規作成',
                        'scroll, observer eventでスクロールによる動的デザイン適用',
                        'シーズン別デザイン作成',
                        'レスポンシブデザインでモバイルユーザー体験改善',
                        '応募API連携',
                        '日韓チーム間のコミュニケーションブリッジ役と技術連携支援',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    TECH_STACK.SCSS,
                    TECH_STACK.VUE,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* skyticket */}
              <div
                className="bg-muted/30 rounded-lg p-5 border-l-4 border-purple-500"
                id="skyticket"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? '호텔・투어 플랫폼'
                    : 'ホテル・ツアープラットフォーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2021.05 - 2023.07'
                    : '2021.05 - 2023.07'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'PHP(항공), Vue(렌터카), React(호텔) 등 서로 다른 기술 스택으로 구성된 서비스들의 사용자 경험을 통일하기 위해, Web Components를 사용하여 사이트 전체의 글로벌 내비게이션 시스템을 설계 및 개발',
                        'E2E 테스트 도입(Cypress)',
                        '호텔, 료칸의 성인 어린이 인원 별 검색, 단체 예약을 위한 다중 객실 검색 기능 추가',
                        '해외 호텔 검색 메인 페이지 작성 및 콘텐츠 추가',
                        'Core Web Vitals 개선 - FCP, LCP, CLS 개선 이미지 최적화로 UX 개선',
                        'SEO 최적화를 위한 BreadCrumb 링크, 메타데이터 설정 및 canonical tag를 활용한 URL 정규화 구현',
                        'SEO전용 호텔, 온천 목록 페이지 자동 생성',
                        'SSR, SSG(ISR) 페이지 작성',
                        '외부 리뷰 시스템(yotpo) 연동',
                        '외부 API 연동으로 호텔 애널리틱스 데이터 수집 및 SEO 최적화 FAQ 페이지 구축',
                        'Google Tag Manager와 dataLayer 구축으로 웹 분석 시스템 구축',
                        'Google BigQuery에서 데이터를 추출하여 프론트엔드에서 가공 및 표시하는 시스템 구축',
                      ]
                    : [
                        'PHP(航空)、Vue(レンタカー)、React(ホテル)など、それぞれ異なる技術スタックで構成されたサービスたちのユーザー体験を統一するため、Web Componentsを使用してサイト全体のグローバルナビゲーションシステムを設計・開発',
                        'E2Eテスト導入(Cypress)',
                        'ホテル、旅館の大人・子供別検索、団体予約用の複数部屋検索機能追加',
                        '海外ホテル検索メインページ作成とコンテンツ追加',
                        'Core Web Vitals改善 - FCP, LCP, CLS改善、イメージ最適化でUX向上',
                        'SEO最適化のためのBreadCrumbリンク、メタデータ設定とcanonical tagを利用したURL正規化実装',
                        'SEO専用のホテル、温泉一覧ページ大量生成',
                        'SSR, SSG(ISR)ページ作成',
                        '外部レビューシステム(yotpo)連携',
                        '外部API連携によるホテルアメニティデータ収集とSEO最適化FAQページ構築',
                        'Google Tag ManagerとdataLayer構築によるWeb分析システム実装',
                        'Google BigQueryからデータを抽出し、フロントエンドで加工・表示するシステム構築',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.STYLED_COMPONENTS,
                    TECH_STACK.EXPRESS,
                    TECH_STACK.WEB_COMPONENTS,
                    TECH_STACK.LIT,
                    TECH_STACK.STORYBOOK,
                    TECH_STACK.CYPRESS,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 웹 게임 개발 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '웹 게임' : 'Webゲーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2020.12 - 2021.04'
                    : '2020.12 - 2021.04'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? ['레거시 코드 리팩토링', '서비스 리뉴얼 대응']
                    : [
                        'レガシー コードリファクタリング',
                        'サービスリニューアル対応',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.JAVASCRIPT,
                    TECH_STACK.NODEJS,
                    TECH_STACK.PIXI,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Java Full-Stack Projects 아코디언 */}
              <JavaProjectsAccordion
                language={language}
                TECH_STACK={TECH_STACK}
              />
            </div>
          </section>

          {/* Personal Projects 섹션 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Personal Projects
            </h2>
            <div className="space-y-6">
              {/* 개인 블로그 플랫폼 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-orange-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? '개인 블로그 플랫폼'
                    : '個人ブログプラットフォーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">{'mintora.me'}</p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'Next.js와 MDX를 활용한 정적 블로그 사이트 구축',
                        '다크모드, 다국어 지원(한국어/일본어)을 포함한 블로그 플랫폼',
                        'GitHub Pages를 통한 정적 사이트 호스팅',
                      ]
                    : [
                        'Next.jsとMDXを活用した静的ブログサイト構築',
                        'ダークモード、多言語対応(日本語/韓国語)を含むブログプラットフォーム',
                        'GitHub Pagesを通じた静的サイトホスティング',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    'MDX',
                    'github page',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/ho1112/choco-mint"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={
                      language === 'ko'
                        ? 'https://mintora.me/blog/ko/'
                        : 'https://mintora.me/blog/ja/'
                    }
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconBlog className="w-6 h-6" />
                    main
                  </a>
                  <a
                    href={`/blog/${language}/blog/`}
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconBlog className="w-6 h-6" />
                    post
                  </a>
                </div>
              </div>

              {/* 블로그 AI 페르소나 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? 'AI 페르소나 봇 댓글 자동화 시스템'
                    : 'AIペルソナボットコメント自動化システム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {'Dead Internet Theory'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '블로그 포스트에 AI 봇이 자동으로 댓글을 생성하는 독립적인 댓글 관리 시스템',
                        '4개의 개성 있는 AI 페르소나가 자연스러운 대화를 통해 댓글 생성',
                        'GitHub Actions Cron을 활용한 24시간 자동화된 봇 댓글 스케줄링',
                        'Gemini AI를 이용한 지능적인 댓글 생성 및 대화 맥락 분석',
                        '댓글 대시보드 화면에서 블로그 댓글 관리(삭제, AI 봇 수동트리거)',
                      ]
                    : [
                        'ブログポストにAIボットが自動的にコメントを生成する独立したコメント管理システム',
                        '4つの個性豊かなAIペルソナが自然な会話を通じてコメント生成',
                        'GitHub Actions Cronを活用した24時間自動化されたボットコメントスケジューリング',
                        'Gemini AIを利用した知的なコメント生成と会話文脈分析',
                        'コメントダッシュボード画面でブログコメント管理(削除、AIボット手動トリガー)',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    TECH_STACK.GEMINI,
                    TECH_STACK.SUPABASE,
                    TECH_STACK.VERCEL,
                    'GitHub Actions',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/ho1112/dead-internet-theory"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={`/blog/${language}/codeLab/dead-internet-theory`}
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconBlog className="w-6 h-6" />
                    post
                  </a>
                </div>
              </div>

              {/* RAG Chatbot*/}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-green-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? 'AI 기반 인터랙티브 포트폴리오 챗봇'
                    : 'AI基盤インタラクティブポートフォリオチャットボット'}
                </h3>
                <p className="text-chomin font-medium mb-3">{'Its Me'}</p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'RAG(Retrieval Augmented Generation) 기반의 대화형 포트폴리오 챗봇',
                        'LangChain + Google Gemini + Supabase를 활용한 지능형 질문-답변 시스템',
                        '외부 사이트 임베딩 가능한 독립형 위젯으로 구현',
                        'Shadow DOM을 통한 CSS 격리 및 다국어/다크모드 지원',
                      ]
                    : [
                        'RAG(Retrieval Augmented Generation)基盤の対話型ポートフォリオチャットボット',
                        'LangChain + Google Gemini + Supabaseを活用した知的質問-回答システム',
                        '外部サイト埋め込み可能な独立型ウィジェットとして実装',
                        'Shadow DOMによるCSS分離と多言語/ダークモード対応',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    'Shadcn/ui',
                    TECH_STACK.GEMINI,
                    TECH_STACK.LANGCHAIN,
                    TECH_STACK.SUPABASE,
                    TECH_STACK.VITE,
                    TECH_STACK.VERCEL,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/ho1112/its-me"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={`/blog/${language}/codeLab/its-me`}
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconBlog className="w-6 h-6" />
                    post
                  </a>
                  <ChatbotButton language={language} />
                </div>
              </div>

              {/* SBI証券配当金 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? 'SBI 증권 배당금 자동 수집 및 LINE 알림 봇'
                    : 'SBI証券配当金自動取得LINE通知Bot'}
                </h3>
                <p className="text-chomin font-medium mb-3">{'cha-LINE'}</p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'SBI 증권 웹사이트에서 배당금 정보를 자동으로 수집하여 LINE으로 알림을 전송하는 시스템',
                        'Google Apps Script를 활용한 Gmail 모니터링 및 웹훅 트리거',
                        'Playwright를 이용한 동적 웹 스크래핑 및 2단계 인증 처리',
                        'GCP VM 인스턴스에서 Express.js 서버 운영',
                      ]
                    : [
                        'SBI証券ウェブサイトから配当金情報を自動収集し、LINEで通知を送信するシステム',
                        'Google Apps Scriptを使用したGmail監視とウェブフックトリガー',
                        'Playwrightを使用した動的ウェブスクレイピングと2段階認証処理',
                        'GCP VMインスタンスでExpress.jsサーバー運用',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.PLAYWRIGHT,
                    TECH_STACK.GAS,
                    TECH_STACK.LINESDK,
                    TECH_STACK.EXPRESS,
                    'Gmail API',
                    'GCP VM',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/ho1112/cha-line"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={`/blog/${language}/codeLab/cha-line`}
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconBlog className="w-6 h-6" />
                    post
                  </a>
                </div>
              </div>

              {/* css 린터 npm/vscode 확장프로그램 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-teal-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? 'CSS linter' : 'CSS linter'}
                </h3>
                <p className="text-chomin font-medium mb-3">{'style sentry'}</p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'CSS 코딩 스탠다드를 자동으로 검증하는 린터 도구',
                        '미사용 CSS 클래스 자동 검출 및 디자인 시스템 규칙 강제',
                        'VSCode 확장 프로그램과 CLI 도구를 통한 실시간 코드 품질 관리',
                        'JSX/TSX 파일과 CSS/SCSS/Less/CSS Modules 파일 간의 의존성 분석',
                      ]
                    : [
                        'CSSコーディングスタンダードを自動検証するリンターツール',
                        '未使用CSSクラスの自動検出とデザインシステムルールの強制',
                        'VSCode拡張機能とCLIツールによるリアルタイムコード品質管理',
                        'JSX/TSXファイルとCSS/SCSS/Less/CSS Modulesファイル間の依存関係分析',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NODEJS,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.POSTCSS,
                    TECH_STACK.VSCODE_EXTENSION_API,
                    'Babel Parser',
                    'Glob',
                    'Commander.js',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/ho1112/style-sentry"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.npmjs.com/package/style-sentry"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconNpm className="w-10 h-10" />
                  </a>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=leehoyeon.style-sentry-vscode"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconVSCode className="w-6 h-6" />
                  </a>
                  <a
                    href={`/blog/${language}/codeLab/style-sentry`}
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm flex items-center gap-1"
                  >
                    <IconBlog className="w-6 h-6" />
                    post
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
